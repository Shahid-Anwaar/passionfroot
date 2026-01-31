import BlogDetailSection from "@/components/BlogSections/BlogDetail";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";
import FooterLikeSupreme from "@/components/LandingSections/FooterSupreme";
import Header from "@/components/LandingSections/Header";
import { getPostBySlug, getRelatedPosts } from "@/data/data";
import { notFound } from "next/navigation";

export default async function StoryDetailPage({ params }: { params: any }) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const related = getRelatedPosts(params.slug, 3);

  return <>
    <Header />
    <BlogDetailSection path={"/stories/"} post={post} related={related} />
    {/* <ClickUpFooter /> */}
    <FooterLikeSupreme />
  </>;
}
