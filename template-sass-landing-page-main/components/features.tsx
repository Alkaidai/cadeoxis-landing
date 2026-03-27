"use client"

import { useTheme } from "next-themes"
import { FollowerPointerCard } from "./ui/following-pointer"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { theme } = useTheme()

  const [isCliHovering, setIsCliHovering] = useState(false)
  const [isFeature3Hovering, setIsFeature3Hovering] = useState(false)
  const [isFeature4Hovering, setIsFeature4Hovering] = useState(false)

  const [dark, setDark] = useState<number>(theme === "dark" ? 1 : 0)

  const [topicText, setTopicText] = useState("por tema")
  const [isTopicAnimating, setIsTopicAnimating] = useState(false)

  useEffect(() => {
    setDark(theme === "dark" ? 1 : 0)
  }, [theme])

  const animateTopics = async () => {
    if (isTopicAnimating) return

    setIsTopicAnimating(true)

    const topics = [
      "Frações",
      "Equações",
      "MMC e MDC",
      "Porcentagem",
      "Razão",
      "Regra de três",
      "por tema",
    ]

    for (const topic of topics) {
      setTopicText(topic)
      await new Promise((resolve) => setTimeout(resolve, 220))
    }

    setIsTopicAnimating(false)
  }

  return (
    <section
      id="como-funciona"
      className="text-foreground relative overflow-hidden py-16 sm:py-24 md:py-28"
    >
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none" />
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex flex-col items-center gap-8 px-4 sm:gap-12"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className={cn(
              "mb-4 bg-gradient-to-b from-zinc-100 to-zinc-400 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
              geist.className,
            )}
          >
            Como você para de travar na prática
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-white/60 md:text-base">
            Um banco de questões organizado para treinar com direção, clareza e progressão.
          </p>
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <FollowerPointerCard
            title={
              <div className="flex items-center gap-2">
                <span>📘</span>
                <span>Treino com direção</span>
              </div>
            }
          >
            <div className="w-full">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* CARD 1 */}
                <motion.div
                  className="group border-secondary/40 text-card-foreground relative flex min-h-[540px] flex-col overflow-hidden rounded-2xl border p-6 shadow-xl"
                  onMouseEnter={() => setIsCliHovering(true)}
                  onMouseLeave={() => setIsCliHovering(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{
                    scale: 1.01,
                    borderColor: "rgba(240, 180, 0, 0.45)",
                    boxShadow: "0 0 30px rgba(18, 59, 143, 0.18)",
                  }}
                >
                  <div className="mb-5 flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Treino por tema e dificuldade
                    </h3>

                    <p className="max-w-[480px] text-sm text-muted-foreground">
                      Pratique exatamente o ponto em que você trava, sem ficar perdido em listas aleatórias.
                    </p>
                  </div>

                  <div className="relative flex grow items-center justify-center">
                    <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-white/10">
                      {/* fundo novo */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(240,180,0,0.28),_transparent_32%),linear-gradient(135deg,_#0a1f52_0%,_#123b8f_38%,_#0d2d73_68%,_#081833_100%)]" />

                      {/* brilho suave */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.10),_transparent_35%)]" />

                      {/* linhas */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={isCliHovering ? { opacity: 1 } : { opacity: 0.55 }}
                        transition={{ duration: 0.4 }}
                      >
                        <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                          <motion.path
                            d="M 60.688 1.59 L 60.688 92.449 M 60.688 92.449 L 119.368 92.449 M 60.688 92.449 L 1.414 92.449"
                            stroke="rgba(255,255,255,0.55)"
                            fill="transparent"
                            strokeDasharray="2 2"
                            initial={{ pathLength: 0.2 }}
                            animate={isCliHovering ? { pathLength: 1 } : { pathLength: 0.2 }}
                            transition={{ duration: 1.6, ease: "easeInOut" }}
                          />
                        </svg>

                        <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                          <motion.path
                            d="M 60.688 92.449 L 60.688 1.59 M 60.688 1.59 L 119.368 1.59 M 60.688 1.59 L 1.414 1.59"
                            stroke="rgba(255,255,255,0.45)"
                            fill="transparent"
                            strokeDasharray="2 2"
                            initial={{ pathLength: 0.2 }}
                            animate={isCliHovering ? { pathLength: 1 } : { pathLength: 0.2 }}
                            transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
                          />
                        </svg>
                      </motion.div>

                      {/* brilho central */}
                      <motion.div
                        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0b400]/30 blur-[64px]"
                        initial={{ scale: 1 }}
                        animate={isCliHovering ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                        transition={{
                          duration: 2.2,
                          ease: "easeInOut",
                          repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                        }}
                      />

                      <div className="absolute inset-0 flex items-center justify-center px-6">
                        <div className="grid w-full max-w-[560px] grid-cols-[1fr_auto_1fr] items-center gap-8">
                          {/* esquerda */}
                          <div className="flex flex-col gap-4">
                            {["Frações", "Equações", "Razão e proporção"].map((item, index) => (
                              <motion.div
                                key={`left-${index}`}
                                className="flex h-[44px] items-center gap-2 rounded-lg bg-white px-4 text-sm font-medium text-black shadow-md"
                                initial={{ x: 0 }}
                                animate={isCliHovering ? { x: [-12, 0] } : { x: 0 }}
                                transition={{ duration: 0.35, delay: index * 0.08 }}
                              >
                                <div className="flex h-4 w-4 items-center justify-center">
                                  {index === 0 && <span className="text-xs">➗</span>}
                                  {index === 1 && <span className="text-xs">✏️</span>}
                                  {index === 2 && <span className="text-xs">📐</span>}
                                </div>
                                {item}
                              </motion.div>
                            ))}
                          </div>

                          {/* centro */}
                          <div className="flex items-center justify-center">
                            <motion.div
                              className="flex h-[86px] w-[86px] items-center justify-center rounded-2xl border border-white/15 bg-black text-4xl font-bold text-white shadow-[0_0_0_4px_rgba(255,255,255,0.06)]"
                              initial={{ scale: 1 }}
                              animate={isCliHovering ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                              transition={{ duration: 0.5 }}
                            >
                              X
                            </motion.div>
                          </div>

                          {/* direita */}
                          <div className="flex flex-col gap-4">
                            {["Fácil", "Médio", "Difícil"].map((item, index) => (
                              <motion.div
                                key={`right-${index}`}
                                className="flex h-[44px] items-center gap-2 rounded-lg bg-white px-4 text-sm font-medium text-black shadow-md"
                                initial={{ x: 0 }}
                                animate={isCliHovering ? { x: [12, 0] } : { x: 0 }}
                                transition={{ duration: 0.35, delay: index * 0.08 }}
                              >
                                <div className="flex h-4 w-4 items-center justify-center">
                                  {index === 0 && <span className="text-xs">🟢</span>}
                                  {index === 1 && <span className="text-xs">🟡</span>}
                                  {index === 2 && <span className="text-xs">🔴</span>}
                                </div>
                                {item}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CARD 2 */}
                <motion.div
                  className="group border-secondary/40 text-card-foreground relative flex min-h-[540px] flex-col overflow-hidden rounded-2xl border p-6 shadow-xl"
                  onMouseEnter={() => {
                    animateTopics()
                  }}
                  onMouseLeave={() => {
                    setTopicText("por tema")
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{
                    scale: 1.01,
                    borderColor: "rgba(240, 180, 0, 0.45)",
                    boxShadow: "0 0 30px rgba(18, 59, 143, 0.18)",
                  }}
                >
                  <div className="mb-5 flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Banco de questões organizado
                    </h3>

                    <p className="max-w-[480px] text-sm text-muted-foreground">
                      Pare de estudar sem direção. Aqui você treina por tema, com mais clareza e foco.
                    </p>
                  </div>

                  <div className="relative flex grow items-center justify-center overflow-hidden rounded-2xl p-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f0b400]/12 via-transparent to-[#123b8f]/12" />

                    <div className="relative z-10 flex w-full flex-col items-center justify-center">
                      <h1 className="mb-8 text-center text-4xl font-semibold leading-none sm:text-5xl lg:text-6xl">
                        <span className='bg-background relative inline-block min-w-[250px] rounded-md border px-2 py-1 text-center before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url("/noise.gif")] before:opacity-[0.09] before:content-[""]'>
                          <motion.span
                            key={topicText}
                            initial={{ opacity: 0.3, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.18 }}
                            className="bg-gradient-to-t from-[#f0b400] to-[#f0b400] bg-clip-text text-transparent"
                          >
                            {topicText}
                          </motion.span>
                        </span>
                      </h1>

                      <div className="grid w-full max-w-[430px] grid-cols-2 gap-4">
                        {[
                          "Frações",
                          "MMC",
                          "Equações",
                          "Porcentagem",
                          "Regra de três",
                          "Razão",
                        ].map((item, index) => (
                          <motion.div
                            key={item}
                            className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center text-base font-semibold text-[#f0b400] shadow-lg backdrop-blur-sm md:text-lg"
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={
                              isInView
                                ? { opacity: 1, y: 0, scale: 1 }
                                : { opacity: 0, y: 20, scale: 0.95 }
                            }
                            transition={{ duration: 0.35, delay: 0.35 + index * 0.07 }}
                            whileHover={{ scale: 1.03, borderColor: "rgba(240,180,0,0.55)" }}
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute top-1/2 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                      <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100" />
                      <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100" />
                    </div>
                  </div>
                </motion.div>

                {/* CARD 3 */}
                <motion.div
                  className="group border-secondary/40 text-card-foreground relative flex min-h-auto
                 flex-col overflow-hidden rounded-2xl border p-6 shadow-xl"
                  onMouseEnter={() => setIsFeature3Hovering(true)}
                  onMouseLeave={() => setIsFeature3Hovering(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{
                    scale: 1.01,
                    borderColor: "rgba(240, 180, 0, 0.45)",
                    boxShadow: "0 0 30px rgba(18, 59, 143, 0.16)",
                  }}
                >
                  <div className="mb-5 flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Treino constante
                    </h3>

                    <p className="max-w-[480px] text-sm text-muted-foreground">
                      Não é só acessar questões. É praticar até ganhar mais segurança.
                    </p>
                  </div>

                  <div className="flex grow items-center justify-center">
                    <motion.div
                      className="w-full max-w-lg rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm"
                      animate={
                        isFeature3Hovering
                          ? { y: [0, -4, 0], boxShadow: "0 0 24px rgba(18,59,143,0.18)" }
                          : { y: 0, boxShadow: "0 0 0px rgba(18,59,143,0)" }
                      }
                      transition={{
                        duration: 1.2,
                        repeat: isFeature3Hovering ? Number.POSITIVE_INFINITY : 0,
                      }}
                    >
                      <div className="mb-4 text-sm text-white/50">Exemplo de treino</div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-sm leading-relaxed text-white">
                          Qual é o MMC entre 12 e 18?
                        </p>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                          {["24", "36", "48", "72"].map((option, index) => (
                            <motion.div
                              key={index}
                              className="rounded-lg border border-white/10 px-4 py-3 text-center text-sm text-white/80"
                              whileHover={{
                                scale: 1.02,
                                borderColor: "rgba(240,180,0,0.45)",
                                backgroundColor: "rgba(240,180,0,0.08)",
                              }}
                            >
                              {option}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between text-sm text-white/50">
                        <span>Tema: MMC e MDC</span>
                        <span>Dificuldade: média</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* CARD 4 */}
                <motion.div
                  className="group border-secondary/40 text-card-foreground relative flex min-h-auto flex-col overflow-hidden rounded-2xl border p-6 shadow-xl"
                  onMouseEnter={() => setIsFeature4Hovering(true)}
                  onMouseLeave={() => setIsFeature4Hovering(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{
                    scale: 1.01,
                    borderColor: "rgba(240, 180, 0, 0.45)",
                    boxShadow: "0 20px 40px rgba(18,59,143,0.18)",
                  }}
                >
                  <div className="mb-5 flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Entenda onde você trava
                    </h3>

                    <p className="max-w-[480px] text-sm text-muted-foreground">
                      Veja exatamente onde você erra e o que precisa ajustar.
                    </p>
                  </div>

                  <div className="flex grow items-center justify-center">
                    <motion.div
                      className="w-full max-w-lg rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                      animate={
                        isFeature4Hovering
                          ? { y: [0, -3, 0], boxShadow: "0 0 28px rgba(18,59,143,0.16)" }
                          : { y: 0, boxShadow: "0 10px 40px rgba(0,0,0,0.35)" }
                      }
                      transition={{
                        duration: 1.4,
                        repeat: isFeature4Hovering ? Number.POSITIVE_INFINITY : 0,
                      }}
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <span className="rounded-full bg-[#f0b400]/15 px-3 py-1 text-xs font-medium text-[#f0b400]">
                          Seu desempenho
                        </span>
                        <span className="text-xs text-white/40">Atualizado</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                          <div className="text-xs text-white/50">Questões resolvidas</div>
                          <div className="mt-2 text-2xl font-semibold text-white">12</div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                          <div className="text-xs text-white/50">Sequência</div>
                          <div className="mt-2 text-2xl font-semibold text-white">3 dias</div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                          <div className="text-xs text-white/50">% de acerto</div>
                          <div className="mt-2 text-2xl font-semibold text-white">58%</div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                          <div className="text-xs text-white/50">Ponto mais fraco</div>
                          <div className="mt-2 text-lg font-semibold text-[#ff7d7d]">Frações</div>
                        </div>
                      </div>

                      <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
                        <div className="mb-3 text-sm font-medium text-white">
                          Próximo foco recomendado
                        </div>

                        <div className="flex items-center justify-between gap-3 rounded-lg border border-white/8 bg-white/[0.02] px-3 py-3">
                          <div>
                            <div className="text-sm font-medium text-white">Frações</div>
                            <div className="text-xs text-white/45">Reforce este tema primeiro</div>
                          </div>

                          <button className="rounded-lg bg-[#014aad] px-4 py-2 text-sm font-medium text-white transition hover:brightness-110">
                            Treinar
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </FollowerPointerCard>
        </div>
      </motion.div>
    </section>
  )
}