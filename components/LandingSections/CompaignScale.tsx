"use client";

import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";
import { Icon } from "@iconify/react";

const items = [
  { title: "Design and run campaigns", desc: "Roster, tasks, approvals, and deliverables — all in one cockpit.", icon: "mdi:view-dashboard-outline" },
  { title: "Publish a live campaign", desc: "Let creators apply to your campaign instead of cold outreach.", icon: "mdi:bullhorn-outline" },
  { title: "Book slots directly", desc: "Reduce scheduling back-and-forth with clear availability.", icon: "mdi:calendar-clock" },
];

export default function CampaignScale() {
  return (
    <section className="bg-zinc-950">
      <Container className="py-14">
        <FadeIn>
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                Build and run campaigns — at scale
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Replace fragile spreadsheets with a workflow built for repeatable creator programs.
              </p>

              <div className="mt-8 space-y-4">
                {items.map((it) => (
                  <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-orange-400/15 text-orange-200">
                        <Icon icon={it.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm font-bold text-white">{it.title}</div>
                        <div className="mt-1 text-sm text-zinc-300">{it.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.55)]">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white/90">Campaign board</div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Preview</span>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {["Brief", "Outreach", "Approvals", "Live"].map((c) => (
                    <div key={c} className="rounded-2xl bg-white/5 p-4">
                      <div className="text-xs text-zinc-400">{c}</div>
                      <div className="mt-3 h-20 rounded-xl bg-white/5" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none mt-6 h-24 rounded-3xl bg-orange-400/10 blur-2xl" />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
