"use client";

import { BlogBlock } from "@/data/types";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

/**
 * ✅ Privacy page renderer (Passionfroot Help Center style)
 * - No "related posts" section
 * - TOC on right with active highlight
 * - You pass: title, date, readTime, author, cover, blocks, backHref
 */

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function renderBlock(block: BlogBlock, idx: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={idx}
          id={slugify((block as any).text)}
          className="
            mt-14 scroll-mt-28
            font-serif font-semibold
            text-[30px] leading-[1.15] tracking-[-0.01em] text-neutral-900
            md:mt-16 md:text-[44px] md:leading-[1.12]
          "
        >
          {(block as any).text}
        </h2>
      );

    case "h3":
      return (
        <h3
          key={idx}
          id={slugify((block as any).text)}
          className="
            mt-10 scroll-mt-28
            font-serif font-semibold
            text-[22px] leading-[1.2] tracking-[-0.01em] text-neutral-900
            md:mt-12 md:text-[32px] md:leading-[1.16]
          "
        >
          {(block as any).text}
        </h3>
      );

    case "p":
      return (
        <p
          key={idx}
          className="
            mt-6
            text-[16px] leading-7.5 text-neutral-800
            md:text-[18px] md:leading-8.5
          "
        >
          {(block as any).text}
        </p>
      );

    case "bullets":
      return (
        <ul
          key={idx}
          className="
            mt-6 list-decimal space-y-3 pl-6
            text-[16px] leading-7.5 text-neutral-800
            md:text-[18px] md:leading-8.5
          "
        >
          {(block as any).items.map((it: string, i: number) => (
            <li key={i} className="pl-1">
              {it}
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div
          key={idx}
          className="
            mt-10 rounded-2xl border border-neutral-900/10
            bg-neutral-50/80 p-6
            md:mt-12 md:p-8
          "
        >
          {(block as any).title ? (
            <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-neutral-700">
              {(block as any).title}
            </div>
          ) : null}

          <p className="mt-4 text-[16px] leading-7.5 text-neutral-800 md:text-[18px] md:leading-8.5">
            {(block as any).text}
          </p>
        </div>
      );

    case "image":
      return (
        <figure key={idx} className="mt-10 md:mt-12">
          <div
            className="
              overflow-hidden rounded-[18px]
              bg-neutral-100
              shadow-[0_18px_55px_rgba(0,0,0,0.12)]
            "
          >
            <div className="relative aspect-video w-full">
              <Image
                src={(block as any).src}
                alt={(block as any).alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {(block as any).caption ? (
            <figcaption className="mt-3 text-[16px] leading-5 text-neutral-600">
              {(block as any).caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case "divider":
      return (
        <div key={idx} className="my-14 h-px w-full bg-neutral-900/10 md:my-16" />
      );

    default:
      return null;
  }
}

export default function BlogDetailSection({
  title = "Privacy Policy",
  date = "JUNE 13, 2025",
  readTime = "10 MIN READ",
  author = "PASSIONFROOT",
  cover = "https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=1800",
  excerpt,
  blocks = [],
  backHref = "/",
  backLabel = "Back",
}: {
  title?: string;
  date?: string;
  readTime?: string;
  author?: string;
  cover?: string;
  excerpt?: string;
  blocks?: BlogBlock[];
  backHref?: string;
  backLabel?: string;
}) {
  const toc = useMemo(
    () =>
      (blocks || [])
        .filter((b) => b.type === "h2")
        .map((b) => ({
          text: (b as any).text as string,
          id: slugify((b as any).text as string),
        })),
    [blocks]
  );

  const [activeId, setActiveId] = useState<string>(toc?.[0]?.id ?? "");

  useEffect(() => {
    if (!toc.length) return;

    const handler = () => {
      const topOffset = 140;
      let current = toc[0]?.id;

      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - topOffset <= 0) current = item.id;
      }

      setActiveId(current || "");
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [toc]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-360 px-6 pb-16 pt-16 md:px-10 md:pt-24">
        {/* top bar */}
        <div className="flex items-center gap-3 text-[12px] tracking-wide text-neutral-500">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm uppercase hover:text-neutral-800"
          >
            <Icon icon="mdi:arrow-left" className="h-4.5 w-4.5" />
            {backLabel}
          </Link>
        </div>

        {/* title */}
        <h1 className="mx-auto mt-10 max-w-245 text-center font-serif text-[44px] font-semibold leading-[1.03] tracking-[-0.02em] text-neutral-900 md:text-[74px]">
          {title}
        </h1>

        {/* meta */}
        <div className="mt-8 text-center text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
          {date} <span className="mx-3">•</span> {readTime}
        </div>

        {/* author */}
        <div className="mt-6 text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-neutral-700">
          BY {author}
        </div>

        {/* cover */}
        <div className="mx-auto mt-10 max-w-350 overflow-hidden rounded-[18px] shadow-[0_18px_55px_rgba(0,0,0,0.14)]">
          <div className="relative aspect-16/7 w-full">
            <Image src={cover} alt={title} fill priority className="object-cover" />
          </div>
        </div>

        {/* content + sidebar */}
        <div className="mx-auto mt-12 max-w-350 grid gap-10 lg:grid-cols-[1fr_340px]">
          {/* main */}
          <article className="min-w-0">
            {excerpt ? (
              <p className="text-[16px] leading-7.5 text-neutral-800 md:text-[18px] md:leading-8.5">
                {excerpt}
              </p>
            ) : null}

            {(blocks || []).map((b, idx) => renderBlock(b, idx))}
          </article>

          {/* sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-2xl border border-neutral-900/10 bg-white p-0">
                <div className="px-6 py-5">
                  <div className="text-[12px] font-semibold tracking-wide text-neutral-900">
                    On this page
                  </div>
                </div>

                <div className="max-h-140 overflow-auto px-2 pb-4">
                  {toc.map((t) => {
                    const isActive = t.id === activeId;
                    return (
                      <a
                        key={t.id}
                        href={`#${t.id}`}
                        className={[
                          "group relative flex items-start rounded-lg px-4 py-2 text-[13px] leading-5 transition",
                          isActive
                            ? "bg-neutral-50 text-neutral-900"
                            : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "absolute left-0 top-0 h-full w-0.5 rounded-full",
                            isActive
                              ? "bg-neutral-900"
                              : "bg-transparent group-hover:bg-neutral-200",
                          ].join(" ")}
                        />
                        <span className="pl-2">{t.text}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* share */}
              <div className="mt-6 rounded-2xl border border-neutral-900/10 bg-white p-5">
                <div className="text-[12px] font-semibold tracking-wide text-neutral-900">
                  Share
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        typeof window !== "undefined" ? window.location.href : ""
                      )
                    }
                    className="rounded-lg border border-neutral-900/10 bg-white px-3 py-2 text-[12px] font-semibold text-neutral-800 hover:bg-neutral-50"
                    type="button"
                  >
                    Copy link
                  </button>

                  <a
                    href="#"
                    className="rounded-lg border border-neutral-900/10 bg-white px-3 py-2 text-[12px] font-semibold text-neutral-800 hover:bg-neutral-50"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
