"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"

const pricingPlans = [
  {
    name: "Treinador de Matemática",
    price: "R$29,90/mês",
    description: "Preço reduzido enquanto o sistema ainda está sendo construído",
    features: [
      "Treino por tema e dificuldade",
      "Respostas comentadas",
      "Aulas sendo adicionadas toda semana (Em desenvolvimento)",
      "Questões sendo adicionadas toda semana",
      "Caderno de erros",
      "Diagnóstico da sua base matemática",
    ],
    cta: "QUERO COMEÇAR AGORA",
    badge: "Acesso completo",
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Preço</span>
          </motion.div>

          <h2 className="mb-4 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Comece a treinar matemática do jeito certo
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/60">
            Para alunos que entendem a matéria, mas travam quando fazem exercícios
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-md gap-8 md:grid-cols-1">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 ${
                plan.popular
                  ? "border-yellow-400/25 bg-gradient-to-b from-yellow-400/8 via-[#123b8f]/8 to-transparent shadow-lg shadow-[#123b8f]/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
              <div className="absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

              <div className="relative z-10 mb-8 text-center">
                <div className="mb-3 inline-flex items-center rounded-full border border-[#014aad]/20 bg-[#014aad]/15 px-3 py-1 text-xs font-medium text-[#8db4ff]">
                  {plan.badge}
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">{plan.name}</h3>

                <div className="mb-2 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>

                <p className="text-sm text-white/60">{plan.description}</p>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-yellow-400" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

               <motion.a
  href="https://pay.kiwify.com.br/9jQcMeL"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className={`block w-full rounded-lg px-6 py-3 text-center font-medium transition-all duration-200 ${
    plan.popular
      ? "bg-gradient-to-r from-[#014aad] to-[#123b8f] text-white shadow-lg shadow-[#014aad]/30 hover:brightness-110"
      : "border border-white/20 bg-white/10 text-white hover:bg-white/20"
  }`}
>
  {plan.cta}
</motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-white/60">
            Você pode testar e ver na prática como o treino muda seu raciocínio.
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-medium text-yellow-400 transition-colors hover:text-yellow-300"
          >
            Se não fizer sentido pra você, é só cancelar. →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}