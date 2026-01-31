
import BlogDetailSection from "@/components/BlogSections/BlogDetailsSection";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";
import FooterLikeSupreme from "@/components/LandingSections/FooterSupreme";
import Header from "@/components/LandingSections/Header";
import { getPostBySlug, getRelatedPosts } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({ params }: { params: any }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const related = getRelatedPosts(params.slug, 3);
  return <>
    <Header />
    <BlogDetailSection
      title={post.title}
      date={post.date}
      readTime={post.readTime}
      author={post.author}
      cover={post.cover}
      excerpt={post.excerpt}
      blocks={post.blocks}
      backHref="/blogs"
      backLabel="Back to Blog"
    />
    <div className="mt-10 mb-12 max-w-[1400px] mx-auto">
          <h2 className="text-center font-serif text-3xl text-neutral-900 md:text-4xl">
            More Blogs
          </h2>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link key={p.id} href={`/blogs/${p.slug}`} className="group block">
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

    {/* <ClickUpFooter /> */}
    <FooterLikeSupreme />
  </>;
}
