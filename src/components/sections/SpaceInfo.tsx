import FadeIn from "@/components/FadeIn";
import { building, floors, highlights } from "@/lib/space";

const S = 20; // 1m = 20 svg units

function FloorPlan() {
  const w = building.width * S;
  const d = building.depth * S;
  const xs = [0, 6.4, 12.2].map((m) => m * S);
  const ys = [0, 6, 12].map((m) => d - m * S); // 남쪽부터 기둥열
  const pad = 40;

  return (
    <svg
      viewBox={`${-pad} ${-pad} ${w + pad * 2} ${d + pad * 2}`}
      className="mx-auto h-auto w-full max-w-[280px]"
      role="img"
      aria-label={`기준층 평면 ${building.width}m × ${building.depth}m`}
    >
      <defs>
        <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#a9825a" strokeOpacity="0.5" strokeWidth="1.5" />
        </pattern>
      </defs>

      <rect x="0" y="0" width={w} height={d} fill="#faf8f4" stroke="#1d211e" strokeWidth="3" />
      <rect x={6.4 * S} y="0" width={5.8 * S} height={5.7 * S} fill="url(#hatch)" stroke="#a9825a" strokeOpacity="0.6" />
      <text x={9.3 * S} y={2.85 * S + 4} textAnchor="middle" fontSize="11" fill="#a9825a">
        계단·코어
      </text>

      {xs.flatMap((x) =>
        ys.map((y) => <rect key={`${x}-${y}`} x={x - 4} y={y - 4} width="8" height="8" fill="#1d211e" />),
      )}

      <text x={w / 2} y={d * 0.62} textAnchor="middle" fontSize="15" fill="#1f3d2f" fontWeight="600">
        OPEN HALL
      </text>

      {/* 치수선 */}
      <g stroke="#1d211e" strokeOpacity="0.4" strokeWidth="1">
        <line x1="0" y1={d + 20} x2={w} y2={d + 20} />
        <line x1="0" y1={d + 14} x2="0" y2={d + 26} />
        <line x1={w} y1={d + 14} x2={w} y2={d + 26} />
        <line x1={-20} y1="0" x2={-20} y2={d} />
        <line x1={-26} y1="0" x2={-14} y2="0" />
        <line x1={-26} y1={d} x2={-14} y2={d} />
      </g>
      <text x={w / 2} y={d + 36} textAnchor="middle" fontSize="12" fill="#1d211e" fillOpacity="0.6">
        {building.width}m
      </text>
      <text
        x={-28}
        y={d / 2}
        textAnchor="middle"
        fontSize="12"
        fill="#1d211e"
        fillOpacity="0.6"
        transform={`rotate(-90 -28 ${d / 2})`}
      >
        {building.depth}m
      </text>

      {/* 주출입구 (동측) */}
      <path d={`M${w + 26} ${7.2 * S} h-18 m6 -6 l-6 6 l6 6`} stroke="#1f3d2f" strokeWidth="2" fill="none" />
      <text x={w + 6} y={7.2 * S - 12} fontSize="11" fill="#1f3d2f">
        입구
      </text>

      <text x={w - 4} y={-14} textAnchor="end" fontSize="11" fill="#1d211e" fillOpacity="0.5">
        N ↑
      </text>
    </svg>
  );
}

export default function SpaceInfo() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-5xl px-6 py-28 md:px-12 md:py-40">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] text-wood uppercase">Space Info</p>
          <h2 className="mt-5 font-serif text-2xl font-semibold md:text-4xl">공간 정보</h2>
          <p className="mt-6 max-w-xl leading-loose text-ink/70">
            두 개 층의 오픈 홀과 루프탑, 잔디 마당까지. 한 브랜드가 건물 전체를 온전히 사용할 수
            있습니다.
          </p>
        </FadeIn>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-ink/10 md:mt-20 md:grid-cols-4">
          {highlights.map(({ value, unit, label, sub }, i) => (
            <FadeIn key={label} delay={i * 100} className="flex flex-col bg-sand px-4 py-8 md:py-10">
              <dt className="order-2 mt-3 text-sm font-medium">{label}</dt>
              <dd className="order-1 font-serif text-4xl font-semibold text-forest md:text-5xl">
                {value}
                <span className="ml-0.5 text-base font-normal">{unit}</span>
              </dd>
              <dd className="order-3 mt-1 text-xs text-ink/50">{sub}</dd>
            </FadeIn>
          ))}
        </dl>

        <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-[280px_1fr] md:gap-16">
          <FadeIn>
            <FloorPlan />
            <p className="mt-4 text-center text-xs text-ink/50">기준층 평면 (1F · 2F 동일 외곽)</p>
          </FadeIn>

          <ol className="divide-y divide-ink/10 border-y border-ink/10">
            {floors.map(({ level, name, area, details }, i) => (
              <li key={level}>
                <FadeIn delay={i * 100} className="grid grid-cols-[3.5rem_1fr] gap-4 py-8">
                  <span className="font-serif text-xl font-semibold text-wood">{level}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-medium">{name}</h3>
                      <span className="text-sm text-forest">{area}</span>
                    </div>
                    <ul className="mt-3 space-y-1.5 text-[15px] leading-relaxed text-ink/65">
                      {details.map((d) => (
                        <li key={d} className="flex gap-2">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-wood" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>

        <dl className="mt-12 grid gap-x-10 gap-y-3 text-sm text-ink/60 md:grid-cols-2">
          <div className="flex gap-3">
            <dt className="w-16 shrink-0 text-ink/40">규모</dt>
            <dd>{building.floors}</dd>
          </div>
        </dl>
        <p className="mt-6 text-xs text-ink/40">
          * 면적은 건축 도면 치수를 기준으로 산출한 근사치로, 실제 전용면적과 차이가 있을 수 있습니다.
        </p>
      </div>
    </section>
  );
}
