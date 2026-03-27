"use client"

export function VideoHero() {
  return (
    <section className="w-full px-4 pt-24 pb-16">
      <div className="mx-auto max-w-5xl">
        
        {/* Título */}
        <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-6">
          Entender sem fazer não conta.
        </h1>

        <p className="text-center text-white/70 mb-10 max-w-2xl mx-auto">
          Assista como funciona o treino que destrava quem trava quando a questão muda.
        </p>

        {/* Vídeo */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-xl">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SEU_VIDEO_AQUI"
              title="Vídeo explicativo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  )
}