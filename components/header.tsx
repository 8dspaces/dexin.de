"use client"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import type { Language } from "@/lib/i18n"
import { Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface HeaderProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
  t: (key: string) => string
}

export function Header({ currentLang, onLanguageChange, t }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="一德一信" width={60} height={60} className="object-contain" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900">一德一信</span>
            <span className="text-xs text-gray-600 hidden sm:block">YIDEYIXIN</span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#home" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            {t("nav.home")}
          </a>
          <a href="#process" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            {t("nav.process")}
          </a>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            {t("nav.about")}
          </a>
          <a href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            {t("nav.advantages")}
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            {t("nav.contact")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
          <Button className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white">
            {t("nav.consultation")}
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-white lg:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <a href="#home" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              {t("nav.home")}
            </a>
            <a href="#process" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              {t("nav.process")}
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              {t("nav.about")}
            </a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              {t("nav.advantages")}
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              {t("nav.contact")}
            </a>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">{t("nav.consultation")}</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
