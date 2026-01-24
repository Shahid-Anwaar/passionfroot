import FaqSection from "@/components/LandingSections/Faqs";
import Header from "@/components/LandingSections/Header";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";
import PricingTabsSection from "@/components/PricingSections/PricingCard";


export default function PricingPage() {
  return (
    <div>
      <Header />
      <PricingTabsSection />
      <FaqSection />
      <ClickUpFooter />
    </div>
  );
}
