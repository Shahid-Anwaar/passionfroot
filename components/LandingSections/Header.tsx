// components/Header.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Inter } from "next/font/google";
import { MENUS } from "@/data/data";
import { MegaMenuConf } from "@/data/types";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Header() {
  const [openKey, setOpenKey] = useState<null | "brands" | "creators">(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const brands = useMemo(() => MENUS.find((m) => m.key === "brands")!, []);
  const creators = useMemo(() => MENUS.find((m) => m.key === "creators")!, []);

  // close on outside click
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!openKey) return;
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target as Node)) setOpenKey(null);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [openKey]);

  // close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`${inter.className} fixed top-0 z-30 w-full`}>
      <div
        ref={headerRef}
        className="mx-auto max-w-350 px-2 sm:px-4 pt-3 pb-3"
      >
        <div className="relative">
          {/* ✅ SINGLE WRAPPER PILL (up to xl) */}
          <div className="xl:hidden w-full rounded-2xl border border-black/10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              {/* Left side: Logo + Tabs */}
              <div className="flex flex-wrap items-center gap-2 px-3 py-2">
                <Link
                  href="/"
                  className="text-6 font-serif font-stretch-ultra-condensed font-extrabold tracking-tighter text-[#fc0707]"
                >
                  <Image
                    src="/logo.svg"
                    alt="passionfroot"
                    width={121}
                    height={30}
                    priority
                  />
                </Link>

                <div className="hidden sm:block h-5 w-px bg-black/15" />

                <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
                  <TopTab
                    label="For Brands"
                    active={openKey === "brands"}
                    onClick={() =>
                      setOpenKey((p) => (p === "brands" ? null : "brands"))
                    }
                  />
                  <TopTab
                    label="For Creators"
                    active={openKey === "creators"}
                    onClick={() =>
                      setOpenKey((p) => (p === "creators" ? null : "creators"))
                    }
                  />
                </nav>
              </div>

              {/* Right side: Links + CTA */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-black/10 px-3 py-2 md:border-t-0 md:justify-end md:gap-3">
                <nav className="flex flex-wrap items-center gap-1 sm:gap-2 md:flex-nowrap">
                  <Link
                    href="/pricing"
                    className="text-[14px] sm:text-[15px] font-medium text-[#202020] rounded-lg px-2 sm:px-3 py-2 hover:bg-[#F7F0E5] whitespace-nowrap"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/about"
                    className="text-[14px] sm:text-[15px] font-medium text-[#202020] rounded-lg px-2 sm:px-3 py-2 hover:bg-[#F7F0E5] whitespace-nowrap"
                  >
                    About
                  </Link>
                  <div className="hidden sm:block h-5 w-px bg-black/15" />
                  <Link
                    href="/stories"
                    className="inline-flex items-center gap-1.5 text-[14px] sm:text-[15px] font-medium rounded-lg px-2 sm:px-3 py-2 text-[#202020] hover:bg-[#F7F0E5] whitespace-nowrap">
                    Stories
                  </Link>
                </nav>
                <Link
                  href="#"
                  className="relative px-4 py-2 text-[14px] sm:text-[15px] first-btn shrink-0"
                >
                  <span className="absolute inset-x-0 top-0 h-px bg-white/25" />
                  Talk to us
                  <Icon icon="ep:right" className="text-4.5 text-white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex items-start justify-between">
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
                <Link
                  href="/"
                  className="text-6 font-serif font-stretch-ultra-condensed font-extrabold tracking-tighter text-[#fc0707]"
                >
                  <Image
                    src="/logo.svg"
                    alt="passionfroot"
                    width={121}
                    height={30}
                    priority
                  />
                </Link>
                <div className="h-5 w-px bg-black/15" />
                <nav className="flex items-center gap-2">
                  <TopTab
                    label="For Brands"
                    active={openKey === "brands"}
                    onClick={() =>
                      setOpenKey((p) => (p === "brands" ? null : "brands"))
                    }
                  />
                  <TopTab
                    label="For Creators"
                    active={openKey === "creators"}
                    onClick={() =>
                      setOpenKey((p) => (p === "creators" ? null : "creators"))
                    }
                  />
                </nav>
              </div>
              {openKey === "brands" && (
                <MegaPanel
                  isFirst={true}
                  config={brands}
                  onClose={() => setOpenKey(null)}
                />
              )}
              {openKey === "creators" && (
                <MegaPanel
                  isFirst={false}
                  config={creators}
                  onClose={() => setOpenKey(null)}
                />
              )}
            </div>
            <div className="inline-flex items-center rounded-2xl border border-black/10 bg-white px-5 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
              <nav className="flex items-center gap-2">
                <Link
                  href="/pricing"
                  className="text-[16px] font-medium text-[#202020] rounded-lg px-3 py-2 hover:bg-[#F7F0E5]"
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="text-[16px] font-medium text-[#202020] rounded-lg px-3 py-2 hover:bg-[#F7F0E5]"
                >
                  About
                </Link>
                <div className="h-5 w-px bg-black/15" />
                <Link
                  href="/stories"
                  className="inline-flex items-center gap-1.5 text-[16px] font-medium rounded-lg px-3 py-2 text-[#202020] hover:bg-[#F7F0E5]">
                  Stories
                </Link>

              </nav>

              <Link
                href="#"
                className="relative ml-5 px-4 py-2 text-[16px] first-btn"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-white/25" />
                Talk to us
                <Icon icon="ep:right" className="text-5 text-white" />
              </Link>
            </div>
          </div>

          {/* ✅ Mega Menu for < xl (full width) */}
          {openKey === "brands" && (
            <div className="xl:hidden mt-3">
              <MegaPanelMobile
                isFirst={true}
                config={brands}
                onClose={() => setOpenKey(null)}
              />
            </div>
          )}
          {openKey === "creators" && (
            <div className="xl:hidden mt-3">
              <MegaPanelMobile
                isFirst={false}
                config={creators}
                onClose={() => setOpenKey(null)}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function TopTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onMouseEnter={onClick}
      onClick={onClick}
      className={[
        "inline-flex items-center gap-1.5",
        "rounded-lg px-2 sm:px-3 py-2 leading-[1.3]",
        "text-[.85rem] sm:text-[.95rem] font-medium whitespace-nowrap",
        active ? "bg-[#F7F0E5] text-[#111]" : "text-[#202020] hover:bg-[#F7F0E5]",
      ].join(" ")}
    >
      {label}
      <Icon
        icon="mdi:chevron-down"
        className={[
          "text-4.5 sm:text-6 text-[#6B6B6B] transition",
          active ? "rotate-180" : "",
        ].join(" ")}
      />
    </button>
  );
}

/** Desktop panel */
function MegaPanel({
  config,
  isFirst = false,
  onClose,
}: {
  config: MegaMenuConf;
  onClose: () => void;
  isFirst: boolean;
}) {
  return (
    <div className="absolute left-0 top-17.5 z-30 w-[min(840px,calc(100vw-16px))]">
      <div className="rounded-2xl border border-black/10 bg-white shadow-[0_22px_44px_rgba(0,0,0,0.14)]">
        <div className="grid grid-cols-[410px_340px] gap-8 p-6">
          {/* LEFT LIST */}
          <div>
            <div className="space-y-2">
              {config.mainItems.map((it) => (
                <Link key={it.title} href={it.href} className="flex gap-1 rounded-lg hover:bg-[#F7F0E5] p-2">
                  <div className="mt-0.5 h-6 w-6 text-[#4A4A4A]">
                    <Icon icon={it.icon} className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-[16px] font-semibold text-[#111]">
                      {it.title}
                    </div>
                    {it.description && (
                      <div className="mt-1 max-w-130 text-[13px] leading-[1.55] text-black/70">
                        {it.description}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-4">
              <div className="text-[11px] font-medium tracking-[0.12em] text-black/40">
                RESOURCES
              </div>
              <div className="h-px flex-1 bg-black/10" />
            </div>

            <div className="mt-3 space-y-1">
              {config.resourceItems.map((it) => (
                <Link
                  key={it.title}
                  href={it.href}
                  className="flex items-center gap-1 p-2 rounded-lg hover:bg-[#F7F0E5]"
                >
                  <div className="h-6 w-6 text-[#4A4A4A]">
                    <Icon icon={it.icon} className="h-5 w-5" />
                  </div>
                  <div className="text-[15px] font-semibold text-[#111]">
                    {it.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT PREVIEW CARD */}
          <div className="flex justify-end">
            <div
              className="relative h-95 w-85 overflow-hidden rounded-[14px] border border-black/10 shadow-[0_18px_28px_rgba(0,0,0,0.12)]"
              style={{
                background: !isFirst
                  ? "linear-gradient(180deg,#C08BFF 0%, #B378FF 70%, #C08BFF 100%)"
                  : "linear-gradient(180deg,#FFB36B 0%, #FF9F45 70%, #FFB36B 100%)",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0)_55%)]" />
              <Image
                src={config.previewImage}
                alt=""
                fill
                priority
                sizes="380px"
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>

        <div className="h-2" />
      </div>
    </div>
  );
}

/** Mobile/tablet panel: full width, single column, scroll-safe */
function MegaPanelMobile({
  config,
  isFirst = false,
  onClose,
}: {
  config: MegaMenuConf;
  onClose: () => void;
  isFirst: boolean;
}) {
  return (
    <div className="w-full">
      <div className="rounded-2xl border border-black/10 bg-white shadow-[0_22px_44px_rgba(0,0,0,0.14)] overflow-hidden">
        <div className="p-4 max-h-[70vh] overflow-auto">
          <div className="space-y-6">
            {config.mainItems.map((it) => (
              <Link key={it.title} href={it.href} className="flex gap-3">
                <div className="mt-0.5 h-6 w-6 text-[#4A4A4A]">
                  <Icon icon={it.icon} className="h-5 w-5" />
                </div>

                <div>
                  <div className="text-[16px] font-semibold text-[#111]">
                    {it.title}
                  </div>
                  {it.description && (
                    <div className="mt-1 text-[13px] leading-[1.55] text-black/70">
                      {it.description}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="text-[11px] font-medium tracking-[0.12em] text-black/40">
              RESOURCES
            </div>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          <div className="mt-4 space-y-5">
            {config.resourceItems.map((it) => (
              <Link key={it.title} href={it.href} className="flex items-center gap-3">
                <div className="h-6 w-6 text-[#4A4A4A]">
                  <Icon icon={it.icon} className="h-5 w-5" />
                </div>
                <div className="text-[15px] font-semibold text-[#111]">
                  {it.title}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <div
              className="relative h-55 w-full overflow-hidden rounded-[14px] border border-black/10 shadow-[0_18px_28px_rgba(0,0,0,0.12)]"
              style={{
                background: !isFirst
                  ? "linear-gradient(180deg,#C08BFF 0%, #B378FF 70%, #C08BFF 100%)"
                  : "linear-gradient(180deg,#FFB36B 0%, #FF9F45 70%, #FFB36B 100%)",
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0)_55%)]" />
              <Image
                src={config.previewImage}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>

        <div className="h-2" />
      </div>
    </div>
  );
}
