import { BlogPost } from "@/data/types";
import Image from "next/image";
import Link from "next/link";

export function PostCard({ post, path }: { post: BlogPost, path?: string }) {
  return (
    <Link href={`${path ? path + post.slug : "#"}`} className="group block border-2 border-transparent rounded-md hover:border-gray-950 p-5 hover:bg-[#ff9966]">
      <div className="relative overflow-hidden rounded-md shadow-[0_14px_40px_rgba(0,0,0,0.08)] transition-transform duration-200">
        <div className="relative aspect-[16/10] w-full">
          <Image src={post.cover} alt={post.title} fill className="object-cover" />
        </div>
      </div>
      <div className="mt-4">
        <div className="text-[10px] font-semibold tracking-[0.18em] text-neutral-700">
          {post.date} <span className="text-neutral-500">· {post.readTime}</span>
        </div>
        <h3 className="mt-2 font-serif text-lg sm:text-xl leading-snug text-neutral-900">
          {post.title}
        </h3>
        {post?.subTitle && <p className="mt-2 text-sm sm:text-md leading-snug text-neutral-600">
          {post.subTitle}
        </p>}
      </div>
    </Link>
  );
}

export default function AllPostsSection({
  title = "All posts",
  path = "/blogs/",
  posts,
}: {
  title?: string;
  posts: BlogPost[];
  path?: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440] px-6 py-14 md:px-10 md:py-20">
        <h2 className="text-center font-serif text-3xl tracking-tight text-neutral-900 md:text-5xl">
          {title}
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.id} path={path} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
