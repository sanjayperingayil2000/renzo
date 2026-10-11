import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Process from "@/components/home/Process";
import { AcademyBand, ServicesPreview, Stats, Team, WhyUs } from "@/components/home/Sections";
import { Marquee } from "@/components/ui";
import { marqueeWords } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative -rotate-1 border-y border-brand/10 bg-white/70 py-6 backdrop-blur">
        <Marquee items={marqueeWords} className="text-ink" />
      </div>
      <About />
      <Stats />
      <ServicesPreview />
      <Process />
      <WhyUs />
      <AcademyBand />
      <Team />
    </>
  );
}
