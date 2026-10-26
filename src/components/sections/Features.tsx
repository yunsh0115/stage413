import Image from "next/image";
import { PlugZap, SquareParking, Trees } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import parking from "@/assets/space/parking.jpg";
import rooftop from "@/assets/space/rooftop.jpg";
import facade from "@/assets/space/facade.jpg";
import { site } from "@/lib/site";

const features = [
  {
    icon: SquareParking,
    title: "편리한 주차 환경",
    description: `최근 새로 완비한 ${site.parkingSpots}대 규모의 전용 주차장. 초보자도 쉬운 사선 주차 라인으로 넓고 쾌적합니다.`,
    badge: `주차 ${site.parkingSpots}대`,
    image: parking,
    alt: "건물 앞 넓은 전용 주차 공간",
  },
  {
    icon: Trees,
    title: "자연 속 야외 테라스",
    description: "도심을 벗어난 숲세권의 개방감을 온전히 누리는 마당과 테라스",
    image: rooftop,
    alt: "단풍 든 산이 내려다보이는 옥상 테라스",
  },
  {
    icon: PlugZap,
    title: "즉시 활용 가능한 인프라",
    description: "야외 행사와 이벤트, 야간 조명 연출을 위해 세심하게 설계된 외부 전기 배선",
    image: facade,
    alt: "통유리 파사드와 마당이 이어지는 건물 전경",
  },
];

export default function Features() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-5xl px-6 py-28 md:px-12 md:py-40">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] text-wood uppercase">Space Features</p>
          <h2 className="mt-5 font-serif text-2xl font-semibold md:text-4xl">
            준비는 공간이 해 둡니다
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-3 md:gap-8">
          {features.map(({ icon: Icon, title, description, image, alt, badge }, i) => (
            <FadeIn key={title} delay={i * 120}>
              <article>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 320px, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-paper/90 px-3 py-1.5 text-xs font-medium text-forest">
                      {badge}
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-forest text-paper">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-lg font-medium">{title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-ink/65">{description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
