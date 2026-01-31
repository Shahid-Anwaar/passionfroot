import FooterLikeSupreme from "@/components/LandingSections/FooterSupreme";
import Header from "@/components/LandingSections/Header";
import PrivacyDetailSection from "@/components/BlogSections/BlogDetailsSection";
import HelpCenterArticle from "@/components/PrivacySections/PrivacyHelp";
import { makePrivacyPolicyBlocks } from "@/data/data";

export default async function PrivacyPage() {
  return <>
    <Header />
    <HelpCenterArticle
      title="Privacy Policy"
      authorName="Ludwig Hedlund"
      updatedLabel="Updated this week"
      breadcrumbs={[
        { label: "All Collections", href: "/help" },
        // { label: "Other Resources", href: "/help/resources" },
        { label: "Privacy Policy" },
      ]}
      blocks={makePrivacyPolicyBlocks()}
    />
    <FooterLikeSupreme />
  </>;
}
