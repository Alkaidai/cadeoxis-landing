"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/home/hero"
import Features from "@/components/features"
import { TestimonialsSection } from "@/components/testimonials"
import { NewReleasePromo } from "@/components/new-release-promo"
import { FAQSection } from "@/components/faq-section"
import { PricingSection } from "@/components/pricing-section"
import ProblemSection from "@/components/home/problem-section"
import MethodSection from "@/components/home/method-section"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return

    const headerOffset = 120
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false)

    setTimeout(() => {
      scrollToSection(elementId)
    }, 100)
  }

  return (
    <div className="relative min-h-screen w-full bg-black">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      {/* Desktop Header */}
      <header className="relative sticky top-4 z-[9999] mx-auto hidden w-full max-w-5xl items-center justify-between rounded-full border border-border/50 bg-background/80 px-4 py-2 shadow-lg backdrop-blur-sm transition-all duration-300 md:flex">
        {/* Logo à esquerda */}
        <a
          className="relative z-[10002] flex items-center justify-center gap-2"
          href="#hero-section"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          <span className="text-lg font-semibold text-white">Cadê o Xis</span>
        </a>

        {/* Menu central */}
        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center space-x-2 text-sm font-medium text-muted-foreground md:flex">
          <a
            href="#features"
            className="pointer-events-auto relative z-[10001] cursor-pointer bg-transparent px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("features")
            }}
          >
            <span className="relative z-20">Como funciona</span>
          </a>

          <a
            href="#pricing"
            className="pointer-events-auto relative z-[10001] cursor-pointer bg-transparent px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("pricing")
            }}
          >
            <span className="relative z-20">Preço</span>
          </a>

          <a
            href="#testimonials"
            className="pointer-events-auto relative z-[10001] cursor-pointer bg-transparent px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("testimonials")
            }}
          >
            <span className="relative z-20">Etapas</span>
          </a>

          <a
            href="#faq"
            className="pointer-events-auto relative z-[10001] cursor-pointer bg-transparent px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("faq")
            }}
          >
            <span className="relative z-20">Dúvidas</span>
          </a>
        </div>

        {/* Botão à direita */}
        <div className="relative z-[10002] flex items-center gap-4">
          <a
            href="https://pay.kiwify.com.br/2da9bZ8"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-md bg-gradient-to-b from-primary to-primary/80 px-4 py-2 text-center text-sm font-bold text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition duration-200 hover:-translate-y-0.5"
          >
            Quero começar
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto items-center justify-between rounded-full border border-border/50 bg-background/80 px-4 py-3 shadow-lg backdrop-blur-sm md:hidden">
        <a
          className="flex items-center justify-center gap-2"
          href="#hero-section"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          <span className="text-lg font-semibold text-white">Cadê o Xis</span>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
          type="button"
        >
          <div className="flex h-5 w-5 flex-col items-center justify-center space-y-1">
            <span
              className={`block h-0.5 w-4 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute left-4 right-4 top-20 rounded-2xl border border-border/50 bg-background/95 p-6 shadow-2xl backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("features")}
                className="rounded-lg px-4 py-3 text-left text-lg font-medium text-muted-foreground transition-colors hover:bg-background/50 hover:text-foreground"
                type="button"
              >
                Como funciona
              </button>

              <button
                onClick={() => handleMobileNavClick("pricing")}
                className="rounded-lg px-4 py-3 text-left text-lg font-medium text-muted-foreground transition-colors hover:bg-background/50 hover:text-foreground"
                type="button"
              >
                Preço
              </button>

              <button
                onClick={() => handleMobileNavClick("testimonials")}
                className="rounded-lg px-4 py-3 text-left text-lg font-medium text-muted-foreground transition-colors hover:bg-background/50 hover:text-foreground"
                type="button"
              >
                Etapas
              </button>

              <button
                onClick={() => handleMobileNavClick("faq")}
                className="rounded-lg px-4 py-3 text-left text-lg font-medium text-muted-foreground transition-colors hover:bg-background/50 hover:text-foreground"
                type="button"
              >
                Dúvidas
              </button>

              <div className="mt-4 flex flex-col space-y-3 border-t border-border/50 pt-4">
                <a
                  href="https://pay.kiwify.com.br/2da9bZ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gradient-to-b from-primary to-primary/80 px-4 py-3 text-center text-lg font-bold text-primary-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  Quero começar
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      <main className="relative z-10">
        <section id="hero-section">
          <Hero />
        </section>

        <section id="problem">
          <ProblemSection />
        </section>

        <section id="method">
          <MethodSection />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="pricing">
          <PricingSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <NewReleasePromo />

        <section id="faq">
          <FAQSection />
        </section>
      </main>
    </div>
  )
}