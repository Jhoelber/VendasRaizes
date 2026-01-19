import raizesProfundas from "../assets/raizesProfundasPrincipal.png";
import garantiaImg from "../assets/garantia.png";
import { ImageCarousel } from "./ImageCarousel";

const LINK_COMPLETO =
  "https://pay.hotmart.com/N103824047H?checkoutMode=10&bid=1768265452736";

const LINK_ECONOMICO =
  "https://pay.hotmart.com/F103819045E?checkoutMode=10&bid=1768265453204";

export const Vendas = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center p-6 pb-28">
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

        {/* Preço (Completo) */}
        <div className="space-y-2">
          <div className="text-red-600 font-extrabold text-3xl line-through">
            DE R$ 49,90
          </div>

          <div className="text-black font-semibold">POR APENAS</div>

          <div className="text-emerald-700 font-extrabold text-5xl">
            R$ 27,90
          </div>

          <p className="text-sm text-gray-600">
            ✅ Produto digital (PDF) • ✅ Acesso imediato pela Hotmart • ✅ Funciona
            no celular
          </p>

          <div className="text-black font-semibold pt-2">
            O que está incluso no pacote completo?
          </div>
        </div>

        {/* O que inclui (3 PDFs) */}
       <div className="space-y-4">
  {/* Resumo rápido */}
  <div className="rounded-2xl bg-green-100 p-5 text-left">
    <h3 className="font-extrabold text-lg">O que você recebe (resumo)</h3>
    <ul className="mt-3 space-y-2 text-sm text-gray-800">
      <li>✅ Guia Prático (devocional + método)</li>
      <li>✅ Bônus: 21 Dias de Paz Interior</li>
      <li>✅ Bônus: Aromaterapia Religiosa</li>
    </ul>

    <div className="mt-4 space-y-3">
      <details className="rounded-xl bg-white p-4 border border-green-200">
        <summary className="cursor-pointer font-extrabold">
          📘 Ver detalhes do Guia Prático
        </summary>
        <ul className="mt-3 space-y-2 text-sm text-gray-800">
          <li>• Um devocional simples e real (intimidade com Deus, sem “performance”).</li>
          <li>• “Lugar secreto” + rotina sem distrações (modo avião).</li>
          <li>• Método S.O.A.P. para entender qualquer texto bíblico.</li>
          <li>• Modelo A.C.A.S. para orar com propósito.</li>
          <li>• Diário espiritual + meditação bíblica para “digerir” a Palavra.</li>
        </ul>
      </details>

      <details className="rounded-xl bg-white p-4 border border-green-200">
        <summary className="cursor-pointer font-extrabold">
          🗓️ Ver detalhes do bônus: 21 Dias de Paz Interior
        </summary>
        <ul className="mt-3 space-y-2 text-sm text-gray-800">
          <li>• 10–15 minutos por dia (pela manhã ou antes de dormir).</li>
          <li>• Cada dia: versículo + reflexão + oração.</li>
          <li>• Roteiro meditativo para leitura e contemplação.</li>
          <li>• Bônus: “oração de emergência” para momentos difíceis.</li>
        </ul>
      </details>

      <details className="rounded-xl bg-white p-4 border border-green-200">
        <summary className="cursor-pointer font-extrabold">
          🌿 Ver detalhes do bônus: Aromaterapia Religiosa
        </summary>
        <ul className="mt-3 space-y-2 text-sm text-gray-800">
          <li>• Receitas + intenção espiritual + orações (paz, entrega, silêncio…).</li>
          <li>• “Casa de Paz”: spray ambiental para preparar o ambiente de oração.</li>
          <li className="text-xs text-gray-600 pt-2">
            *Uso devocional. Se você tiver alergias, sensibilidade ou estiver grávida,
            consulte um profissional antes de usar óleos essenciais.
          </li>
        </ul>
      </details>
    </div>
  </div>
</div>

