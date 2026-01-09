import raizesProfundas from "../assets/raizesProfundasPrincipal.png"; // ajuste o nome
import garantiaImg from "../assets/garantia.webp";     // ajuste o nome

export const Vendas = () => {
  function irParaCheckout() {
    
    alert("Checkout Kirvano aqui ✅");
  }

  return (
    <div className="min-h-screen bg-white flex justify-center p-6">
      <div className="w-full max-w-lg text-center space-y-6">
        {/* topo: logo + barra 100% */}
        <div className="pt-2 space-y-3">
          <div className="flex justify-center">
            <img src={raizesProfundas} alt="Veritas" className="h-40 object-contain" />
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
          <span className="text-black">com Veritas</span>
        </h1>

        <p className="text-gray-700">
          Guia completo com <b>reflexões</b>, <b>meditações</b> e <b>orações</b>{" "}
          diárias para crescer com Deus a cada dia.
        </p>

        {/* Logo grande (estilo print) */}
        <div className="flex justify-center py-2">
          <div className="bg-sky-500 rounded-2xl px-10 py-6 inline-flex flex-col items-center shadow-sm">
            <span className="text-white text-6xl font-extrabold leading-none">
              Raizes profundas
            </span>
            <span className="text-white/90 text-sm tracking-widest -mt-1">
              DEVOCIONAL
            </span>
          </div>
        </div>

        {/* Preço */}
        <div className="space-y-1">
          <div className="text-red-600 font-extrabold text-3xl line-through">
            DE R$ 29,90
          </div>
          <div className="text-black font-semibold">POR APENAS</div>
          <div className="text-emerald-700 font-extrabold text-5xl">
            R$ 9,90
          </div>
          <div className="text-black font-semibold pt-1">
            O que está incluso no pacote?
          </div>
        </div>

        {/* O que inclui (3 PDFs) */}
        <div className="space-y-4">
          <section className="bg-green-200 rounded-2xl p-5 text-left">
            <h3 className="font-extrabold text-xl">
              📘 Devocional 365 (Guia Prático)
            </h3>
            <ul className="mt-3 space-y-2 text-gray-800">
              <li>• Um devocional simples e real (intimidade com Deus, sem “performance”).</li>
              <li>• “Lugar secreto” + rotina sem distrações (modo avião).</li>
              <li>• Método S.O.A.P. para entender qualquer texto bíblico.</li>
              <li>• Modelo A.C.A.S. para orar com propósito.</li>
              <li>• Diário espiritual + meditação bíblica para “digerir” a Palavra.</li>
            </ul>
          </section>

          <section className="bg-green-200 rounded-2xl p-5 text-left">
            <h3 className="font-extrabold text-xl">🗓️ 21 Dias de Paz Interior</h3>
            <ul className="mt-3 space-y-2 text-gray-800">
              <li>• 10–15 minutos por dia (pela manhã ou antes de dormir).</li>
              <li>• Cada dia: versículo + reflexão + oração.</li>
              <li>• Roteiro meditativo para leitura e contemplação.</li>
              <li>• Bônus: “oração de emergência” para momentos difíceis.</li>
            </ul>
          </section>

          <section className="bg-green-200 rounded-2xl p-5 text-left">
            <h3 className="font-extrabold text-xl">
              🌿 Bônus: Aromaterapia Devocional Católica
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

        {/* CTA */}
        <button
          className="w-full py-4 rounded-xl font-extrabold text-white bg-green-600 hover:opacity-95 transition  cursor-pointer"
          onClick={irParaCheckout}
        >
          QUERO MEU DEVOCIONAL AGORA!
        </button>

        <p className="text-gray-700">
          <span className="line-through text-red-500">De R$ 29,90</span>{" "}
          <span className="font-semibold">por apenas R$ 9,90</span>
        </p>

        {/* Lista estilo print */}
        <div className="space-y-3 pt-4">
          <h2 className="text-sky-500 font-extrabold text-2xl">
            O QUE VOCÊ VAI ENCONTRAR NO Raizes profundas
          </h2>

          <div className="text-left space-y-3">
            <p>
              ✅ <span className="text-sky-600 font-bold">Conexão espiritual</span> – fortaleça sua relação com Deus.
            </p>
            <p>
              ✅ <span className="text-sky-600 font-bold">Paz interior</span> – comece o dia com calma e clareza.
            </p>
            <p>
              ✅ <span className="text-sky-600 font-bold">Autoconhecimento</span> – enxergue forças e pontos de melhoria.
            </p>
            <p>
              ✅ <span className="text-sky-600 font-bold">Disciplina diária</span> – hábitos simples que sustentam sua fé.
            </p>
            <p>
              ✅ <span className="text-sky-600 font-bold">Gratidão e positividade</span> – foco em bênçãos e esperança.
            </p>
          </div>
        </div>

        {/* Garantia */}
        <div className="pt-6 space-y-3">
          <h3 className="text-xl font-extrabold">Tem garantia?</h3>
          <p className="text-gray-700">
            SIM! Se você não gostar, pode solicitar reembolso dentro de 90 dias.
          </p>

          <div className="flex justify-center">
            <img src={garantiaImg} alt="Garantia" className="h-40 object-contain" />
          </div>
        </div>

        {/* Rodapé */}
        <div className="bg-sky-500 text-white rounded-2xl p-5 text-left mt-6">
          <p className="leading-relaxed">
            <b>Veritas</b> é um produto desenvolvido com dedicação e respeito à fé cristã.
            Nossa missão é inspirar e fortalecer sua espiritualidade com conteúdo confiável e de qualidade.
            <br />
            <b>© Todos os direitos reservados.</b>
          </p>
        </div>
      </div>
    </div>
  );
};
