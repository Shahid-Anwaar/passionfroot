// components/FaqSection.tsx
"use client";

import React from "react";
import { Icon } from "@iconify/react";

type FaqItem = {
    id: string;
    question: string;
    answer: string;
};

const LEFT: FaqItem[] = [
    {
        id: "what-is",
        question: "What is Passionfroot?",
        answer:
            "Passionfroot is a platform to help B2B brands find, manage, and scale creator partnerships across platforms.",
    },
    {
        id: "who-can-use",
        question: "What types of businesses can use Passionfroot?",
        answer:
            "B2B brands, SaaS companies, agencies, and teams running creator or influencer programs can use Passionfroot to manage the entire workflow end-to-end.",
    },
    {
        id: "how-works",
        question: "How does Passionfroot work?",
        answer:
            "Search creators across platforms, build a shortlist, collaborate, manage tasks, track outcomes, and handle payments from one place.",
    },
    {
        id: "platforms",
        question: "What platforms can I use Passionfroot for?",
        answer:
            "You can run campaigns across multiple creator platforms such as newsletters, YouTube, podcasts, social platforms, and more.",
    },
    {
        id: "discover",
        question: "How do I discover the right creators for my brand?",
        answer:
            "Use filters, categories, and search to find creators aligned with your audience, then review performance signals and shortlist quickly.",
    },
];

const RIGHT: FaqItem[] = [
    {
        id: "payments",
        question: "How are payments managed?",
        answer:
            "Payments are handled through a centralized workflow to simplify payouts and tracking, with clear status and accountability.",
    },
    {
        id: "multi-campaigns",
        question: "Can I run multiple campaigns at once?",
        answer:
            "Yes, Passionfroot allows you to manage multiple campaigns across different creators and platforms simultaneously. Our intuitive dashboard makes it easy to track all campaigns, communications, and performance in one place.",
    },
    {
        id: "get-started",
        question: "How do I get started with Passionfroot?",
        answer:
            "Request access, complete onboarding, then start searching creators and launching campaigns from your dashboard.",
    },
];

function cx(...classes: Array<string | false | undefined>) {
    return classes.filter(Boolean).join(" ");
}

function AccordionRow({
    item,
    isOpen,
    onToggle,
}: {
    item: FaqItem;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="relative mb-3">
            {/* Top row */}
            <button
                type="button"
                onClick={onToggle}
                className="group flex w-full items-center gap-4 text-left"
                aria-expanded={isOpen}
            >
                {/* Circle icon */}
                <span
                    className={cx(
                        "inline-flex h-6 w-6 items-center justify-center rounded-full",
                        isOpen ? "bg-[#ff9650]" : "bg-[#151515]"
                    )}
                >
                    <Icon
                        icon="mdi:chevron-down"
                        className={cx(
                            "text-[18px] text-white transition-transform duration-300",
                            isOpen ? "rotate-180" : "rotate-0"
                        )}
                    />
                </span>

                {/* Question */}
                <span
                    className={cx(
                        "text-[20px] font-semibold text-[#424141]",
                        "leading-[1.35]"
                    )}
                >
                    {item.question}
                </span>
            </button>

            {/* Active underline line (matches screenshot feel) */}
            {/* <div
        className={cx(
          "mt-3 h-[2px] w-full transition-opacity duration-200",
          isOpen ? "opacity-100 bg-[#2F58FF]" : "opacity-0"
        )}
      /> */}

            {/* Smooth open/close */}
            <div
                className={cx(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="overflow-hidden">
                    <p className="mt-3 pl-10 pr-2 text-[16px] leading-[1.4] text-[#6A6A6A]">
                        {item.answer}
                    </p>
                </div>
            </div>

            {/* Spacing like screenshot */}
            <div className="h-10" />
        </div>
    );
}

export default function FaqSection() {
    // single-open behavior (like the screenshot: only one expanded)
    const [openId, setOpenId] = React.useState<string>("multi-campaigns");

    return (
        <section className="bg-[#FCFCFA]">
            <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 py-16 lg:py-20">
                <h2 className="font-serif text-[#141414] text-[44px] lg:text-[52px] font-semibold leading-[1.08] tracking-[-0.01em]">
                    Frequently Asked Questions
                </h2>

                {/* 2-column layout */}
                <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* LEFT COL */}
                    <div>
                        {LEFT.map((item) => (
                            <AccordionRow
                                key={item.id}
                                item={item}
                                isOpen={openId === item.id}
                                onToggle={() =>
                                    setOpenId((prev) => (prev === item.id ? "" : item.id))
                                }
                            />
                        ))}
                    </div>

                    {/* RIGHT COL */}
                    <div>
                        {RIGHT.map((item) => (
                            <AccordionRow
                                key={item.id}
                                item={item}
                                isOpen={openId === item.id}
                                onToggle={() =>
                                    setOpenId((prev) => (prev === item.id ? "" : item.id))
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
