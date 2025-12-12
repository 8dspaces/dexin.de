import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

interface FooterProps {
  t: (key: string) => string
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="一德一信" width={50} height={50} className="object-contain" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">一德一信</span>
                <span className="text-xs text-gray-600">YIDEYIXIN</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">{t("footer.company")}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#process" className="hover:text-blue-600 transition-colors">
                  {t("footer.process")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  {t("footer.german")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  {t("footer.matching")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  {t("footer.visa")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t("footer.about")}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  {t("footer.companyInfo")}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  {t("footer.team")}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  {t("footer.cases")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@yideyixin.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+86 21 xxxx xxxx</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-600">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
