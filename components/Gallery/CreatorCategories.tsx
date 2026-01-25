// components/CreatorCategorySection.tsx
"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { CategoryTheme, CreatorCategorySectionProps, CreatorItem } from "@/data/types";


function CreatorCard({ c, theme }: { c: CreatorItem; theme: CategoryTheme }) {
    return (
        <div
            className="w-45 flex flex-col rounded-2xl p-3 hover:-translate-y-3 transition-all duration-150 shadow-[0_14px_40px_rgba(0,0,0,0.06)]"
            style={{
                background: `linear-gradient(to bottom, ${theme.cardFrom}, ${theme.cardTo})`,
            }}
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                    <div className="relative h-10 w-10 min-w-10 overflow-hidden rounded-full bg-white/60">
                        <Image
                            src={c.avatar}
                            alt={c.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                        />
                    </div>

                    <div className="min-w-0 text-wrap">
                        <div className="font-serif text-base leading-tight text-neutral-900 text-wrap break-word">
                            {c.name}
                        </div>
                    </div>
                </div>

                {/* {c.href ? (
          <a
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/35 hover:bg-white/55 transition"
            aria-label="Open"
          >
            <Icon icon="mdi:open-in-new" width="16" height="16" className="text-neutral-900" />
          </a>
        ) : (
          <span className="inline-flex h-8 w-8" />
        )} */}
            </div>

            <div
                className="mt-4 rounded-xl p-3 h-full"
                style={{ backgroundColor: theme.innerBg }}
            >
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900">
                    <Icon icon="mdi:book-open-outline" width="14" height="14" />
                    About
                </div>
                <p className="mt-2 text-[9px] md:text-2.5 leading-relaxed text-neutral-900/90">
                    {c.about}
                </p>
            </div>
        </div>
    );
}

export default function CreatorCategorySection({
    title,
    theme,
    creators,
    className = "",
}: CreatorCategorySectionProps) {
    return (
        <section className={`py-14 md:py-20 ${className}`}>
            <h2 className="text-center font-serif text-4xl tracking-tight text-neutral-900 md:text-6xl">
                {title}
            </h2>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
                {creators.map((c) => (
                    <CreatorCard key={c.id} c={c} theme={theme} />
                ))}
            </div>
        </section>
    );
}
