"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";

const platforms = [
  { name: "LinkedIn", icon: "mdi:linkedin" },
  { name: "Podcast", icon: "mdi:podcast" },
  { name: "Instagram", icon: "mdi:instagram" },
  { name: "X", icon: "simple-icons:x" },
  { name: "TikTok", icon: "ic:baseline-tiktok" },
  { name: "Newsletter", icon: "mdi:email-newsletter" },
  { name: "YouTube", icon: "mdi:youtube" },
];

export default function StatsPlatforms() {
  const [active, setActive] = useState(platforms[0].name);

  return (
    <section className="bg-zinc-950">
      <Container className="py-14">
        <FadeIn>
          <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Access the right audiences — on every platform
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { big: "300M", small: "Target audience reach" },
              { big: "2B", small: "Monthly impressions potential" },
              { big: "60%", small: "Lower CPC vs. legacy channels*" },
            ].map((s) => (
              <div key={s.small} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-4xl font-extrabold text-white">{s.big}</div>
                <div className="mt-2 text-sm text-zinc-400">{s.small}</div>
              </div>
            ))}
          </div>

          <p className="mt-4 max-w-3xl text-xs leading-5 text-zinc-500">
            *Replace this footnote with your own source/study if you plan to claim numbers publicly.
          </p>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => (
                <button
                  key={p.name}
                  onClick={() => setActive(p.name)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition
                    ${active === p.name ? "bg-white text-zinc-950" : "bg-white/5 text-white/80 hover:bg-white/10"}`}
                >
                  <Icon icon={p.icon} className="h-4 w-4" />
                  {p.name}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="text-lg font-bold text-white">{active} placements</div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Preview a “best-fit” placement card. Replace this mock UI with screenshots of your product later.
                </p>
              </div>
              <div className="md:col-span-7">
                <div className="rounded-2xl bg-gradient-to-b from-white/10 to-white/0 p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white/90">Featured creator</div>
                    <span className="rounded-full bg-orange-400/20 px-3 py-1 text-xs font-semibold text-orange-200">
                      Great match
                    </span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {["Eng rate", "Avg views", "Typical rate"].map((k) => (
                      <div key={k} className="rounded-xl bg-white/5 p-4">
                        <div className="text-xs text-zinc-400">{k}</div>
                        <div className="mt-1 text-lg font-extrabold text-white">
                          {k === "Eng rate" ? "8.6%" : k === "Avg views" ? "256K" : "$2,500"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
