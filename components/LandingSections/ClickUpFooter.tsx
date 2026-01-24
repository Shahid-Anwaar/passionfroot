// components/Footer.tsx
import Link from "next/link";
import { Icon } from "@iconify/react";
import { COLUMNS, SOCIAL } from "@/data/data";

export default function ClickUpFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0B0C0E] text-white">
      {/* passionfroot-ish gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_45%,rgba(0,0,0,0)_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_600px_at_100%_20%,rgba(255,169,80,0.12)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_18%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16">
        {/* Top brand */}
        <div className="mb-8 sm:mb-10">
          <Link
            href="/"
            className="font-serif text-[34px] sm:text-[46px] font-semibold tracking-[-0.02em] text-white"
          >
            passionfroot
          </Link>
        </div>

        {/* ✅ keep same on lg/xl, improve below lg */}
        <div className="grid grid-cols-2 gap-x-8 sm:gap-x-14 gap-y-8 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {COLUMNS.map((col) => (
            <div key={col.title} className="min-w-0">
              <div className="font-serif text-[16px] sm:text-[18px] font-semibold text-white">
                {col.title}
              </div>

              <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
                {col.links.map((l) => {
                  const isSectionLabel = l.badge === "" && l.label === "Download";
                  if (isSectionLabel) {
                    return (
                      <li key={l.label} className="pt-3 sm:pt-4">
                        <div className="text-[12px] sm:text-[13px] font-semibold text-white/90">
                          Download
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="inline-flex max-w-full items-center gap-2 text-[13px] sm:text-[14px] text-white/60 transition-colors hover:text-white"
                      >
                        <span className="truncate">{l.label}</span>

                        {l.badge ? (
                          <span className="ml-1 inline-flex shrink-0 items-center gap-1 rounded-full bg-white/10 px-2 py-[2px] text-[10px] sm:text-[11px] font-semibold text-white/80 ring-1 ring-white/10">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FFB36B]" />
                            {l.badge}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + description */}
        <div className="mt-10 sm:mt-12 flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {SOCIAL.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
              >
                <Icon icon={s.icon} className="h-5 w-5" />
              </Link>
            ))}
          </div>

          <p className="max-w-[820px] text-[13px] sm:text-[14px] leading-[1.7] text-white/55">
            Passionfroot helps marketers to scale their go to market with content
            partnerships and creators to run and manage their brand partnerships
            in one place.
          </p>
        </div>

        {/* Bottom thin line + meta */}
        <div className="mt-8 sm:mt-10 border-t border-white/10 pt-5 sm:pt-6">
          <div className="flex flex-col gap-3 text-[12px] sm:text-[13px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Passionfroot</div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="#" className="hover:text-white/80">
                Security
              </Link>
              <Link href="#" className="hover:text-white/80">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white/80">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
