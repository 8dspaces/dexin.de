"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"
import { CheckCircle2, XCircle } from "lucide-react"

export function CompanySection() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("about.company.title")}</h2>
        <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
          <p className="text-lg leading-relaxed">
            一德一信是一家专注于中德医护职业路径设计与长期陪伴式咨询的专业机构。
            我们所做的，不是简单地&quot;把人送出去&quot;，而是基于德国国家护理体系，帮助医护从业者看清一条合规、可持续、可长期发展的职业路径。
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
              <XCircle className="h-5 w-5" />
              {t("about.company.positioning.not")}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-red-700">
                <XCircle className="h-4 w-4" />
                {t("about.company.positioning.not1")}
              </li>
              <li className="flex items-center gap-2 text-red-700">
                <XCircle className="h-4 w-4" />
                {t("about.company.positioning.not2")}
              </li>
              <li className="flex items-center gap-2 text-red-700">
                <XCircle className="h-4 w-4" />
                {t("about.company.positioning.not3")}
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              {t("about.company.provides.title")}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                {t("about.company.provides.item1")}
              </li>
              <li className="flex items-center gap-2 text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                {t("about.company.provides.item2")}
              </li>
              <li className="flex items-center gap-2 text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                {t("about.company.provides.item3")}
              </li>
              <li className="flex items-center gap-2 text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                {t("about.company.provides.item4")}
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center max-w-2xl mx-auto pt-8 border-t">
        <p className="text-xl font-semibold text-blue-600">{t("about.company理念")}</p>
      </div>
    </div>
  )
}
