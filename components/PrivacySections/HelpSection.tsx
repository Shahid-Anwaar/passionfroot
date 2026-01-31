"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

type PolicyCard = {
  title: string;
  subtitle: string;
  href: string;
  coverColor: string;
  cover: React.ReactNode;
  metaLeft: string; // e.g. "Updated this week"
  metaRight: string; // e.g. "1 author"
};

const cards: PolicyCard[] = [
  {
    title: "Privacy Policy",
    subtitle: "How we process personal data",
    href: "/privacy-policy",
    coverColor: "#FF9966",
    cover: (
      <div className="flex h-full items-center justify-center">
        <div className="text-center text-[26px] font-black leading-[1.05] tracking-[-0.02em] text-black/90">
          Privacy
          <br />
          Policy
        </div>
      </div>
    ),
    metaLeft: "Updated this week",
    metaRight: "View",
  },
  {
    title: "Cookie Policy",
    subtitle: "Cookies & tracking details",
    href: "/cookie-policy",
    coverColor: "#6ED3AE",
    cover: (
      <div className="flex h-full items-center justify-center">
        <div className="text-center text-[26px] font-black leading-[1.05] tracking-[-0.02em] text-black/90">
          Cookie
          <br />
          Policy
        </div>
      </div>
    ),
    metaLeft: "Updated recently",
    metaRight: "View",
  },
  {
    title: "Terms & Conditions",
    subtitle: "Platform terms for users",
    href: "/terms",
    coverColor: "#FFE169",
    cover: (
      <div className="flex h-full items-center justify-center gap-3">
        <Icon icon="mdi:file-document-outline" className="h-8 w-8 text-black/80" />
        <div className="text-left text-[24px] font-black leading-[1.05] tracking-[-0.02em] text-black/90">
          Terms
          <br />& Conditions
        </div>
      </div>
    ),
    metaLeft: "Updated recently",
    metaRight: "View",
  },
];

export default function HelpCenterPoliciesSection() {
  return (
    <section className="bg-white">
      {/* EXACT "hero band" look */}
      <div className="relative overflow-hidden bg-linear-to-b from-[#FF9966] to-white">
        {/* faint doodle-ish background (subtle) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(0,0,0,0.35) 0 1px, transparent 1px), radial-gradient(circle at 70% 40%, rgba(0,0,0,0.35) 0 1px, transparent 1px), radial-gradient(circle at 40% 80%, rgba(0,0,0,0.35) 0 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="mx-auto max-w-[1120px] px-6 pb-10 pt-10 md:px-10 md:pb-14 md:pt-12">
          {/* top bar */}
          <div className="flex items-center justify-between text-white/90">
            <div className="text-[14px] font-semibold">Passionfroot Help Center</div>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full px-2 py-1 text-[14px] font-semibold text-white/90 hover:text-white"
            >
              <Icon icon="mdi:earth" className="h-4 w-4" />
              English
              <Icon icon="mdi:chevron-down" className="h-4 w-4" />
            </button>
          </div>

          {/* title */}
          <h1 className="mt-8 text-[40px] font-extrabold leading-[1.05] text-white md:text-[48px]">
            What can we help you with?
          </h1>

          {/* search */}
          <div className="mt-6">
            <div className="flex h-[56px] items-center gap-3 rounded-[10px] bg-white/30 px-5 backdrop-blur-sm">
              <Icon icon="mdi:magnify" className="h-6 w-6 text-white/95" />
              <input
                placeholder="Search for articles..."
                className="w-full bg-transparent text-[16px] text-white placeholder:text-white/90 outline-none"
              />
            </div>
          </div>

          {/* cards row */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group overflow-hidden rounded-[6px] border border-neutral-200 bg-white shadow-[0_2px_0_rgba(0,0,0,0.04)] transition hover:shadow-[0_4px_18px_rgba(0,0,0,0.10)]"
              >
                {/* top colored banner */}
                <div
                  className="h-[120px]"
                  style={{
                    background: c.coverColor,
                  }}
                >
                  {c.cover}
                </div>

                {/* body */}
                <div className="px-6 pb-5 pt-5 text-center">
                  <div className="text-[14px] font-semibold text-neutral-900">{c.title}</div>
                  <div className="mt-1 text-[14px] text-neutral-700">{c.subtitle}</div>

                  <div className="mt-5 flex items-center justify-center gap-2 text-[13px] text-neutral-500">
                    <span>{c.metaLeft}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 font-medium text-neutral-600">
                      {c.metaRight}
                      <Icon icon="mdi:arrow-right" className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* footer label */}
          <div className="pt-10 text-center text-[18px] text-neutral-500/70">
            Passionfroot Help Center
          </div>
        </div>
      </div>
    </section>
  );
}
