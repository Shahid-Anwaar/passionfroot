// components/HeroSection.tsx
"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#FBF7F0] pt-16">
      <div className="mx-auto w-full max-w-[980px] px-6 pt-[110px] pb-[90px] text-center">
        {/* Eyebrow */}
        <div className="text-[12px] font-medium tracking-[0.14em] text-black/55">
          THE LARGEST B2B INFLUENCER PLATFORM
        </div>

        {/* Title */}
        <h1 className="mt-5 font-serif text-[56px] font-semibold leading-[1.05] tracking-[-0.015em] text-[#111] sm:text-[64px]">
          Where B2B brands scale
          <br />
          influencer marketing
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-7 max-w-[740px] text-[16px] leading-[1.7] text-black/75">
          The fastest and easiest way to do influencer marketing at scale.
          <br />
          Find the right creators on all platforms, book, collaborate, and pay -
          all in one place.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <Link
            href="#"
            className={[
              "inline-flex items-center justify-center gap-2",
              "h-[46px] w-[260px] rounded-[10px]",
              "bg-gradient-to-b from-[#2A2A2A] to-[#111111]",
              "text-[15px] font-semibold text-white",
              "shadow-[0_14px_22px_rgba(0,0,0,0.16)]",
              "active:translate-y-[1px]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
            ].join(" ")}
          >
            Get access
            <Icon icon="ep:right" className="h-4 w-4 text-white" />
          </Link>

          <Link
            href="#"
            className={[
              "inline-flex items-center justify-center",
              "h-[46px] w-[150px] rounded-[10px]",
              "border border-black/70 bg-white/70",
              "text-[15px] font-semibold text-[#111]",
              "shadow-[0_10px_16px_rgba(0,0,0,0.06)]",
              "hover:bg-white",
              "active:translate-y-[1px]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
            ].join(" ")}
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}
