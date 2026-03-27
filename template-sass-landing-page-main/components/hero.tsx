"use client"

import { motion } from "framer-motion"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { VideoHero } from "@/components/components/video-hero"

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full overflow-hidden px-4 py-24 md:px-6 md:py-32"
    >
      {/* brilhos de fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#014aad]/20 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-64 w-64 rounded-full bg-[#f0b400]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#014aad]/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* badge */}
        <motion.div
          className="mb-10 flex items-center justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-[#014aad]/20 px-4 py-2 text-sm text-white/80 backdrop-blur">
            Para quem entende a matéria, mas trava quando a questão muda
          </div>
        </motion.div>

        {/* título */}
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1
            className={cn(
              "mx-auto max-w-5xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent sm:text-5xl lg:text-7xl",
              geist.className,
            )}
          >
            Você entende a matéria…
            <br />
            mas trava quando a questão muda?
          </h1>
<div className="mx-auto mt-8 mb-8 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-xl">
  <div className="aspect-video">
    <iframe
      className="h-full w-full"
      src="https://www.youtube.com/embed/SEU_VIDEO_AQUI"
      title="Vídeo explicativo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>

</div>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            O Treinador de Matemática Cadê o Xis é um banco de questões
            organizado para quem precisa treinar com mais direção, clareza
            e segurança na hora da prova.
          </p>
        </motion.div>

        {/* botões */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl bg-[#f0b400] px-6 py-3 text-sm font-semibold text-[#08245c] transition hover:brightness-110"
          >
            Quero começar agora
          </a>

          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
          >
            Ver como funciona
          </a>
        </motion.div>

        {/* bloco visual */}
        <motion.div
          className="mx-auto mt-16 max-w-5xl"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-6">
            <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              {/* lado esquerdo */}
              <div className="rounded-2xl border border-white/8 bg-black/20 p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/45">Treino organizado</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      Pratique por tema e dificuldade
                    </h3>
                  </div>

                  <span className="rounded-full bg-[#014aad]/20 px-3 py-1 text-xs font-medium text-[#8db4ff]">
                    Banco de questões
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Frações",
                    "Equações",
                    "MMC e MDC",
                    "Porcentagem",
                    "Razão",
                    "Regra de três",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center text-sm font-medium text-white/85"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* lado direito */}
              <div className="rounded-2xl border border-white/8 bg-black/20 p-5 md:p-6">
                <div className="mb-4">
                  <p className="text-sm text-white/45">Clareza do estudo</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Entenda onde você trava
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs text-white/45">Questões resolvidas</div>
                    <div className="mt-2 text-2xl font-semibold text-white">12</div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs text-white/45">Sequência</div>
                    <div className="mt-2 text-2xl font-semibold text-white">3 dias</div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs text-white/45">% de acerto</div>
                    <div className="mt-2 text-2xl font-semibold text-white">58%</div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-xs text-white/45">Ponto mais fraco</div>
                    <div className="mt-2 text-lg font-semibold text-[#ff8c8c]">
                      Frações
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs text-white/45">Próximo foco</div>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium text-white">Frações</div>
                      <div className="text-xs text-white/45">
                        Reforce este tema primeiro
                      </div>
                    </div>

                    <a
                      href="#pricing"
                      className="rounded-lg bg-[#014aad] px-4 py-2 text-sm font-medium text-white transition hover:brightness-110"
                    >
                      Treinar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}