import FooterLikeSupreme from "@/components/LandingSections/FooterSupreme";
import Header from "@/components/LandingSections/Header";
import HelpCenterArticle from "@/components/PrivacySections/PrivacyHelp";
import { makeCookiePolicyBlocks } from "@/data/data";

export default async function CookiesPolicyPage() {
  return <>
    <Header />
    <HelpCenterArticle
      title="Cookie Policy"
      authorName="Ludwig Hedlund"
      updatedLabel="Updated this week"
      breadcrumbs={[
        { label: "All Collections", href: "/help" },
        // { label: "Other Resources", href: "/help/resources" },
        { label: "Cookie Policy" },
      ]}
      blocks={makeCookiePolicyBlocks()}
    />

    <FooterLikeSupreme />
  </>;
}
