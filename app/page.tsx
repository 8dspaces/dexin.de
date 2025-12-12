"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { type Language, useTranslation } from "@/lib/i18n"

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>("zh")
  const t = useTranslation(currentLang)

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} t={t} />
      <main className="flex-1">
        <HeroSection t={t} />
        <ProcessSection t={t} />
        <ServicesSection t={t} />
        <WhyChooseSection t={t} />
        <CTASection t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
