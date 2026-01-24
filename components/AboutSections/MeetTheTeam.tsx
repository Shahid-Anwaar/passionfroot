// components/MeetTheTeamSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

type FastFacts = {
  passionateAbout: string;
  alwaysConsuming: string;
  ifIWereAFroot: string;
};

type TeamMember = {
  id: string;
  name: string;
  roleTag: string; // blue pill text
  roleTitle?: string; // optional small title line
  image: string; // pexels image url
  hoverBg: string; // tailwind bg color class
  subline: string; // e.g. "DE/IN"
  bio: string[]; // paragraphs
  fastFacts: FastFacts;
};

const TEAM: TeamMember[] = [
  {
    id: "jen",
    name: "Jen",
    roleTag: "CO-FOUNDER & CEO",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverBg: "hover:bg-[#FADBCB]",
    subline: "UK · Founder mindset",
    bio: [
      "I care deeply about making collaboration simple and human. Building products that feel calm, intuitive, and delightful is my thing.",
      "Before this, I worked across growth and partnerships, learning what brands and creators really need to move fast—without losing trust.",
      "My goal: help people build long-term partnerships that feel good on both sides.",
    ],
    fastFacts: {
      passionateAbout: "product craft, storytelling, creator economy",
      alwaysConsuming: "Founder podcasts, design breakdowns, newsletters",
      ifIWereAFroot: "Passionfruit (obviously)",
    },
  },
  {
    id: "jens",
    name: "Jens",
    roleTag: "CO-FOUNDER & COO",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverBg: "hover:bg-[#FCE8C9]",
    subline: "DE/IN · Ops & Community",
    bio: [
      "I was raised in Cologne, and lived abroad for years with my longest stint in North India.",
      "I’m active in the Indo-German community and love building systems that help people do their best work.",
      "I worked in strategy and operations, and now focus on turning chaos into clear processes—without killing speed.",
    ],
    fastFacts: {
      passionateAbout: "upward mobility, diversity, football",
      alwaysConsuming: "Not Boring by Packy, Morning Brew",
      ifIWereAFroot: "Mango",
    },
  },
  {
    id: "lorenzo",
    name: "Lorenzo",
    roleTag: "CO-FOUNDER AND CTO",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverBg: "hover:bg-[#E9F3E6]",
    subline: "IT · Engineering",
    bio: [
      "I love building reliable systems that feel fast and effortless to use.",
      "My sweet spot is clean architecture + great UX: the product should feel simple, even when it’s doing complex things behind the scenes.",
      "I’m obsessed with performance, accessibility, and smooth interactions.",
    ],
    fastFacts: {
      passionateAbout: "system design, DX, performance",
      alwaysConsuming: "release notes, engineering blogs, docs",
      ifIWereAFroot: "Kiwi",
    },
  },
  {
    id: "filip",
    name: "Filip",
    roleTag: "CGO",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverBg: "hover:bg-[#F6D6D9]",
    subline: "SE · Growth",
    bio: [
      "I focus on growth that’s sustainable—brand trust first, always.",
      "I’ve helped teams sharpen positioning, find repeatable channels, and build a pipeline that doesn’t depend on luck.",
      "Big believer in simple messaging and strong distribution.",
    ],
    fastFacts: {
      passionateAbout: "growth loops, positioning, partnerships",
      alwaysConsuming: "case studies, landing pages, teardown threads",
      ifIWereAFroot: "Orange",
    },
  },

  // second row (temporary)
  {
    id: "mia",
    name: "Mia",
    roleTag: "PRODUCT",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverBg: "hover:bg-[#E7ECFF]",
    subline: "NL · Product",
    bio: [
      "I turn fuzzy ideas into clear experiences.",
      "I care about flow, details, and making sure every screen answers: what’s next?",
    ],
    fastFacts: {
      passionateAbout: "UX, research, writing",
      alwaysConsuming: "product essays, user interviews",
      ifIWereAFroot: "Blueberry",
    },
  },
  {
    id: "kai",
    name: "Kai",
    roleTag: "ENGINEERING",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverBg: "hover:bg-[#EAF7F6]",
    subline: "SG · Frontend",
    bio: [
      "I love building UI that feels premium and responsive.",
      "Animations should guide attention, not distract—smooth, purposeful, and fast.",
    ],
    fastFacts: {
      passionateAbout: "frontend craft, UI systems",
      alwaysConsuming: "component libraries, perf tips",
      ifIWereAFroot: "Lychee",
    },
  },
  {
    id: "omar",
    name: "Omar",
    roleTag: "COMMUNITY",
    image:
      "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverBg: "hover:bg-[#FFF0DB]",
    subline: "PK · Community",
    bio: [
      "I help creators feel supported and seen.",
      "My job is to make sure feedback turns into real product improvements—quickly.",
    ],
    fastFacts: {
      passionateAbout: "community, support, feedback loops",
      alwaysConsuming: "creator content, community forums",
      ifIWereAFroot: "Peach",
    },
  },
  {
    id: "sara",
    name: "Sara",
    roleTag: "BRAND",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
    hoverBg: "hover:bg-[#EDE7FF]",
    subline: "US · Brand",
    bio: [
      "I make sure the brand feels consistent everywhere.",
      "I care about clarity, confidence, and making the product story easy to share.",
    ],
    fastFacts: {
      passionateAbout: "brand systems, storytelling",
      alwaysConsuming: "brand breakdowns, ads library",
      ifIWereAFroot: "Cherry",
    },
  },
];

export default function MeetTheTeamSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = TEAM.find((m) => m.id === openId) || null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    if (openId) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <h2 className="text-center font-serif text-3xl tracking-tight text-neutral-900 md:text-5xl">
          Meet the team
        </h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setOpenId(m.id)}
              className={[
                "group relative rounded-2xl border border-transparent p-6 text-left transition-all",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40",
                m.hoverBg,
                "hover:border-neutral-900/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
              ].join(" ")}
            >
              {/* avatar */}
              <div className="relative h-28 w-28 overflow-hidden rounded-full bg-neutral-200">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

              {/* pill */}
              <div className="mt-5 inline-flex rounded-md bg-sky-400 px-2 py-1 text-[10px] font-semibold tracking-wide text-neutral-900">
                {m.roleTag}
              </div>

              {/* name + arrow */}
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="font-serif text-xl text-neutral-900">{m.name}</div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5">
                  <Icon icon="mdi:arrow-right" className="text-neutral-900" width="18" height="18" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-50">
          {/* overlay */}
          <button
            type="button"
            aria-label="Close modal"
            onClick={() => setOpenId(null)}
            className="absolute inset-0 bg-black/30"
          />

          {/* modal card */}
          <div className="relative mx-auto mt-10 w-[92%] max-w-4xl rounded-2xl border border-neutral-900/20 bg-[#F6F2E8] shadow-[0_30px_90px_rgba(0,0,0,0.25)] md:mt-16">
            <button
              type="button"
              onClick={() => setOpenId(null)}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-900/20 bg-white/60 hover:bg-white"
              aria-label="Close"
            >
              <Icon icon="mdi:close" width="18" height="18" className="text-neutral-900" />
            </button>

            <div className="p-6 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-neutral-200 md:h-28 md:w-28">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    className="object-cover"
                    sizes="140px"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="inline-flex rounded-md bg-sky-400 px-2 py-1 text-[10px] font-semibold tracking-wide text-neutral-900">
                    {active.roleTag}
                  </div>

                  <h3 className="mt-2 font-serif text-3xl tracking-tight text-neutral-900 md:text-4xl">
                    {active.name}
                  </h3>

                  <p className="mt-4 text-sm text-neutral-800">{active.subline}</p>

                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-900">
                    {active.bio.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="my-8 h-px w-full bg-neutral-900/20" />

              <div>
                <h4 className="font-serif text-2xl text-neutral-900">Fast Facts</h4>

                <dl className="mt-5 grid gap-3 text-sm md:grid-cols-2">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-neutral-900">Passionate about:</dt>
                    <dd className="text-neutral-800">{active.fastFacts.passionateAbout}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-neutral-900">Always consuming:</dt>
                    <dd className="text-neutral-800">{active.fastFacts.alwaysConsuming}</dd>
                  </div>
                  <div className="flex gap-2 md:col-span-2">
                    <dt className="font-semibold text-neutral-900">If I were a froot:</dt>
                    <dd className="text-neutral-800">{active.fastFacts.ifIWereAFroot}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
