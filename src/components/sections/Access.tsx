import { Car } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { access } from "@/lib/site";

export default function Access() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 md:px-12 md:pb-40">
      <FadeIn>
        <p className="text-xs tracking-[0.3em] text-wood uppercase">Access</p>
        <h2 className="mt-5 font-serif text-2xl leading-relaxed font-semibold md:text-4xl md:leading-snug">
          도심에서 가장 가까운 숲
        </h2>
        <p className="mt-6 max-w-xl leading-loose text-ink/70">
          고속도로를 내리면 곧바로 숲이 시작됩니다. 서울과 분당에서 가볍게 오갈 수 있는 거리에서
          도심과는 전혀 다른 공기를 경험하세요.
        </p>
      </FadeIn>

      <ul className="mt-14 grid grid-cols-3 border-y border-ink/10 md:mt-20">
        {access.map(({ minutes, from, note }, i) => (
          <li key={from} className="border-ink/10 not-first:border-l">
            <FadeIn delay={i * 120} className="px-2 py-8 text-center md:py-12">
              <p className="font-serif text-4xl font-semibold text-forest md:text-6xl">
                {minutes}
                <span className="ml-0.5 text-base font-normal md:text-xl">분</span>
              </p>
              <p className="mt-3 text-sm font-medium md:text-base">{from}</p>
              <p className="mt-1 text-xs text-ink/50 md:text-sm">{note}</p>
            </FadeIn>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-ink/45">
        <Car className="size-3.5" strokeWidth={1.5} />
        자가용 기준, 교통 상황에 따라 달라질 수 있습니다
      </p>
    </section>
  );
}
