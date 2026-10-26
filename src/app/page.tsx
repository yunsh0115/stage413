import Hero from "@/components/sections/Hero";
import Canvas from "@/components/sections/Canvas";
import Access from "@/components/sections/Access";
import Features from "@/components/sections/Features";
import Gallery from "@/components/sections/Gallery";
import SpaceInfo from "@/components/sections/SpaceInfo";
import Recommended from "@/components/sections/Recommended";
import Contact from "@/components/sections/Contact";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Canvas />
        <Access />
        <Features />
        <Gallery />
        <SpaceInfo />
        <Recommended />
        <Contact />
      </main>
      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-sm text-ink/50 md:flex-row md:justify-between md:px-12">
          <span className="font-serif tracking-[0.2em] text-ink/70">STAGE 413</span>
          <span>{site.address}</span>
          <span>{site.phone} · {site.email}</span>
          <span>© {site.nameEn}</span>
        </div>
      </footer>
    </>
  );
}
