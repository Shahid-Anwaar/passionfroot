// components/Footer.tsx
import Link from "next/link";
import { Icon } from "@iconify/react";

type FooterLink = { label: string; href: string; badge?: string };

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const COLUMNS: FooterColumn[] = [
  {
    title: "AI",
    links: [
      { label: "Brain", href: "#" },
      { label: "Super Agents", href: "#" },
      { label: "Ambient Agents", href: "#" },
      { label: "Notetaker", href: "#" },
      { label: "Enterprise Search", href: "#" },
      { label: "Talk to Text", href: "#" },
      { label: "Download", href: "#", badge: "" },
      { label: "iOS & Android", href: "#" },
      { label: "Mac & Windows", href: "#" },
      { label: "BrainGPT", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Chat", href: "#" },
      { label: "Projects", href: "#" },
      { label: "Docs & Wikis", href: "#" },
      { label: "Calendar", href: "#" },
      { label: "Dashboards", href: "#" },
      { label: "Time Tracking", href: "#" },
      { label: "Gantt Charts", href: "#" },
      { label: "Automations", href: "#" },
      { label: "Whiteboards", href: "#" },
      { label: "API", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "vs Monday", href: "#" },
      { label: "vs Notion", href: "#" },
      { label: "vs Asana", href: "#" },
      { label: "vs Jira", href: "#" },
      { label: "vs Trello", href: "#" },
      { label: "vs Slack", href: "#" },
      { label: "vs MS Project", href: "#" },
      { label: "vs Smartsheet", href: "#" },
      { label: "vs Airtable", href: "#" },
      { label: "vs Basecamp", href: "#" },
      { label: "vs Todoist", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#", badge: "Hiring" },
      { label: "Customers", href: "#" },
      { label: "Affiliates", href: "#" },
      { label: "Events", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Consultants", href: "#" },
      { label: "Reviews", href: "#" },
      { label: "Press", href: "#" },
      { label: "Brand", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "24/7 Support", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Get a Demo", href: "#" },
      { label: "Import", href: "#" },
      { label: "Templates", href: "#" },
      { label: "Community", href: "#" },
      { label: "University", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

const SOCIAL = [
  { icon: "mdi:twitter", href: "#", label: "X" },
  { icon: "mdi:instagram", href: "#", label: "Instagram" },
  { icon: "mdi:linkedin", href: "#", label: "LinkedIn" },
  { icon: "mdi:youtube", href: "#", label: "YouTube" },
];

export default function ClickUpFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0B0C0E] text-white">
      {/* passionfroot-ish gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_45%,rgba(0,0,0,0)_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_600px_at_100%_20%,rgba(255,169,80,0.12)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_18%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-16">
        {/* Top brand */}
        <div className="mb-10">
          <Link
            href="/"
            className="font-serif text-[46px] font-semibold tracking-[-0.02em] text-white"
          >
            passionfroot
          </Link>
        </div>

        {/* Columns (ClickUp structure, dark PF styling) */}
        <div className="grid grid-cols-2 gap-x-14 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="font-serif text-[18px] font-semibold text-white">
                {col.title}
              </div>

              <ul className="mt-4 space-y-3">
                {col.links.map((l) => {
                  const isSectionLabel = l.badge === "" && l.label === "Download";
                  if (isSectionLabel) {
                    return (
                      <li key={l.label} className="pt-4">
                        <div className="text-[13px] font-semibold text-white/90">
                          Download
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="inline-flex items-center gap-2 text-[14px] text-white/60 transition-colors hover:text-white"
                      >
                        {l.label}
                        {l.badge ? (
                          <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-[2px] text-[11px] font-semibold text-white/80 ring-1 ring-white/10">
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

        {/* Social + description (like PF second image) */}
        <div className="mt-12 flex flex-col gap-6">
          <div className="flex items-center gap-5">
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

          <p className="max-w-[820px] text-[14px] leading-[1.7] text-white/55">
            Passionfroot helps marketers to scale their go to market with content
            partnerships and creators to run and manage their brand partnerships
            in one place.
          </p>
        </div>

        {/* Bottom thin line + meta */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-[13px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Passionfroot</div>
            <div className="flex items-center gap-6">
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
