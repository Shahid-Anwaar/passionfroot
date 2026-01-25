// components/AboutMissionSection.tsx
import Image from "next/image";

type Props = {
  title?: string;
  paragraphs?: string[];
  imageSrc?: string;
};

export default function AboutMissionSection({
  title = `Sustaining the SPARK
in every creator—and
fueling modern brand growth`,
  paragraphs = [
    "Our mission is to help creators and brands unlock high-quality partnerships and transform the way companies grow through creator collaborations.",
    "B2B influencer marketing is rapidly becoming the next big growth channel for leading companies. 71% of CMOs are increasing their budget for B2B influencers in 2024.",
    "But for you, the marketer, doing that work is a pain.",
    "Creator marketing should be your best and most exciting growth channel.",
    "With Passionfroot we want to build the fastest and easiest way for you to make that a reality.",
  ],
 imageSrc =
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
}: Props) {
  return (
    <section className="bg-[#F6F2E8] py-10 md:py-14">
      {/* Orange card */}
      <div className="mx-auto max-w-8xl px-4 md:px-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#FF9E74] px-6 py-10 md:px-12 md:py-14">
          {/* “hand-drawn” top/bottom edge */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-[radial-gradient(circle_at_10px_0px,rgba(246,242,232,1)_0_7px,transparent_8px)] bg-size-[18px_18px] opacity-70" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-[radial-gradient(circle_at_10px_18px,rgba(246,242,232,1)_0_7px,transparent_8px)] bg-size-[18px_18px] opacity-70" />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left */}
            <div className="flex flex-col justify-between">
              <h2 className="whitespace-pre-line font-serif text-3xl leading-[1.06] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                {title}
              </h2>

              {/* Illustration */}
              <div className="mt-8 flex items-end gap-4">
                <div className="relative h-23 w-40 sm:h27.5 sm:w-47.5">
                  <Image
                    src={imageSrc}
                    alt="Mission illustration"
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="max-w-xl text-[13px] leading-relaxed text-neutral-900 sm:text-sm md:text-base">
              <div className="space-y-5">
                {paragraphs.map((p, idx) => (
                  <p key={idx} className="text-neutral-900/90">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
