import { useNavigate } from "react-router";
import raizesProfundas from "../assets/raizesProfundasPrincipal.png";

export const PaginaPrincipal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 via-white to-white">
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-10 gap-4">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-extrabold max-w-2xl text-slate-900 leading-tight">
          Nada do que está prestes a acontecer é{" "}
          <span className="text-sky-500">por acaso</span>.
        </h1>

        {/* Subtítulo */}
        <p className="text-base md:text-lg max-w-3xl text-slate-700">
          Em poucos minutos, você vai descobrir uma mensagem preparada especialmente
          para você — e isso pode mudar a forma como você enxerga os próximos dias.
        </p>

        {/* Logo / imagem */}
        <img
          src={raizesProfundas}
          alt="Veritas"
          className="w-40 md:w-56 h-auto"
        />

        {/* O que a pessoa vai receber (baseado nos PDFs) */}
        <div className="w-full max-w-lg space-y-3 ">
          <p className="text-slate-900 font-bold">
            O que você vai receber:
          </p>

          <div className="grid gap-3 text-left">
            <div className="border rounded-2xl p-4 bg-white shadow-sm">
              <p className="font-extrabold text-slate-900">📘 Guia Prático</p>
              <p className="text-sm text-slate-600">
                Um método simples para fazer seu devocional diário (leitura, reflexão e oração).
              </p>
            </div>

            <div className="border rounded-2xl p-4 bg-white shadow-sm">
              <p className="font-extrabold text-slate-900">🗓️ 21 Dias de Paz Interior</p>
              <p className="text-sm text-slate-600">
                Uma rotina curta por dia com versículo, reflexão e oração para acalmar o coração.
              </p>
            </div>

            <div className="border rounded-2xl p-4 bg-white shadow-sm">
              <p className="font-extrabold text-slate-900">🌿 Bônus Devocional</p>
              <p className="text-sm text-slate-600">
                Um guia de aromaterapia católica (intenção + oração + ambiente de paz).
              </p>
            </div>
          </div>
        </div>

        {/* CTA com “pulse” melhor (ping suave + hover/focus) */}
        <button
          type="button"
          onClick={() => navigate("/questionario")}
          className="
            relative w-full max-w-md
            px-6 py-4 rounded-xl font-extrabold
            text-white bg-sky-500
            cursor-pointer
            hover:bg-sky-600 hover:shadow-lg hover:-translate-y-px
            active:translate-y-0 active:shadow-md
            transition-all duration-200
            focus:outline-none focus:ring-4 focus:ring-sky-200
          "
          aria-label="Começar agora e ir para o questionário"
        >
          {/* efeito “chamar atenção” sem ficar exagerado */}
          <span className="absolute inset-0 rounded-xl bg-sky-400/40 animate-ping -z-10" />
          Clique aqui e comece agora a descobrir o que Deus quer te dizer hoje
        </button>

        {/* Texto final */}
        <p className="text-sm md:text-base max-w-3xl text-slate-700">
          Responda algumas perguntas rápidas e receba um devocional personalizado para
          você, com oração, direção e fé para transformar o seu dia.
        </p>
      </div>
    </div>
  );
};
