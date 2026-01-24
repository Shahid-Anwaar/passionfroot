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
import ContextSection from "@/components/LandingSections/ContextSection";
import AllAppsAgentsSection from "@/components/LandingSections/AllAppGridSection";

const FEATURES = [
  {
    title: "Projects",
    image: "https://images.ctfassets.net/w8fc6tgspyjz/3SIBpiSpDlsgeZOt1H2pLh/ca8361470a3b4d2abced5749b7c65aa8/feature-projects.png",
    tint: "bg-[#fff8f2]",
  },
  {
    title: "Docs",
    image: "https://images.ctfassets.net/w8fc6tgspyjz/7mdFNyxKlaswOGGUAgxM2p/bcb9154ce8ec1e023087cab1f3d94b94/feature-docs.png",
    tint: "bg-[#f3f7ff]",
  },
  {
    title: "Brain",
    image: "https://images.ctfassets.net/w8fc6tgspyjz/nPjDIUWMOALlOVxrHxh8i/8f3e2dff0092a6e12ec3bb7c83681ae7/feature-brain.png",
    tint: "bg-[#fff5fb]",
  },
  {
    title: "Chat",
    image: "https://images.ctfassets.net/w8fc6tgspyjz/3tbKPf3QKgvwDpRhOf3WwQ/c2d6cc3001791d219ef6e3367db5ffbe/feature-chat.png",
    tint: "bg-[#f6f3ff]",
  },
] as const;

type Tile = {
  label?: string;      // empty means blank cell
  icon?: string;       // iconify name e.g. "lucide:search"
  faded?: boolean;     // lighter like edges in screenshot
  type?: "icon" | "image" | "spacer"
  image?: string
};

const TILES: Tile[] = [
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "icon", label: "Dependencies", icon: "lucide:git-branch", faded: true },
  { type: "icon", label: "Connected\nSearch", icon: "lucide:search" },
  { type: "icon", label: "Tasks", icon: "lucide:check" },
  { type: "icon", label: "Mind Maps", icon: "lucide:share-2" },
  { type: "icon", label: "Wikis", icon: "lucide:link-2" },
  { type: "icon", label: "AI Notetaker", icon: "lucide:sparkles" },
  { type: "icon", label: "Calendar", icon: "lucide:calendar" },
  { type: "icon", label: "Proofing", icon: "lucide:pen-line" },
  { type: "icon", label: "Portfolios", icon: "lucide:briefcase" },
  { type: "icon", label: "Templates", icon: "lucide:layout-template", faded: true },
  { type: "icon", label: "Reminders", icon: "lucide:bell", faded: true },
  { type: "icon", label: "Reporting", icon: "lucide:pie-chart" },
  { type: "icon", label: "Goals", icon: "lucide:flag" },
  { type: "image", label: "Projects", icon: "streamline-kameleon-color:graph-magnifier-duo", image: "https://images.ctfassets.net/w8fc6tgspyjz/3SIBpiSpDlsgeZOt1H2pLh/ca8361470a3b4d2abced5749b7c65aa8/feature-projects.png", },
  { type: "spacer" },
  { type: "image", label: "Docs", icon: "twemoji:file-folder", image: "https://images.ctfassets.net/w8fc6tgspyjz/7mdFNyxKlaswOGGUAgxM2p/bcb9154ce8ec1e023087cab1f3d94b94/feature-docs.png", },
  { type: "spacer" },
  { type: "icon", label: "Sprints", icon: "lucide:calendar-days" },
  { type: "icon", label: "Custom Status", icon: "lucide:circle-dot" },
  { type: "icon", label: "AI Writer", icon: "lucide:wand-2", faded: true },
  { type: "icon", label: "API Calls", icon: "lucide:code", faded: true },
  { type: "icon", label: "Milestones", icon: "lucide:milestone" },
  { type: "icon", label: "Forms", icon: "lucide:clipboard-list" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "icon", label: "Automations", icon: "lucide:zap" },
  { type: "icon", label: "Custom Fields", icon: "lucide:tag" },
  { type: "icon", label: "Timesheets", icon: "lucide:clock", faded: true },
  { type: "icon", label: "AI Q&A", icon: "lucide:circle-help", faded: true },
  { type: "icon", label: "Priorities", icon: "lucide:chevrons-up" },
  { type: "icon", label: "Time Estimates", icon: "lucide:timer" },
  { type: "image", label: "Brain", icon: "streamline-sharp-color:artificial-intelligence-brain-chip", image: "https://images.ctfassets.net/w8fc6tgspyjz/nPjDIUWMOALlOVxrHxh8i/8f3e2dff0092a6e12ec3bb7c83681ae7/feature-brain.png", },
  { type: "spacer" },
  { type: "image", label: "Chat", icon: "fluent-color:chat-more-24", image: "https://images.ctfassets.net/w8fc6tgspyjz/3tbKPf3QKgvwDpRhOf3WwQ/c2d6cc3001791d219ef6e3367db5ffbe/feature-chat.png", },
  { type: "spacer" },
  { type: "icon", label: "Clips", icon: "lucide:video" },
  { type: "icon", label: "Everything view", icon: "lucide:layout-grid" },
  { type: "icon", label: "Single Sign\nOn", icon: "lucide:key-round", faded: true },
  { type: "icon", label: "Emails", icon: "lucide:mail", faded: true },
  { type: "icon", label: "Dashboards", icon: "lucide:bar-chart-3" },
  { type: "icon", label: "Time Tracking", icon: "lucide:stopwatch" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "icon", label: "Kanban\nBoards", icon: "lucide:kanban" },
  { type: "icon", label: "Integrations", icon: "lucide:plug" },
  { type: "icon", label: "Guests", icon: "lucide:user", faded: true },
  { type: "icon", label: "Tags", icon: "lucide:tags", faded: true },
  { type: "icon", label: "24/7 Support", icon: "lucide:life-buoy" },
  { type: "icon", label: "Checklists", icon: "lucide:list-checks" },
  { type: "icon", label: "Scheduling", icon: "lucide:calendar-clock" },
  { type: "icon", label: "Spreadsheets", icon: "lucide:table" },
  { type: "icon", label: "Whiteboards", icon: "lucide:presentation" },
  { type: "icon", label: "Gantt Charts", icon: "lucide:gantt-chart" },
  { type: "icon", label: "Roadmaps", icon: "lucide:map" },
  { type: "icon", label: "Inbox", icon: "lucide:inbox" },
  { type: "icon", label: "Teams", icon: "lucide:users", faded: true },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
  { type: "spacer" },
];



export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
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
      <ClickUpFooter />
    </div>
  );
}
