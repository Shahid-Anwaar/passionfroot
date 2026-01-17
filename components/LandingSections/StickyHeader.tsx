// components/StickyHeader.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

type MenuItem = {
  title: string;
  description?: string;
  href: string;
  icon: string;
};

type MegaMenuConfig = {
  key: "brands" | "creators";
  label: string;
  previewBg: string;
  previewImage: string;
  mainItems: MenuItem[];
  resourceItems: MenuItem[];
};

const LOGO =
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
      { title: "Podcasts", href: "#", icon: "tabler:microphone" },
      {
        title: "Sponsorship Pricing Guide",
        href: "#",
        icon: "tabler:file-text",
      },
    ],
  },
];

export default function StickyHeader() {
  const [openKey, setOpenKey] = useState<null | "brands" | "creators">(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const brands = useMemo(() => MENUS.find((m) => m.key === "brands")!, []);
  const creators = useMemo(() => MENUS.find((m) => m.key === "creators")!, []);

  // close on outside click
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!openKey) return;
      const el = rootRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpenKey(null);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [openKey]);

  // close on esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-[200] w-full bg-[#FBF7F0]">
      <div className="mx-auto w-full max-w-[1240px] px-4 pt-4 pb-3">
        <div
          ref={rootRef}
          className={[
            "relative",
            "rounded-[14px] bg-white",
            "ring-1 ring-black/10",
            "shadow-[0_14px_28px_rgba(0,0,0,0.10)]",
          ].join(" ")}
        >
          {/* bar */}
          <div className="flex items-center justify-between px-5 py-[10px]">
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <Link href="#" className="flex items-center">
                <Image
                  src={LOGO}
                  alt="passionfroot"
                  width={140}
                  height={24}
                  priority
                  className="h-[22px] w-auto"
                />
              </Link>

              <div className="h-6 w-px bg-black/10" />

              <div className="flex items-center gap-2">
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
              </div>
            </div>

            {/* RIGHT (pill group like screenshot) */}
            <div
              className={[
                "flex items-center gap-5",
                "rounded-[12px] bg-white",
                "px-4 py-2",
                "ring-1 ring-black/10",
                "shadow-[0_8px_16px_rgba(0,0,0,0.06)]",
              ].join(" ")}
            >
              <Link
                href="#"
                className="text-[14px] font-medium text-black/85 hover:text-black"
              >
                About
              </Link>

              <Link
                href="#"
                className="text-[14px] font-medium text-black/85 hover:text-black"
              >
                Careers
              </Link>

              <div className="h-5 w-px bg-black/10" />

              <button className="inline-flex items-center gap-2 text-[14px] font-medium text-black/85 hover:text-black">
                Login <Icon icon="mdi:chevron-down" className="h-4 w-4" />
              </button>

              <Link
                href="#"
                className={[
                  "inline-flex items-center justify-center gap-2",
                  "rounded-[10px] px-4 py-2",
                  "bg-gradient-to-b from-[#2A2A2A] to-[#111111]",
                  "text-[14px] font-semibold text-white",
                  "shadow-[0_10px_18px_rgba(0,0,0,0.18)]",
                  "active:translate-y-[1px]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
                ].join(" ")}
              >
                Get access <Icon icon="ep:right" className="h-4 w-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Mega panel */}
          {openKey === "brands" && <MegaPanel config={brands} />}
          {openKey === "creators" && <MegaPanel config={creators} />}
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
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2",
        "rounded-[10px] px-4 py-2",
        "text-[14px] font-medium",
        active ? "bg-[#F7F0E5] text-black" : "bg-transparent text-black/85",
        "hover:bg-[#F7F0E5]",
      ].join(" ")}
    >
      {label}
      <Icon
        icon="mdi:chevron-down"
        className={["h-4 w-4 transition", active ? "rotate-180" : ""].join(" ")}
      />
    </button>
  );
}

function MegaPanel({ config }: { config: MegaMenuConfig }) {
  return (
    <div className="absolute left-0 top-[60px] w-full px-5 pb-5">
      <div
        className={[
          "rounded-[14px] bg-white",
          "ring-1 ring-black/10",
          "shadow-[0_22px_44px_rgba(0,0,0,0.14)]",
          "p-6",
          "grid gap-8",
          "md:grid-cols-[1fr_360px]",
        ].join(" ")}
      >
        {/* LEFT CONTENT */}
        <div>
          {/* Main items */}
          <div className="space-y-7">
            {config.mainItems.map((it) => (
              <Link key={it.title} href={it.href} className="flex gap-3">
                <div className="mt-[2px] h-6 w-6 text-black/70">
                  <Icon icon={it.icon} className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-black">
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

          {/* RESOURCES label + line (like screenshot) */}
          <div className="mt-7 flex items-center gap-4">
            <div className="text-[11px] font-medium tracking-[0.12em] text-black/40">
              RESOURCES
            </div>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          {/* Resource items */}
          <div className="mt-5 space-y-6">
            {config.resourceItems.map((it) => (
              <Link key={it.title} href={it.href} className="flex items-center gap-3">
                <div className="h-6 w-6 text-black/70">
                  <Icon icon={it.icon} className="h-5 w-5" />
                </div>
                <div className="text-[15px] font-semibold text-black">
                  {it.title}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT PREVIEW CARD */}
        <div className="flex justify-center md:justify-end">
          <div
            className={[
              "relative h-[380px] w-[340px]",
              "overflow-hidden rounded-[12px]",
              "ring-1 ring-black/10",
              "shadow-[0_18px_28px_rgba(0,0,0,0.12)]",
            ].join(" ")}
            style={{ background: config.previewBg }}
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
    </div>
  );
}
