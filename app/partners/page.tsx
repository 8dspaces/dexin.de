"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const partners = [
  {
    id: "dalian-jinshi",
    name: "大连金石技工学校",
    nameEn: "Dalian Jinshi Technical School",
    description: "护理、数控加工、幼儿教育等热门专业",
    descriptionEn: "Nursing, CNC machining, early childhood education and other popular majors",
    href: "/partners/dalian-jinshi",
    image: "/大连学校.png",
  },
  {
    id: "meihua-art",
    name: "石家庄美华学校",
    nameEn: "Shijiazhuang Meihua School",
    description: "艺术高考、美术绘画、音乐舞蹈",
    descriptionEn: "Art college entrance exam, fine arts, music and dance",
    href: "/partners/meihua-art",
    image: "/河北学校.png",
  },
  {
    id: "dcbz",
    name: "德中教育促进中心",
    nameEn: "German-Chinese Education Promotion Center",
    description: "中德教育交流与合作",
    descriptionEn: "China-Germany education exchange and cooperation",
    href: "/partners/dcbz",
    image: "/德中教育.png",
  },
  {
    id: "xietong",
    name: "新时代退役军人培训网",
    nameEn: "New Era Veterans Training Network",
    description: "退役军人培训、就业创业服务",
    descriptionEn: "Veterans training, employment and entrepreneurship services",
    href: "/partners/xietong",
    image: "/新时代退役军人培训网.png",
  },
]

export default function PartnersPage() {
  const { t, lang } = useLanguage()

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {t("nav.partners")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {lang === "zh" ? "携手共进，合作共赢" : "Working together for win-win outcomes"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <Link key={partner.id} href={partner.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden">
                {partner.image && (
                  <div className="relative h-40 w-full bg-gray-100">
                    <Image
                      src={partner.image}
                      alt={lang === "zh" ? partner.name : partner.nameEn}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center justify-between group-hover:text-blue-600 transition-colors">
                    {lang === "zh" ? partner.name : partner.nameEn}
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>
                    {lang === "zh" ? partner.description : partner.descriptionEn}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-blue-600 flex items-center gap-1">
                    {lang === "zh" ? "查看详情" : "View Details"}
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
