// components/CreatorCtaSection.tsx
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

type Props = {
  illustrationSrc?: string; // default: /assets/cta-fruits.png
};

export default function CreatorCtaSection({
  illustrationSrc = "/assets/cta-fruits.png",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#FFA465]">
      {/* Content */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 pt-[52px] sm:pt-[58px] lg:pt-[62px] pb-[210px] sm:pb-[230px] lg:pb-[250px]">
        <div className="flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="font-serif text-[#141414] text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.06] tracking-[-0.01em] font-semibold">
            Let’s make creators your <br />
            next growth chanel
          </h2>

          {/* Checklist */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#151515]">
                <Icon icon="mdi:check" className="text-[16px] text-white" />
              </span>
              <p className="text-[15px] sm:text-[16px] font-medium text-[#151515]">
                Get better returns on your time &amp; money
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#151515]">
                <Icon icon="mdi:check" className="text-[16px] text-white" />
              </span>
              <p className="text-[15px] sm:text-[16px] font-medium text-[#151515]">
                Save 75% of your time per campaign
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#"
              className="relative inline-flex h-12 w-[160px] items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#2A2A2A] to-[#101010] text-[14px] font-semibold text-white shadow-[0_14px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/10"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-white/20" />
              Get access
              <Icon icon="mdi:arrow-right" className="text-[18px] opacity-90" />
            </Link>

            <Link
              href="#"
              className="inline-flex h-12 w-[140px] items-center justify-center rounded-xl border border-black/15 bg-white text-[14px] font-semibold text-[#111111] shadow-[0_10px_22px_rgba(0,0,0,0.10)]"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom illustration */}
      <div className="absolute -bottom-10 left-0 right-0 h-[190px] sm:h-[205px] lg:h-[215px]">
        <Image
          src={"https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fa2152a9c51e7a1bcd319d_02%201%20(1).png"}
          alt="Creators parade illustration"
          fill
          priority
          sizes="100vw"
          className="object-contain object-bottom"
        />
      </div>
    </section>
  );
}
