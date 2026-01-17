"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";

export default function FinalCTA() {
  return (
    <section className="bg-zinc-950">
      <Container className="py-16">
        <FadeIn>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-b from-orange-300 to-orange-400 p-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <h3 className="font-serif text-4xl leading-tight text-black">
                Let’s make creatorsssssssss your next growth channel
              </h3>
              <div className="mt-4 space-y-2 text-sm font-semibold text-black/90">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-white">
                    <Icon icon="mdi:check" className="h-4 w-4" />
                  </span>
                  Get better returns on your time &amp; money
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-white">
                    <Icon icon="mdi:check" className="h-4 w-4" />
                  </span>
                  Save time per campaign with one workflow
                </div>
              </div>
            </div>

            <div className="md:col-span-5 md:flex md:justify-end">
              <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                <Link
                  href="/get-access"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
                >
                  Get access <Icon icon="mdi:arrow-right" className="h-4 w-4" />
                </Link>
                <Link
                  href="/talk-to-us"
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-white/90 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-white transition"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
