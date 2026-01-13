"use client";

import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";


export default function OldVsNew() {
  return (
    <section className="bg-zinc-950">
      <Container className="py-14">
        <FadeIn>
          <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Traditional marketing is being disrupted
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
            Personality-led growth is changing how brands build trust and demand.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/80">The Old Way</div>
              <p className="mt-2 text-sm text-zinc-300">
                Crowded channels, rising costs, and decreasing attention.
              </p>
              <div className="mt-5 h-56 rounded-2xl bg-gradient-to-b from-white/10 to-white/0" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white/80">The New Way</div>
              <p className="mt-2 text-sm text-zinc-300">
                Partner with trusted creators and scale top-of-funnel through real audiences.
              </p>
              <div className="mt-5 h-56 rounded-2xl bg-gradient-to-b from-orange-400/20 to-transparent" />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
