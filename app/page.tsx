import BrandWallSection from "@/components/LandingSections/BrandGridSection";
import CaseStudies from "@/components/LandingSections/CaseStudies";
import CampaignsLaunchedSection from "@/components/LandingSections/CompaignLaunched";
import CreatorCtaSection from "@/components/LandingSections/CreaterCTASection";
import FaqSection from "@/components/LandingSections/Faqs";
import CampaignFeatureGridSection from "@/components/LandingSections/FeatureGrid";
import Footer from "@/components/LandingSections/Footer";
import Header from "@/components/LandingSections/Header";
import Hero from "@/components/LandingSections/Hero";
import PaymentsAutoPilotSection from "@/components/LandingSections/PaymentAutoPilot";
import IntercomTestimonialSection from "@/components/LandingSections/IntercomTestmonials";
import CreatorFinderSection from "@/components/LandingSections/CreatorFinderSection";
import PlatformAccessSection from "@/components/LandingSections/PlatFormAccessSection";
import DisruptedMarketingSection from "@/components/LandingSections/DisruptedMarketingSectio";
import TrustedLogosAnimation from "@/components/LandingSections/TrustedLogosAnimations";
import StickyHeader from "@/components/LandingSections/StickyHeader";
import HeroSection from "@/components/LandingSections/HeroSection";
import CampaignShowcaseSection from "@/components/LandingSections/CampaignShowcaseSection";

export const BRAND_IMAGES: { imageSrc: string }[] = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b720e278d278fe3721f5_framer.avif",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdbe5ac9f5bee12bbe_image%2080.avif",
  },
  // {
  //   imageSrc:
  //     "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67ab9dcd0f694616a4ad44bf_Ripplinglogo.avif",
  // },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec3da0554e7583437e50_Pika.png",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec5afa92c45dcee063bd_Tavus.png",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd1c59cbfc2851afc5_Frame-1.avif",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd8f80679c4ad96f2c_Frame-2.avif",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b7401c894092087d3170_scale.avif",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eea556429202526d8f511_Figma.png",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdd593d7389f1e48a8_image%2075.avif",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec07687d8b7d9f92084d_GraphiteLogo-p-500.png",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eebe3e73220bad80bd9cf_ElevenLabs-p-500.png",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b6e9b75902ba3cf186b8_replit.avif",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd4133943d0ca43d21_Frame-4.avif",
  },
];


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CampaignShowcaseSection />
      <TrustedLogosAnimation
        logos={BRAND_IMAGES}
        imageKey="imageSrc"
        imgClass="h-8 md:h-10"
        wrapperHeight="h-12 md:h-14"
      />
      <PlatformAccessSection />
      <DisruptedMarketingSection />
      <CreatorFinderSection />
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
