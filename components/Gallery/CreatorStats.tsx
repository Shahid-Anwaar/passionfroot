import { BRAND_IMAGES } from "@/data/data";
import TrustedLogosAnimation from "../LandingSections/TrustedLogosAnimations";

// components/CreatorGalleryStatsSection.tsx
type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  {
    value: "$12.5k",
    label: "average earnings of creators from our ad network",
  },
  {
    value: ">6000",
    label: "brand deals generated for creators",
  },
  {
    value: "$50m",
    label: "ad network with best brands in the world",
  },
];

export default function CreatorGalleryStatsSection() {
  return (
    <section className="bg-[#F6F2E8] pb-10">
      <div className="mx-auto max-w-6xl px-6 pt-16 text-center md:px-10 md:pt-24 pb-10">
        <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 md:text-6xl">
          Helping creators profit
          <br className="hidden md:block" />
          off their passion
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-800 md:text-base">
          Check out how we help creators - big and small - <br className="hidden sm:block" />
          monetize their content on all channels
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border border-neutral-900/10 bg-white px-7 py-7 text-left shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
            >
              <div className="font-serif text-4xl tracking-tight text-neutral-900">
                {s.value}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-0 text-center text-[1rem] font-nunito leading-[1.4] text-[#4e4d46]">
        Powering thousands of marketing teams at the fastest growing companies in tech
      </p>
      <TrustedLogosAnimation
        logos={BRAND_IMAGES}
        imageKey="imageSrc"
        imgClass="h-10 md:h-12"
        wrapperHeight="h-14 md:h-20 mt-3"
      />
    </section>
  );
}
