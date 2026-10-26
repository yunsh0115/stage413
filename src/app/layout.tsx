import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_KR({
  variable: "--font-sans-kr",
  weight: ["300", "400", "500", "700"],
  preload: false,
});

const serif = Noto_Serif_KR({
  variable: "--font-serif-kr",
  weight: ["400", "600"],
  preload: false,
});

export const metadata: Metadata = {
  title: "스테이지 413 | 성복동 팝업·임대 스페이스",
  description:
    "브랜드의 색깔을 마음껏 펼칠 수 있는 도화지 같은 무대. 용인 수지 성복동 자연 속에서 만나는 가장 유연한 팝업 스페이스, 스테이지 413.",
  openGraph: {
    title: "스테이지 413 — 당신의 브랜드가 돋보이는 무대",
    description: "성복동 자연 속에서 만나는 가장 유연한 팝업 스페이스",
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
