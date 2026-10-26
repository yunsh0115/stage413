import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import hall1 from "@/assets/space/hall-1.jpg";
import hall2 from "@/assets/space/hall-2.jpg";

const photos = [
  { src: hall2, alt: "통창이 둘러싼 넓은 실내 홀", caption: "Indoor Hall" },
  { src: hall1, alt: "기둥 사이로 이어지는 개방형 실내 공간", caption: "Open Floor" },
];

export default function Gallery() {
  return (
    <section className="py-28 md:py-40">
      <FadeIn className="mx-auto max-w-5xl px-6 md:px-12">
        <p className="text-xs tracking-[0.3em] text-wood uppercase">Gallery</p>
        <h2 className="mt-5 font-serif text-2xl font-semibold md:text-4xl">공간 둘러보기</h2>
      </FadeIn>

      <FadeIn className="mt-14">
        <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:mx-auto md:max-w-5xl md:grid md:grid-cols-2 md:overflow-visible md:px-12">
          {photos.map(({ src, alt, caption }) => (
            <li key={caption} className="w-[82%] shrink-0 snap-center md:w-auto">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 480px, 82vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-xs tracking-[0.2em] text-ink/50 uppercase">{caption}</p>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
