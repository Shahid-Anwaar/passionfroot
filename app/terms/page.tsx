import FooterLikeSupreme from "@/components/LandingSections/FooterSupreme";
import Header from "@/components/LandingSections/Header";
import PrivacyDetailSection from "@/components/BlogSections/BlogDetailsSection";
import HelpCenterArticle from "@/components/PrivacySections/PrivacyHelp";
import { makePrivacyPolicyBlocks, makeTermsAndConditionsBlocks } from "@/data/data";

export default async function TermsPage() {
  return <>
    <Header />
    <HelpCenterArticle
      title="Terms & Conditions"
      authorName="Ludwig Hedlund"
      updatedLabel="Updated this week"
      breadcrumbs={[
        { label: "All Collections", href: "/help" },
        // { label: "Other Resources", href: "/help/resources" },
        { label: "Terms & Conditions" },
      ]}
      blocks={makeTermsAndConditionsBlocks()}
    />
    <FooterLikeSupreme />
  </>;
}
