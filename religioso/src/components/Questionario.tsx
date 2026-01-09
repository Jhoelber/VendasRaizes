import { useEffect, useMemo, useState } from "react";
import { BarraProgresso } from "./BarraProgresso";
import { useNavigate } from "react-router";
import raizesProfundas from "../assets/raizesProfundasPrincipal.png";
type PerguntaTexto = {
  id: string;
  tipo: "texto";
  titulo: string;
  descricao?: string;
  placeholder: string;
  multiline?: boolean;
};

type PerguntaSelecao = {
  id: string;
  tipo: "selecao";
  titulo: string;
  descricao?: string;
  opcoes: string[]; // 5 opções
};

type Pergunta = PerguntaTexto | PerguntaSelecao;

/**
 * Mais adequado aos PDFs:
 * - Guia Prático: lugar secreto, rotina, journaling (diário), oração com propósito
 * - 21 dias: 10–15 min por dia, versículo + reflexão + oração + roteiro
 * - Aromaterapia: preparar ambiente de paz (opcional)
 *
 * Mantém o padrão: 1 texto, 3 seleção, 1 texto, 3 seleção = 8
 */
const PERGUNTAS: Pergunta[] = [
  {
    id: "nome",
    tipo: "texto",
    titulo: "Qual é o seu nome?",
    descricao: "Vamos personalizar sua experiência com o seu nome.",
    placeholder: "Digite seu nome…",
  },

  {
    id: "horario",
    tipo: "selecao",
    titulo: "Em que momento do dia você prefere fazer seu devocional?",
    descricao: "Isso ajuda a sugerir uma rotina mais realista para você.",
    opcoes: [
      "Ao acordar",
      "Durante o dia (quando der)",
      "No fim da tarde",
      "Antes de dormir",
      "Não tenho horário fixo",
    ],
  },

  {
    id: "objetivo",
    tipo: "selecao",
    titulo: "Qual é seu objetivo principal hoje?",
    descricao: "Escolha o que mais combina com o seu momento.",
    opcoes: [
      "Paz interior",
      "Vencer a ansiedade",
      "Força e ânimo",
      "Direção para decisões",
      "Gratidão e esperança",
    ],
  },

  {
    id: "ambiente",
    tipo: "selecao",
    titulo: "Como você prefere preparar o ambiente de oração?",
    descricao: "Uma “casa de paz” (ambiente) pode ajudar a manter a constância.",
    opcoes: [
      "Silêncio total",
      "Música suave",
      "Com aroma/ambiente preparado",
      "Ao ar livre / natureza",
      "Tanto faz",
    ],
  },

  {
    id: "intencao",
    tipo: "texto",
    titulo: "Agora escreva sua intenção/pedido de oração.",
    descricao:
      "Escreva do seu jeito. Pode ser curto ou detalhado (ninguém além de você verá isso).",
    placeholder: "Ex: Estou preocupado com… / Preciso de… / Quero agradecer por…",
    multiline: true,
  },

  {
    id: "tempo",
    tipo: "selecao",
    titulo: "Quanto tempo você consegue dedicar por dia?",
    descricao: "A maioria das rotinas de paz interior funciona bem com 10–15 minutos.",
    opcoes: ["5 minutos", "10 minutos", "15 minutos", "20+ minutos", "Depende do dia"],
  },

  {
    id: "formato",
    tipo: "selecao",
    titulo: "Qual formato você prefere para o devocional?",
    descricao: "Você vai receber um conteúdo que combina com seu estilo.",
    opcoes: [
      "Versículo + reflexão + oração",
      "Oração guiada (passo a passo)",
      "Meditação contemplativa (mais calma)",
      "Com diário/journaling (escrever e refletir)",
      "Quero uma mistura",
    ],
  },

  {
    id: "compromisso",
    tipo: "selecao",
    titulo: "Qual nível de compromisso você quer agora?",
    descricao: "Isso define o “ritmo” da sua jornada.",
    opcoes: [
      "Só hoje (rápido)",
      "7 dias para criar ritmo",
      "21 dias (paz interior)",
      "365 dias (hábito forte)",
      "Quero começar, sem pressão",
    ],
  },
];

