import Image from "next/image";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import main from "@/assets/space/main.jpg";
import { access, site } from "@/lib/site";

const stats = [
  ...access.map(({ minutes, from }) => ({ value: minutes, unit: "분", label: from })),
  { value: site.parkingSpots, unit: "대", label: "전용 주차" },
];

function rise(delay: number) {
  return { animationDelay: `${delay}ms` };
}

export default function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-paper lg:grid lg:grid-cols-[minmax(0,1fr)_min(56vw,110svh)]">
      {/* 사진: 모바일은 전체 배경, 데스크톱은 오른쪽 전체 높이 */}
      <div className="absolute inset-0 overflow-hidden lg:relative lg:order-2 lg:h-svh lg:min-h-[680px]">
        <Image
          src={main}
          alt="푸른 하늘 아래 통유리 파사드와 검은 계단 타워가 어우러진 스테이지 413 외관"
          fill
          fetchPriority="high"
          loading="eager"
          placeholder="blur"
          sizes="(min-width: 1024px) 56vw, 100vw"
          className="animate-[hero-zoom_14s_ease-out_forwards] object-cover object-[center_30%] lg:object-[center_52%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/25 lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 hidden h-32 bg-gradient-to-t from-black/45 to-transparent lg:block" />
        <p className="absolute bottom-8 left-8 hidden items-center gap-2 text-xs tracking-wide text-white/90 drop-shadow lg:flex">
          <MapPin className="size-3.5" strokeWidth={1.5} />
          {site.address}
        </p>
      </div>

      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 lg:px-14 lg:py-8">
        <span className="font-serif text-lg tracking-[0.25em] text-white lg:text-ink">STAGE 413</span>
        <a
          href="#contact"
          className="rounded-full bg-white/95 px-5 py-2.5 text-sm font-medium text-forest shadow-sm transition hover:bg-white"
        >
          임대 문의
        </a>
      </header>

      <div className="relative z-10 flex min-h-svh flex-col justify-end px-6 pt-28 pb-14 text-white lg:order-1 lg:min-h-[680px] lg:justify-center lg:px-14 lg:pb-16 lg:text-ink xl:px-20">
        <div className="lg:mx-auto lg:w-full lg:max-w-[34rem]">
        <p
          style={rise(100)}
          className="flex animate-[rise_1s_ease-out_both] items-center gap-3 text-[11px] tracking-[0.3em] text-white/75 uppercase lg:text-wood"
        >
          <span className="h-px w-8 bg-current" />
          Seongbok · Yongin
        </p>

        <h1
          style={rise(250)}
          className="mt-6 animate-[rise_1s_ease-out_both] font-serif text-[2.1rem] leading-[1.3] font-semibold tracking-tight lg:text-5xl lg:leading-[1.25] xl:text-[3.6rem]"
        >
          당신의 브랜드가
          <br />
          돋보이는 무대,
          <br />
          <span className="lg:text-forest">스테이지 413</span>
        </h1>

        <p
          style={rise(400)}
          className="mt-6 max-w-sm animate-[rise_1s_ease-out_both] text-base leading-relaxed font-light text-white/85 lg:text-lg lg:text-ink/65"
        >
          성복동 숲 속, 도심에서 가장 가까운 자연을 품은 공간
        </p>

        {/* 모바일: 칩 */}
        <ul style={rise(550)} className="mt-6 flex animate-[rise_1s_ease-out_both] flex-wrap gap-2 text-xs lg:hidden">
          {stats.map(({ value, unit, label }) => (
            <li key={label} className="rounded-full border border-white/30 px-3 py-1.5 backdrop-blur-sm">
              {label} {value}
              {unit}
            </li>
          ))}
        </ul>

        <div style={rise(550)} className="mt-8 flex animate-[rise_1s_ease-out_both] flex-wrap items-center gap-x-7 gap-y-4 lg:mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-forest shadow-lg shadow-black/20 transition hover:bg-wood-light lg:bg-forest lg:text-paper lg:shadow-forest/20 lg:hover:bg-forest-dark"
          >
            임대 문의하기
            <ArrowDown className="size-4" />
          </a>
          <a
            href="#space"
            className="group hidden items-center gap-1.5 text-sm text-ink/70 transition hover:text-forest lg:inline-flex"
          >
            공간 둘러보기
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 데스크톱: 스펙 라인 */}
        <dl
          style={rise(700)}
          className="mt-16 hidden animate-[rise_1s_ease-out_both] grid-cols-4 border-t border-ink/10 pt-7 lg:grid"
        >
          {stats.map(({ value, unit, label }) => (
            <div key={label} className="flex flex-col border-ink/10 pr-3 not-first:border-l not-first:pl-4 xl:not-first:pl-5">
              <dt className="order-2 mt-1.5 text-xs text-ink/50">{label}</dt>
              <dd className="order-1 font-serif text-3xl font-semibold text-forest xl:text-4xl">
                {value}
                <span className="ml-0.5 text-sm font-normal text-ink/60">{unit}</span>
              </dd>
            </div>
          ))}
        </dl>
        </div>
      </div>
    </section>
  );
}
