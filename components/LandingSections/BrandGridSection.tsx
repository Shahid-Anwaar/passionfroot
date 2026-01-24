// components/BrandWallSection.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import type { Tile } from "@/data/types";
import { tiles } from "@/data/data";

function PlusDot({ isDark }: { isDark?: boolean }) {
    return (
        <span
            className={`absolute bottom-3 right-3 inline-flex h-6 w-6 items-center justify-center rounded-full ${isDark
                ? "bg-gray-900 shadow-[0_10px_18px_rgba(0,0,0,0.18)] ring-1 ring-black/10"
                : "bg-gray-100 shadow-[0_10px_18px_rgba(0,0,0,0.18)] ring-1 ring-white/10"
                }`}
        >
            <Icon icon="mdi:plus" className={`text-[16px] ${isDark ? "text-white" : "text-gray-900"}`} />
        </span>
    );
}

function StatItem({ s, dark = false }: { s: any; dark?: boolean }) {
    return (
        <div className={`flex items-center gap-2 text-[11px] font-semibold ${dark ? "text-white/80" : "text-black/70"}`}>
            {s.icon ? <Icon icon={s.icon} className={`text-[14px] ${dark ? "text-white/70" : "text-black/60"}`} /> : null}
            <div className={`uppercase tracking-wide ${dark ? "text-white/55" : "text-black/45"}`}>{s.label}</div>
            <div className={`${dark ? "text-white/90" : "text-black/80"}`}>{s.value}</div>
        </div>
    );
}

