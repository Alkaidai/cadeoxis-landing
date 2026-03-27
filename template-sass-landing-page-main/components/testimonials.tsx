import { Marquee } from "@/components/magicui/marquee"

const steps = [
  {
    number: "01",
    title: "Escolha um tema",
    body: "Ex.: frações, equações, regra de três.",
  },
  {
    number: "02",
    title: "Resolva por dificuldade",
    body: "Você começa entendendo e evolui.",
  },
  {
    number: "03",
    title: "Enfrente variações",
    body: "A questão muda — e você aprende a lidar com isso.",
  },
  {
    number: "04",
    title: "Corrija seu raciocínio",
    body: "Você entende onde travou e ajusta.",
  },
]

const firstColumn = steps.slice(0, 2)
const secondColumn = steps.slice(2, 4)

const StepCard = ({
  number,
  title,
  body,
}: {
  number: string
  title: string
  body: string
}) => {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]">
      <div className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-[#014aad]/20 via-[#f0b400]/10 to-transparent blur-md" />

      <div className="mb-5 inline-flex items-center rounded-full border border-[#f0b400]/20 bg-[#f0b400]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#f0b400]">
        Etapa {number}
      </div>

      <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-white/70">
        {body}
      </p>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mb-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-[720px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#f0b400] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4" />
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#f0b400] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px" />
              <span className="relative text-white">Etapas</span>
            </button>
          </div>

          <h2 className="relative z-10 mt-5 bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 md:text-[54px] md:leading-[60px]">
            Como funciona o treino
          </h2>

          <p className="relative z-10 mt-5 text-center text-lg text-zinc-400">
            Você escolhe um tema, resolve questões e treina até parar de travar quando a questão muda.
          </p>
        </div>

        <div className="my-16 flex max-h-[560px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
          <div>
            <Marquee pauseOnHover vertical className="[--duration:18s]">
              {firstColumn.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:22s]">
              {secondColumn.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </Marquee>
          </div>
        </div>

        <div className="mx-auto mt-4 max-w-2xl text-center">
          <p className="text-base text-white/60 md:text-lg">
            Com o tempo, você ganha segurança porque aprende a lidar melhor com a mudança das questões.
          </p>
        </div>
      </div>
    </section>
  )
}