<ImageCarousel/>







        {/* Escolha do pacote (sem confusão, 1 CTA por opção) */}
        <div className="rounded-2xl bg-gray-50 p-5 text-left space-y-4">
          <h3 className="font-extrabold text-lg">Escolha seu pacote</h3>
          <p className="text-sm text-gray-600">
            Toque no botão do pacote que você deseja comprar.
          </p>

          {/* Plano Completo */}
          <div className="rounded-2xl bg-white border border-emerald-200 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-extrabold text-base">Plano Completo</p>
                <p className="text-xs text-emerald-700 font-bold mt-1 inline-flex items-center gap-2">
                  ⭐ Recomendado 
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500 line-through">De R$ 49,90</p>
                <p className="text-2xl font-extrabold text-emerald-700">R$ 27,90</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              <li>✅ Guia Prático</li>
              <li>✅ 21 Dias de Paz Interior com a Fé Católica</li>
              <li>✅ Aromaterapia Religiosa</li>
            </ul>

            <a
              href={LINK_COMPLETO}
              rel="noopener noreferrer"
              className="
        mt-4 w-full block text-center py-4 rounded-xl font-extrabold
        text-white bg-green-600 hover:bg-green-700
        transition-all focus:outline-none focus:ring-4 focus:ring-green-200
      "
            >
              CLIQUE AQUI PARA COMPRAR O PACOTE COMPLETO
            </a>

            <p className="mt-3 text-xs text-gray-600">
              ✅ Produto digital (PDF) • ✅ Acesso imediato pela Hotmart
            </p>
          </div>

          {/* Plano Econômico */}
          <div className="rounded-2xl bg-white border border-sky-200 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-extrabold text-base">Plano Econômico</p>
                <p className="text-xs text-gray-600 mt-1">
                  Para quem quer só o guia prático
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500 line-through">De R$ 39,90</p>
                <p className="text-2xl font-extrabold text-sky-700">R$ 19,90</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-gray-800">
              <li>✅ Guia Prático</li>
              <li className="text-gray-600">• Não inclui “21 Dias de Paz Interior”</li>
              <li className="text-gray-600">• Não inclui “Aromaterapia Religiosa”</li>
            </ul>

            <a
              href={LINK_ECONOMICO}
              rel="noopener noreferrer"
              className="
        mt-4 w-full block text-center py-4 rounded-xl font-extrabold
        text-white bg-sky-600 hover:bg-sky-700
        transition-all focus:outline-none focus:ring-4 focus:ring-sky-200
      "
            >
              CLIQUE AQUI PARA COMPRAR O PLANO ECONÔMICO
            </a>

            <p className="mt-3 text-xs text-gray-600">
              ✅ Produto digital (PDF) • ✅ Acesso imediato pela Hotmart
            </p>
          </div>
        </div>


        {/* FAQ curto */}
        <div className="rounded-2xl bg-white border border-gray-200 p-5 text-left space-y-4">
          <h3 className="text-lg font-extrabold">Dúvidas rápidas</h3>

          <div>
            <p className="font-bold">Como recebo o material?</p>
            <p className="text-sm text-gray-700">
              Após a compra, você recebe o acesso imediatamente pela Hotmart (e também por e-mail).
            </p>
          </div>

          <div>
            <p className="font-bold">Consigo usar no celular?</p>
            <p className="text-sm text-gray-700">
              Sim. Você pode ler no celular, tablet ou computador.
            </p>
          </div>

          <div>
            <p className="font-bold">É físico ou digital?</p>
            <p className="text-sm text-gray-700">
              É um produto digital (PDF). Nada será enviado pelos correios.
            </p>
          </div>
        </div>

        {/* Garantia */}
        <div className="pt-2 space-y-3">
          <h3 className="text-xl font-extrabold">Tem garantia?</h3>
          <p className="text-gray-700">
            SIM! Se você não gostar, pode solicitar reembolso dentro de 7 dias.
          </p>

          <div className="flex justify-center">
            <img
              src={garantiaImg}
              alt="Garantia"
              loading="lazy"
              className="h-40 w-auto object-contain"
            />
          </div>
        </div>

        {/* Rodapé */}
        <div className="bg-sky-500 text-white rounded-2xl p-5 text-left mt-6">
          <p className="leading-relaxed">
            <b>Raízes Profundas</b> é um produto desenvolvido com dedicação e
            respeito à fé cristã. Nossa missão é inspirar e fortalecer sua
            espiritualidade com conteúdo confiável e de qualidade.
            <br />
            <b>© Todos os direitos reservados.</b>
          </p>
        </div>
      </div>

      {/* Sticky CTA (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur border-t border-gray-200">
        <div className="max-w-lg mx-auto">
          <a
            href={LINK_COMPLETO}
            rel="noopener noreferrer"
            className="w-full block text-center py-3 rounded-xl font-extrabold text-white bg-green-600 hover:bg-green-700 transition-all focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            Comprar pacote completo — R$ 27,90
          </a>

          <p className="text-[11px] text-gray-600 text-center mt-2">
            Produto digital (PDF) • Acesso imediato pela Hotmart
          </p>
        </div>
      </div>
    </div>
  );
};
