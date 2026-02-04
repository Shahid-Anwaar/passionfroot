"use client"
import { BlogBlock, BlogPost } from "@/data/types";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

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
          id={slugify(block.text)}
          className="
            mt-14 scroll-mt-28
            font-serif font-semibold
            text-[30px] leading-[1.15] tracking-[-0.01em] text-neutral-900
            md:mt-16 md:text-[44px] md:leading-[1.12]
          "
        >
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3
          key={idx}
          id={slugify(block.text)}
          className="
            mt-10 scroll-mt-28
            font-serif font-semibold
            text-[22px] leading-[1.2] tracking-[-0.01em] text-neutral-900
            md:mt-12 md:text-[32px] md:leading-[1.16]
          "
        >
          {block.text}
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
          {block.text}
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
          {block.items.map((it, i) => (
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
          {block.title ? (
            <div className="text-[12px] font-semibold uppercase tracking-[0.22em] text-neutral-700">
              {block.title}
            </div>
          ) : null}

          <p className="mt-4 text-[16px] leading-7.5 text-neutral-800 md:text-[18px] md:leading-8.5">
            {block.text}
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
            {/* keep aspect-video, but increase perceived size by spacing + container width on page */}
            <div className="relative aspect-video w-full">
              <Image src={block.src} alt={block.alt} fill className="object-cover" />
            </div>
          </div>

          {block.caption ? (
            <figcaption className="mt-3 text-[16px] leading-5 text-neutral-600">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case "divider":
      return <div key={idx} className="my-14 h-px w-full bg-neutral-900/10 md:my-16" />;

    default:
      return null;
  }
}


export default function BlogDetailhidenSection({
  post,
  related,
  path = "/blogs",
}: {
  post: BlogPost;
  related: BlogPost[];
  path?: string;
}) {
  const toc = post.blocks
    .filter((b) => b.type === "h2")
    .map((b) => ({
      text: (b as any).text as string,
      id: slugify((b as any).text as string),
    }));

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-360 px-6 pb-16 pt-16 md:px-10 md:pt-24">
        {/* top bar */}
        <div className="flex items-center gap-3 text-[12px] tracking-wide text-neutral-500">

          <Link
            href={path}
            className="inline-flex items-center text-sm gap-2 uppercase hover:text-neutral-800"
          >
            <Icon icon="mdi:arrow-left" className="h-4.5 w-4.5" />
            Back to {path === "/blogs" ? "Blog" : "Stories"}
          </Link>
        </div>

        {/* title */}
        <h1 className="mx-auto mt-10 max-w-245 text-center font-serif text-[44px] font-semibold leading-[1.03] tracking-[-0.02em] text-neutral-900 md:text-[74px]">
          {post.title}
        </h1>

        {/* meta */}
        <div className="mt-8 text-center text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-600">
          {post.date} <span className="mx-3">•</span> {post.readTime}
        </div>

        {/* author */}
        <div className="mt-6 text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-neutral-700">
          BY {post.author}
        </div>

        {/* cover */}
        <div className="mt-10 overflow-hidden rounded-[18px] shadow-[0_18px_55px_rgba(0,0,0,0.14)]">
          <div className="relative aspect-16/7 w-full">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>


        {/* content + sidebar */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* main */}
          <article className="min-w-0">
            <p className="text-[16px] leading-7 text-neutral-800">{post.excerpt}</p>
            {post.blocks.map((b, idx) => renderBlock(b, idx))}
          </article>

          {/* sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-neutral-900/10 bg-neutral-50 p-6">
              <div className="text-xs font-semibold tracking-wide text-neutral-900">
                On this page
              </div>
              <div className="mt-4 space-y-2">
                {toc.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className="block text-sm text-neutral-700 hover:text-neutral-900 hover:underline"
                  >
                    {t.text}
                  </a>
                ))}
              </div>

              <div className="my-6 h-px bg-neutral-900/10" />

              <div className="text-xs font-semibold tracking-wide text-neutral-900">Share</div>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => navigator.clipboard.writeText(typeof window !== "undefined" ? window.location.href : "")}
                  className="rounded-lg border border-neutral-900/10 bg-white px-3 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-100"
                  type="button"
                >
                  Copy link
                </button>
                <a
                  href="#"
                  className="rounded-lg border border-neutral-900/10 bg-white px-3 py-2 text-xs font-semibold text-neutral-800 hover:bg-neutral-100"
                >
                  Twitter
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* more posts */}
        <div className="mt-16">
          <h2 className="text-center font-serif text-3xl text-neutral-900 md:text-4xl">
            More posts
          </h2>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link key={p.id} href={`${path}/${p.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.08)] transition-transform group-hover:-translate-y-1">
                  <div className="relative aspect-16/10 w-full">
                    <Image src={p.cover} alt={p.title} fill className="object-cover" />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-2.5 font-semibold tracking-[0.18em] text-neutral-700">
                    {p.date} <span className="text-neutral-500">· {p.readTime}</span>
                  </div>
                  <div className="mt-2 font-serif text-lg text-neutral-900 group-hover:underline">
                    {p.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
