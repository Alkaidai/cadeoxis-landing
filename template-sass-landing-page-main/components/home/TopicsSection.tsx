"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, Sigma, Hash } from "lucide-react";

type Topic = {
  title: string;
  description: string;
  status: string;
  icon: React.ReactNode;
  subtopics: string[];
};

const topics: Topic[] = [
  {
    title: "Álgebra",
    description:
      "Treinos para desenvolver raciocínio algébrico e manipular expressões com mais segurança.",
    status: "Disponível agora",
    icon: <Sigma className="h-4 w-4 sm:h-5 sm:w-5" />,
    subtopics: [
      "Expressões algébricas",
      "Valor numérico",
      "Monômios",
      "Polinômios",
      "Produtos notáveis",
      "Fatoração",
      "Operações com monômios",
      "Operações com polinômios",
    ],
  },
  {
    title: "Números e Operações",
    description:
      "Base essencial para cálculo, interpretação matemática e resolução de problemas.",
    status: "Disponível agora",
    icon: <Hash className="h-4 w-4 sm:h-5 sm:w-5" />,
    subtopics: [
      "Operações básicas",
      "Expressões numéricas",
      "Potenciação",
      "Radiciação",
      "Múltiplos e divisores",
      "MMC e MDC",
      "Razão e proporção",
      "Regra de três",
      "Sequências numéricas",
      "Contagem",
      "Aproximações e estimativas",
    ],
  },
  {
    title: "Frações",
    description:
      "Treinos para dominar frações sem travar em comparações e operações.",
    status: "Em expansão",
    icon: <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />,
    subtopics: [
      "Frações equivalentes",
      "Simplificação de frações",
      "Comparação de frações",
      "Adição de frações",
      "Subtração de frações",
      "Multiplicação de frações",
      "Divisão de frações",
    ],
  },
];

function TopicCard({ topic }: { topic: Topic }) {
  const [open, setOpen] = useState(false);

  const isAvailable = topic.status === "Disponível agora";

  return (
    <div className="rounded-2xl border border-[#1f2d5a] bg-[#071225]/85 p-4 shadow-[0_0_0_1px_rgba(255,196,0,0.04)] transition-all duration-300 hover:border-[#f4b400]/40 hover:shadow-[0_0_30px_rgba(244,180,0,0.08)] sm:p-6">
      <div className="flex flex-col gap-4 sm:gap-5">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0d1c38] text-[#f4b400] sm:h-10 sm:w-10">
            {topic.icon}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <h3 className="text-lg font-bold leading-tight text-white sm:text-xl">
                {topic.title}
              </h3>

              <span
                className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] sm:px-3 sm:text-xs ${
                  isAvailable
                    ? "bg-[#132d1f] text-[#7ee2a8]"
                    : "bg-[#3a2a09] text-[#f4c14f]"
                }`}
              >
                {topic.status}
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-white/70 sm:mt-3 sm:text-sm">
              {topic.description}
            </p>
          </div>
        </div>

        <div className="flex">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#24345f] bg-[#0a1429] px-4 py-3 text-sm font-medium text-white/85 transition hover:border-[#f4b400]/50 hover:text-white sm:w-auto sm:rounded-full sm:px-4 sm:py-2"
          >
            {open ? "Ocultar subtópicos" : "Ver subtópicos"}
            {open ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ${
          open ? "mt-4 grid-rows-[1fr] opacity-100 sm:mt-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
            {topic.subtopics.map((subtopic) => (
              <div
                key={subtopic}
                className="rounded-xl border border-[#1b2a50] bg-[#0a1429] px-3 py-2.5 text-sm leading-5 text-white/85 sm:px-4 sm:py-3"
              >
                {subtopic}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TopicsSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-14 sm:px-6 sm:py-20 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,180,0,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(1,74,173,0.14),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="inline-flex rounded-full border border-[#f4b400]/25 bg-[#2a2006] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f4b400] sm:px-4 sm:text-xs">
            Conteúdo organizado
          </span>

          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:mt-5 sm:text-3xl md:text-5xl">
            Veja os tópicos já disponíveis no banco
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/70 sm:mt-4 sm:text-base sm:leading-7 md:text-lg">
            Você entra em um treino organizado por tópicos e subtópicos para
            saber exatamente onde praticar e onde precisa evoluir.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6">
          {topics.map((topic) => (
            <TopicCard key={topic.title} topic={topic} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-white/55 sm:mt-8 sm:text-sm">
          Novos tópicos e novas questões são adicionados continuamente.
        </p>
      </div>
    </section>
  );
}