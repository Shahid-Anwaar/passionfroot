// components/CreatorFinderSection.tsx
"use client";
import CircleProgress from "@/CustomComponents/CircularProgressCard";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

type MapTabKey = "newsletter" | "youtube" | "instagram" | "podcasts";

type MapChip = {
    name: string;
    avatar: string;
};

type MapTab = {
    key: MapTabKey;
    label: string;
    icon: string;          // iconify icon
    activeText: string;    // active label color
    activeBg: string;      // active pill bg
    activeRing: string;    // active pill border/ring
    chips: MapChip[];
};

export const MAP_TABS: MapTab[] = [
    {
        key: "newsletter",
        label: "Newsletter",
        icon: "mdi:file-document-outline",
        activeText: "#FF7A00",
        activeBg: "#FFF3E6",
        activeRing: "rgba(255,122,0,0.18)",
        chips: [
            { name: "Houck", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68d7f4fe6739014da4_avatar-1.avif" },
            { name: "Superhuman", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68cadbea52c4302d82_avatar.avif" },
            { name: "ByteByteGo", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fe69f899dc61d3a637ed38_avatar%20(4).avif" },
        ],
    },
    {
        key: "youtube",
        label: "Youtube",
        icon: "mdi:youtube",
        activeText: "#FF2D2D",
        activeBg: "#FFECEC",
        activeRing: "rgba(255,45,45,0.18)",
        chips: [
            { name: "Ali Abdaal", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68d7f4fe6739014da4_avatar-1.avif" },
            { name: "Sarah Grace", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68cadbea52c4302d82_avatar.avif" },
            { name: "Graham Stephan", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fe69f899dc61d3a637ed38_avatar%20(4).avif" },
        ],
    },
    {
        key: "instagram",
        label: "Instagram",
        icon: "mdi:instagram",
        activeText: "#B06BFF",
        activeBg: "#F3E9FF",
        activeRing: "rgba(176,107,255,0.18)",
        chips: [
            { name: "Zach pogrob", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68d7f4fe6739014da4_avatar-1.avif" },
            { name: "Marina Mogilko", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fe69f899dc61d3a637ed38_avatar%20(4).avif" },
            { name: "Scott Clary", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68cadbea52c4302d82_avatar.avif" },
        ],
    },
    {
        key: "podcasts",
        label: "Podcasts",
        icon: "mdi:podcast",
        activeText: "#FF4CCB",
        activeBg: "#FFEAF7",
        activeRing: "rgba(255,76,203,0.18)",
        chips: [
            { name: "Big Technology", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68d7f4fe6739014da4_avatar-1.avif" },
            { name: "Economics Explained", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68cadbea52c4302d82_avatar.avif" },
            { name: "Dr Sheen Gurrib", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fe69f899dc61d3a637ed38_avatar%20(4).avif" },
        ],
    },
];


type CreatorFinderItem = {
    image: string;
    title: string;
    description: string;
    badge?: string;
};

const ITEMS: CreatorFinderItem[] = [
    {
        image: "/find1_1.png",
        title: "AI-powered creator search",
        description:
            "Our AI lets you search all platforms – not just one. Simply search and find the right creator ambassadors for your business in minutes.",
    },
    {
        image: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fcd0aeb86eefe0fdef1d43_World%20Map-1.avif",
        title: "World’s largest B2B creator network",
        description:
            "The largest selection of creators across Newsletters, LinkedIn, Youtube, Instagram, Twitter, and more. All platforms & categories – in one place.",
    },
    {
        image: "/find3_1.png",
        title: "Creator media kits",
        description:
            "Analyze creators with verified stats, product previews, rates, and much more.",
    },
    {
        image: "/find4_1.png",
        title: "AI creator recommendations",
        description:
            "Tell us your goals – and our AI will build a campaign for you in seconds.",
    },
    {
        image: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fcd0aeb86eefe0fdef1d43_World%20Map-1.avif",
        title: "Evaluate a creator in seconds",
        badge: "Coming Soon",
        description:
            "Our AI evaluates and summarizes their latest content – no more digging in their feeds.",
    },
];

// data/aiProfileCards.ts

export type AiProfileCard = {
    name: string;
    matchLabel: string; // "Great match"
    score: number; // 92, 88, 95
    summaryTitle: string; // "AI profile summary"
    summary: string;
    avatar: string; // image path/url
};

export const AI_PROFILE_CARDS: AiProfileCard[] = [
    {
        name: "Ali Abdaal",
        matchLabel: "Great match",
        score: 92,
        summaryTitle: "AI profile summary",
        summary:
            "Ali is the most reputable voice in productivity and in line with your brand",
        avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68d7f4fe6739014da4_avatar-1.avif",
    },
    {
        name: "Brian Jung",
        matchLabel: "Great match",
        score: 88,
        summaryTitle: "AI profile summary",
        summary:
            "Brian is popular on YouTube for creating content about cryptocurrency, finance, and investing.",
        avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68cadbea52c4302d82_avatar.avif",
    },
    {
        name: "Marina Mogilko",
        matchLabel: "Great match",
        score: 95,
        summaryTitle: "AI profile summary",
        summary:
            "Marina talks about entrepreneurship as an immigrant - great for Duolingo",
        avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fe69f899dc61d3a637ed38_avatar%20(4).avif",
    },
];


export default function CreatorFinderSection() {
    const [hoveredCount, setHoveredCount] = useState(0);
    return (
        <section className="w-full bg-[#F6F2E9] py-14">
            <div className="mx-auto w-full max-w-[1400px] px-6">
                <h2 className="text-center font-serif text-[34px] font-semibold leading-[1.12] text-[#111] sm:text-[40px]">
                    Find the best creators for <br />
                    your brand - fast.
                </h2>

                {/* Grid: 2 cards on top row, 3 cards on bottom row (like screenshot) */}
                <div className="mt-10 space-y-6">
                    {/* Top row */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <FeatureCard item={ITEMS[0]} children={
                            <div
  className={[
    "absolute inset-0 right-0 top-0 w-full h-full",
    "translate-x-full opacity-0",
    "transition-transform duration-1000 ease-out",
    "group-hover:translate-x-0 group-hover:opacity-100",
    "pointer-events-none", // so it doesn't block hover
  ].join(" ")}
>
  <Image
    src="/find1_2.png"
    alt="any one"
    width={1200}
    height={650}
    className="h-78 w-full rounded-[8px]"
  />
</div>

                        } />
                        <FeatureCard
                            item={ITEMS[1]}
                            children={<WorldMapTabsOverlay />}
                        />

                    </div>

                    {/* Bottom row */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                        <FeatureCard item={ITEMS[2]} children={
                            <div className="hidden absolute group-hover:block right-0 top-0 left-0 bottom-0 w-full h-full">
                                <Image
                                    src={"/find3_2.png"}
                                    alt={"any one"}
                                    width={1200}
                                    height={650}
                                    className="h-78 w-full rounded-[8px]"
                                />
                            </div>
                        } />
                        <FeatureCard item={ITEMS[3]} />
                        <FeatureCard item={ITEMS[4]} children={
                            <div onMouseEnter={() => {
                                if (hoveredCount < 2) {
                                    setHoveredCount(hoveredCount + 1);
                                } else {
                                    setHoveredCount(0);
                                }
                            }} className="absolute top-0 left-0 right-0 width-full pt-3">
                                <EmptySkelton />
                                <div className="relative bg-white shadow-lg max-w-[300px] mx-auto rounded-lg p-3">
                                    <div className="absolute rounded-full bg-[#58df8c] border-8 border-white text-white h-20 w-20 p-2 flex items-center justify-center -top-8 -right-6 shadow-md text-xl font-bold">
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
                                            <p className="text-[15px] leading-[1.55] text-gray-700">
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
                                </div>
                                <EmptySkelton leftPositionValue={16} />
                            </div>} />
                    </div>
                </div>
            </div>
        </section>
    );
}


function WorldMapTabsOverlay() {
  const [active, setActive] =
    useState<(typeof MAP_TABS)[number]["key"]>("instagram");

  const activeIndex = useMemo(
    () => Math.max(0, MAP_TABS.findIndex((t) => t.key === active)),
    [active]
  );

  return (
    <>
      {/* Top tabs pill (CENTERED) */}
      <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2">
        <div className="inline-flex w-max items-center gap-1 rounded-[14px] bg-white px-2 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
          {MAP_TABS.map((t) => {
            const isActive = t.key === active;

            return (
              <button
                key={t.key}
                type="button"
                onMouseEnter={() => setActive(t.key)}
                className={[
                  "inline-flex items-center gap-2 rounded-[10px] px-3 py-2 text-[14px] font-semibold",
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

      {/* Bottom chips (SLIDING PANELS) */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        {/* viewport */}
        <div
          className={[
            "relative overflow-hidden",
            // hide scrollbars (no scroll needed since we animate)
            "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          ].join(" ")}
        >
          {/* track */}
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {MAP_TABS.map((tab) => (
              <div key={tab.key} className="w-full shrink-0">
                <div className="flex items-center justify-center gap-2">
                  {tab.chips.map((c) => (
                    <span
                      key={c.name}
                      className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1.5 text-[12px] font-medium text-[#3C3C3C] ring-1 ring-black/5 backdrop-blur"
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

                  <span className="shrink-0 ml-1 text-[12px] font-medium text-white/70">
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



function FeatureCard({ item, children }: { item: CreatorFinderItem, children?: ReactNode }) {
    return (
        <div className="rounded-[12px] bg-white p-5 shadow-[0_2px_0_rgba(0,0,0,0.06)] ring-1 ring-black/5">
            <div className="relative group overflow-hidden rounded-[10px] bg-[#c083f7] ring-1 ring-black/5">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={650}
                    className="h-78 w-full rounded-[8px]"
                />
                {children}
            </div>

            <div className="mt-5 flex items-center gap-2">
                <h3 className="text-[16px] font-semibold leading-snug text-[#111]">
                    {item.title}
                </h3>
            </div>
            {item.badge ? (
                <span className="rounded-full bg-[#EAF7EE] px-2 py-[2px] text-[10px] font-semibold text-[#1E8E4A] ring-1 ring-[#1E8E4A]/15">
                    {item.badge}
                </span>
            ) : null}

            <p className="mt-2 text-[12.5px] leading-[1.55] text-[#111]/70">
                {item.description}
            </p>
        </div>
    );
}

const EmptySkelton = ({ leftPositionValue = 128 }) => {
    return (
        <div className={`flex gap-3 relative`} style={{ left: `-${leftPositionValue}px` }}>
            <div className="flex justify-start items-center p-2 bg-[#c895f7] rounded-lg border border-[#b05efd] shadow-sm">
                <div
                    className="h-11 w-11 bg-[#d5adfa] rounded-md"
                />
                <div className="text-[15px] leading-[1.55] text-gray-700 bg-[#d5adfa] px-2 rounded-md h-4 ms-3 w-32" />
            </div>
            <div className="flex justify-start items-center p-2 bg-[#c895f7] rounded-lg border border-[#b05efd] shadow-sm">
                <div
                    className="h-11 w-11 bg-[#d5adfa] rounded-md"
                />
                <div className="text-[15px] leading-[1.55] text-gray-700 bg-[#d5adfa] px-2 rounded-md h-4 ms-3 w-32" />
            </div>
            <div className="flex justify-start items-center p-2 bg-[#c895f7] rounded-lg border border-[#b05efd] shadow-sm">
                <div
                    className="h-11 w-11 bg-[#d5adfa] rounded-md"
                />
                <div className="text-[15px] leading-[1.55] text-gray-700 bg-[#d5adfa] px-2 rounded-md h-4 ms-3 w-32" />
            </div>
        </div>
    );
}