"use client"
import { BlogBlock, BlogPost } from "@/data/types";
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
          className="mt-10 scroll-mt-24 font-serif text-2xl leading-tight text-neutral-900 md:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={idx}
          id={slugify(block.text)}
          className="mt-8 scroll-mt-24 font-serif text-xl text-neutral-900 md:text-2xl"
        >
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={idx} className="mt-4 text-[15px] leading-7 text-neutral-800">
          {block.text}
        </p>
      );
    case "bullets":
      return (
        <ul key={idx} className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-neutral-800">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div key={idx} className="mt-8 rounded-2xl border border-neutral-900/10 bg-white/60 p-6">
          {block.title ? (
            <div className="text-xs font-semibold tracking-wide text-neutral-900">{block.title}</div>
          ) : null}
          <p className="mt-2 text-[15px] leading-7 text-neutral-800">{block.text}</p>
        </div>
      );
    case "image":
      return (
        <figure key={idx} className="mt-8">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-video w-full">
              <Image src={block.src} alt={block.alt} fill className="object-cover" />
            </div>
          </div>
          {block.caption ? (
            <figcaption className="mt-2 text-xs text-neutral-600">{block.caption}</figcaption>
          ) : null}
        </figure>
      );
    case "divider":
      return <div key={idx} className="my-10 h-px w-full bg-neutral-900/10" />;
    default:
      return null;
  }
}

export default function BlogDetailSection({
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
      <div className="mx-auto max-w-[1440] px-5 py-10 md:px-10 md:py-14 md:pt-24">
        {/* top bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600">
          <Link href={path} className="hover:underline">← Back to {path === "/blogs" ? "Blogs" : "Stories"} </Link>
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-[13px] font-semibold text-neutral-700">
            {post.category}
          </span>
        </div>

        {/* title */}
        <h1 className="mt-6 font-serif text-3xl leading-[1.05] tracking-tight text-neutral-900 md:text-5xl">
          {post.title}
        </h1>

        {/* meta */}
        <div className="mt-3 text-sm text-neutral-600">
          {post.date} · {post.readTime} · {post.author}
        </div>

        {/* cover */}
        <div className="mt-8 overflow-hidden rounded-2xl shadow-[0_16px_55px_rgba(0,0,0,0.12)]">
          <div className="relative aspect-16/7 w-full">
            <Image src={post.cover} alt={post.title} fill className="object-cover" />
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
