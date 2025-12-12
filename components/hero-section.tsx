import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  t: (key: string) => string
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-amber-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
                {t("hero.companyName")}
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl text-balance">
                {t("hero.title")}
              </h1>
              <p className="text-lg text-gray-600 md:text-xl text-pretty leading-relaxed">{t("hero.subtitle")}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2 group">
                {t("hero.cta1")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 gap-2 group bg-transparent"
              >
                {t("hero.cta2")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-1/4 flex flex-col gap-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-2">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="h-2 w-2 rounded-full bg-blue-400"></div>
                  ))}
                </div>
              ))}
            </div>
            <img
              src="/germany-healthcare-professionals-hospital.jpg"
              alt="Healthcare professionals in Germany"
              className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -right-8 bottom-8 rounded-xl bg-white p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">一德一信</div>
                <p className="text-xs text-gray-600 mt-1">YIDEYIXIN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
