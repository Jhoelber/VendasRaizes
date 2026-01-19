import { useEffect, useMemo, useRef, useState } from "react";
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

  function prev() {
    goTo(Math.max(0, active - 1));
  }

  function next() {
    goTo(Math.min(slides.length - 1, active + 1));
  }

  function handleScroll() {
    const el = viewportRef.current;
    if (!el) return;
    const width = el.clientWidth || 1;
    const idx = Math.round(el.scrollLeft / width);
    const clamped = Math.max(0, Math.min(idx, slides.length - 1));
    if (clamped !== active) setActive(clamped);
  }

  // teclado (← →) quando o carrossel estiver focado
  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  }

  // garante active correto quando redimensiona a janela
  useEffect(() => {
    function onResize() {
      goTo(active);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const isFirst = active === 0;
  const isLast = active === slides.length - 1;

  return (
    <div className="rounded-2xl bg-gray-50 p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-lg">Veja como é por dentro</h3>
        <span className="text-xs text-gray-600">
          {active + 1}/{slides.length}
        </span>
      </div>

      <div className="mt-3 relative">
        {/* Setas (desktop/mouse) */}
        <button
          type="button"
          onClick={prev}
          disabled={isFirst}
          aria-label="Imagem anterior"
          className={[
            "absolute left-2 top-1/2 -translate-y-1/2 z-10",
            "h-10 w-10 rounded-full bg-white/90 border border-gray-200 shadow-sm",
            "flex items-center justify-center text-xl font-extrabold",
            "hover:bg-white transition",
            "focus:outline-none focus:ring-4 focus:ring-sky-200",
            isFirst ? "opacity-40 cursor-not-allowed" : "",
          ].join(" ")}
        >
          ‹
        </button>

        <button
          type="button"
          onClick={next}
          disabled={isLast}
          aria-label="Próxima imagem"
          className={[
            "absolute right-2 top-1/2 -translate-y-1/2 z-10",
            "h-10 w-10 rounded-full bg-white/90 border border-gray-200 shadow-sm",
            "flex items-center justify-center text-xl font-extrabold",
            "hover:bg-white transition",
            "focus:outline-none focus:ring-4 focus:ring-sky-200",
            isLast ? "opacity-40 cursor-not-allowed" : "",
          ].join(" ")}
        >
          ›
        </button>

        {/* Viewport */}
        <div
          ref={viewportRef}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          className="
            carousel mt-3 flex overflow-x-auto scroll-smooth snap-x snap-mandatory
            rounded-xl bg-white border border-gray-200 outline-none
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* esconder scrollbar no Chrome/Safari */}
          <style>{`
            .carousel::-webkit-scrollbar { display: none; }
          `}</style>

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

      {/* Bolinhas */}
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

     
    </div>
  );
}
