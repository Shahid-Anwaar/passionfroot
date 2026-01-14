import BlueCampaign from "@/components/LandingSections/BlueCompaign";
import BrandWallSection from "@/components/LandingSections/BrandGridSection";
import CaseStudies from "@/components/LandingSections/CaseStudies";
import CampaignsLaunchedSection from "@/components/LandingSections/CompaignLaunched";
import CampaignScale from "@/components/LandingSections/CompaignScale";
import CreatorCtaSection from "@/components/LandingSections/CreaterCTASection";
import DiscoveryFeatures from "@/components/LandingSections/DiscoveryFeatures";
import Disruption from "@/components/LandingSections/Disruption";
import FaqSection from "@/components/LandingSections/Faqs";
import CampaignFeatureGridSection from "@/components/LandingSections/FeatureGrid";
import FinalCTA from "@/components/LandingSections/FinalCTA";
import Footer from "@/components/LandingSections/Footer";
import GreenAutopilot from "@/components/LandingSections/GreenAutoPilot";
import Header from "@/components/LandingSections/Header";
import Hero from "@/components/LandingSections/Hero";
import LogoWall from "@/components/LandingSections/LogoWall";
import MosaicBrands from "@/components/LandingSections/MosaicBrand";
import OldVsNew from "@/components/LandingSections/OldVsNew";
import OrangeCTA from "@/components/LandingSections/OrangeCTA";
import PaymentsAutoPilotSection from "@/components/LandingSections/PaymentAutoPilot";
import ProofNumbers from "@/components/LandingSections/ProofNumbers";
import PurpleDiscovery from "@/components/LandingSections/PurpleDiscovery";
import StatsPlatforms from "@/components/LandingSections/StatsPlateform";
import IntercomTestimonialSection from "@/components/LandingSections/IntercomTestmonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Disruption />
      <PurpleDiscovery />
      <BlueCampaign />
      <ProofNumbers />
      <GreenAutopilot />
      <MosaicBrands />
      <OrangeCTA />

      <Hero />
      <LogoWall />
      <StatsPlatforms />
      <OldVsNew />
      <DiscoveryFeatures />
      <CampaignScale />

      <CaseStudies />
      <FinalCTA />

      <IntercomTestimonialSection />
      <CampaignFeatureGridSection />
      <CampaignsLaunchedSection />
      <PaymentsAutoPilotSection />
      <BrandWallSection />
      <CreatorCtaSection />
      <CaseStudies />
      <FaqSection />
      <Footer />
    </div>
  );
}
