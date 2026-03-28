import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cadê o Xis — Treinador de Matemática",
  description: "Pare de travar quando a questão muda. Treine raciocínio antes de calcular",
  generator: "Cadê o Xis",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="dark">{children}</body>
      <footer className="w-full border-t border-white/10 mt-20 py-6 text-center text-sm text-white">
  <p>© 2026 Cadê o Xis. Todos os direitos reservados.</p>
</footer>
    </html>
  )
}
