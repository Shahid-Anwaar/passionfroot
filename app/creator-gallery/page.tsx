import CreatorCategorySection, { CategoryTheme, CreatorItem } from "@/components/Gallery/CreatorCategories";
import CreatorGalleryStatsSection from "@/components/Gallery/CreatorStats";
import ClickUpFooter from "@/components/LandingSections/ClickUpFooter";
import FaqSection from "@/components/LandingSections/Faqs";
import Header from "@/components/LandingSections/Header";


const CYAN: CategoryTheme = { cardFrom: "#D9F6FF", cardTo: "#49D7EF", innerBg: "#CFF3FF" };
const PURPLE: CategoryTheme = { cardFrom: "#E9D6FF", cardTo: "#B57BFF", innerBg: "#E6D2FF" };
const PINK: CategoryTheme = { cardFrom: "#FFD9D9", cardTo: "#F26B6B", innerBg: "#FFD0D0" };
const GREEN: CategoryTheme = { cardFrom: "#DFF8E8", cardTo: "#59DA8A", innerBg: "#D7F6E2" };
const BLUE: CategoryTheme = { cardFrom: "#D7ECFF", cardTo: "#61B3FF", innerBg: "#CFE6FF" };
const ORANGE: CategoryTheme = { cardFrom: "#FFE0CC", cardTo: "#FF8B3D", innerBg: "#FFD6BD" };

const FROOT_SALAD: CreatorItem[] = [
  {
    id: "patrick-dang",
    name: "Patrick Dang",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Topics on how to start a career in sales, business development, lead generation, cold email, LinkedIn, cold calling, and sales skills.",
  },
  {
    id: "neo-kim",
    name: "Neo Kim",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Newsletter to help you pass the system design interview and become good at work.",
  },
  {
    id: "brett-hampson",
    name: "Brett Hampson",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Founder of Forecasting Performance. Teaching FP&A best practices to finance leaders.",
  },
];

const AI_CREATORS: CreatorItem[] = [
  {
    id: "aurimas",
    name: "Aurimas Griciūnas",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Creating and sharing content on LinkedIn and newsletter for AI specialists and leaders.",
  },
  {
    id: "iwo",
    name: "Iwo Szapar",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Sharing stories about AI and the future of work via LinkedIn and his newsletter.",
  },
  {
    id: "richard",
    name: "Richard Foster-Fletcher",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Leading authority in AI foresight and strategy. Advisor, Author, Speaker, and LinkedIn Top Voice.",
  },
];

const TECH_BUSINESS: CreatorItem[] = [
  {
    id: "productify",
    name: "Productify",
    avatar:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Deep dive case studies on how the best in tech build products, how they grow and what insights it brings.",
  },
  {
    id: "scalable",
    name: "Scalable",
    avatar:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Actionable insights for founders. A highly engaged audience of startup founders and venture builders.",
  },
  {
    id: "automation",
    name: "Automation Helpers",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Sharing insights on how busy business owners can streamline operations using no-code tools.",
  },
];

const PRODUCTIVITY: CreatorItem[] = [
  {
    id: "christian",
    name: "Christian Ray Flores",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Podcast and newsletter with raw insights and engaging conversations with top experts and high performers.",
  },
  {
    id: "peter",
    name: "Peter Cook",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Ex-lawyer striving to live a calm(er) life. Videos about minimalism, intentional living, and slow productivity.",
  },
  {
    id: "roberto",
    name: "Roberto Ferraro",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Personal development, leadership innovation. Project leader, coach, and visual creator sharing learnings.",
  },
];

const MARKETING_DESIGN: CreatorItem[] = [
  {
    id: "rachael",
    name: "Rachael Higgins",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Founder of Because of Marketing. Sharing practical marketing insights and stories.",
  },
  {
    id: "mitchell",
    name: "Mitchell Clements",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Senior Product Design Manager sharing insights with a large design audience on LinkedIn.",
  },
  {
    id: "rob",
    name: "Rob Kaminski",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Sharing product marketing insights for founders, marketers, and product leaders at B2B startups.",
  },
];

const GOLD_STANDARD: CreatorItem[] = [
  {
    id: "graham",
    name: "Graham Stephan",
    avatar:
      "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Investor and creator sharing practical finance and real estate learnings.",
  },
  {
    id: "alphasignal",
    name: "AlphaSignal",
    avatar:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "Newsletter read by AI professionals with 200,000+ researchers, engineers, and data scientists.",
  },
  {
    id: "ali",
    name: "Ali Abdaal",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "#",
    about:
      "YouTuber + Podcaster + Author. Sharing practical insights on life, work, and creativity.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#F6F2E8]">
      <Header />

      <CreatorGalleryStatsSection />

      {/* ✅ Category blocks (call your custom section multiple times) */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0,rgba(255,255,255,0)_58%)]" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <CreatorCategorySection title="Froot Salad!" theme={CYAN} creators={FROOT_SALAD} />
          <CreatorCategorySection title="Artificial Intelligence" theme={PURPLE} creators={AI_CREATORS} />
          <CreatorCategorySection title="Tech & Business" theme={PINK} creators={TECH_BUSINESS} />
          <CreatorCategorySection title="Productivity & Personal Development" theme={GREEN} creators={PRODUCTIVITY} />
          <CreatorCategorySection title="Marketing & Design" theme={BLUE} creators={MARKETING_DESIGN} />
          <CreatorCategorySection title="Gold Standard" theme={ORANGE} creators={GOLD_STANDARD} />
        </div>
      </div>

      <FaqSection />
      <ClickUpFooter />
    </div>
  );
}