export function Questionario() {
  const navigate = useNavigate();

  const totalPassos = PERGUNTAS.length + 1; // 9
  const [passo, setPasso] = useState(1);
  const [progressoFinal, setProgressoFinal] = useState(0);

  const [respostas, setRespostas] = useState<Record<string, string>>(() =>
    Object.fromEntries(PERGUNTAS.map((p) => [p.id, ""]))
  );

  const isFinal = passo === totalPassos;
  const perguntaAtual = useMemo(() => PERGUNTAS[passo - 1], [passo]);

  // Passo 9: barra progredindo 0->100 em 5s e redireciona
  useEffect(() => {
    if (!isFinal) return;

    setProgressoFinal(0);

    const duracaoMs = 5000;
    const inicio = performance.now();
    let raf = 0;

    const tick = (agora: number) => {
      const elapsed = agora - inicio;
      const pct = Math.min(100, Math.round((elapsed / duracaoMs) * 100));
      setProgressoFinal(pct);

      if (elapsed < duracaoMs) {
        raf = requestAnimationFrame(tick);
      } else {
        navigate("/vendas", { replace: true });
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isFinal, navigate]);

  function salvarResposta(valor: string) {
    if (!perguntaAtual) return;
    setRespostas((prev) => ({ ...prev, [perguntaAtual.id]: valor }));
  }

  function podeAvancar(): boolean {
    if (!perguntaAtual) return false;
    return Boolean(respostas[perguntaAtual.id]?.trim());
  }

  function avancar() {
    if (isFinal) return;
    if (!podeAvancar()) return;

    // terminou as 8 perguntas -> vai para passo 9 (progresso)
    if (passo === PERGUNTAS.length) {
      setPasso(totalPassos);
      return;
    }

    setPasso((p) => p + 1);
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-10 gap-8 text-center">
      <div className="text-xl font-bold">
        <img src={raizesProfundas} alt="" className="w-20" />
        </div>

      <BarraProgresso atual={passo} total={totalPassos} />

      <div className="w-full max-w-md space-y-4">
        <p className="text-sm text-gray-500">
          Passo {passo} de {totalPassos}
        </p>

        {isFinal ? (
          <>
            <h1 className="text-2xl font-semibold">Gerando seu devocional…</h1>
            <p className="text-gray-700">
              Estamos organizando sua experiência com base no seu momento.
            </p>

            <div className="w-full pt-2 space-y-2">
              <div className="flex justify-end text-sm font-semibold text-gray-700">
                {progressoFinal}%
              </div>

              <div className="w-full h-4 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-sky-500 transition-all duration-100"
                  style={{ width: `${progressoFinal}%` }}
                />
              </div>
            </div>

            <p className="text-xs text-gray-500 pt-2">
              Redirecionando para a próxima etapa…
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold">{perguntaAtual.titulo}</h1>

            {"descricao" in perguntaAtual && perguntaAtual.descricao && (
              <p className="text-gray-700">{perguntaAtual.descricao}</p>
            )}

            {perguntaAtual.tipo === "texto" ? (
              perguntaAtual.multiline ? (
                <textarea
                  value={respostas[perguntaAtual.id]}
                  onChange={(e) => salvarResposta(e.target.value)}
                  placeholder={perguntaAtual.placeholder}
                  className="w-full border rounded-lg px-4 py-3 min-h-32.5 resize-none outline-none focus:ring-2 focus:ring-sky-400"
                />
              ) : (
                <input
                  value={respostas[perguntaAtual.id]}
                  onChange={(e) => salvarResposta(e.target.value)}
                  placeholder={perguntaAtual.placeholder}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-400"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") avancar();
                  }}
                />
              )
            ) : (
              <div className="grid grid-cols-1 gap-3 pt-2">
                {perguntaAtual.opcoes.map((op) => {
                  const selected = respostas[perguntaAtual.id] === op;
                  return (
                    <button
                      key={op}
                      type="button"
                      onClick={() => salvarResposta(op)}
                      className={[
                        "w-full px-4 py-3 rounded-lg border text-left transition cursor-pointer",
                        selected
                          ? "border-indigo-600 ring-2 ring-indigo-200"
                          : "hover:border-gray-400 hover:shadow-sm",
                      ].join(" ")}
                    >
                      {op}
                    </button>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      {!isFinal && (
        <button
          className="
            w-full max-w-md px-6 py-3 rounded-lg font-bold text-white bg-sky-500
            hover:bg-sky-600 hover:shadow-lg hover:-translate-y-px
            active:translate-y-0 active:shadow-md
            transition-all duration-200
            disabled:opacity-40 disabled:cursor-not-allowed
            focus:outline-none focus:ring-4 focus:ring-sky-200
          "
          onClick={avancar}
          disabled={!podeAvancar()}
        >
          {passo === PERGUNTAS.length ? "Enviar" : "Continuar"}
        </button>
      )}
    </div>
  );
}
