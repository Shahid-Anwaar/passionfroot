// components/PlatformAccessSection.tsx
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { PLATFORMS, STATS } from "@/data/data";
import { PlatformCard } from "@/data/types";

export default function PlatformAccessSection() {
    // ✅ Drag-to-scroll state
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState(false);

    const dragState = useRef({
        startX: 0,
        startScrollLeft: 0,
        pointerId: null as number | null,
    });

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = scrollerRef.current;
        if (!el) return;

        setDragging(true);
        dragState.current.pointerId = e.pointerId;
        el.setPointerCapture(e.pointerId);

        dragState.current.startX = e.clientX;
        dragState.current.startScrollLeft = el.scrollLeft;

        // prevent text selection + image drag ghost
        e.preventDefault();
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = scrollerRef.current;
        if (!el || !dragging) return;

        const dx = e.clientX - dragState.current.startX;
        el.scrollLeft = dragState.current.startScrollLeft - dx;

        e.preventDefault();
    };

    const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = scrollerRef.current;
        if (!el) return;

        setDragging(false);

        if (dragState.current.pointerId != null) {
            try {
                el.releasePointerCapture(dragState.current.pointerId);
            } catch { }
        }
        dragState.current.pointerId = null;
    };

    return (
        <section className="w-full bg-white py-12 sm:py-16">
            <div className="mx-auto w-full max-w-300 px-4 sm:px-6">
                {/* Heading */}
                <h2 className="text-center font-serif text-[26px] sm:text-9 md:text-[42px] font-semibold leading-[1.18] text-[#111]">
                    Get direct access to the top B2B creators
                    <br className="hidden sm:block" />
                    in the world - on all platforms
                </h2>

                {/* Stats */}
                <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 place-items-stretch">
                    {STATS.map((s, i) => (
                        <div
                            key={i}
                            className="w-full rounded-md bg-[#fafaf6] px-5 sm:px-6 py-4 text-center shadow-[0_2px_0_rgba(0,0,0,0.06)] ring-1 ring-black/5"
                        >
                            <div className="font-mono text-7 sm:text-8 leading-none text-[#111]">
                                {s.value}
                            </div>
                            <div className="mt-2 text-[14px] sm:text-[16px] font-semibold tracking-[0.02em] text-[#4e4d46]">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Platform carousel */}
            <div className="mt-10 sm:mt-14 w-full">
                <div
                    ref={scrollerRef}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={endDrag}
                    onPointerCancel={endDrag}
                    onPointerLeave={endDrag}
                    className={[
                        "w-full overflow-x-auto scroll-smooth select-none",
                        // ✅ hide scrollbar everywhere
                        "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                        // ✅ show hand cursor for drag scrolling
                        dragging ? "cursor-grabbing" : "cursor-grab",
                        // ✅ nicer mobile scrolling
                        "touch-pan-x",
                    ].join(" ")}
                >
                    <div className="flex w-max items-end gap-4 sm:gap-6 lg:gap-7 px-4 sm:px-8 snap-x snap-mandatory">
                        {PLATFORMS.map((p, idx) => (
                            <PlatformShowcaseCard key={`${p.title}-${idx}`} item={p} />
                        ))}

                        {/* little end padding so last card isn't stuck to edge */}
                        <div className="w-2 sm:w-6" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PlatformShowcaseCard({ item }: { item: PlatformCard }) {
    return (
        <div className="snap-center">
            <div
                className={[
                    "relative",
                    // ✅ responsive sizes
                    "h-60 w-40",
                    "sm:h-71.25 sm:w-47.5",
                    "md:h-75 md:w-51.25",
                    "overflow-hidden rounded-[10px]",
                    "shadow-[0_18px_28px_rgba(0,0,0,0.10)]",
                ].join(" ")}
                style={{ background: item.bg }}
            >
                {/* top row */}
                <div className="absolute left-0 right-0 top-0 flex items-start justify-between px-4 sm:px-5 pt-4">
                    <div className="font-serif text-4.5 sm:text-5 font-semibold text-[#111]">
                        {item.title}
                    </div>
                    <Icon icon={item.icon} className="mt-0.5 h-5 w-5 text-[#111]" />
                </div>

                {/* image preview */}
                <div className="absolute inset-x-0 -bottom-3 flex justify-center">
                    <div className="relative h-37.5 sm:h-42.5 w-full">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 160px, (max-width: 1024px) 190px, 205px"
                            draggable={false}
                            className="select-none object-contain"
                        />
                    </div>
                </div>

                {/* subtle bottom fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-17.5 bg-linear-to-t from-black/10 to-transparent" />
            </div>
        </div>
    );
}
