"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

type Post = {
  date: string;
  readTime: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
};

type BlogHeroProps = {
  /** Main big title (default: Passionfroot) */
  title?: string;
  /** Sub title text (default: BLOG) */
  subtitle?: string;
  /** Optional: tagline line 1 (default stays same) */
  taglineLine1?: string;
  /** Optional: tagline line 2 (default stays same) */
  taglineLine2?: string;
  /** Optional: override posts (default stays same) */
  posts?: Post[];
};

const defaultPosts: Post[] = [
  {
    date: "OCTOBER 16, 2025",
    readTime: "3 MIN READ",
    title: "How Chase Scales Brand Partnerships Seamlessly with Passionfroot",
    imageSrc:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "How Chase Scales Brand Partnerships",
  },
  {
    date: "OCTOBER 15, 2024",
    readTime: "6 MIN READ",
    title: "Everything You Need To Know About YouTube Influencer Marketing",
    imageSrc:
      "https://images.pexels.com/photos/7439129/pexels-photo-7439129.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "YouTube Influencer Marketing",
  },
  {
    date: "SEPTEMBER 30, 2024",
    readTime: "6 MIN READ",
    title: "How Munch uses Passionfroot to fuel Creator-Led Growth",
    imageSrc:
      "https://images.pexels.com/photos/7109291/pexels-photo-7109291.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "How Munch uses Passionfroot",
  },
];

export default function BlogHero({
  title = "Passionfroot",
  subtitle = "BLOG",
  taglineLine1 = "Everything anyone needs to know about the creator-life.",
  taglineLine2 = "From the team powering it.",
  posts = defaultPosts,
}: BlogHeroProps) {
  return (
    <section className="bg-[#FF9966] py-10">
      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-14 pt-16 text-[#0e0e0e]">
        {/* heading */}
        <div className="text-center">
          <div className="relative inline-block font-serif text-[64px] font-extrabold leading-none tracking-[0.2px] md:text-[84px]">
            {title}
          </div>

          <div className="mt-3 font-[cursive] text-[54px] font-bold leading-none md:text-[68px]">
            {subtitle}
          </div>

          <div className="mt-6 text-[18px] leading-relaxed md:text-[20px]">
            <div>{taglineLine1}</div>
            <div>{taglineLine2}</div>
          </div>
        </div>

        {/* cards: ONLY 5 things inside each card (img, date, min read, title, btn) */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((p, idx) => (
            <article
              key={idx}
              className="group flex flex-col overflow-hidden rounded-[10px] border-2 border-[#0e0e0e] bg-[#f5f3ea] p-4 hover:shadow-[3px_3px_0px_rgba(0,0,0,0.9)]"
            >
              {/* 1) Image */}
              <div className="relative h-[230px] rounded-lg">
                <Image
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  fill
                  className="rounded-lg object-cover"
                  priority={idx === 0}
                />
              </div>

              {/* 2) Date + 3) Min read */}
              <div className="flex items-center gap-3 pt-6 text-[12px] tracking-wide text-black/80">
                <span>{p.date}</span>
                <span className="opacity-60">•</span>
                <span>{p.readTime}</span>
              </div>

              {/* 4) Title */}
              <h3 className="pt-4 font-serif text-[26px] font-extrabold leading-tight">
                {p.title}
              </h3>

              {/* 5) Button */}
              <div className="mt-auto flex justify-end pt-8">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0e0e0e] bg-[#FF9966] px-6 py-3 text-[14px] font-bold transition hover:translate-y-[-1px] group-hover:shadow-[3px_3px_0px_rgba(0,0,0,0.9)]"
                >
                  Read more <Icon icon="mdi:arrow-right" className="h-5 w-5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
