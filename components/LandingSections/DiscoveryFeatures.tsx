"use client";

import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";
import { Icon } from "@iconify/react";

const features = [
  {
    title: "AI-powered creator search",
    desc: "Search across platforms and niches — shortlist the best fits in minutes.",
    icon: "mdi:sparkles",
  },
  {
    title: "Creator profiles & media kits",
    desc: "Compare verified stats, past work, rates, and fit — without digging.",
    icon: "mdi:chart-line",
  },
  {
    title: "AI recommendations",
    desc: "Describe your goal and get a campaign-ready shortlist instantly.",
    icon: "mdi:wand",
  },
];

export default function DiscoveryFeatures() {
  return (
    <section className="bg-zinc-950">
      <Container className="py-14">
        <FadeIn>
          <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Find the best creators fast
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/7"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-400/15 text-orange-200">
                  <Icon icon={f.icon} className="h-5 w-5" />
                </div>
                <div className="mt-4 text-lg font-bold text-white">{f.title}</div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{f.desc}</p>
                <div className="mt-6 h-40 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 transition group-hover:from-orange-400/15" />
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
