import Header from "@/components/LandingSections/Header";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";
import AboutIntroSection from "@/components/AboutSections/AboutIntro";
import AllPostsSection from "@/components/BlogSections/AllBlogs";
import { getAllPosts } from "@/data/data";
import FaqSection from "@/components/LandingSections/Faqs";
import FooterLikeSupreme from "@/components/LandingSections/FooterSupreme";
import BlogHero from "@/components/BlogSections/BlogHero";

export default function GuidesPage() {
  const posts = getAllPosts();
  return (
    <div>
      <Header />
      <BlogHero title="passionfroot" subtitle="Guidess" />
      <AllPostsSection path="" title="All Guides" posts={posts} />
      <FaqSection />
      {/* <ClickUpFooter /> */}
      <FooterLikeSupreme />
    </div>
  );
}
