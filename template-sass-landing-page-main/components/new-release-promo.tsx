"use client"

export function NewReleasePromo() {
  return (
    <section className="mt-20 w-full px-4">
      <div className="mx-auto max-w-5xl rounded-auto border border-white/10 bg-black/20 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="relative mx-auto min-h-auto overflow-hidden rounded-[38px] border border-white/10 px-6 py-14 shadow-sm md:px-10 md:py-16">
          {/* fundo principal com gradiente */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#f0b400_0%,#f5c400_25%,#d89f00_55%,#a87400_100%)]" />

          {/* luz superior */}
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.30),transparent_70%)]" />

          {/* brilho central */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_45%)]" />

          {/* sombra inferior */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_55%,rgba(0,0,0,0.12)_100%)]" />

          {/* textura leve */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* vinheta suave */}
          <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-40px_80px_rgba(0,0,0,0.08)]" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.18)] md:text-5xl md:leading-[1.1]">
                Pare de travar quando a
                <br />
                questão muda
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-xl">
                Comece hoje a treinar matemática com mais direção,
                mais clareza e mais segurança.
              </p>

              <svg
                width="90"
                height="45"
                viewBox="0 0 100 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mt-8 mb-6 fill-white/90"
              >
                <path d="M68.6958 5.40679C67.3329 12.7082 68.5287 20.1216 68.5197 27.4583C68.5189 29.5382 68.404 31.6054 68.1147 33.682C67.9844 34.592 69.4111 34.751 69.5414 33.8411C70.5618 26.5016 69.2488 19.104 69.4639 11.7325C69.5218 9.65887 69.7222 7.6012 70.0939 5.56265C70.1638 5.1949 69.831 4.81112 69.4601 4.76976C69.0891 4.72841 68.7689 5.01049 68.6958 5.40679Z"></path>
                <path d="M74.0117 26.1349C73.2662 27.1206 72.5493 28.1096 72.0194 29.235C71.5688 30.167 71.2007 31.137 70.7216 32.0658C70.4995 32.5033 70.252 32.9091 69.9475 33.3085C69.8142 33.4669 69.6779 33.654 69.5161 33.8093C69.4527 33.86 68.9199 34.2339 68.9167 34.2624C68.9263 34.1768 69.0752 34.3957 69.0055 34.2434C68.958 34.1515 68.8534 34.0531 68.8058 33.9612C68.6347 33.6821 68.4637 33.403 68.264 33.1208L67.1612 31.3512C66.3532 30.0477 65.5199 28.7126 64.7119 27.4093C64.5185 27.0699 63.9701 27.0666 63.7131 27.2979C63.396 27.5514 63.4053 27.9858 63.6018 28.2966C64.3845 29.5683 65.1956 30.8431 65.9783 32.1149L67.1572 33.9796C67.5025 34.5093 67.8225 35.2671 68.428 35.5368C69.6136 36.0446 70.7841 34.615 71.3424 33.7529C71.9992 32.786 72.4085 31.705 72.9035 30.6336C73.4842 29.3116 74.2774 28.1578 75.1306 26.9818C75.7047 26.2369 74.5573 25.3868 74.0117 26.1349Z"></path>
              </svg>

              <div className="flex items-center justify-center">
                <a href="#pricing">
                  <div className="group flex h-[66px] cursor-pointer items-center gap-2 rounded-full border border-[#0f2c67]/40 bg-[#1a376f]/65 p-[11px] shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex h-[43px] items-center justify-center rounded-full border border-white/15 bg-white/12 px-5">
                      <p className="flex items-center justify-center gap-2 font-medium tracking-tight text-white">
                        Quero começar agora
                      </p>
                    </div>

                    <div className="flex size-[28px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all ease-in-out group-hover:ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all ease-in-out group-hover:rotate-45"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>

              <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                Banco de questões para treinar matemática com mais direção
                e menos travamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}