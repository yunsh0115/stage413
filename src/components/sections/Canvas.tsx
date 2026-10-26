import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import hallLight from "@/assets/space/hall-light.jpg";

export default function Canvas() {
  return (
    <section id="space" className="mx-auto max-w-5xl px-6 py-28 md:px-12 md:py-40">
      <FadeIn>
        <p className="text-xs tracking-[0.3em] text-wood uppercase">Canvas</p>
        <h2 className="mt-5 font-serif text-2xl leading-relaxed font-semibold md:text-4xl md:leading-snug">
          비어 있기에,
          <br />
          무엇이든 될 수 있는 공간
        </h2>
        <p className="mt-6 max-w-xl leading-loose text-ink/70">
          스테이지 413은 브랜드의 색깔을 마음껏 펼칠 수 있는 하얀 도화지입니다. 노출 콘크리트의
          담백한 실내와 숲을 마주한 마당, 그리고 하루 종일 깊게 들어오는 자연광이 어떤 콘셉트든
          자연스럽게 받아냅니다.
        </p>
      </FadeIn>

      <FadeIn className="mt-16 md:mt-20">
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm md:aspect-[16/9]">
            <Image
              src={hallLight}
              alt="통창으로 들어온 햇살이 바닥에 길게 드리운 넓은 실내 홀"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 text-sm text-ink/50">
            기둥 사이로 탁 트인 실내 홀 — 오후의 자연광
          </figcaption>
        </figure>
      </FadeIn>
    </section>
  );
}
