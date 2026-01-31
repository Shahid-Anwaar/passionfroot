import BrandWallSection from "@/components/LandingSections/BrandGridSection";
import CreatorCtaSection from "@/components/LandingSections/CreaterCTASection";
import Header from "@/components/LandingSections/Header";
import HeroSection from "@/components/LandingSections/HeroSection";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";
import FooterLikeSupreme from "@/components/LandingSections/FooterSupreme";

export default function CreatorFeatures() {
  return (
    <div>
      <Header />
      <HeroSection
        label=""
        title="The Froot behind the biggest brands in tech."
        subTitle="Discover how our customers are outgrowing their competitors with creators."
        companiesTitle="Powering thousands of marketing teams at the fastest growing companies in tech"
        isShowImg={false}
      />
      <div className="mt-8"></div>
      <BrandWallSection />
      <CreatorCtaSection />
      {/* <ClickUpFooter /> */}
      <FooterLikeSupreme />
    </div>
  );
}
