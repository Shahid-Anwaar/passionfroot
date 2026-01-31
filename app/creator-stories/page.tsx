import BrandWallSection from "@/components/LandingSections/BrandGridSection";
import CampaignsLaunchedSection from "@/components/LandingSections/CompaignLaunched";
import CreatorCtaSection from "@/components/LandingSections/CreaterCTASection";
import FaqSection from "@/components/LandingSections/Faqs";
import CampaignFeatureGridSection from "@/components/LandingSections/FeatureGrid";
import Header from "@/components/LandingSections/Header";
import PaymentsAutoPilotSection from "@/components/LandingSections/PaymentAutoPilot";
import IntercomTestimonialSection from "@/components/LandingSections/IntercomTestmonials";
import CreatorFinderSection from "@/components/LandingSections/CreatorFinderSection";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";
import ContextSection from "@/components/LandingSections/ContextSection";
import AllAppsAgentsSection from "@/components/LandingSections/AllAppGridSection";
import { FEATURES, TILES } from "@/data/data";
import ClickUpHeroSection from "@/components/LandingSections/ClickUpHero";
import FooterLikeSupreme from "@/components/LandingSections/FooterSupreme";


export default function CreatorStoriesPage() {
  return (
    <div>
      <Header />
      <ClickUpHeroSection />
      {/* <HeroSection /> */}
      {/* <CampaignShowcaseSection /> */}

      {/* <PlatformAccessSection />
      <DisruptedMarketingSection /> */}

      <ContextSection
        heading={
          <>
            60% of work is lost in <span className="text-neutral-400">context</span>
            <br />– and AI is lost without it.
          </>
        }
        subheading="Work Sprawl is killing context and destroying productivity."
        items={[
          {
            image: "/up1.png",
            title: "Context Switching",
            description: "Digital fatigue reduces employee performance by up to 32%",
          },
          {
            image: "/up2.png",
            title: "Context Missing",
            description: "96% of companies fail in AI value & adoption",
          },
          {
            image: "/up3.png",
            title: "Context Stitching",
            description: "2.5 hours daily wasted searching & stitching context",
          },
        ]}
      />
      <AllAppsAgentsSection features={FEATURES as any} tiles={TILES} />


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
       {/* <ClickUpFooter /> */}
      <FooterLikeSupreme />
    </div>
  );
}
