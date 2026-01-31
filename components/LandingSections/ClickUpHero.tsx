"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import TrustedLogosAnimation from "./TrustedLogosAnimations";

const WORKSPACE_TABS = [
    {
        key: "projects",
        label: "Projects",
        image: {
            src: "https://images.pexels.com/photos/7439129/pexels-photo-7439129.jpeg?cs=srgb&dl=pexels-kampus-7439129.jpg&fm=jpg",
            alt: "Projects",
        },
    },
    {
        key: "chat",
        label: "Chat",
        image: {
            src: "https://images.pexels.com/photos/15940011/pexels-photo-15940011.jpeg?cs=srgb&dl=pexels-airamdphoto-15940011.jpg&fm=jpg",
            alt: "Chat",
        },
    },
    {
        key: "brain-max",
        label: "Brain MAX",
        image: {
            src: "https://images.pexels.com/photos/30530417/pexels-photo-30530417.jpeg?cs=srgb&dl=pexels-bertellifotografia-30530417.jpg&fm=jpg",
            alt: "Brain MAX",
        },
    },
    {
        key: "ai-agents",
        label: "AI Agents",
        image: {
            src: "https://images.pexels.com/photos/33440147/pexels-photo-33440147.jpeg?cs=srgb&dl=pexels-zulfugarkarimov-33440147.jpg&fm=jpg",
            alt: "AI Agents",
        },
    },
    {
        key: "sprints",
        label: "Sprints",
        image: {
            src: "https://images.pexels.com/photos/29521529/pexels-photo-29521529.jpeg?cs=srgb&dl=pexels-jakubzerdzicki-29521529.jpg&fm=jpg",
            alt: "Sprints",
        },
    },
    {
        key: "time-tracking",
        label: "Time Tracking",
        image: {
            src: "https://images.pexels.com/photos/8354544/pexels-photo-8354544.jpeg?cs=srgb&dl=pexels-ian-panelo-8354544.jpg&fm=jpg",
            alt: "Time Tracking",
        },
    },
    {
        key: "calendar",
        label: "Calendar",
        image: {
            src: "https://images.pexels.com/photos/6473735/pexels-photo-6473735.jpeg?cs=srgb&dl=pexels-cottonbro-6473735.jpg&fm=jpg",
            alt: "Calendar",
        },
    },
    {
        key: "docs",
        label: "Docs",
        image: {
            src: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?cs=srgb&dl=pexels-thisisengineering-3888151.jpg&fm=jpg",
            alt: "Docs",
        },
    },
    {
        key: "whiteboards",
        label: "Whiteboards",
        image: {
            src: "https://images.pexels.com/photos/7441373/pexels-photo-7441373.jpeg?cs=srgb&dl=pexels-kampus-7441373.jpg&fm=jpg",
            alt: "Whiteboards",
        },
    },
    {
        key: "automations",
        label: "Automations",
        image: {
            src: "https://images.pexels.com/photos/16983887/pexels-photo-16983887.jpeg?cs=srgb&dl=pexels-sergey-korolev-259137098-16983887.jpg&fm=jpg",
            alt: "Automations",
        },
    },
    {
        key: "dashboards",
        label: "Dashboards",
        image: {
            src: "https://images.pexels.com/photos/7109291/pexels-photo-7109291.jpeg?cs=srgb&dl=pexels-tiger-lily-7109291.jpg&fm=jpg",
            alt: "Dashboards",
        },
    },
    {
        key: "scheduling",
        label: "Scheduling",
        image: {
            src: "https://images.pexels.com/photos/19915766/pexels-photo-19915766.jpeg?cs=srgb&dl=pexels-mutecevvil-19915766.jpg&fm=jpg",
            alt: "Scheduling",
        },
    },
] as const;

