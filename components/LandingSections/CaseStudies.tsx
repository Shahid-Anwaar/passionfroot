// components/CaseStudies.tsx
import Link from "next/link";
import { Icon } from "@iconify/react";

type CaseStudy = {
    id: string;
    href: string;
    label: string; // CUSTOMER STORY
    title: string;
    desc?: string;
    readTime: string;
    // Media block (left)
    mediaBg: string; // tailwind bg color string
    mediaLogo: React.ReactNode;
    // Layout
    variant: "featured" | "compact";
};

const studies: CaseStudy[] = [
    {
        id: "guidde",
        href: "#",
        label: "CUSTOMER STORY",
        title: "How Guidde made creators a scalable\ngrowth channel with Passionfroot",
        desc: "Guidde is the generative AI platform for business that helps teams create video documentation 11x faster.",
        readTime: "4 min read",
        mediaBg: "bg-[#FFB07B]",
        mediaLogo: (
            <div className="text-white text-[54px] font-semibold tracking-[-0.02em]">
                guidde.
            </div>
        ),
        variant: "featured",
    },
    {
        id: "intercom",
        href: "#",
        label: "CUSTOMER STORY",
        title: "Becoming the definitive\nAI-first Customer Service\nPlatform",
        readTime: "5 min read",
        mediaBg: "bg-[#8EEBFF]",
        mediaLogo: (
            <div className="flex items-center gap-3 text-black">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black/10">
                    <Icon icon="simple-icons:intercom" className="text-5" />
                </span>
                <span className="text-[14px] font-semibold tracking-[0.08em]">
                    INTERCOM
                </span>
            </div>
        ),
        variant: "compact",
    },
    {
        id: "freshbooks",
        href: "#",
        label: "CUSTOMER STORY",
        title: "How Freshbooks reached\n2M+ impressions with\nPassionfroot",
        readTime: "5 min read",
        mediaBg: "bg-[#FFB07B]",
        mediaLogo: (
            <div className="flex items-center gap-2 text-white">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#1E6BFF] text-white text-[16px] font-bold">
                    f
                </span>
                <span className="text-[14px] font-semibold">FreshBooks</span>
            </div>
        ),
        variant: "compact",
    },
];

function Card({
    study,
    className = "",
}: {
    study: CaseStudy;
    className?: string;
}) {
    return (
        <Link
            href={study.href}
            className={[
                "group block p-3 rounded-2xl border border-black/10 bg-white",
                "shadow-[0_16px_40px_rgba(0,0,0,0.10)]",
                "hover:shadow-[0_18px_52px_rgba(0,0,0,0.14)] transition-shadow",
                className,
            ].join(" ")}
        >
            <div
                className={[
                    "grid h-full gap-0",
                    study.variant === "featured"
                        ? "grid-cols-1 lg:grid-cols-2"
                        : "grid-cols-1 sm:grid-cols-2",
                ].join(" ")}
            >
                {/* Media block */}
                <div
                    className={[
                        "relative overflow-hidden",
                        study.mediaBg,
                        study.variant === "featured"
                            ? "h-60 lg:h-full rounded-2xl"
                            : "h-[220px] sm:h-auto rounded-2xl",
                    ].join(" ")}
                >
                    {/* soft gradient like screenshot */}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.00))]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        {study.mediaLogo}
                    </div>
                </div>

                {/* Content */}
                <div
                    className={[
                        "flex h-full flex-col",
                        study.variant === "featured" ? "ps-4" : "ps-3",
                    ].join(" ")}
                >
                    <div className="text-[13px] font-semibold tracking-[0.18em] text-black/45">
                        {study.label}
                    </div>

                    <h3
                        className={[
                            "mt-5 whitespace-pre-line font-serif text-[#141414] tracking-[-0.01em]",
                            study.variant === "featured"
                                ? "text-8 leading-[1.1]"
                                : "text-6 leading-[1.12]",
                        ].join(" ")}
                    >
                        {study.title}
                    </h3>

                    {study.desc && (
                        <p className="mt-4 max-w-130 text-[16px] leading-[1.7] text-black/60">
                            {study.desc}
                        </p>
                    )}

                    <div className="mt-auto flex items-end justify-between pt-32">
                        <div className="text-[15px] text-black/45">{study.readTime}</div>

                        <span className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#1A1A1A] px-4 text-3 font-semibold text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)]">
                            Read more
                            <Icon icon="mdi:arrow-right" className="text-[16px]" />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function CaseStudies() {
    const featured = studies.find((s) => s.variant === "featured")!;
    const compact = studies.filter((s) => s.variant === "compact");

    return (
        <section className="bg-[#FCFCFA]">
            <div className="mx-auto max-w-350 px-6 sm:px-10 py-12 lg:py-16">
                <h2 className="text-center font-serif text-[44px] font-semibold leading-[1.05] tracking-[-0.01em] text-[#141414]">
                    Case Studies
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-6">
                    {/* Top featured card */}
                    <Card study={featured} />

                    {/* Bottom row cards */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {compact.map((s) => (
                            <Card key={s.id} study={s} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
