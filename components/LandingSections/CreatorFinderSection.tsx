// components/CreatorFinderSection.tsx
"use client";
import { EmptySkelton } from "@/CustomComponents/EmptySkeletons";
import { AI_PROFILE_CARDS, ITEMS, MAP_TABS } from "@/data/data";
import { CreatorFinderItem } from "@/data/types";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { ReactNode, useMemo, useState } from "react";

export default function CreatorFinderSection() {
    const [hoveredCount, setHoveredCount] = useState(0);

    return (
        <section className="w-full bg-[#F6F2E9] py-12 sm:py-14">
            <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
                <h2 className="text-center font-serif text-[26px] sm:text-[34px] font-semibold leading-[1.12] text-[#111] sm:leading-[1.12]">
                    Find the best creators for <br className="hidden sm:block" />
                    your brand - fast.
                </h2>

                <div className="mt-8 sm:mt-10 space-y-6">
                    {/* Top row */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <FeatureCard
                            item={ITEMS[0]}
                            children={
                                <div
                                    className={[
                                        "absolute inset-0 right-0 top-0 w-full h-full",
                                        "translate-x-full opacity-0",
                                        "transition-transform duration-1000 ease-out",
                                        "group-hover:translate-x-0 group-hover:opacity-100",
                                        "pointer-events-none",
                                    ].join(" ")}
                                >
                                    <Image
                                        src="/find1_2.png"
                                        alt="any one"
                                        width={1200}
                                        height={650}
                                        className="w-full rounded-[8px] object-cover"
                                    />
                                </div>
                            }
                        />

                        <FeatureCard item={ITEMS[1]} children={<WorldMapTabsOverlay />} />
                    </div>

                    {/* Bottom row */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                        <FeatureCard
                            item={ITEMS[2]}
                            children={
                                <div className="hidden absolute group-hover:block right-0 top-0 left-0 bottom-0 w-full h-full">
                                    <Image
                                        src={"/find3_2.png"}
                                        alt={"any one"}
                                        width={1200}
                                        height={650}
                                        className="w-full rounded-[8px] object-cover"
                                    />
                                </div>
                            }
                        />

                        <FeatureCard item={ITEMS[3]} />

                        <FeatureCard
                            item={ITEMS[4]}
                            children={
                                <div
                                    onMouseEnter={() => {
                                        if (hoveredCount < 2) setHoveredCount(hoveredCount + 1);
                                        else setHoveredCount(0);
                                    }}
                                    className=" group w-full h-full flex justify-center items-center pt-3 px-3 sm:px-0"
                                >
                                    <div className="relative w-full h-20">
                                        <EmptySkelton />
                                    </div>
                                    <div className="relative w-full h-20">
                                        <EmptySkelton />
                                    </div>
                                    <div className="relative w-full h-20">
                                        <EmptySkelton />
                                    </div>

                                    {/* <div className="relative z-10 bg-white shadow-lg w-full max-w-[320px] mx-auto rounded-lg p-3">
                                        <div className="absolute rounded-full bg-[#58df8c] border-8 border-white text-white h-16 w-16 sm:h-20 sm:w-20 p-2 flex items-center justify-center -top-7 sm:-top-8 -right-5 sm:-right-6 shadow-md text-xl font-bold">
                                            <CircleProgress value={AI_PROFILE_CARDS[hoveredCount].score} />
                                        </div>

                                        <div className="flex justify-start items-center">
                                            <Image
                                                src={AI_PROFILE_CARDS[hoveredCount].avatar}
                                                alt="Quote Icon"
                                                width={44}
                                                height={44}
                                                className="object-fill rounded-md"
                                            />
                                            <div className="flex flex-col justify-center items-start ml-3">
                                                <p className="text-[14px] sm:text-[15px] leading-[1.55] text-gray-700">
                                                    {AI_PROFILE_CARDS[hoveredCount].name}
                                                </p>
                                                <span className="text-[10px] border border-[#447759] text-[#4aa047] py-0.5 px-2 mt-1 rounded-md bg-[#e3f1fa]">
                                                    {AI_PROFILE_CARDS[hoveredCount].matchLabel}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-3 rounded-lg border border-[#ff9147] bg-white/60 p-2 shadow-[0_2px_0_rgba(0,0,0,0.06)] ring-1 ring-black/5">
                                            <div className="text-[#ff9147] flex items-center gap-2 text-[12px] font-semibold">
                                                <Icon icon="humbleicons:ai" className="h-4 w-4 " />
                                                {AI_PROFILE_CARDS[hoveredCount].summaryTitle}
                                            </div>
                                            <div className="mt-1 text-[12px] leading-[1.55] text-[#111]/80">
                                                {AI_PROFILE_CARDS[hoveredCount].summary}
                                            </div>
                                        </div>
                                    </div> */}

                                    <EmptySkelton isReplaced={false} />
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function WorldMapTabsOverlay() {
    const [active, setActive] = useState<(typeof MAP_TABS)[number]["key"]>("instagram");

    const activeIndex = useMemo(
        () => Math.max(0, MAP_TABS.findIndex((t) => t.key === active)),
        [active]
    );

    return (
        <>
            {/* ✅ Tabs: scrollable on mobile, centered on desktop */}
            <div className="absolute left-1/2 top-3 sm:top-4 z-10 -translate-x-1/2 w-[calc(100%-16px)] sm:w-auto">
                <div
                    className={[
                        "inline-flex w-full sm:w-max items-center gap-1 rounded-[14px] bg-white px-2 py-2",
                        "shadow-[0_10px_24px_rgba(0,0,0,0.10)] ring-1 ring-black/5",
                        "overflow-x-auto",
                        "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                    ].join(" ")}
                >
                    {MAP_TABS.map((t) => {
                        const isActive = t.key === active;

                        return (
                            <button
                                key={t.key}
                                type="button"
                                onMouseEnter={() => setActive(t.key)}
                                onClick={() => setActive(t.key)} // ✅ touch devices
                                className={[
                                    "inline-flex items-center gap-2 rounded-[10px] px-3 py-2 text-[12px] sm:text-[14px] font-semibold whitespace-nowrap",
                                    "transition-colors",
                                    isActive ? "" : "text-[#7A7A7A] hover:text-[#222]",
                                ].join(" ")}
                                style={
                                    isActive
                                        ? {
                                            color: t.activeText,
                                            background: t.activeBg,
                                            boxShadow: `inset 0 0 0 1px ${t.activeRing}`,
                                        }
                                        : undefined
                                }
                            >
                                {t.label}
                                <Icon icon={t.icon} className="h-4 w-4 opacity-80" />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ✅ Chips: scroll on mobile; slide animation preserved on sm+ */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-10">
                <div
                    className={[
                        "relative overflow-hidden",
                        "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                    ].join(" ")}
                >
                    <div
                        className="flex transition-transform duration-500 ease-out will-change-transform"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {MAP_TABS.map((tab) => (
                            <div key={tab.key} className="w-full shrink-0">
                                <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto sm:overflow-visible pr-2">
                                    {tab.chips.map((c) => (
                                        <span
                                            key={c.name}
                                            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1.5 text-[11px] sm:text-[12px] font-medium text-[#3C3C3C] ring-1 ring-black/5 backdrop-blur whitespace-nowrap"
                                        >
                                            <Image
                                                src={c.avatar}
                                                alt={c.name}
                                                width={18}
                                                height={18}
                                                className="rounded-full object-cover"
                                            />
                                            {c.name}
                                        </span>
                                    ))}

                                    <span className="shrink-0 ml-1 text-[11px] sm:text-[12px] font-medium text-white/70 whitespace-nowrap">
                                        and more
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

function FeatureCard({ item, children }: { item: CreatorFinderItem; children?: ReactNode }) {
    return (
        <div className="rounded-[12px] relative bg-white p-4 sm:p-5 shadow-[0_2px_0_rgba(0,0,0,0.06)] ring-1 ring-black/5">

            <div className="relative group overflow-hidden rounded-[10px] bg-[#c083f7] ring-1 ring-black/5">
                <div className="absolute w-full h-full bg-[#c083f7]">
                    <EmptySkelton classes="top-0" />
                    <EmptySkelton classes="top-20" isReplaced={false} />
                    <EmptySkelton classes="top-40" />
                    <EmptySkelton classes="top-60" isReplaced={false} />
                    <EmptySkelton classes="top-80" />
                    <EmptySkelton classes="top-100" isReplaced={false} />
                </div>
                <div className="h-full w-full flex justify-center items-center">
                    <Image
                        src={"https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67061c285f69a857cc8bab68_Frame%20427323439.png"}
                        alt={item.title}
                        width={1200}
                        height={650}
                        className={[
                            "w-full object-fill z-10 max-w-md sm:max-w-xs group-hover:scale-105 transition-all duration-200",
                            "h-[140px] sm:h-[180px] md:h-[200px] my-12 rounded-lg",
                        ].join(" ")}
                    />
                </div>
                {/* {children} */}
            </div>

            <div className="mt-4 sm:mt-5 flex items-center gap-2">
                <h3 className="text-[15px] sm:text-[16px] font-semibold leading-snug text-[#111]">
                    {item.title}
                </h3>
            </div>

            {item.badge ? (
                <span className="rounded-full bg-[#EAF7EE] px-2 py-[2px] text-[10px] font-semibold text-[#1E8E4A] ring-1 ring-[#1E8E4A]/15">
                    {item.badge}
                </span>
            ) : null}

            <p className="mt-2 text-[12px] sm:text-[12.5px] leading-[1.55] text-[#111]/70">
                {item.description}
            </p>
        </div>
    );
}


