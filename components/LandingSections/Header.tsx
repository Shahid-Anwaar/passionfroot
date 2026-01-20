// components/Header.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

type MenuItem = {
  title: string;
  description?: string;
  href: string;
  icon: string; // iconify
};

type MegaMenuConfig = {
  key: "brands" | "creators";
  label: string;
  previewBg: string; // css gradient
  previewImage: string; // remote image
  mainItems: MenuItem[];
  resourceItems: MenuItem[];
};

const LOGO_SVG =
  "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/63f3e4ee2d9d5a4d5e1a3f75_passionfroot.svg";

const MENUS: MegaMenuConfig[] = [
  {
    key: "brands",
    label: "For Brands",
    previewBg:
      "linear-gradient(180deg,#FFB36B 0%, #FF9F45 70%, #FFB36B 100%)",
    previewImage:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f52812e168c74898afd362_image%20(48)%20(1).avif",
    mainItems: [
      {
        title: "Features",
        description:
          "Find the right creators on all platforms, book & collaborate, pay quickly & safely - all in one place.",
        href: "#",
        icon: "tabler:sparkles",
      },
      {
        title: "Customers",
        description:
          "Discover how forward-thinking companies use Passionfroot to reach their growth goals.",
        href: "#",
        icon: "tabler:users",
      },
    ],
    resourceItems: [
      { title: "Blog", href: "#", icon: "tabler:book-2" },
      {
        title: "Influencer Pricing Guide",
        href: "#",
        icon: "tabler:file-text",
      },
    ],
  },
  {
    key: "creators",
    label: "For Creators",
    previewBg: "linear-gradient(180deg,#C08BFF 0%, #B378FF 70%, #C08BFF 100%)",
    previewImage:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdbe5ac9f5bee12bbe_image%2080.avif",
    mainItems: [
      {
        title: "Features",
        description:
          "Explore the all-in-one tool to help creators do more brand deals - easier, and faster.",
        href: "#",
        icon: "tabler:sparkles",
      },
      {
        title: "Customers",
        description:
          "Learn how other creators are leveraging Passionfroot to monetize their content with brand partnerships.",
        href: "#",
        icon: "tabler:users",
      },
      {
        title: "Pricing",
        description:
          "Designed for every stage of your journey. Start today for free.",
        href: "#",
        icon: "tabler:tag",
      },
    ],
    resourceItems: [
      { title: "Creator Gallery", href: "#", icon: "tabler:photo" },
      { title: "Blog", href: "#", icon: "tabler:book-2" },
      // { title: "Podcasts", href: "#", icon: "tabler:microphone" },
      // {
      //   title: "Sponsorship Pricing Guide",
      //   href: "#",
      //   icon: "tabler:file-text",
      // },
    ],
  },
];

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
    <header className={`${inter.className} fixed top-0 z-[200] w-full `}>
      <div ref={headerRef} className="mx-auto max-w-[1400px] px-2 pt-3 pb-3">
        <div className="relative flex items-start justify-between">
          {/* Left pill */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
              {/* Logo */}
              <Link
                href="/"
                className="text-[24px] font-serif font-stretch-ultra-condensed font-extrabold tracking-tighter text-[#fc0707]"
              >
                <Image
                  src="/logo.svg"
                  alt="passionfroot"
                  width={121}
                  height={30}
                  priority
                />
              </Link>

              {/* divider like screenshot */}
              <div className="h-5 w-px bg-black/15" />

              {/* tabs */}
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

            {/* Mega dropdown anchored under LEFT pill */}
            {openKey === "brands" && (
              // <MegaPanel config={brands} onClose={() => setOpenKey(null)} />
              <MegaPanel isFirst={true} config={creators} onClose={() => setOpenKey(null)} />
            )}
            {openKey === "creators" && (
              <MegaPanel isFirst={false} config={creators} onClose={() => setOpenKey(null)} />
            )}
          </div>

          {/* Right pill */}
          <div className="inline-flex items-center rounded-2xl border border-black/10 bg-white px-5 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
            <nav className="flex items-center gap-2">
              <Link href="#" className="text-[16px] font-medium text-[#202020] rounded-lg px-3 py-2 hover:bg-[#F7F0E5]">
                Pricing
              </Link>

              <Link href="#" className="text-[16px] font-medium text-[#202020] rounded-lg px-3 py-2 hover:bg-[#F7F0E5]">
                About
              </Link>
              {/* <Link href="#" className="text-[13px] font-medium text-[#202020]">
                Stories
              </Link> */}

              {/* <div className="mx-1 h-4 w-px bg-black/15" /> */}
              <div className="h-5 w-px bg-black/15" />

              <button className="inline-flex items-center gap-1.5 text-[16px] font-medium rounded-lg px-3 py-2 text-[#202020] hover:bg-[#F7F0E5]">
                Stories
                {/* <Icon icon="mdi:chevron-down" className="text-[16px] text-[#6B6B6B]" /> */}
              </button>
            </nav>

            <Link
              href="#"
              className="relative ml-5 px-4 py-2 text-[16px] first-btn"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-white/25" />
              Talk to us
              <Icon icon="ep:right" className="text-[20px] text-white" />
            </Link>
          </div>
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
      // onClick={onClick}
      className={[
        "inline-flex items-center gap-1.5",
        "rounded-lg px-3 py-2 leading-[1.3]",
        "text-[.95rem] font-medium",
        active ? "bg-[#F7F0E5] text-[#111]" : "text-[#202020] hover:bg-[#F7F0E5]",
      ].join(" ")}
    >
      {label}
      <Icon
        icon="mdi:chevron-down"
        className={[
          "text-[24px] text-[#6B6B6B] transition",
          active ? "rotate-180" : "",
        ].join(" ")}
      />
    </button>
  );
}

