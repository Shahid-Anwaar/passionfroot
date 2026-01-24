// components/PricingTabsSection.tsx
"use client";

import React, { useMemo, useState } from "react";
import { Icon } from "@iconify/react";

type ReplaceChip = { text: string; icon?: string };
type Feature = { text: string; replaces?: ReplaceChip[] };

type PricingPlan = {
  id: string;
  badge?: string;
  name: string;
  price: string;
  helper?: string;
  audienceLine?: string;
  features: Feature[];
  cta: string;
  ctaHint?: string;
  accent?: "peach" | "mint" | "blue";
};

type TabKey = "creators" | "brands";

const TABS: { key: TabKey; label: string }[] = [
  { key: "creators", label: "For creators" },
  { key: "brands", label: "For brands" },
];

const DATA: Record<TabKey, PricingPlan[]> = {
  creators: [
    {
      id: "creator-free",
      badge: "GET STARTED",
      name: "Free",
      price: "$0",
      helper: "Helping creators get started",
      audienceLine: "For all creators",
      accent: "peach",
      features: [
        { text: "Media kit with live stats", replaces: [{ text: "Squarespace" }] },
        { text: "Calendar & scheduling", replaces: [{ text: "Calendly" }] },
        {
          text: "Automated workflows & booking forms",
          replaces: [{ text: "Typeform" }, { text: "Google Form" }],
        },
        {
          text: "Streamlined payments",
          replaces: [{ text: "Stripe" }, { text: "PayPal" }, { text: "Bank Transfer" }],
        },
        { text: "Messaging", replaces: [{ text: "WhatsApp" }, { text: "Email" }] },
        {
          text: "High quality brand deals from our ad network",
          replaces: [{ text: "Cold outreach" }, { text: "DM pitching" }],
        },
      ],
      cta: "Start for free →",
    },
    {
      id: "creator-pro",
      badge: "MOST POPULAR",
      name: "Pro",
      price: "$19",
      helper: "Per month · billed monthly",
      audienceLine: "For growing creators",
      accent: "mint",
      features: [
        { text: "Everything in Free", replaces: [{ text: "Upgrading later" }] },
        { text: "Custom media kit + branding", replaces: [{ text: "Canva templates" }] },
        { text: "Advanced analytics & exports", replaces: [{ text: "Manual tracking" }, { text: "Spreadsheets" }] },
        { text: "Proposal templates & rate cards", replaces: [{ text: "PDF docs" }, { text: "Google Docs" }] },
        { text: "Priority support", replaces: [{ text: "Community-only support" }] },
      ],
      cta: "Upgrade to Pro →",
      ctaHint: "Cancel anytime",
    },
    {
      id: "creator-studio",
      badge: "FOR TEAMS",
      name: "Studio",
      price: "$49",
      helper: "Per month · includes 3 seats",
      audienceLine: "For agencies & creator teams",
      accent: "blue",
      features: [
        { text: "Everything in Pro", replaces: [{ text: "Multiple tools" }] },
        { text: "Multiple creators under one workspace", replaces: [{ text: "Separate accounts" }] },
        { text: "Approval workflows & roles", replaces: [{ text: "Endless WhatsApp approvals" }] },
        { text: "Shared inbox + automations", replaces: [{ text: "Manual follow-ups" }, { text: "Email threads" }] },
        { text: "Dedicated onboarding", replaces: [{ text: "Self-setup docs" }] },
      ],
      cta: "Talk to sales →",
      ctaHint: "Get a custom setup",
    },
  ],

  brands: [
    {
      id: "brand-starter",
      badge: "GET STARTED",
      name: "Starter",
      price: "$0",
      helper: "Try the platform",
      audienceLine: "For small teams",
      accent: "peach",
      features: [
        { text: "Discover creators & newsletters", replaces: [{ text: "Manual searching" }, { text: "Instagram explore" }] },
        { text: "Shortlist and save profiles", replaces: [{ text: "Bookmarks" }, { text: "Spreadsheets" }] },
        { text: "Basic outreach templates", replaces: [{ text: "Spreadsheets" }] },
        { text: "Simple campaign tracking", replaces: [{ text: "Sticky notes" }, { text: "Manual updates" }] },
        { text: "Email support", replaces: [{ text: "Community-only support" }] },
      ],
      cta: "Start free →",
    },
    {
      id: "brand-growth",
      badge: "MOST POPULAR",
      name: "Growth",
      price: "$199",
      helper: "Per month · billed monthly",
      audienceLine: "For scaling campaigns",
      accent: "mint",
      features: [
        { text: "Everything in Starter", replaces: [{ text: "Multiple subscriptions" }] },
        { text: "Managed collaborations & contracts", replaces: [{ text: "Email back-and-forth" }, { text: "PDF contracts" }] },
        {
          text: "Multi-channel campaigns (newsletter, video, social)",
          replaces: [{ text: "Separate tools per channel" }],
        },
        { text: "Approval + stakeholder sharing", replaces: [{ text: "Screenshot approvals" }, { text: "WhatsApp threads" }] },
        { text: "Priority support", replaces: [{ text: "Standard support queue" }] },
      ],
      cta: "Choose Growth →",
      ctaHint: "Best for 5–20 campaigns/month",
    },
    {
      id: "brand-enterprise",
      badge: "ENTERPRISE",
      name: "Enterprise",
      price: "$299",
      helper: "Tailored for large orgs",
      audienceLine: "For performance teams",
      accent: "blue",
      features: [
        { text: "Everything in Growth", replaces: [{ text: "Complex multi-tools" }] },
        { text: "Custom reporting & data exports", replaces: [{ text: "Manual BI reports" }, { text: "Ad-hoc spreadsheets" }] },
        { text: "SSO & advanced permissions", replaces: [{ text: "Shared passwords" }] },
        { text: "Dedicated success manager", replaces: [{ text: "Generic support" }] },
        { text: "Custom SLAs", replaces: [{ text: "No guaranteed response time" }] },
      ],
      cta: "Contact sales →",
      ctaHint: "Security + onboarding included",
    },
  ],
};


