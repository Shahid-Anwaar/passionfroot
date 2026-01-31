import FooterLikeSupreme from "@/components/LandingSections/FooterSupreme";
import Header from "@/components/LandingSections/Header";
import PrivacyDetailSection from "@/components/BlogSections/BlogDetailsSection";
import HelpCenterArticle from "@/components/PrivacySections/PrivacyHelp";
import { makePrivacyPolicyBlocks } from "@/data/data";
import HelpCenterPoliciesSection from "@/components/PrivacySections/HelpSection";

export default async function HelpsPage() {
  return <>
    <Header />
   <HelpCenterPoliciesSection />
    <FooterLikeSupreme />
  </>;
}
