
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
                <div className="pointer-events-none absolute inset-0 bg-white" />
                <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                    <CreatorCategorySection title="Gold Standard" theme={ORANGE} creators={GOLD_STANDARD} />
                </div>
            </div>
            <div className="relative">
                <div className="pointer-events-none absolute inset-0 bg-[#f6f2e8]" />
                <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                    <CreatorCategorySection title="Marketing & Design" theme={BLUE} creators={MARKETING_DESIGN} />
                </div>
            </div>
            <div className="relative">
                <div className="pointer-events-none absolute inset-0 bg-white" />
                <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                 <CreatorCategorySection title="Tech & Business" theme={PINK} creators={TECH_BUSINESS} />
                </div>
            </div>
            <FooterLikeSupreme />
        </div>
    );
}
