"use client";

import { LOGOS } from "@/data/landing";
import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";

function LogoPill({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
      {name}
    </div>
  );
}

export default function LogoWall() {
  const items = [...LOGOS, ...LOGOS]; // duplicate for seamless loop
  return (
    <section className="bg-zinc-950">
      <Container className="py-12">
        <FadeIn>
          <div className="text-sm font-semibold text-white/70">
            Powering teams at fast-growing companies
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-4">
            <div className="marquee gap-3">
              {items.map((n, i) => (
                <LogoPill key={`${n}-${i}`} name={n} />
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
