import Link from "next/link";
import { Icon } from "@iconify/react";

export default function FooterLikeSupreme() {
    return (
        <footer className="bg-[#1f2322] text-white">
            <div className="mx-auto max-w-[1400] px-6 py-16">
                {/* Top Row: Brand + Social */}
                <div className="flex items-center justify-between gap-6">
                    <Link
                        href="/"
                        className="font-serif text-[34px] sm:text-[46px] font-semibold tracking-[-0.02em] text-white"
                    >
                        passionfroot
                    </Link>

                    <div className="flex items-center gap-5 text-white/70">
                        <a
                            href="#"
                            aria-label="X"
                            className="hover:text-white transition-colors"
                        >
                            <Icon icon="mdi:twitter" className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="hover:text-white transition-colors"
                        >
                            <Icon icon="mdi:instagram" className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="hover:text-white transition-colors"
                        >
                            <Icon icon="mdi:linkedin" className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            aria-label="YouTube"
                            className="hover:text-white transition-colors"
                        >
                            <Icon icon="mdi:youtube" className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="mt-14 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-semibold text-white/90">Resources</h4>
                        <ul className="mt-5 space-y-3 text-white/65">
                            <li><Link className="hover:text-white transition-colors" href="/blog">Blog</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/podcasts">Podcasts</Link></li>
                            <li className="flex items-center gap-2">
                                <Link className="hover:text-white transition-colors" href="/guides">Guides</Link>
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">
                                    New
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Link className="hover:text-white transition-colors" href="/stories">Stories</Link>
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">
                                    New
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold text-white/90">Company</h4>
                        <ul className="mt-5 space-y-3 text-white/65">
                            <li><Link className="hover:text-white transition-colors" href="/product">Product</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/about">About</Link></li>
                            <li className="flex items-center gap-2">
                                <Link className="hover:text-white transition-colors" href="/careers">Careers</Link>
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-300 border border-orange-400/20">
                                    Hiring
                                </span>
                            </li>
                            <li><Link className="hover:text-white transition-colors" href="/wall-of-love">Wall of Love</Link></li>
                        </ul>
                    </div>

                    {/* Industry */}
                    <div>
                        <h4 className="text-sm font-semibold text-white/90">Industry</h4>
                        <ul className="mt-5 space-y-3 text-white/65">
                            <li><Link className="hover:text-white transition-colors" href="/industry/ecommerce">E-commerce</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/industry/saas">SaaS</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/industry/education">Education</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/industry/health-fitness">Health & Fitness</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm font-semibold text-white/90">Support</h4>
                        <ul className="mt-5 space-y-3 text-white/65">
                            <li><Link className="hover:text-white transition-colors" href="/contact">Contact Us</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/docs">Documentation</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/api">API Reference</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/status">Status</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold text-white/90">Legal</h4>
                        <ul className="mt-5 space-y-3 text-white/65">
                            <li><Link className="hover:text-white transition-colors" href="/terms">Terms of Service</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/cookie-policy">Cookie Policy</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/gdpr">GDPR</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-14 h-px w-full bg-white/10" />

                {/* Bottom Row */}
                <div className="mt-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <p className="max-w-xl text-sm leading-6 text-white/70">
                        PassionFroot helps creators, coaches, and businesses build high-converting pages, manage content, and grow with automation — all in one platform.
                    </p>

                    <div className="text-right">
                        <p className="text-sm text-white/70">
                            © {new Date().getFullYear()} PassionFroot. All rights reserved.
                        </p>
                        <div className="mt-3 flex justify-end gap-6 text-sm text-white/65">
                            <Link className="hover:text-white transition-colors" href="/impressum">
                                Impressum
                            </Link>
                            <Link className="hover:text-white transition-colors" href="/privacy-policy">
                                Privacy policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