const BRAND_IMAGES: { imageSrc: string }[] = [
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b720e278d278fe3721f5_framer.avif",
    },
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdbe5ac9f5bee12bbe_image%2080.avif",
    },
    // {
    //   imageSrc:
    //     "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67ab9dcd0f694616a4ad44bf_Ripplinglogo.avif",
    // },
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec3da0554e7583437e50_Pika.png",
    },
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec5afa92c45dcee063bd_Tavus.png",
    },
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd1c59cbfc2851afc5_Frame-1.avif",
    },
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd8f80679c4ad96f2c_Frame-2.avif",
    },
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b7401c894092087d3170_scale.avif",
    },
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eea556429202526d8f511_Figma.png",
    },
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdd593d7389f1e48a8_image%2075.avif",
    },
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec07687d8b7d9f92084d_GraphiteLogo-p-500.png",
    },
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eebe3e73220bad80bd9cf_ElevenLabs-p-500.png",
    },
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b6e9b75902ba3cf186b8_replit.avif",
    },
    {
        imageSrc:
            "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd4133943d0ca43d21_Frame-4.avif",
    },
];

type WorkspaceTab = (typeof WORKSPACE_TABS)[number];
type WorkspaceKey = WorkspaceTab["key"];



export default function ClickupHero() {
    // ✅ default on reload = projects
    const [activeKey, setActiveKey] = useState<WorkspaceKey>("projects");
    const [activeLabels, setActiveLabels] = useState<string[]>(["projects"]);
    const active = useMemo(
        () => WORKSPACE_TABS.find((t) => t.key === activeKey) ?? WORKSPACE_TABS[0],
        [activeKey]
    );

    console.log(active, "active............");


    const [imgLoading, setImgLoading] = useState(true);

    const onSelect = (key: WorkspaceKey) => {
        let isAreadyIncluded = activeLabels.includes(key);
        if (!isAreadyIncluded) {
            setActiveLabels((prev) => [...prev, key]);
            console.log(key, "key.......");
            if (key !== activeKey) {
                setActiveKey(key);
                setImgLoading(true);
            }
        } else {
            setActiveLabels((prev) => prev.filter((k) => k !== key));
        }

    };

    return (
        <section className="bg-[#fdfdfb] pt-14">
            <style jsx global>{`
        @keyframes mcBorderShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>

            <div className="mx-auto max-w-350 px-4 py-10 md:py-14">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    {/* LEFT */}
                    <div>
                        {/* Top pills */}
                        <div className="flex flex-wrap items-center gap-2">
                            <Link
                                href="#"
                                className="group inline-flex rounded-full p-[2px] bg-slate-200/70 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:via-blue-500 hover:to-emerald-400 hover:bg-[length:200%_200%] hover:[animation:mcBorderShift_1.2s_linear_infinite]"
                            >
                                <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                                    Introducing Supreme
                                    <span className="rounded-[3px] border border-slate-900 px-[2px] py-[1px] text-[10px] font-bold text-slate-700">
                                        4.0
                                    </span>
                                    <Icon icon="mdi:chevron-right" className="h-4 w-4" />
                                </span>
                            </Link>

                            {/* <Link
                                href="#"
                                className="group inline-flex rounded-full p-[2px] bg-slate-200/70 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:via-blue-500 hover:to-emerald-400 hover:bg-[length:200%_200%] hover:[animation:mcBorderShift_1.2s_linear_infinite]"
                            >
                                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                                    AI Super Agents
                                    <Icon icon="lucide:check" className="h-4 w-4" />
                                </span>
                            </Link> */}
                        </div>

                        <h1 className="mt-5 text-4xl font-serif font-extrabold tracking-tight text-slate-900 md:text-5xl">
                            Software that <br className="hidden md:block" />
                            replaces all software
                        </h1>

                        {/* Bullets */}
                        <div className="mt-6 space-y-3 text-sm text-slate-700">
                            <div className="flex gap-3">
                                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-transparent text-blue-600">
                                    <Icon icon="lucide:check" className="h-4 w-4" />
                                </span>
                                <p>
                                    <span className="font-bold text-slate-900">Save money.</span> All Apps, AI, Projects, Chat + 20 more
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-transparent text-blue-600">
                                    <Icon icon="lucide:check" className="h-4 w-4" />
                                </span>
                                <p>
                                    <span className="font-bold text-slate-900">Save time.</span> All humans working together with perfect context
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-transparent text-blue-600">
                                    <Icon icon="lucide:check" className="h-4 w-4" />
                                </span>
                                <p>
                                    <span className="font-bold text-slate-900">Create infinite productivity.</span> AI Agents & Workflows
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-7 flex items-center gap-4">
                            <Link
                                href="#"
                                className="group inline-flex rounded-xl p-[3px] px-[4px] bg-transparent hover:bg-gradient-to-r hover:from-fuchsia-500 hover:via-blue-500 hover:to-emerald-400 hover:bg-[length:200%_200%] hover:[animation:mcBorderShift_1.2s_linear_infinite]"
                            >
                                <span className="first-btn px-5 py-3 text-md transition-transform duration-200 border-2 border-white group-hover:scale-[1.02]">
                                    Get started Contact sales
                                </span>
                            </Link>

                            <div className="text-xs text-slate-500">
                                <div>Free forever.</div>
                                <div>No credit card.</div>
                            </div>
                        </div>

                        {/* Chips header */}
                        <div className="mt-8 text-[11px] font-semibold tracking-[0.18em] text-slate-500">
                            GET 400% MORE DONE • <span className="text-slate-900">CUSTOMIZE YOUR WORKSPACE</span>
                        </div>

                        {/* Chips */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {WORKSPACE_TABS.map((t) => {
                                const isActive = activeLabels.includes(t.key);
                                return (
                                    <button
                                        key={t.key}
                                        type="button"
                                        onClick={() => onSelect(t.key)}
                                        aria-pressed={isActive}
                                        className={[
                                            "relative inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition",
                                            "focus:outline-none focus:ring-2 focus:ring-blue-500/40",
                                            isActive
                                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
                                        ].join(" ")}
                                    >
                                        <span>{t.label}</span>

                                        {/* ✅ check mark */}
                                        {isActive && (
                                            <span className="absolute -right-1 -top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white shadow">
                                                <Icon icon="lucide:check" className="h-3 w-3" />
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="mt-4">
                            <button
                                type="button"
                                className="first-btn px-4 py-2 text-sm font-bold "
                            >
                                Activate
                                <Icon icon="mdi:chevron-right" className="h-4 w-4" />
                            </button>
                        </div>

                    </div>

                    {/* RIGHT (IMAGE ONLY ✅) */}
                    <div className="relative">
                        {/* soft shadow behind like screenshot */}
                        <div className="pointer-events-none absolute -left-6 top-10 h-[78%] w-16 rounded-3xl bg-black/10 blur-2xl" />

                        {/* image card */}
                        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_25px_70px_-35px_rgba(0,0,0,0.45)]">
                            <div className="relative aspect-[16/10] w-full">
                                <Image
                                    key={active.key}
                                    src={active.image.src}
                                    alt={active.image.alt}
                                    fill
                                    priority
                                    className={[
                                        "object-cover",
                                        "transition-opacity duration-300",
                                        imgLoading ? "opacity-0" : "opacity-100",
                                    ].join(" ")}
                                    onLoadingComplete={() => setImgLoading(false)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mt-12 text-center text-[1rem] font-nunito leading-[1.4] text-[#4e4d46]">
                    {"Powering thousands of marketing teams at the fastest growing companies in tech"}
                </p>
                <TrustedLogosAnimation
                    logos={BRAND_IMAGES}
                    imageKey="imageSrc"
                    imgClass="h-10 md:h-12"
                    wrapperHeight="h-14 md:h-20 mt-2"
                />
            </div>

        </section>
    );
}
