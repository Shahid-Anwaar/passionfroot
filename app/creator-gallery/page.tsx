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
        id: "ipm",
        name: "The Influential Project Manager",
        avatar:
            "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Newsletter reaching construction project managers, leaders, and execs.",
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
    {
        id: "healthcare-ai-guy",
        name: "Healthcare AI Guy",
        avatar:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Top engineers, clinicians, founders, CEOs, and investors read to track the latest AI activity in healthcare.",
    },
    {
        id: "digital-health-buzz",
        name: "Digital Health Buzz!",
        avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Digital Health Buzz! is a platform to promote and discover everything healthcare - from startups and products to podcasts and events.",
    },
    {
        id: "acquisitions",
        name: "Acquisitions.com",
        avatar:
            "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "The acquisitions is an effective way to get your product in front of an audience of investors, entrepreneurs, founders and financial professionals from top VCs.",
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
            "Creating and sharing content on LinkedIn and SwirlAI newsletter. Readers are a blend of Data Engineering and AI specialists and leaders.",
    },
    {
        id: "iwo-szapar",
        name: "Iwo Szapar",
        avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Sharing stories about AI and the future of work via LinkedIn and his newsletter.",
    },
    {
        id: "richard-foster-fletcher",
        name: "Richard Foster-Fletcher",
        avatar:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Leading authority in artificial intelligence foresight and strategy. Recognised as an AI Advisor, Author, Speaker, and LinkedIn Top Voice.",
    },
    {
        id: "aisavvy",
        name: "aisavvy",
        avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "A social media creator focused on AI, sharing tutorials, tools, and the latest developments in the AI world.",
    },
    {
        id: "martin-waxman",
        name: "Martin Waxman",
        avatar:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Stay on top of the latest news in generative AI, digital marketing and social media with Martin Waxman.",
    },
    {
        id: "techbible",
        name: "TechBible",
        avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Sharing good SaaS products, hacks and what’s happening in the tech world.",
    },
    {
        id: "santiago-valdarrama",
        name: "Santiago Valdarrama",
        avatar:
            "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Teaching Production Machine Learning and helping companies in the AI space reach a larger audience.",
    },
    {
        id: "forgoodcode",
        name: "Forgoodcode",
        avatar:
            "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Sharing daily findings around tech, programming and AI for the curious mind. Tools, hacks and more.",
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
            "Productify focuses on deep dive case studies on the how the best in tech build products, how they grow and what insights it brings.",
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
        id: "kevin-naughton",
        name: "Kevin Naughton Jr.",
        avatar:
            "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Software engineer at Google, dedicated to empowering fellow engineers to achieve their career aspirations.",
    },
    {
        id: "automation-helpers",
        name: "Automation Helpers",
        avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Sharing insights on how busy business owners can streamline operations using no-code tools.",
    },
    {
        id: "nocode-exits",
        name: "No-Code Exits",
        avatar:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Audience of entrepreneurs, software developers, and product builders that are interested in learning about AI and No-Code.",
    },
    {
        id: "ben-williams",
        name: "Ben Williams (The Product-Led Geek)",
        avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "One of the most trusted sources for founders and leaders learning how to scale their B2B software companies with product-led growth.",
    },
];

const PRODUCTIVITY: CreatorItem[] = [
    {
        id: "christian-ray-flores",
        name: "Christian Ray Flores",
        avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "His podcast and newsletter deliver raw insights and engaging conversations with top experts and high performers.",
    },
    {
        id: "rokeebat-olamide-hammed",
        name: "Rokeebat Olamide Hammed",
        avatar:
            "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Sharing study tips, productivity hacks, personal development insights, and career clarity for higher education students and early-career professionals.",
    },
    {
        id: "radha-shrivastava",
        name: "Radha Shrivastava",
        avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Empowering the next generation to navigate their paths with confidence and clarity.",
    },
    {
        id: "cameron-galbraith",
        name: "Cameron Galbraith",
        avatar:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Educating and inspiring the next generation of business leaders to find success professionally, academically, and financially.",
    },
    {
        id: "peter-cook",
        name: "Peter Cook",
        avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "An ex-lawyer striving to live a calm(er) life. Making videos about minimalism, intentional living, and slow productivity.",
    },
    {
        id: "roberto-ferraro",
        name: "Roberto Ferraro",
        avatar:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Personal development, leadership innovation. Project leader, coach, and visual creator sharing learnings through posts and newsletter.",
    },
];

