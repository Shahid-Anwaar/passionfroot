// components/PlatformAccessSection.tsx
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

type Stat = {
    value: string;
    label: string;
};

type PlatformCard = {
    title: string;
    icon: string; // iconify icon
    bg: string; // css color or gradient
    image: string; // can be remote (make sure next.config allows domain)
};

const STATS: Stat[] = [
    { value: "300 Million", label: "TARGET AUDIENCE" },
    { value: "2 Billion", label: "MONTHLY IMPRESSIONS" },
    { value: "60%", label: "LOWER CPC THAN LINKEDIN ADS*" },
];

const PLATFORMS: PlatformCard[] = [
    {
        title: "TikTok",
        icon: "ic:baseline-tiktok",
        bg: "linear-gradient(180deg,#f7a2db 0%, #f09ad2 55%, #f7a2db 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif",
    },
    {
        title: "Newsletter",
        icon: "mdi:file-document-outline",
        bg: "linear-gradient(180deg,#ffb36b 0%, #ff9f45 70%, #ffb36b 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0abdea1f85b137b33_Frame%20427323496.avif",
    },
    {
        title: "YouTube",
        icon: "mdi:youtube",
        bg: "linear-gradient(180deg,#f07a86 0%, #ea5f6d 70%, #f07a86 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b539ef60c50fd9ee_Frame%20427323499.avif",
    },
    {
        title: "LinkedIn",
        icon: "mdi:linkedin",
        bg: "linear-gradient(180deg,#7cc2ff 0%, #4aa6ff 70%, #7cc2ff 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e05cfd941726113c8d_slide%202.avif",
    },
    {
        title: "Podcast",
        icon: "mdi:podcast",
        bg: "linear-gradient(180deg,#76f0b2 0%, #4fe39a 70%, #76f0b2 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b9158c4c2a423b86_slide-3.avif",
    },
    {
        title: "Instagram",
        icon: "mdi:instagram",
        bg: "linear-gradient(180deg,#c08bff 0%, #b378ff 70%, #c08bff 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0b539ef60c50fd99e_Frame%20427323500.avif",
    },
    {
        title: "Twitter",
        icon: "mdi:twitter",
        bg: "linear-gradient(180deg,#77e2f2 0%, #4dd6ea 70%, #77e2f2 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0c9b886eab0aed2c7_Frame%20427323502.avif",
    },
    {
        title: "TikTok",
        icon: "ic:baseline-tiktok",
        bg: "linear-gradient(180deg,#f7a2db 0%, #f09ad2 55%, #f7a2db 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif",
    },
    {
        title: "Newsletter",
        icon: "mdi:file-document-outline",
        bg: "linear-gradient(180deg,#ffb36b 0%, #ff9f45 70%, #ffb36b 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0abdea1f85b137b33_Frame%20427323496.avif",
    },
    {
        title: "YouTube",
        icon: "mdi:youtube",
        bg: "linear-gradient(180deg,#f07a86 0%, #ea5f6d 70%, #f07a86 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b539ef60c50fd9ee_Frame%20427323499.avif",
    },
    {
        title: "LinkedIn",
        icon: "mdi:linkedin",
        bg: "linear-gradient(180deg,#7cc2ff 0%, #4aa6ff 70%, #7cc2ff 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e05cfd941726113c8d_slide%202.avif",
    },
    {
        title: "Podcast",
        icon: "mdi:podcast",
        bg: "linear-gradient(180deg,#76f0b2 0%, #4fe39a 70%, #76f0b2 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b9158c4c2a423b86_slide-3.avif",
    },
    {
        title: "Instagram",
        icon: "mdi:instagram",
        bg: "linear-gradient(180deg,#c08bff 0%, #b378ff 70%, #c08bff 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0b539ef60c50fd99e_Frame%20427323500.avif",
    },
    {
        title: "Twitter",
        icon: "mdi:twitter",
        bg: "linear-gradient(180deg,#77e2f2 0%, #4dd6ea 70%, #77e2f2 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0c9b886eab0aed2c7_Frame%20427323502.avif",
    },
    {
        title: "TikTok",
        icon: "ic:baseline-tiktok",
        bg: "linear-gradient(180deg,#f7a2db 0%, #f09ad2 55%, #f7a2db 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif",
    },
    {
        title: "Newsletter",
        icon: "mdi:file-document-outline",
        bg: "linear-gradient(180deg,#ffb36b 0%, #ff9f45 70%, #ffb36b 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0abdea1f85b137b33_Frame%20427323496.avif",
    },
    {
        title: "YouTube",
        icon: "mdi:youtube",
        bg: "linear-gradient(180deg,#f07a86 0%, #ea5f6d 70%, #f07a86 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b539ef60c50fd9ee_Frame%20427323499.avif",
    },
    {
        title: "LinkedIn",
        icon: "mdi:linkedin",
        bg: "linear-gradient(180deg,#7cc2ff 0%, #4aa6ff 70%, #7cc2ff 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e05cfd941726113c8d_slide%202.avif",
    },
    {
        title: "Podcast",
        icon: "mdi:podcast",
        bg: "linear-gradient(180deg,#76f0b2 0%, #4fe39a 70%, #76f0b2 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b9158c4c2a423b86_slide-3.avif",
    },
    {
        title: "Instagram",
        icon: "mdi:instagram",
        bg: "linear-gradient(180deg,#c08bff 0%, #b378ff 70%, #c08bff 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0b539ef60c50fd99e_Frame%20427323500.avif",
    },
    {
        title: "Twitter",
        icon: "mdi:twitter",
        bg: "linear-gradient(180deg,#77e2f2 0%, #4dd6ea 70%, #77e2f2 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0c9b886eab0aed2c7_Frame%20427323502.avif",
    },
    {
        title: "TikTok",
        icon: "ic:baseline-tiktok",
        bg: "linear-gradient(180deg,#f7a2db 0%, #f09ad2 55%, #f7a2db 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif",
    },
    {
        title: "Newsletter",
        icon: "mdi:file-document-outline",
        bg: "linear-gradient(180deg,#ffb36b 0%, #ff9f45 70%, #ffb36b 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0abdea1f85b137b33_Frame%20427323496.avif",
    },
    {
        title: "YouTube",
        icon: "mdi:youtube",
        bg: "linear-gradient(180deg,#f07a86 0%, #ea5f6d 70%, #f07a86 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b539ef60c50fd9ee_Frame%20427323499.avif",
    },
    {
        title: "LinkedIn",
        icon: "mdi:linkedin",
        bg: "linear-gradient(180deg,#7cc2ff 0%, #4aa6ff 70%, #7cc2ff 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e05cfd941726113c8d_slide%202.avif",
    },
    {
        title: "Podcast",
        icon: "mdi:podcast",
        bg: "linear-gradient(180deg,#76f0b2 0%, #4fe39a 70%, #76f0b2 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b9158c4c2a423b86_slide-3.avif",
    },
    {
        title: "Instagram",
        icon: "mdi:instagram",
        bg: "linear-gradient(180deg,#c08bff 0%, #b378ff 70%, #c08bff 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0b539ef60c50fd99e_Frame%20427323500.avif",
    },
    {
        title: "Twitter",
        icon: "mdi:twitter",
        bg: "linear-gradient(180deg,#77e2f2 0%, #4dd6ea 70%, #77e2f2 100%)",
        image:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0c9b886eab0aed2c7_Frame%20427323502.avif",
    },
];

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
        <section className="w-full bg-white py-16">
            <div className="mx-auto w-full max-w-[1200px] px-6">
                {/* Heading */}
                <h2 className="text-center font-serif text-[36px] font-semibold leading-[1.18] text-[#111] sm:text-[42px]">
                    Get direct access to the top B2B creators
                    <br />
                    in the world - on all platforms
                </h2>

                {/* Stats */}
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
                    {STATS.map((s, i) => (
                        <div
                            key={i}
                            className=" rounded-[6px] bg-[#fafaf6] px-6 py-4 text-center shadow-[0_2px_0_rgba(0,0,0,0.06)] ring-1 ring-black/5"
                        >
                            <div className="font-mono text-[32px]  leading-none text-[#111]">
                                {s.value}
                            </div>
                            <div className="mt-2 text-[16px] font-semibold tracking-[0.02em] text-[#4e4d46]">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Platform carousel */}
            <div className="mt-14 w-full">
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
                    ].join(" ")}
                >
                    <div className="flex w-max items-end gap-7 px-8 snap-x snap-mandatory">
                        {PLATFORMS.map((p, idx) => (
                            <PlatformShowcaseCard key={`${p.title}-${idx}`} item={p} />
                        ))}
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
                    "relative h-[285px] w-[190px]",
                    "overflow-hidden rounded-[10px]",
                    "shadow-[0_18px_28px_rgba(0,0,0,0.10)]",
                ].join(" ")}
                style={{ background: item.bg }}
            >
                {/* top row */}
                <div className="absolute left-0 right-0 top-0 flex items-start justify-between px-5 pt-4">
                    <div className="font-serif text-[20px] font-semibold text-[#111]">
                        {item.title}
                    </div>
                    <Icon icon={item.icon} className="mt-[2px] h-5 w-5 text-[#111]" />
                </div>

                {/* image preview */}
                <div className="absolute inset-x-0 -bottom-3 flex justify-center">
                    <div className="relative h-[170px] w-full">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="215px"
                            draggable={false}
                            className="select-none object-contain"
                        />
                    </div>
                </div>

                {/* subtle bottom fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70px] bg-gradient-to-t from-black/10 to-transparent" />
            </div>
        </div>
    );
}
