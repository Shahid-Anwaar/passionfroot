
import Header from "@/components/LandingSections/Header";
import { GOLD_STANDARD, MARKETING_DESIGN, TECH_BUSINESS, } from "@/data/data";
import FooterLikeSupreme from "@/components/LandingSections/FooterSupreme";
import CreatorGalleryStatsSection from "@/components/Gallery/CreatorStats";
import CreatorCategorySection from "@/components/Gallery/CreatorCategories";
import { CategoryTheme } from "@/data/types";

const PINK: CategoryTheme = { cardFrom: "#FFD9D9", cardTo: "#F26B6B", innerBg: "#FFD0D0" };
const BLUE: CategoryTheme = { cardFrom: "#D7ECFF", cardTo: "#61B3FF", innerBg: "#CFE6FF" };
const ORANGE: CategoryTheme = { cardFrom: "#FFE0CC", cardTo: "#FF8B3D", innerBg: "#FFD6BD" };

export default function CreatorStoriesPage() {
    return (
        <div>
            <Header />
            <CreatorGalleryStatsSection />
            <div className="relative">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0,rgba(255,255,255,0)_58%)]" />
                <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                    <CreatorCategorySection title="Gold Standard" theme={ORANGE} creators={GOLD_STANDARD} />
                    <CreatorCategorySection title="Marketing & Design" theme={BLUE} creators={MARKETING_DESIGN} />
                    {/* <CreatorCategorySection title="Productivity & Personal Development" theme={GREEN} creators={PRODUCTIVITY} /> */}
                    <CreatorCategorySection title="Tech & Business" theme={PINK} creators={TECH_BUSINESS} />
                    {/* <CreatorCategorySection title="Artificial Intelligence" theme={PURPLE} creators={AI_CREATORS} /> */}
                    {/* <CreatorCategorySection title="Froot Salad!" theme={CYAN} creators={FROOT_SALAD} /> */}
                </div>
            </div>
            <FooterLikeSupreme />
        </div>
    );
}
