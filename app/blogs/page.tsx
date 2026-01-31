import Header from "@/components/LandingSections/Header";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";
import AboutIntroSection from "@/components/AboutSections/AboutIntro";
import AllPostsSection from "@/components/BlogSections/AllBlogs";
import { getAllPosts } from "@/data/data";
import FaqSection from "@/components/LandingSections/Faqs";
import FooterLikeSupreme from "@/components/LandingSections/FooterSupreme";

export default function AllBlogPage() {
  const posts = getAllPosts();
  return (
    <div>
      <Header />
      <AboutIntroSection
        imageSrc="https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=900"
        title={"Passionfroot Blogs"}
        subtitle="Practical content for creators and brands—campaign strategy, partnerships, and monetization tips."
      />
      <AllPostsSection posts={posts} />
      <FaqSection />
      {/* <ClickUpFooter /> */}
      <FooterLikeSupreme />
    </div>
  );
}
