import Image from "next/image";
import { ArrowDown } from "lucide-react";
import main from "@/assets/space/main.jpg";
import { access, site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-end overflow-hidden text-white">
      <Image
        src={main}
        alt="푸른 하늘 아래 통유리 파사드와 검은 계단 타워가 어우러진 스테이지 413 외관"
        fill
        fetchPriority="high"
        loading="eager"
        placeholder="blur"
        sizes="100vw"
        className="animate-[hero-zoom_14s_ease-out_forwards] object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20" />

      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <span className="font-serif text-lg tracking-[0.2em]">STAGE 413</span>
        <a
          href="#contact"
          className="text-sm tracking-wide text-white/85 transition-colors hover:text-white"
        >
          대관 문의
        </a>
      </header>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 md:px-12 md:pb-28">
        <p className="mb-5 text-xs tracking-[0.3em] text-white/75 uppercase">
          Pop-up &amp; Rental Space · Seongbok
        </p>
        <h1 className="font-serif text-[2rem] leading-snug font-semibold md:text-6xl md:leading-tight">
          당신의 브랜드가 돋보이는 무대,
          <br />
          스테이지 413
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed font-light text-white/85 md:text-lg">
          성복동 자연 속에서 만나는 가장 유연한 팝업 스페이스
        </p>
        <ul className="mt-6 flex flex-wrap gap-2 text-xs text-white/90">
          {access.map(({ from, minutes }) => (
            <li key={from} className="rounded-full border border-white/30 px-3 py-1.5 backdrop-blur-sm">
              {from} {minutes}분
            </li>
          ))}
          <li className="rounded-full border border-white/30 px-3 py-1.5 backdrop-blur-sm">
            전용 주차 {site.parkingSpots}대
          </li>
        </ul>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-forest shadow-lg shadow-black/20 transition hover:bg-wood-light"
        >
          대관 문의하기
          <ArrowDown className="size-4" />
        </a>
      </div>
    </section>
  );
}
