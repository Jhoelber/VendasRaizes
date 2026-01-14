import raizesProfundas from "../assets/raizesProfundasPrincipal.png";
import garantiaImg from "../assets/garantia.png";

const LINK_COMPLETO =
  "https://pay.hotmart.com/N103824047H?checkoutMode=10&bid=1768265452736";

const LINK_ECONOMICO =
  "https://pay.hotmart.com/F103819045E?checkoutMode=10&bid=1768265453204";

export const Vendas = () => {
  function irParaCheckoutCompleto() {
    window.open(LINK_COMPLETO, "_blank", "noopener,noreferrer");
  }

  function irParaCheckoutEconomico() {
    window.open(LINK_ECONOMICO, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen bg-white flex justify-center p-6">
      <div className="w-full max-w-lg text-center space-y-6">
        {/* topo: logo + barra 100% */}
        <div className="pt-2 space-y-3">
          <div className="flex justify-center">
            <img
              src={raizesProfundas}
              alt="Raízes Profundas"
              className="h-40 object-contain"
            />
          </div>

          <div className="h-3 rounded-full bg-indigo-200 overflow-hidden">
            <div className="h-full w-full bg-indigo-600 rounded-full" />
          </div>
        </div>

        {/* Hero */}
        <p className="text-sky-500 font-semibold">
          Seu devocional está pronto! Veja abaixo
        </p>

        <h1 className="text-4xl font-extrabold leading-tight">
          <span className="text-sky-500">Transforme</span> sua vida espiritual{" "}
          <span className="text-black">com Raízes Profundas</span>
        </h1>

        <p className="text-gray-700">
          Guia completo com <b>reflexões</b>, <b>meditações</b> e <b>orações</b>{" "}
          diárias para crescer com Deus a cada dia.
        </p>

        {/* Logo grande */}
        <div className="flex justify-center py-2">
          <div className="bg-sky-500 rounded-2xl px-10 py-6 inline-flex flex-col items-center shadow-sm">
            <span className="text-white text-5xl md:text-6xl font-extrabold leading-none">
              Raízes Profundas
            </span>
            <span className="text-white/90 text-sm tracking-widest -mt-1">
              DEVOCIONAL
            </span>
          </div>
        </div>

        {/* Preço */}
        <div className="space-y-1">
          <div className="text-red-600 font-extrabold text-3xl line-through">
            DE R$ 49,90
          </div>
          <div className="text-black font-semibold">POR APENAS</div>
          <div className="text-emerald-700 font-extrabold text-5xl">
            R$ 27,90
          </div>
          <div className="text-black font-semibold pt-1">
            O que está incluso no pacote completo?
          </div>
        </div>

        {/* O que inclui (3 PDFs) */}
        <div className="space-y-4">
          <section className="bg-green-200 rounded-2xl p-5 text-left">
            <h3 className="font-extrabold text-xl">📘 Guia Prático</h3>
            <ul className="mt-3 space-y-2 text-gray-800">
              <li>• Um devocional simples e real (intimidade com Deus, sem “performance”).</li>
              <li>• “Lugar secreto” + rotina sem distrações (modo avião).</li>
              <li>• Método S.O.A.P. para entender qualquer texto bíblico.</li>
              <li>• Modelo A.C.A.S. para orar com propósito.</li>
              <li>• Diário espiritual + meditação bíblica para “digerir” a Palavra.</li>
            </ul>
          </section>

          <section className="bg-green-200 rounded-2xl p-5 text-left">
            <h3 className="font-extrabold text-xl">
              🗓️ BÔNUS: 21 Dias de Paz Interior com a Fé Católica
            </h3>
            <ul className="mt-3 space-y-2 text-gray-800">
              <li>• 10–15 minutos por dia (pela manhã ou antes de dormir).</li>
              <li>• Cada dia: versículo + reflexão + oração.</li>
              <li>• Roteiro meditativo para leitura e contemplação.</li>
              <li>• Bônus: “oração de emergência” para momentos difíceis.</li>
            </ul>
          </section>

          <section className="bg-green-200 rounded-2xl p-5 text-left">
            <h3 className="font-extrabold text-xl">
              🌿 BÔNUS: Aromaterapia Religiosa
            </h3>
            <ul className="mt-3 space-y-2 text-gray-800">
              <li>• Receitas + intenção espiritual + orações (paz, entrega, silêncio…).</li>
              <li>• “Casa de Paz”: spray ambiental para preparar o ambiente de oração.</li>
              <li className="text-xs text-gray-600 pt-2">
                *Uso devocional. Se você tiver alergias, sensibilidade ou estiver grávida,
                consulte um profissional antes de usar óleos essenciais.
              </li>
            </ul>
          </section>
        </div>

        {/* Comparativo simples (clarifica sem confundir) */}
        <div className="rounded-2xl bg-gray-50 p-5 text-left">
          <h3 className="font-extrabold text-lg">Comparativo rápido</h3>

          <div className="mt-3 space-y-3 text-sm text-gray-800">
            <div className="flex items-start justify-between gap-3">
              <span className="font-bold">Plano Completo (recomendado)</span>
              <span className="text-emerald-700 font-extrabold">Tudo incluso</span>
            </div>
            <ul className="pl-1 space-y-1">
              <li>✅ Guia Prático</li>
              <li>✅ 21 Dias de Paz Interior com a Fé Católica</li>
              <li>✅ Aromaterapia Religiosa</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 justify-center">
          <div className="text-red-600 font-extrabold text-xl line-through">
            DE R$ 49,90
          </div>
          <div className="text-black font-semibold text-xl">POR APENAS</div>
          <div className="text-emerald-700 font-extrabold text-xl">
            R$ 27,90
          </div>
        </div>
        <button
          className="
            w-full py-4 rounded-xl font-extrabold text-white bg-green-600 animate-pulse
            hover:bg-green-700 hover:shadow-lg hover:-translate-y-px
            active:translate-y-0 active:shadow-md
            transition-all duration-200 cursor-pointer
            focus:outline-none focus:ring-4 focus:ring-green-200
          "
          onClick={irParaCheckoutCompleto}
        >
          CLIQUE AQUI PARA COMPRAR PACOTE COMPLETO AGORA!
        </button>

        <div className="mt-3 space-y-3 text-sm text-gray-800 rounded-2xl bg-gray-50 p-5 text-left">
          <div className="h-px bg-gray-200 my-3" />

          <div className="flex items-start justify-between gap-3">
            <span className="font-bold">Plano Econômico</span>
            <span className="text-sky-700 font-extrabold"> Apenas 1</span>
          </div>
          <ul className="pl-1 space-y-1">
            <li>✅ Guia Prático</li>
            <li>❌ Não inclui 21 Dias de Paz Interior com a Fé Católica</li>
            <li>❌ Não inclui Aromaterapia Religiosa</li>
          </ul>
        </div>

        <div className="flex gap-2 justify-center">
          <div className="text-red-600 font-extrabold text-xl line-through">
            DE R$ 39,90
          </div>
          <div className="text-black font-semibold text-xl">POR APENAS</div>
          <div className="text-emerald-700 font-extrabold text-xl">
            R$ 19,90
          </div>
        </div>

        <button
          className="
            w-full py-4 rounded-xl font-extrabold text-white bg-green-600 
            hover:bg-green-700 hover:shadow-lg hover:-translate-y-px
            active:translate-y-0 active:shadow-md
            transition-all duration-200 cursor-pointer
            focus:outline-none focus:ring-4 focus:ring-green-200
                    "
          onClick={irParaCheckoutEconomico}
        >
          Clique aqui para comprar somente o guia pratico
        </button>


        <div className="pt-6 space-y-3">
          <h3 className="text-xl font-extrabold">Tem garantia?</h3>
          <p className="text-gray-700">
            SIM! Se você não gostar, pode solicitar reembolso dentro de 7 dias.
          </p>

          <div className="flex justify-center">
            <img
              src={garantiaImg}
              alt="Garantia"
              className="h-40 object-contain"
            />
          </div>
        </div>

        {/* Rodapé */}
        <div className="bg-sky-500 text-white rounded-2xl p-5 text-left mt-6">
          <p className="leading-relaxed">
            <b>Raízes Profundas</b> é um produto desenvolvido com dedicação e respeito à fé cristã.
            Nossa missão é inspirar e fortalecer sua espiritualidade com conteúdo confiável e de qualidade.
            <br />
            <b>© Todos os direitos reservados.</b>
          </p>
        </div>
      </div>
    </div>
  );
};
