
"use client"

import { motion } from "framer-motion"

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.10),transparent_45%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              O problema não é a matemática
            </h2>

            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              Você não trava porque não prestou atenção, não trava porque não é bom em matemática
              e nem porque não estudou o suficiente.
            </p>

            <p className="mt-6 text-xl font-semibold text-primary md:text-2xl">
              Você trava porque não sabe o que fazer quando não sabe.
            </p>
          </motion.div>

          {/* Fluxo visual */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="grid gap-5 md:grid-cols-3"
          >
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 shadow-[0_0_40px_rgba(234,179,8,0.06)] backdrop-blur-sm">
              <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                1. Assiste
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Você vê a explicação</h3>
              <p className="text-sm leading-7 text-muted-foreground md:text-base">
                O professor resolve, mostra os passos e tudo parece claro enquanto você acompanha.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 shadow-[0_0_40px_rgba(234,179,8,0.06)] backdrop-blur-sm">
              <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                2. Entende
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Você acha que conseguiu</h3>
              <p className="text-sm leading-7 text-muted-foreground md:text-base">
                Como a explicação fez sentido, parece que você já sabe fazer aquilo sozinho.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 shadow-[0_0_40px_rgba(234,179,8,0.06)] backdrop-blur-sm">
              <div className="mb-4 inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                3. Trava
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Na hora de resolver sozinho</h3>
              <p className="text-sm leading-7 text-muted-foreground md:text-base">
                Quando a questão muda ou você precisa começar sem ajuda, o caminho some.
              </p>
            </div>
          </motion.div>

          {/* Explicação curta abaixo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mx-auto mt-14 max-w-3xl text-center"
          >
            <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              É aqui que tudo trava
            </h3>

            <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
              Enquanto você assiste a explicação, tudo faz sentido.
              <br />
              Mas na hora de resolver sozinho, você não tem um caminho.
            </p>

            <p className="mt-6 text-lg font-medium text-white md:text-xl">
              E é nesse momento que você para.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}