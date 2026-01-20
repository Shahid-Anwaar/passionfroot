// components/HeroSection.tsx
"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#fdfdfb] pt-24">
      <div className="mx-auto w-full max-w-[980px] px-6 pt-[110px] pb-[90px] text-center">
        {/* Eyebrow */}
        <div className="text-[1.025rem] font-nunito font-medium tracking-[0.08em] text-[#737373]">
          THE LARGEST B2B INFLUENCER PLATFORM
        </div>

        {/* Title */}
        <h1 className="mt-5 font-serif text-[3.5rem] font-medium leading-[115%] tracking-[-1.14px] text-[#111] sm:text-[64px]">
          Where B2B brands scale
          <br />
          influencer marketing
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-7 max-w-[740px] font-medium text-[1.125rem] leading-[150%] text-[#4e4d46]">
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
              "first-btn",
              "py-3 w-[260px] ",
            ].join(" ")}
          >
           Talk To Us
            <Icon icon="ep:right" className="h-5 w-5 text-white" />
          </Link>

          <Link
            href="#"
            className={[
              "inline-flex items-center justify-center",
              "py-3 text-[1.125rem] w-[180px] rounded-[10px]",
              "border border-black/70 bg-white/70",
              " font-[700] text-[#111]",
              "shadow-[0_10px_16px_rgba(0,0,0,0.06)]",
              "hover:bg-white",
              "active:translate-y-[1px]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
            ].join(" ")}
          >
           Contact Sale
          </Link>
        </div>
      </div>
    </section>
  );
}
