"use client"

import { motion } from "framer-motion"
import { ClipboardList, Route, Brain, Repeat } from "lucide-react"

const items = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Saber onde está errando",
    text: "Antes de melhorar, você precisa descobrir o que realmente está te travando.",
  },
  {
    icon: Route,
    step: "2",
    title: "Treinar com direção",
    text: "Não é fazer questão aleatória. É seguir um caminho claro para evoluir.",
  },
  {
    icon: Brain,
    step: "3",
    title: "Corrigir o raciocínio",
    text: "Não basta ver a resposta. Você precisa entender por que errou.",
  },
  {
    icon: Repeat,
    step: "4",
    title: "Ganhar constância",
    text: "É a repetição certa que faz você começar a resolver com segurança.",
  },
]

export default function MethodSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.08),transparent_45%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              O que faz você destravar
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground md:text-xl">
              Não é mais teoria.
            </p>

            <p className="mt-2 text-2xl font-semibold text-primary md:text-3xl">
              É treino.
            </p>
          </motion.div>

          {/* Grid de cards */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-card/80"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-semibold text-primary/80">
                      Etapa {item.step}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>

                  <p className="text-sm leading-7 text-muted-foreground md:text-base">
                    {item.text}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Frase de fechamento */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mx-auto mt-14 max-w-5xl text-center"
          >
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              É por isso que o aluno não precisa de mais explicação.
              <br />
              Ele precisa de um treino que mostre onde errou, por onde seguir
              e como começar a resolver sozinho.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}