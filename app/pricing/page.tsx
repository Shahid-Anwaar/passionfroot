import FaqSection from "@/components/LandingSections/Faqs";
import Header from "@/components/LandingSections/Header";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";
import PricingTabsSection from "@/components/PricingSections/PricingCard";
import { GOLD_STANDARD } from "@/data/data";
import { CategoryTheme } from "@/data/types";
import CreatorCategorySection from "@/components/Gallery/CreatorCategories";


const ORANGE: CategoryTheme = { cardFrom: "#FFE0CC", cardTo: "#FF8B3D", innerBg: "#FFD6BD" };

export default function PricingPage() {
  return (
    <div>
      <Header />
      <PricingTabsSection />
      <div className="relative">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0,rgba(255,255,255,0)_58%)]" />
                      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
                          <CreatorCategorySection title="Empowering the world's top B2B creators and media companies" theme={ORANGE} creators={GOLD_STANDARD} />
                      </div>
                  </div>
      <FaqSection />
      <ClickUpFooter />
    </div>
  );
}
