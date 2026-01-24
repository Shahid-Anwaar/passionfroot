// components/FaqSection.tsx
"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { FaqItem } from "@/data/types";
import { LEFT, RIGHT } from "@/data/data";

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
                className="group flex w-full items-start sm:items-center gap-3 sm:gap-4 text-left"
                aria-expanded={isOpen}
            >
                {/* Circle icon */}
                <span
                    className={cx(
                        "inline-flex h-6 w-6 items-center justify-center rounded-full shrink-0 mt-[2px] sm:mt-0",
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
                        "font-semibold text-[#424141] leading-[1.35]",
                        "text-[16px] sm:text-[18px] lg:text-[20px]"
                    )}
                >
                    {item.question}
                </span>
            </button>

            {/* Smooth open/close */}
            <div
                className={cx(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div className="overflow-hidden">
                    <p className="mt-3 pl-9 sm:pl-10 pr-1 sm:pr-2 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.45] text-[#6A6A6A]">
                        {item.answer}
                    </p>
                </div>
            </div>

            {/* Spacing like screenshot */}
            <div className="h-7 sm:h-10" />
        </div>
    );
}

export default function FaqSection() {
    // single-open behavior (like the screenshot: only one expanded)
    const [openId, setOpenId] = React.useState<string>("");

    return (
        <section className="bg-[#FCFCFA]">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
                <h2 className="font-serif text-[#141414] font-semibold leading-[1.08] tracking-[-0.01em] text-[30px] sm:text-[40px] lg:text-[52px]">
                    Frequently Asked Questions
                </h2>

                {/* ✅ keep same on lg+ | responsive below lg */}
                <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* LEFT COL */}
                    <div>
                        {LEFT.map((item) => (
                            <AccordionRow
                                key={item.id}
                                item={item}
                                isOpen={openId === item.id}
                                onToggle={() => setOpenId((prev) => (prev === item.id ? "" : item.id))}
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
                                onToggle={() => setOpenId((prev) => (prev === item.id ? "" : item.id))}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
