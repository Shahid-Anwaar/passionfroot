import Header from "@/components/LandingSections/Header";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";
import AboutIntroSection from "@/components/AboutSections/AboutIntro";
import AllPostsSection from "@/components/BlogSections/AllBlogs";
import { getAllPosts } from "@/data/data";

export default function StoriesPage() {
  const posts = getAllPosts();
  return (
    <div>
      <Header />
      <AboutIntroSection
        imageSrc="https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=900"
        title={"Stories that help you grow"}
        subtitle="Real lessons for creators and brands—smart campaigns, stronger partnerships, and better monetization."
      />

      <AllPostsSection path="/stories/" title="All Stories" posts={posts} />
      <ClickUpFooter />
    </div>
  );
}
