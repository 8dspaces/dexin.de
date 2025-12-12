import Image from "next/image"

interface TrackSectionProps {
  t: (key: string) => string
}

export function TrackSection({ t }: TrackSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute right-8 top-1/3 flex flex-col gap-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-2">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="h-2 w-2 rounded-full bg-blue-300"></div>
                  ))}
                </div>
              ))}
            </div>
            <Image
              src="/smiling-healthcare-professional-with-tablet.jpg"
              alt="Healthcare professional"
              width={1200}
              height={800}
              className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-block rounded-full bg-blue-500/30 px-4 py-1.5 text-sm font-medium">
              {t("track.label")}
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
              {t("track.title")}
            </h2>
            <p className="text-lg text-blue-100 text-pretty">{t("track.subtitle")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