function MegaPanel({
  config,
  isFirst = false,
  onClose,
}: {
  config: MegaMenuConfig;
  onClose: () => void;
  isFirst: boolean;
}) {
  return (
    <div className="absolute left-0 top-[70px] z-[210] w-[980px]">
      <div className="rounded-2xl border border-black/10 bg-white shadow-[0_22px_44px_rgba(0,0,0,0.14)]">
        <div className="grid grid-cols-[1fr_360px] gap-8 p-6">
          {/* LEFT LIST */}
          <div>
            <div className="space-y-7">
              {config.mainItems.map((it) => (
                <Link key={it.title} href={it.href} className="flex gap-3">
                  <div className="mt-[2px] h-6 w-6 text-[#4A4A4A]">
                    <Icon icon={it.icon} className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-[16px] font-semibold text-[#111]">
                      {it.title}
                    </div>
                    {it.description && (
                      <div className="mt-1 max-w-[520px] text-[13px] leading-[1.55] text-black/70">
                        {it.description}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* RESOURCES row like screenshot */}
            <div className="mt-7 flex items-center gap-4">
              <div className="text-[11px] font-medium tracking-[0.12em] text-black/40">
                RESOURCES
              </div>
              <div className="h-px flex-1 bg-black/10" />
            </div>

            <div className="mt-5 space-y-6">
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
          </div>

          {/* RIGHT PREVIEW CARD */}
          <div className="flex justify-end">
            <div
              className="relative h-[380px] w-[340px] overflow-hidden rounded-[14px] border border-black/10 shadow-[0_18px_28px_rgba(0,0,0,0.12)]"
              style={{ background: !isFirst ? "linear-gradient(180deg,#C08BFF 0%, #B378FF 70%, #C08BFF 100%)" : "linear-gradient(180deg,#FFB36B 0%, #FF9F45 70%, #FFB36B 100%)" }}
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

        {/* click-away bottom padding */}
        <div className="h-2" />
      </div>
    </div>
  );
}