const MARKETING_DESIGN: CreatorItem[] = [
    {
        id: "rachael-higgins",
        name: "Rachael Higgins",
        avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "With 80k+ followers on LinkedIn, Rachael Higgins is the Founder of Because of Marketing, a marketing publication.",
    },
    {
        id: "mitchell-clements",
        name: "Mitchell Clements",
        avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Senior Product Design Manager with over 8+ years of leadership experience. Sharing insights with 48K+ designers on LinkedIn.",
    },
    {
        id: "one-skill-powerpoint",
        name: "One Skill PowerPoint",
        avatar:
            "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Passionate PowerPoint designer creating some of the most popular PowerPoint tutorials on YouTube for 10+ years. 788K+ YouTube subscribers.",
    },
    {
        id: "kate-syuma",
        name: "Kate Syuma",
        avatar:
            "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Growthmates unpacks first-hand growth stories from people behind the greatest products like Notion, Canva, Loom, Dropbox, Amplitude, and more.",
    },
    {
        id: "rob-kaminski",
        name: "Rob Kaminski",
        avatar:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Sharing product marketing insights for founders, marketers, and product leaders at B2B startups.",
    },
    {
        id: "emily-kramer",
        name: "Emily Kramer",
        avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Kramer is a leading voice in B2B Startup Marketing, a former MKT1 Newsletter (50,000+ subscribers) & the Dear Marketers podcast.",
    },
];



const GOLD_STANDARD: CreatorItem[] = [
    {
        id: "graham-stephan",
        name: "Graham Stephan",
        avatar:
            "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "As a 30 year old real estate agent and investor who started working in real estate shortly after turning 18, with over $120,000,000 in residential real estate sales since 2008.",
    },
    {
        id: "marina-mogilko",
        name: "Marina Mogilko",
        avatar:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "International influencer. Linguamarina Inc. creating content on business, education, languages and lifestyle. Co-founder at Linguatrip, Fluent.express.",
    },
    {
        id: "alphasignal",
        name: "AlphaSignal",
        avatar:
            "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "The most read newsletter by AI professionals with over 200,000+ AI researchers, engineers, and data scientists.",
    },
    {
        id: "houcks-newsletter",
        name: "Houck's Newsletter",
        avatar:
            "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "Where founders come for advice. Weekly posts to help founders build, grow, and raise capital for their startup.",
    },
    {
        id: "superhuman",
        name: "Superhuman",
        avatar:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "The Superhuman newsletter is one of the biggest and fastest-growing AI newsletters in the world. We help 600,000+ readers leverage AI and AI products to boost their productivity and accelerate their careers.",
    },
    {
        id: "ali-abdaal",
        name: "Ali Abdaal",
        avatar:
            "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
        href: "#",
        about:
            "📹 YouTuber + 🎙️ Podcaster + 👨‍⚕️ ex-Doctor + ✍️ Author",
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
                    <CreatorCategorySection title="Gold Standard" theme={ORANGE} creators={GOLD_STANDARD} />
                    <CreatorCategorySection title="Marketing & Design" theme={BLUE} creators={MARKETING_DESIGN} />
                    <CreatorCategorySection title="Productivity & Personal Development" theme={GREEN} creators={PRODUCTIVITY} />
                    <CreatorCategorySection title="Tech & Business" theme={PINK} creators={TECH_BUSINESS} />
                    <CreatorCategorySection title="Artificial Intelligence" theme={PURPLE} creators={AI_CREATORS} />
                    <CreatorCategorySection title="Froot Salad!" theme={CYAN} creators={FROOT_SALAD} />
                </div>
            </div>

            <FaqSection />
            <ClickUpFooter />
        </div>
    );
}
