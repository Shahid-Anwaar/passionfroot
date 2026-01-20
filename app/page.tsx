import BrandWallSection from "@/components/LandingSections/BrandGridSection";
import CaseStudies from "@/components/LandingSections/CaseStudies";
import CampaignsLaunchedSection from "@/components/LandingSections/CompaignLaunched";
import CreatorCtaSection from "@/components/LandingSections/CreaterCTASection";
import FaqSection from "@/components/LandingSections/Faqs";
import CampaignFeatureGridSection from "@/components/LandingSections/FeatureGrid";
import Header from "@/components/LandingSections/Header";
import PaymentsAutoPilotSection from "@/components/LandingSections/PaymentAutoPilot";
import IntercomTestimonialSection from "@/components/LandingSections/IntercomTestmonials";
import CreatorFinderSection from "@/components/LandingSections/CreatorFinderSection";
import PlatformAccessSection from "@/components/LandingSections/PlatFormAccessSection";
import DisruptedMarketingSection from "@/components/LandingSections/DisruptedMarketingSectio";
import HeroSection from "@/components/LandingSections/HeroSection";
import CampaignShowcaseSection from "@/components/LandingSections/CampaignShowcaseSection";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CampaignShowcaseSection />
      <PlatformAccessSection />
      <DisruptedMarketingSection />
      <CreatorFinderSection />
      <IntercomTestimonialSection />
      <CampaignFeatureGridSection />
      <CampaignsLaunchedSection />
      <PaymentsAutoPilotSection />
      <BrandWallSection />
      <CreatorCtaSection />
      {/* <CaseStudies /> */}
      <FaqSection />
      {/* <Footer /> */}
      <ClickUpFooter />
    </div>
  );
}
