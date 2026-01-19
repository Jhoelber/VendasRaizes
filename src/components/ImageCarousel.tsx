import { useMemo, useRef, useState } from "react";
import img1 from "../assets/carrossel/1.jpg";
import img2 from "../assets/carrossel/2.jpg";
import img3 from "../assets/carrossel/3.jpg";
import img4 from "../assets/carrossel/4.jpg";
import img5 from "../assets/carrossel/5.jpg";
import img6 from "../assets/carrossel/6.jpg";

type Slide = { src: string; alt: string };

export function ImageCarousel() {
    const slides: Slide[] = useMemo(
        () =>
            [img1, img2, img3, img4, img5, img6].map((src, i) => ({
                src,
                alt: `Prévia do devocional - página ${i + 1}`,
            })),
        []
    );

    const viewportRef = useRef<HTMLDivElement | null>(null);
    const [active, setActive] = useState(0);

    function goTo(index: number) {
        const el = viewportRef.current;
        if (!el) return;
        const width = el.clientWidth || 1;
        el.scrollTo({ left: width * index, behavior: "smooth" });
    }

    function handleScroll() {
        const el = viewportRef.current;
        if (!el) return;
        const width = el.clientWidth || 1;
        const idx = Math.round(el.scrollLeft / width);
        setActive(Math.max(0, Math.min(idx, slides.length - 1)));
    }

    return (
        <div className="rounded-2xl bg-gray-50 p-4">
            <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-lg">Veja como é por dentro</h3>
                <span className="text-xs text-gray-600">
                    {active + 1}/{slides.length}
                </span>
            </div>

            <div
                ref={viewportRef}
                onScroll={handleScroll}
                className="
          mt-3 flex overflow-x-auto scroll-smooth snap-x snap-mandatory
          rounded-xl bg-white border border-gray-200
        "
                style={{
                    scrollbarWidth: "none", // Firefox
                    msOverflowStyle: "none", // IE/Edge antigo
                }}
            >
                {/* esconder scrollbar no Chrome/Safari */}
                <style>{`
          .carousel::-webkit-scrollbar { display: none; }
        `}</style>

                <div className="carousel flex w-full">
                    {slides.map((s, i) => (
                        <div key={s.src} className="min-w-full snap-center">
                            <div className="h-64 sm:h-72 w-full flex items-center justify-center bg-gray-100">
                                <img
                                    src={s.src}
                                    alt={s.alt}
                                    loading={i === 0 ? "eager" : "lazy"}
                                    className="h-full w-full object-contain p-2"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-3 flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`Ir para imagem ${i + 1}`}
                        className={[
                            "h-2.5 w-2.5 rounded-full transition",
                            i === active ? "bg-sky-600" : "bg-gray-300",
                        ].join(" ")}
                    />
                ))}
            </div>

            <p className="mt-3 text-xs text-gray-600 text-center">
                Deslize para o lado para ver mais páginas.
            </p>
        </div>
    );
}
