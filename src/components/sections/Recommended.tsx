import { CircleCheck } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const targets = [
  "숲 체험 및 야외 활동이 필요한 키즈 교육 프로그램",
  "감성적인 원목 가구 및 라이프스타일 브랜드 쇼룸",
  "자연광이 필요한 룩북 촬영 및 광고 스튜디오",
  "특색 있는 F&B 팝업 스토어",
  "숲을 바라보며 식사하는 레스토랑·다이닝 공간",
];

export default function Recommended() {
  return (
    <section className="bg-forest text-paper">
      <div className="mx-auto max-w-5xl px-6 py-28 md:px-12 md:py-40">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] text-wood-light uppercase">Recommended For</p>
          <h2 className="mt-5 font-serif text-2xl font-semibold md:text-4xl">
            이런 분들께 추천합니다
          </h2>
        </FadeIn>

        <ul className="mt-14 divide-y divide-paper/15 border-y border-paper/15 md:mt-20">
          {targets.map((target, i) => (
            <li key={target}>
              <FadeIn delay={i * 100} className="flex items-start gap-4 py-7 md:py-8">
                <CircleCheck className="mt-0.5 size-6 shrink-0 text-wood-light" strokeWidth={1.5} />
                <span className="text-lg leading-relaxed md:text-xl">{target}</span>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
