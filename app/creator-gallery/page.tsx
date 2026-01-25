import { PostCard } from "@/components/BlogSections/AllBlogs";
import CreatorCategorySection from "@/components/Gallery/CreatorCategories";
import CreatorGalleryStatsSection from "@/components/Gallery/CreatorStats";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";
import FaqSection from "@/components/LandingSections/Faqs";
import Header from "@/components/LandingSections/Header";
import { AI_CREATORS, FROOT_SALAD, Galleries_POSTS, GOLD_STANDARD, MARKETING_DESIGN, PRODUCTIVITY, TECH_BUSINESS } from "@/data/data";
import { CategoryTheme } from "@/data/types";

const CYAN: CategoryTheme = { cardFrom: "#D9F6FF", cardTo: "#49D7EF", innerBg: "#CFF3FF" };
const PURPLE: CategoryTheme = { cardFrom: "#E9D6FF", cardTo: "#B57BFF", innerBg: "#E6D2FF" };
const PINK: CategoryTheme = { cardFrom: "#FFD9D9", cardTo: "#F26B6B", innerBg: "#FFD0D0" };
const GREEN: CategoryTheme = { cardFrom: "#DFF8E8", cardTo: "#59DA8A", innerBg: "#D7F6E2" };
const BLUE: CategoryTheme = { cardFrom: "#D7ECFF", cardTo: "#61B3FF", innerBg: "#CFE6FF" };
const ORANGE: CategoryTheme = { cardFrom: "#FFE0CC", cardTo: "#FF8B3D", innerBg: "#FFD6BD" };

export default function Home() {
    return (
        <div className="bg-[#F6F2E8]">
            <Header />
            <CreatorGalleryStatsSection />

            {/* ✅ Category blocks (call your custom section multiple times) */}
            <div className="relative">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0,rgba(255,255,255,0)_58%)]" />
                <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                    <CreatorCategorySection title="Gold Standard" theme={ORANGE} creators={GOLD_STANDARD} />
                    <CreatorCategorySection title="Marketing & Design" theme={BLUE} creators={MARKETING_DESIGN} />
                    <CreatorCategorySection title="Productivity & Personal Development" theme={GREEN} creators={PRODUCTIVITY} />
                    <CreatorCategorySection title="Tech & Business" theme={PINK} creators={TECH_BUSINESS} />
                    <CreatorCategorySection title="Artificial Intelligence" theme={PURPLE} creators={AI_CREATORS} />
                    <CreatorCategorySection title="Froot Salad!" theme={CYAN} creators={FROOT_SALAD} />
                </div>
            </div>
            <div className="bg-white py-16">
                <div className=" grid max-w-350 w-full px-5 mx-auto gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {Galleries_POSTS.map((post) => (
                        <PostCard key={post.id} post={post} path="" />
                    ))}
                </div>
            </div>
            {/* <FaqSection /> */}
            <ClickUpFooter />
        </div>
    );
}
