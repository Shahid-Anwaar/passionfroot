"use client";

import { BlogBlock } from "@/data/types";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function slugify(text: string) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}

function renderBlock(block: BlogBlock, idx: number) {
    switch (block.type) {
        case "h2":
            return (
                <h2
                    key={idx}
                    id={slugify((block as any).text)}
                    className="mt-10 scroll-mt-28 text-[28px] font-bold leading-[1.12] text-neutral-900 md:mt-12 md:text-[34px]"
                >
                    {(block as any).text}
                </h2>
            );

        case "h3":
            return (
                <h3
                    key={idx}
                    id={slugify((block as any).text)}
                    className="mt-8 scroll-mt-28 text-[20px] font-bold leading-[1.18] text-neutral-900 md:mt-10 md:text-[24px]"
                >
                    {(block as any).text}
                </h3>
            );

        case "p":
            return (
                <p
                    key={idx}
                    className="mt-4 text-[16px] leading-[30px] text-neutral-800 md:text-[17px] md:leading-[32px]"
                >
                    {(block as any).text}
                </p>
            );

        case "bullets":
            return (
                <ul
                    key={idx}
                    className="mt-4 list-decimal space-y-2 pl-5 text-[16px] leading-[30px] text-neutral-800 md:text-[17px] md:leading-[32px]"
                >
                    {(block as any).items.map((it: string, i: number) => (
                        <li key={i} className="pl-1">
                            {it}
                        </li>
                    ))}
                </ul>
            );

        case "callout":
            return (
                <div
                    key={idx}
                    className="mt-8 rounded-2xl border border-neutral-900/10 bg-neutral-50 p-6"
                >
                    {(block as any).title ? (
                        <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-neutral-700">
                            {(block as any).title}
                        </div>
                    ) : null}
                    <p className="mt-3 text-[16px] leading-[30px] text-neutral-800 md:text-[17px] md:leading-[32px]">
                        {(block as any).text}
                    </p>
                </div>
            );

        case "image":
            return (
                <figure key={idx} className="mt-8">
                    <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                        <div className="relative aspect-video w-full">
                            <Image
                                src={(block as any).src}
                                alt={(block as any).alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    {(block as any).caption ? (
                        <figcaption className="mt-2 text-[13px] text-neutral-600">
                            {(block as any).caption}
                        </figcaption>
                    ) : null}
                </figure>
            );

        case "divider":
            return <div key={idx} className="my-10 h-px w-full bg-neutral-900/10" />;

        default:
            return null;
    }
}

type Breadcrumb = { label: string; href?: string };

export default function HelpCenterArticle({
    // header
    brandLabel = "Passionfroot Help Center",
    languageLabel = "English",
    onSearch,
    // breadcrumb
    breadcrumbs = [
        { label: "All Collections", href: "/" },
        // { label: "Other Resources", href: "/resources" },
        { label: "Privacy Policy" },
    ],
    // article meta
    title = "Privacy Policy",
    authorName = "Ludwig Hedlund",
    authorAvatar =
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    updatedLabel = "Updated this week",
    // content
    blocks = [],
}: {
    brandLabel?: string;
    languageLabel?: string;
    onSearch?: (q: string) => void;

    breadcrumbs?: Breadcrumb[];

    title?: string;
    authorName?: string;
    authorAvatar?: string;
    updatedLabel?: string;

    blocks?: BlogBlock[];
}) {
    const toc = useMemo(
        () =>
            (blocks || [])
                .filter((b) => b.type === "h2")
                .map((b) => ({
                    text: (b as any).text as string,
                    id: slugify((b as any).text as string),
                })),
        [blocks]
    );

    const [activeId, setActiveId] = useState<string>(toc?.[0]?.id ?? "");
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (!toc.length) return;

        const handler = () => {
            const topOffset = 140;
            let current = toc[0]?.id;

            for (const item of toc) {
                const el = document.getElementById(item.id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top - topOffset <= 0) current = item.id;
            }
            setActiveId(current || "");
        };

        handler();
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, [toc]);

    return (
        <div className="bg-white">
            {/* TOP ORANGE HEADER (like screenshot) */}
            <div className="relative bg-[#FF9966] ">
                {/* doodle strip feel */}
                <div className="pointer-events-none absolute inset-0 opacity-25">
                    <div className="mx-auto max-w-[1400px] px-6">
                        <div className="relative h-[140px]">
                            <Icon icon="mdi:run-fast" className="absolute left-[58%] top-4 h-14 w-14 -rotate-6" />
                            <Icon icon="mdi:shopping-outline" className="absolute left-[66%] top-0 h-12 w-12 rotate-6" />
                            <Icon icon="mdi:hand-heart-outline" className="absolute left-[74%] top-6 h-12 w-12 -rotate-6" />
                            <Icon icon="mdi:gift-outline" className="absolute left-[82%] top-2 h-12 w-12 rotate-6" />
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto max-w-[700px] px-6 pt-24 pb-10">
                    {/* top row */}
                    <div className="flex items-center justify-between">
                        <div className="text-[14px] font-semibold text-white/90">
                            {brandLabel}
                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-[13px] font-medium text-white/95 backdrop-blur hover:bg-white/20"
                        >
                            <Icon icon="mdi:translate" className="h-4 w-4" />
                            {languageLabel}
                            <Icon icon="mdi:chevron-down" className="h-4 w-4" />
                        </button>
                    </div>

                    {/* search bar */}
                    <div className="mt-8 flex justify-center">
                        <div className="relative w-full">
                            <Icon
                                icon="mdi:magnify"
                                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/80"
                            />
                            <input
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    onSearch?.(e.target.value);
                                }}
                                placeholder="Search for articles..."
                                className="
                  w-full rounded-xl bg-white/15 px-12 py-4
                  text-[16px] text-white placeholder:text-white/80
                  outline-none ring-1 ring-white/15
                  focus:bg-white/20 focus:ring-white/25
                "
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* BODY */}
            <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-10">
                {/* breadcrumbs */}
                <div className="text-[13px] text-neutral-500">
                    {breadcrumbs.map((b, i) => (
                        <span key={`${b.label}-${i}`}>
                            {b.href ? (
                                <Link href={b.href} className="hover:text-neutral-800 hover:underline">
                                    {b.label}
                                </Link>
                            ) : (
                                <span className="text-neutral-500">{b.label}</span>
                            )}
                            {i < breadcrumbs.length - 1 ? (
                                <span className="mx-2 text-neutral-400">›</span>
                            ) : null}
                        </span>
                    ))}
                </div>

                {/* main grid like help center (content + toc) */}
                <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
                    {/* left */}
                    <main className="min-w-0">
                        <h1 className="text-[40px] font-extrabold leading-[1.05] text-neutral-900 md:text-[52px]">
                            {title}
                        </h1>

                        {/* author row */}
                        <div className="mt-4 flex items-center gap-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-neutral-200">
                                <Image src={authorAvatar} alt={authorName} fill className="object-cover" />
                            </div>

                            <div className="text-[13px] leading-tight text-neutral-600">
                                <div>
                                    Written by <span className="font-medium text-neutral-800">{authorName}</span>
                                </div>
                                <div>{updatedLabel}</div>
                            </div>
                        </div>

                        {/* content */}
                        <article className="mt-10">
                            {(blocks || []).map((b, idx) => renderBlock(b, idx))}
                        </article>
                    </main>

                    {/* right TOC */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24">
                            <div className="rounded-xl border border-neutral-900/10 bg-white">
                                <div className="px-5 py-4 text-[13px] font-semibold text-neutral-700">
                                    {/* (no heading in screenshot, but list starts immediately — keep subtle) */}
                                </div>

                                <div className="max-h-[620px] overflow-auto pb-4">
                                    {toc.map((t) => {
                                        const isActive = t.id === activeId;
                                        return (
                                            <a
                                                key={t.id}
                                                href={`#${t.id}`}
                                                className={[
                                                    "relative block px-6 py-3 text-[14px] leading-5",
                                                    isActive
                                                        ? "text-neutral-900"
                                                        : "text-neutral-600 hover:text-neutral-900",
                                                ].join(" ")}
                                            >
                                                {/* left active bar like screenshot */}
                                                <span
                                                    className={[
                                                        "absolute left-0 top-0 h-full w-[2px]",
                                                        isActive ? "bg-neutral-800" : "bg-transparent",
                                                    ].join(" ")}
                                                />
                                                {t.text}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* floating chat bubble mock (optional like screenshot) */}
                <button
                    type="button"
                    className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] ring-1 ring-neutral-900/10"
                    aria-label="Chat"
                >
                    <Icon icon="mdi:message-outline" className="h-6 w-6 text-neutral-800" />
                </button>
            </div>
        </div>
    );
}
