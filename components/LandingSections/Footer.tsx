// components/Footer.tsx
import Link from "next/link";
import { Icon } from "@iconify/react";

type FooterLink = { label: string; href: string; badge?: "New" | "Hiring" };

const resources: FooterLink[] = [
    { label: "Blog", href: "#" },
    { label: "Podcasts", href: "#" },
    { label: "Guides", href: "#", badge: "New" },
    { label: "Help Center", href: "#" },
];

const company: FooterLink[] = [
    { label: "Product", href: "#" },
    { label: "About", href: "#" },
    { label: "Careers", href: "#", badge: "Hiring" },
    { label: "Wall of Love", href: "#" },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#141718]">
            {/* Background like screenshot (dark with soft vignette) */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_15%,rgba(255,255,255,0.10),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_65%_0%,rgba(255,255,255,0.07),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_50%_100%,rgba(0,0,0,0.55),transparent_55%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#2C3133] to-[#141718]" />
            </div>

            <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 pb-10 pt-12 lg:pt-14">
                {/* TOP: Left + CTA card */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_560px] lg:gap-16">
                    {/* LEFT */}
                    <div>
                        {/* Logo */}
                        <div className="text-white text-[40px] sm:text-[42px] lg:text-[46px] font-extrabold tracking-[-0.02em]">
                            passionfroot
                        </div>

                        {/* Links columns (1 col on mobile, 2 col on sm+) */}
                        <div className="mt-10 lg:mt-14 grid max-w-[540px] grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
                            {/* Resources */}
                            <div>
                                <div className="font-serif text-white text-[18px] font-semibold">
                                    Resources
                                </div>

                                <ul className="mt-6 space-y-3">
                                    {resources.map((i) => (
                                        <li key={i.label}>
                                            <Link
                                                href={i.href}
                                                className="inline-flex items-center gap-2 text-[14px] text-white/55 hover:text-white/75 transition"
                                            >
                                                {i.label}
                                                {i.badge && (
                                                    <span className="inline-flex items-center gap-2">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF8F52]" />
                                                        <span className="text-[12px] font-semibold text-white/75">
                                                            {i.badge}
                                                        </span>
                                                    </span>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <div className="font-serif text-white text-[18px] font-semibold">
                                    Company
                                </div>

                                <ul className="mt-6 space-y-3">
                                    {company.map((i) => (
                                        <li key={i.label}>
                                            <Link
                                                href={i.href}
                                                className="inline-flex items-center gap-2 text-[14px] text-white/55 hover:text-white/75 transition"
                                            >
                                                {i.label}
                                                {i.badge && (
                                                    <span className="inline-flex items-center gap-2">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF8F52]" />
                                                        <span className="text-[12px] font-semibold text-white/75">
                                                            {i.badge}
                                                        </span>
                                                    </span>
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CTA CARD */}
                    <div className="lg:pt-2">
                        <div className="rounded-2xl bg-gradient-to-b from-[#ff9650] to-[#f18140] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-11 shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
                            <h3 className="font-serif text-[#121212] text-[34px] sm:text-[40px] lg:text-[44px] font-medium leading-[1.02] tracking-[-0.01em]">
                                Make Creator Marketing a <br className="hidden sm:block" />
                                Breeze
                            </h3>

                            <div className="mt-8 space-y-5">
                                <div className="flex items-start gap-3">
                                    <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#151515]">
                                        <Icon icon="mdi:check" className="text-[16px] text-white" />
                                    </span>
                                    <p className="text-[15px] sm:text-[16px] font-medium text-[#151515]">
                                        Get better returns on your time &amp; money
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#151515]">
                                        <Icon icon="mdi:check" className="text-[16px] text-white" />
                                    </span>
                                    <p className="text-[15px] sm:text-[16px] font-medium text-[#151515]">
                                        Save 75% of your time per campaign
                                    </p>
                                </div>
                            </div>

                            {/* Buttons (stack on mobile, inline on sm+) */}
                            <div className="mt-10 sm:mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
                                <Link
                                    href="#"
                                    className="relative inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#2A2A2A] to-[#101010] text-[14px] font-semibold text-white shadow-[0_14px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/10"
                                >
                                    <span className="absolute inset-x-0 top-0 h-px bg-white/20" />
                                    Get access
                                    <Icon icon="mdi:arrow-right" className="text-[18px] opacity-90" />
                                </Link>

                                <Link
                                    href="#"
                                    className="inline-flex h-12 w-full sm:w-[210px] items-center justify-center rounded-xl border border-black/15 bg-white text-[14px] font-semibold text-[#111111] shadow-[0_10px_22px_rgba(0,0,0,0.10)]"
                                >
                                    Talk to us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM: Social + description + legal (stack on mobile, two columns on lg) */}
                <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                    {/* Left bottom */}
                    <div>
                        <div className="flex items-center gap-6 text-white/45">
                            <Link href="#" aria-label="X" className="hover:text-white/70 transition">
                                <Icon icon="mdi:twitter" className="text-[18px]" />
                            </Link>
                            <Link href="#" aria-label="Instagram" className="hover:text-white/70 transition">
                                <Icon icon="mdi:instagram" className="text-[18px]" />
                            </Link>
                            <Link href="#" aria-label="LinkedIn" className="hover:text-white/70 transition">
                                <Icon icon="mdi:linkedin" className="text-[18px]" />
                            </Link>
                            <Link href="#" aria-label="YouTube" className="hover:text-white/70 transition">
                                <Icon icon="mdi:youtube" className="text-[18px]" />
                            </Link>
                        </div>

                        <p className="mt-7 max-w-[610px] text-[13px] leading-[1.75] text-[#A8BDC2]/85">
                            Passionfroot helps marketers to scale their go to market with content
                            partnerships and creators to run and manage their brand partnerships in
                            one place.
                        </p>
                    </div>

                    {/* Right bottom legal */}
                    <div className="text-left lg:text-right text-[12px] text-white/55">
                        <div>© 2026 Passionfroot GmbH. All rights reserved.</div>
                        <div className="mt-2 flex items-center gap-8 lg:justify-end">
                            <Link href="#" className="hover:text-white/75 transition">
                                Impressum
                            </Link>
                            <Link href="#" className="hover:text-white/75 transition">
                                Privacy policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat bubble */}
            <button
                aria-label="Chat"
                className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_16px_34px_rgba(0,0,0,0.35)]"
            >
                <Icon icon="mdi:message-outline" className="text-[22px] text-[#111111]" />
            </button>
        </footer>

    );
}
