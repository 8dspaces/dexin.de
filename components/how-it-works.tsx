import { Card, CardContent } from "@/components/ui/card"
import { FileText, ThumbsUp, Users } from "lucide-react"

interface HowItWorksProps {
  t: (key: string) => string
}

export function HowItWorks({ t }: HowItWorksProps) {
  const steps = [
    {
      icon: Users,
      title: t("works.step1.title"),
      description: t("works.step1.desc"),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FileText,
      title: t("works.step2.title"),
      description: t("works.step2.desc"),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: ThumbsUp,
      title: t("works.step3.title"),
      description: t("works.step3.desc"),
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">{t("works.title")}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">{t("works.subtitle")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto relative">
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-0.5">
            <svg className="w-full h-full" viewBox="0 0 100 2">
              <path d="M 0 1 L 50 1 L 100 1" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" fill="none" />
            </svg>
          </div>

          {steps.map((step, index) => (
            <Card key={index} className="relative border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-center">{step.title}</h3>
                <p className="text-sm text-gray-600 text-center text-pretty">
                  {step.description}{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    {t("works.more")}
                  </a>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
