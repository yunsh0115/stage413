import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import CopyAddress from "@/components/CopyAddress";
import { mapLinks, site } from "@/lib/site";

function MapThumbnail() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="260" fill="#e9e3d6" />
      <path d="M0 40 C80 20 120 70 200 50 S320 10 400 30 V0 H0Z" fill="#c9d6c4" />
      <path d="M260 260 C280 200 340 190 400 170 V260Z" fill="#c9d6c4" />
      <path d="M0 200 C60 190 90 230 150 260 H0Z" fill="#d3ddcd" />
      <path d="M-10 150 C90 130 160 170 230 140 S350 90 410 110" stroke="#fff" strokeWidth="14" fill="none" />
      <path d="M150 -10 C170 70 180 150 200 270" stroke="#fff" strokeWidth="9" fill="none" />
      <path d="M270 -10 C250 60 300 120 290 270" stroke="#fff" strokeWidth="6" fill="none" />
      <circle cx="205" cy="140" r="26" fill="#1f3d2f" fillOpacity="0.12" />
      <path
        d="M205 96c-12 0-21 9-21 21 0 16 21 35 21 35s21-19 21-35c0-12-9-21-21-21Z"
        fill="#1f3d2f"
      />
      <circle cx="205" cy="117" r="7" fill="#faf8f4" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-4 px-6 py-28 md:px-12 md:py-40">
      <FadeIn>
        <p className="text-xs tracking-[0.3em] text-wood uppercase">Location &amp; Contact</p>
        <h2 className="mt-5 font-serif text-2xl font-semibold md:text-4xl">
          무대는 준비되어 있습니다
        </h2>
        <p className="mt-5 leading-relaxed text-ink/65">
          희망 기간과 용도를 알려주시면 맞춤 임대 안내를 드립니다.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-12">
        <FadeIn>
          <a
            href={mapLinks.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[400/260] overflow-hidden rounded-sm"
            aria-label="카카오맵에서 위치 보기"
          >
            <MapThumbnail />
            <span className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-paper/90 px-3 py-1.5 text-xs font-medium text-forest shadow-sm transition group-hover:bg-paper">
              지도 크게 보기 <ArrowUpRight className="size-3.5" />
            </span>
          </a>

          <div className="mt-6 flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-forest" strokeWidth={1.5} />
            <div>
              <p className="leading-relaxed">
                {site.address}
                <span className="text-ink/50"> ({site.name})</span>
              </p>
              <div className="mt-2">
                <CopyAddress address={site.address} />
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={mapLinks.kakao}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full border border-ink/15 py-3 text-center text-sm transition hover:border-forest hover:text-forest"
            >
              카카오맵
            </a>
            <a
              href={mapLinks.naver}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full border border-ink/15 py-3 text-center text-sm transition hover:border-forest hover:text-forest"
            >
              네이버지도
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={120} className="flex flex-col justify-center gap-4">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("[스테이지 413] 임대 문의")}`}
            className="flex items-center justify-center gap-2 rounded-full bg-forest py-4 text-paper transition hover:bg-forest-dark"
          >
            <Mail className="size-5" strokeWidth={1.5} />
            이메일로 임대 문의하기
          </a>
          <a
            href={`tel:${site.phone.replaceAll("-", "")}`}
            className="flex items-center justify-center gap-2 rounded-full border border-wood/40 bg-sand py-4 transition hover:border-wood hover:bg-wood-light/40"
          >
            <Phone className="size-5 text-wood" strokeWidth={1.5} />
            전화로 문의하기
          </a>
          <dl className="mt-2 space-y-1 text-center text-sm text-ink/50">
            <div>
              <dt className="sr-only">이메일</dt>
              <dd>{site.email}</dd>
            </div>
            <div>
              <dt className="sr-only">전화</dt>
              <dd>{site.phone}</dd>
            </div>
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
