// components/CampaignsLaunchedSection.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function CampaignsLaunchedSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FDFDFC] lg:h-130.75">
      {/* ✅ Decorative stickers (keep same on lg/xl, hide below lg) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <Sticker style={{ left: "5.61%", top: "21.41%" }} rotate={-12} variant="black">
          <Icon icon="lucide:bar-chart-3" className="h-6 w-6 text-white" />
        </Sticker>

        <Sticker style={{ left: "17.65%", top: "23.13%" }} rotate={10} variant="white">
          <Icon icon="logos:figma" className="h-7 w-7" />
        </Sticker>

        <Doodle style={{ left: "12.8%", top: "37.28%" }} />

        <Sticker style={{ left: "6.24%", top: "52.77%" }} rotate={-10} variant="blue">
          <Icon icon="tabler:chevron-right" className="h-8 w-8 text-white" />
        </Sticker>

        <Sticker style={{ left: "13.30%", top: "67.68%" }} rotate={-10} variant="white">
          <Icon icon="logos:clickup" className="h-7 w-7" />
        </Sticker>

        <Sticker style={{ left: "82.72%", top: "20.26%" }} rotate={12} variant="black">
          <Icon icon="simple-icons:linear" className="h-6 w-6 text-white" />
        </Sticker>

        <Sticker style={{ left: "92.18%", top: "29.63%" }} rotate={12} variant="white">
          <Icon icon="tabler:bolt-filled" className="h-7 w-7 text-[#1E7BFF]" />
        </Sticker>

        <DoodleRight style={{ left: "86.94%", top: "43.21%" }} />

        <Sticker style={{ left: "79.88%", top: "68.06%" }} rotate={10} variant="orange">
          <Icon icon="logos:hubspot-icon" className="h-7 w-7" />
        </Sticker>

        <Sticker style={{ left: "92.05%", top: "65.58%" }} rotate={10} variant="white">
          <Icon icon="logos:facebook" className="h-7 w-7" />
        </Sticker>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex w-full items-center justify-center px-4 sm:px-6 py-12 sm:py-16 lg:py-0 lg:h-full">
        <div className="text-center lg:-translate-y-1.5">
          {/* Badge */}
          <div className="inline-flex items-center justify-center rounded-lg border border-[#29A36E] bg-[#ECFAF0] px-3 py-2 text-3 sm:text-[14px] font-semibold leading-none text-[#29A36E]">
            Live on Passionfroot
            <Icon icon="streamline:wifi-horizontal-remix" className="ms-2" />
          </div>

          {/* Title (keep exact on lg/xl, scale below lg) */}
          <h2 className="mt-4 whitespace-pre-line font-serif font-medium leading-[1.03] tracking-[-0.02em] text-[#1A1A1A] text-[34px] sm:text-[44px] lg:text-14">
            Thousands of campaigns{"\n"}launched to date
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-[16px] sm:text-4.5 lg:text-5 font-normal leading-[1.45] text-[#525252]">
            with 60% lower CPC than Linkedin Ads*
          </p>

          {/* CTAs (stack on mobile, keep same on lg) */}
          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              href="#"
              className={["first-btn px-7 py-3", "text-[16px] font-semibold", "w-full sm:w-auto"].join(" ")}
            >
              Get access
              <Icon icon="ep:right" className="ms-2 h-5 w-5" color="#ffffff" />
            </Link>

            <Link
              href="#"
              className={[
                "inline-flex items-center justify-center",
                "rounded-lg px-7 py-3",
                "border border-[#E5E5E5] bg-[#fafaf7] hover:bg-[#f5f5ee]",
                "text-[16px] font-semibold text-[#111111]",
                "shadow-[0_1px_0_rgba(0,0,0,0.03)]",
                "active:translate-y-",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
                "w-full sm:w-auto",
              ].join(" ")}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- small helpers ----------------- */

function Sticker({
  children,
  rotate,
  variant,
  style,
}: {
  children: React.ReactNode;
  rotate: number;
  variant: "white" | "black" | "blue" | "orange";
  style: React.CSSProperties;
}) {
  const base = "absolute grid place-items-center w-[52px] h-[52px] rounded-xl";

  const skin =
    variant === "black"
      ? "bg-[#0F0F10] border border-black/80"
      : variant === "blue"
        ? "bg-[#1566FF] border border-black/70"
        : variant === "orange"
          ? "bg-[#FF7A59] border border-black/60"
          : "bg-white border border-black/40";

  return (
    <div
      aria-hidden="true"
      className={[base, skin, "shadow-[0_5px_0_rgba(0,0,0,0.15)]"].join(" ")}
      style={{ ...style, transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

function Doodle({ style }: { style: React.CSSProperties }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute"
      style={style}
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
    >
      <g stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20c2-6 14-6 16 0" />
        <path d="M19 34c3 4 13 4 16 0" />
        <path d="M13 28c-2 1-3 3-2 5 1 2 3 2 5 1" />
        <path d="M41 28c2 1 3 3 2 5-1 2-3 2-5 1" />
        <path d="M18 38c-1 4-3 6-7 7" />
        <path d="M34 38c1 4 3 6 7 7" />
        <path d="M10 16l4 2" />
        <path d="M22 26h0M30 26h0" />
      </g>
    </svg>
  );
}

function DoodleRight({ style }: { style: React.CSSProperties }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute"
      style={style}
      width="52"
      height="52"
      viewBox="0 0 54 54"
      fill="none"
    >
      <g stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 22c4-5 18-5 22 2" />
        <path d="M18 36c5 4 15 3 18-2" />
        <path d="M18 31c6 0 12 6 18 8" />
        <path d="M14 40c2 1 4 3 5 6" />
        <path d="M40 40c-2 1-4 3-5 6" />
        <path d="M20 27h0M30 27h0" />
      </g>
    </svg>
  );
}