function Chip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-black/5 px-2 py-0.5 text-[11px] font-medium text-black/60">
      {text}
    </span>
  );
}

function Check() {
  return (
    <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
      <Icon icon="lucide:check" className="text-[14px]" />
    </span>
  );
}

function AccentRing({ accent }: { accent?: PricingPlan["accent"] }) {
  const ring =
    accent === "mint"
      ? "ring-emerald-200"
      : accent === "blue"
      ? "ring-sky-200"
      : "ring-orange-200";
  const glow =
    accent === "mint"
      ? "shadow-[0_0_0_6px_rgba(16,185,129,0.14)]"
      : accent === "blue"
      ? "shadow-[0_0_0_6px_rgba(14,165,233,0.14)]"
      : "shadow-[0_0_0_6px_rgba(251,146,60,0.14)]";

  return (
    <div className={`pointer-events-none absolute -inset-1 rounded-[22px] ring-2 ${ring} ${glow}`} />
  );
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div className="relative">
      <AccentRing accent={plan.accent} />

      <div className="relative flex flex-col h-full overflow-hidden rounded-[18px] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.10)] ring-1 ring-black/10">
        {plan.badge ? (
          <div className="mb-4 text-center text-[12px] font-bold tracking-[0.18em] text-orange-600">
            {plan.badge}
          </div>
        ) : null}

        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-[16px] font-semibold text-black">{plan.name}</div>
            {plan.helper ? (
              <div className="mt-1 text-[12px] font-medium text-black/55">{plan.helper}</div>
            ) : null}
          </div>

          <div className="text-right">
            <div className="text-[42px] font-semibold leading-none tracking-[-0.03em] text-black">
              {plan.price}
            </div>
          </div>
        </div>

        {plan.audienceLine ? (
          <div className="mt-5 text-[13px] font-semibold text-black">{plan.audienceLine}</div>
        ) : null}

        <div className="mt-4 mb-4 space-y-4">
          {plan.features.map((f, idx) => (
            <div key={idx} className="flex gap-3">
              <Check />
              <div className="min-w-0">
                <div className="text-[13px] font-semibold leading-snug text-black">{f.text}</div>

                {f.replaces?.length ? (
                  <div className="mt-1.5 flex flex-wrap items-center gap-2">
                    <span className="text-[12px] font-medium text-black/45">Replaces</span>
                    {f.replaces.map((r, i) => (
                      <Chip key={i} text={r.text} />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-auto w-full rounded-[10px] bg-gradient-to-b from-black to-black/90 px-4 py-3 text-[14px] font-semibold text-white shadow-[0_12px_20px_rgba(0,0,0,0.22)] hover:from-black/95 hover:to-black"
        >
          {plan.cta}
        </button>

        {plan.ctaHint ? (
          <div className="mt-3 text-center text-[12px] font-medium text-black/45">
            {plan.ctaHint}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function PricingTabsSection({
  heading = "Monetize your content\nNo out-of-pocket costs",
  subheading = "Run your existing business easier with our tools and earn more with our ad network.",
  className = "",
}: {
  heading?: string;
  subheading?: string;
  className?: string;
}) {
  const [tab, setTab] = useState<TabKey>("creators");

  const plans = useMemo(() => DATA[tab], [tab]);

  return (
    <section className={["w-full bg-[#f7f4ee] py-14 sm:py-16 sm:pt-24", className].join(" ")}>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="whitespace-pre-line font-serif text-[34px] leading-[1.05] tracking-[-0.03em] text-black sm:text-[52px]">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[13px] font-medium leading-relaxed text-black/60 sm:text-[14px]">
            {subheading}
          </p>

          <div className="mt-7 inline-flex rounded-full bg-white p-1 ring-1 ring-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            {TABS.map((t) => {
              const active = t.key === tab;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTab(t.key)}
                  className={[
                    "rounded-full px-4 py-2 text-[13px] font-semibold transition",
                    active ? "bg-black text-white" : "text-black/70 hover:text-black",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((p) => (
            <PricingCard key={p.id} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