function DetailModal({
    open,
    tile,
    onClose,
}: {
    open: boolean;
    tile: Tile | null;
    onClose: () => void;
}) {
    if (!open || !tile || tile.type === "logo") return null;

    const quoteText = tile.quote ?? "";
    const personName = tile.person?.name ?? "";
    const personTitle = tile.person?.title ?? "";
    const personCompany = tile.person?.company ?? tile.company ?? "";

    const leftImg = (tile as any).leftImg as string | undefined;
    const rightBg = (tile.bg ?? "bg-white").replace("!", "");

    const isDark =
        rightBg.includes("#141414") ||
        rightBg.includes("black") ||
        rightBg.includes("slate") ||
        rightBg.includes("zinc");

    return (
        <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <button
                type="button"
                onClick={onClose}
                className="absolute inset-0 bg-black/55"
                aria-label="Close modal"
            />

            {/* ✅ Responsive modal wrapper:
          - centered with padding
          - scrolls internally if content overflows
      */}
            <div className="fixed inset-0 top-32 sm:top-24 flex items-start justify-center px-3 sm:px-6 py-6 sm:py-10 ">
                <div className="relative w-full max-w-[1120px]">
                    <div className="relative  overflow-y-auto max-h-[calc(100vh-140px)] rounded-[18px] shadow-[0_30px_80px_rgba(0,0,0,0.45)] bg-white">
                        {/* Close */}
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute right-4 top-4 z-30 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/70 ring-1 ring-white/20 hover:bg-black/80"
                            aria-label="Close"
                        >
                            <Icon icon="mdi:close" className="text-[18px] text-white" />
                        </button>

                        {/* Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* LEFT */}
                            <div className="relative bg-white">
                                {/* ✅ make image panel responsive:
                    - mobile: fixed-ish height
                    - desktop: match right panel height
                */}
                                <div className="relative h-[240px] sm:h-[320px] md:h-full md:min-h-[500px]">
                                    {tile.img ? (
                                        <>
                                            <Image
                                                src={tile.type === "quote" && leftImg ? leftImg : tile.img}
                                                alt={personName || tile.company || "tile"}
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                            <div
                                                className={`absolute inset-0 ${isDark
                                                    ? "bg-gradient-to-t from-black/45 via-black/0 to-black/0"
                                                    : "bg-gradient-to-t from-black/30 via-black/0 to-black/0"
                                                    }`}
                                            />
                                            <div className="pointer-events-none absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                                                <div
                                                    className={[
                                                        "inline-flex items-center gap-2 rounded-[12px]",
                                                        "px-3 py-2 sm:px-4 sm:py-2",
                                                        "backdrop-blur-md ring-1",
                                                        isDark ? "bg-white/10 ring-white/15" : "bg-white/25 ring-black/10",
                                                    ].join(" ")}
                                                >
                                                    {tile.companyIcon ? (
                                                        <Icon
                                                            icon={tile.companyIcon}
                                                            className={`${isDark ? "text-white" : "text-black"} text-[18px] sm:text-[20px]`}
                                                        />
                                                    ) : null}
                                                    <div className={`${isDark ? "text-white" : "text-black"} text-[16px] sm:text-[18px] font-bold`}>
                                                        {tile.company}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 bg-white" />
                                    )}
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div
                                className={[
                                    "relative",
                                    rightBg,
                                    // ✅ desktop height feel like Passionfroot, mobile grows naturally
                                    "md:min-h-[500px] flex flex-col h-[100%]",
                                    // ✅ padding responsive
                                    "px-3 py-5 sm:px-4 sm:py-7 md:px-5 md:py-6",
                                    // ✅ give space for bottom bar on small screens too
                                    "",
                                ].join(" ")}
                            >
                               

                                {/* Quote text */}
                                <p
                                    className={[
                                        "mt-4 mb-3",
                                        "max-w-[560px]",
                                        "font-medium",
                                        "leading-[1.2] sm:leading-[1.3] md:leading-[1.3]",
                                        "text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px]",
                                        isDark ? "text-white/85" : "text-black/80",
                                        // ✅ clamp only on mobile so layout stays clean; desktop shows full
                                        "line-clamp-7 sm:line-clamp-8 md:line-clamp-none",
                                    ].join(" ")}
                                >
                                    “{quoteText}"
                                </p>

                                {/* Bottom details (always pinned inside RIGHT, so it never goes off-screen) */}
                                <div className="mt-auto">
                                    <div className="flex items-end justify-between gap-6">
                                        <div className="min-w-0">
                                            <div
                                                className={[
                                                    "font-semibold text-nowrap",
                                                    "text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px]",
                                                    isDark ? "text-white/95" : "text-black/90",
                                                ].join(" ")}
                                            >
                                                {personName}
                                            </div>

                                            <div
                                                className={[
                                                    "font-medium",
                                                    "text-[12px] sm:text-[13px] md:text-[14px]",
                                                    isDark ? "text-white/65" : "text-black/55",
                                                ].join(" ")}
                                            >
                                                {personTitle}
                                                {personCompany ? ` · ${personCompany}` : ""}
                                            </div>
                                        </div>

                                        {/* Stats (desktop) */}
                                        <div className="hidden sm:flex items-center gap-8">
                                            {(tile.stats ?? []).slice(0, 2).map((s: any, idx: number) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    {s.icon ? (
                                                        <Icon
                                                            icon={s.icon}
                                                            className={isDark ? "text-white/80 text-[18px]" : "text-black/60 text-[18px]"}
                                                        />
                                                    ) : null}
                                                    <div className="flex flex-col leading-tight">
                                                        <span
                                                            className={[
                                                                "uppercase tracking-wide font-semibold",
                                                                "text-[10px] md:text-[11px]",
                                                                isDark ? "text-white/55" : "text-black/45",
                                                            ].join(" ")}
                                                        >
                                                            {s.label}
                                                        </span>
                                                        <span
                                                            className={[
                                                                "font-semibold",
                                                                "text-[16px] md:text-[18px]",
                                                                isDark ? "text-white/90" : "text-black/80",
                                                            ].join(" ")}
                                                        >
                                                            {s.value}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats (mobile) */}
                                    {(tile.stats ?? []).length ? (
                                        <div className="mt-4 flex flex-col gap-3 sm:hidden">
                                            {(tile.stats ?? []).slice(0, 2).map((s: any, idx: number) => (
                                                <StatItem key={idx} s={s} dark={isDark} />
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        {/* ✅ Company badge: stays inside modal, responsive sizing */}

                    </div>

                    {/* ✅ little safe space for very small screens */}
                    <div className="h-6 sm:h-0" />
                </div>
            </div>
        </div>
    );
}


function TileCard({ tile, onOpen }: { tile: Tile; onOpen: (t: Tile) => void }) {
    const base =
        "relative overflow-hidden rounded-[12px] border border-black/20 bg-white shadow-[0_12px_26px_rgba(0,0,0,0.08)]";

    // ✅ Responsive tile height (closer to your sample)
    const height = "h-[170px] sm:h-[210px] lg:h-[230px]";

    if (tile.type === "logo") {
        return (
            <div className={`${base} ${height} flex items-center justify-center text-[#141414] ${tile.color} ${tile.colSpan ?? ""}`}>
                <div className="flex items-center gap-2">
                    {tile.icon ? (
                        <Icon icon={tile.icon} style={{ fontSize: tile.iconSize ?? 26 }} />
                    ) : null}
                    {tile.text ? (
                        <span
                            className={
                                tile.text === "Pika"
                                    ? "text-[36px] sm:text-[44px] font-semibold tracking-[-0.02em]"
                                    : "text-[26px] sm:text-[32px] font-semibold tracking-[-0.01em]"
                            }
                        >
                            {tile.text}
                        </span>
                    ) : null}
                </div>
            </div>
        );
    }

    if (tile.type === "photo") {
        return (
            <div
                onClick={() => onOpen(tile)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" ? onOpen(tile) : null)}
                className={`${base} ${height} ${tile.bg ?? ""} ${tile.colSpan ?? ""} w-full`}
            >
                <Image
                    src={tile.img}
                    alt={tile.company}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 240px, 50vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-3 text-[12px] font-semibold text-white drop-shadow">
                    {tile.company}
                </div>
                <PlusDot isDark={false} />
            </div>
        );
    }

    // quote tile (UI unchanged, just responsive fonts)
    return (
        <div
            onClick={() => onOpen(tile)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" ? onOpen(tile) : null)}
            className={`${base} ${height} ${tile.bg} ${tile.colSpan ?? ""} px-4 py-4 sm:px-5 sm:py-4`}
        >
            <div className="font-serif text-[40px] sm:text-[44px] leading-none text-[#141414]">“</div>
            <p className="mt-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold leading-[1.55] text-[#141414]/80 line-clamp-3">
                {tile.quote}
            </p>
            <div className="mt-3 text-[14px] sm:text-[16px] text-[#141414]">{tile.person?.name ?? ""}</div>
            <div className="text-[11px] sm:text-[12px] font-semibold text-[#141414]/70">
                {(tile.person?.title ?? "").trim()}
                {tile.person?.company ? ` · ${tile.person.company}` : ""}
            </div>
            <PlusDot isDark={true} />
        </div>
    );
}

export default function BrandWallSection() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<Tile | null>(null);

    const openTile = (t: Tile) => {
        if (t.type === "logo") return;
        setActive(t);
        setOpen(true);
    };

    const close = () => {
        setOpen(false);
        setActive(null);
    };

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
                <h2 className="text-center font-serif text-[22px] sm:text-[30px] lg:text-[44px] font-semibold leading-[1.15] text-[#141414]">
                    Powering the people building
                    <br />
                    category-defining brands
                </h2>

                {/* ✅ Responsive grid:
           - mobile: 2 cols
           - md: 3 cols (looks better mid screens)
           - lg: 4 cols
        */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                    {tiles.map((t) => (
                        <div key={t.id} className={t.colSpan ?? ""}>
                            <TileCard tile={t} onOpen={openTile} />
                        </div>
                    ))}
                </div>
            </div>

            <DetailModal open={open} tile={active} onClose={close} />
        </section>
    );
}
