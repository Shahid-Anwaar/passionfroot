"use client";

import { TESTIMONIALS } from "@/data/landing";
import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";

export default function Testimonials() {
  return (
    <section className="bg-zinc-950">
      <Container className="py-14">
        <FadeIn>
          <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Loved by teams building category-defining brands
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm leading-6 text-zinc-200">“{t.quote}”</p>
                <div className="mt-5">
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-zinc-400">{t.title}</div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-xl font-extrabold text-white">{t.metric1}</div>
                    <div className="text-xs text-zinc-400">{t.metric1Label}</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-xl font-extrabold text-white">{t.metric2}</div>
                    <div className="text-xs text-zinc-400">{t.metric2Label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
