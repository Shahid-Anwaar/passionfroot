import { AiProfileCard, BlogBlock, BlogPost, CreatorFinderItem, CreatorItem, FaqItem, FooterColumn, MapTab, MegaMenuConf, PlatformCard, Stat, Tile, TileCard } from "./types";

export const BRAND = {
  name: "YourBrand",
  tagline: "THE LARGEST B2B CREATOR PLATFORM",
};

export const LOGOS = [
  "Notion", "Intercom", "HubSpot", "FreshBooks", "PostHog", "Replit", "Attio", "Gamma",
  "Zapier", "Stripe", "Webflow", "Figma", "Linear", "Slack",
];

export const MENUS: MegaMenuConf[] = [
  {
    key: "brands",
    label: "For Brands",
    previewBg:
      "linear-gradient(180deg,#FFB36B 0%, #FF9F45 70%, #FFB36B 100%)",
    previewImage:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f52812e168c74898afd362_image%20(48)%20(1).avif",
    // mainItems: [
    //   {
    //     title: "Features",
    //     description:
    //       "Find the right creators on all platforms, book & collaborate, pay quickly & safely - all in one place.",
    //     href: "#",
    //     icon: "tabler:sparkles",
    //   },
    //   {
    //     title: "Customers",
    //     description:
    //       "Discover how forward-thinking companies use Passionfroot to reach their growth goals.",
    //     href: "#",
    //     icon: "tabler:users",
    //   },
    // ],
    // resourceItems: [
    //   { title: "Blog", href: "#", icon: "tabler:book-2" },
    //   {
    //     title: "Influencer Pricing Guide",
    //     href: "#",
    //     icon: "tabler:file-text",
    //   },
    // ],
    mainItems: [
      {
        title: "Features",
        description:
          "Explore the all-in-one tool to help creators do more brand deals - easier, and faster.",
        href: "/",
        icon: "tabler:sparkles",
      },
      {
        title: "Customers",
        description:
          "Learn how other creators are leveraging Passionfroot to monetize their content with brand partnerships.",
        href: "/customers",
        icon: "tabler:users",
      },
      {
        title: "Pricing",
        description: "Designed for every stage of your journey. Start today for free.",
        href: "/pricing",
        icon: "tabler:tag",
      },
    ],
    resourceItems: [
      { title: "Creator Gallery", href: "/creator-gallery", icon: "tabler:photo" },
      { title: "Blog", href: "/blogs", icon: "tabler:book-2" },
    ],
  },
  {
    key: "creators",
    label: "For Creators",
    previewBg:
      "linear-gradient(180deg,#C08BFF 0%, #B378FF 70%, #C08BFF 100%)",
    previewImage:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdbe5ac9f5bee12bbe_image%2080.avif",
    mainItems: [
      {
        title: "Features",
        description:
          "Explore the all-in-one tool to help creators do more brand deals - easier, and faster.",
        href: "/features",
        icon: "tabler:sparkles",
      },
      {
        title: "Customers",
        description:
          "Learn how other creators are leveraging Passionfroot to monetize their content with brand partnerships.",
        href: "/creator-stories",
        icon: "tabler:users",
      },
      {
        title: "Pricing",
        description: "Designed for every stage of your journey. Start today for free.",
        href: "/pricing",
        icon: "tabler:tag",
      },
    ],
    resourceItems: [
      { title: "Creator Gallery", href: "/creator-gallery", icon: "tabler:photo" },
      { title: "Blog", href: "/blogs", icon: "tabler:book-2" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We cut campaign ops in half and finally have a single place to find, book, and manage creators end-to-end.",
    name: "Ayesha Khan",
    title: "Growth Lead",
    metric1: "32",
    metric1Label: "collabs",
    metric2: "70%",
    metric2Label: "time saved",
  },
  {
    quote:
      "The workflow feels like a cockpit: discovery, outreach, approvals, deliverables, and reporting — all in one.",
    name: "Saad Ali",
    title: "Head of Marketing",
    metric1: "$14",
    metric1Label: "avg. CPM",
    metric2: "10x",
    metric2Label: "scale up",
  },
  {
    quote:
      "Payments and procurement became frictionless. Finance stopped blocking campaigns and started supporting them.",
    name: "Hira Noor",
    title: "Marketing Manager",
    metric1: "14",
    metric1Label: "markets",
    metric2: "24h",
    metric2Label: "to book",
  },
];

export const CASE_STUDIES = [
  { label: "Customer Story", title: "From pilot to repeatable creator engine", desc: "How teams build a predictable pipeline with creator-led growth.", readMins: 4, href: "/case-studies/1" },
  { label: "Customer Story", title: "Scaling partnerships across 3 channels", desc: "One workflow for newsletters, video, and social — without spreadsheets.", readMins: 5, href: "/case-studies/2" },
  { label: "Customer Story", title: "Improving ROI with better creator matching", desc: "How better targeting reduced waste and improved lead quality.", readMins: 5, href: "/case-studies/3" },
];

export const FAQS = [
  { q: "What is YourBrand?", a: "YourBrand is a creator partnership platform that helps teams discover creators, manage campaigns, and measure results in one place." },
  { q: "Who is it for?", a: "B2B brands, startups, and teams running creator campaigns across newsletters, video, social, and podcasts." },
  { q: "How does it work?", a: "Discover creators → collaborate and manage deliverables → track performance and consolidate reporting." },
  { q: "Can I run multiple campaigns?", a: "Yes, the workflow is designed for managing multiple creators and campaigns at the same time." },
  { q: "How do I get started?", a: "Start with access, then book a quick intro call if you want a guided setup." },
];

export const STATS: Stat[] = [
  { value: "300 Million", label: "TARGET AUDIENCE" },
  { value: "2 Billion", label: "MONTHLY IMPRESSIONS" },
  { value: "60%", label: "LOWER CPC THAN LINKEDIN ADS*" },
];

export const COLUMNS: FooterColumn[] = [
  {
    title: "AI",
    links: [
      { label: "Brain", href: "#" },
      { label: "Super Agents", href: "#" },
      { label: "Ambient Agents", href: "#" },
      { label: "Notetaker", href: "#" },
      { label: "Enterprise Search", href: "#" },
      { label: "Talk to Text", href: "#" },
      { label: "Download", href: "#", badge: "" },
      { label: "iOS & Android", href: "#" },
      { label: "Mac & Windows", href: "#" },
      { label: "BrainGPT", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Chat", href: "#" },
      { label: "Projects", href: "#" },
      { label: "Docs & Wikis", href: "#" },
      { label: "Calendar", href: "#" },
      { label: "Dashboards", href: "#" },
      { label: "Time Tracking", href: "#" },
      { label: "Gantt Charts", href: "#" },
      { label: "Automations", href: "#" },
      { label: "Whiteboards", href: "#" },
      { label: "API", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "vs Monday", href: "#" },
      { label: "vs Notion", href: "#" },
      { label: "vs Asana", href: "#" },
      { label: "vs Jira", href: "#" },
      { label: "vs Trello", href: "#" },
      { label: "vs Slack", href: "#" },
      { label: "vs MS Project", href: "#" },
      { label: "vs Smartsheet", href: "#" },
      { label: "vs Airtable", href: "#" },
      { label: "vs Basecamp", href: "#" },
      { label: "vs Todoist", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#", badge: "Hiring" },
      { label: "Customers", href: "#" },
      { label: "Affiliates", href: "#" },
      { label: "Events", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Consultants", href: "#" },
      { label: "Reviews", href: "#" },
      { label: "Press", href: "#" },
      { label: "Brand", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "24/7 Support", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Get a Demo", href: "#" },
      { label: "Import", href: "#" },
      { label: "Templates", href: "#" },
      { label: "Community", href: "#" },
      { label: "University", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

export const SOCIAL = [
  { icon: "mdi:twitter", href: "#", label: "X" },
  { icon: "mdi:instagram", href: "#", label: "Instagram" },
  { icon: "mdi:linkedin", href: "#", label: "LinkedIn" },
  { icon: "mdi:youtube", href: "#", label: "YouTube" },
];

export const LEFT: FaqItem[] = [
  {
    id: "what-is",
    question: "What is Passionfroot?",
    answer:
      "Passionfroot is a platform to help B2B brands find, manage, and scale creator partnerships across platforms.",
  },
  {
    id: "who-can-use",
    question: "What types of businesses can use Passionfroot?",
    answer:
      "B2B brands, SaaS companies, agencies, and teams running creator or influencer programs can use Passionfroot to manage the entire workflow end-to-end.",
  },
  {
    id: "how-works",
    question: "How does Passionfroot work?",
    answer:
      "Search creators across platforms, build a shortlist, collaborate, manage tasks, track outcomes, and handle payments from one place.",
  },
  {
    id: "platforms",
    question: "What platforms can I use Passionfroot for?",
    answer:
      "You can run campaigns across multiple creator platforms such as newsletters, YouTube, podcasts, social platforms, and more.",
  },
  {
    id: "discover",
    question: "How do I discover the right creators for my brand?",
    answer:
      "Use filters, categories, and search to find creators aligned with your audience, then review performance signals and shortlist quickly.",
  },
];

export const RIGHT: FaqItem[] = [
  {
    id: "payments",
    question: "How are payments managed?",
    answer:
      "Payments are handled through a centralized workflow to simplify payouts and tracking, with clear status and accountability.",
  },
  {
    id: "multi-campaigns",
    question: "Can I run multiple campaigns at once?",
    answer:
      "Yes, Passionfroot allows you to manage multiple campaigns across different creators and platforms simultaneously. Our intuitive dashboard makes it easy to track all campaigns, communications, and performance in one place.",
  },
  {
    id: "get-started",
    question: "How do I get started with Passionfroot?",
    answer:
      "Request access, complete onboarding, then start searching creators and launching campaigns from your dashboard.",
  },
];

// ✅ Updated tiles with FULL detail data for each card (photo/quote)
// ✅ Added `color` field on ALL logo tiles (tailwind bg class)
// Note: You may need to extend your Tile type to allow `detail` + `stats`.

// ✅ First 10 objects (exact structure you want)
// ✅ Logo tiles: bg stays SAME on hover (color includes hover:bg-...)
// ✅ Quote tiles: SAME structure as photo tiles (img/bg/companyIcon/company/quote/person/stats)

export const tiles: Tile[] = [
  {
    id: "gamma",
    type: "photo",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&auto=format&fit=crop&q=60",
    bg: "bg-[#FFB07B]",
    companyIcon: "", // put your iconify key if you have
    company: "Gamma",
    quote:
      "Passionfroot has been a game-changer for us at Gamma. Their platform has streamlined our entire creator marketing process, allowing us to collaborate with over 30 creators seamlessly, cutting down campaign management time by more than half. Since integrating Passionfroot, we've seen a significant boost in user engagement and signups, all while maintaining the same ad spend. It's rare to find a tool that makes such an immediate impact—Passionfroot has been instrumental in scaling our growth effortlessly.",
    person: {
      name: "Grant Lee",
      title: "Founder & CEO",
      company: "Gamma",
    },
    stats: [
      { label: "Collabs", value: "30", icon: "lucide:handshake" },
      { label: "New users in 3 months", value: "3 Million", icon: "lucide:users" },
    ],
  },

  // 2) Figma (logo) — keep bg same on hover
  {
    id: "figma",
    type: "logo",
    icon: "logos:figma",
    text: "Figma",
    iconSize: 28,
    color: "bg-white hover:bg-[#f2f1f1]",
  },

  // 3) Intercom (quote) — SAME structure as photo
  {
    id: "intercom-quote",
    type: "quote",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&auto=format&fit=crop&q=60", // replace with John Roche image
    bg: "!bg-[#ffea62]",
    colSpan: "col-span-2",
    companyIcon: "logos:intercom-icon",
    company: "Intercom",
    quote:
      "Partnering with creators through Passionfroot has been a game-changer for Intercom’s Startup program. By collaborating with top newsletters, we’ve reached thousands of founders",
    person: {
      name: "John Roche",
      title: "Startups and VC Partnerships",
      company: "Intercom",
    },
    stats: [
      { label: "Time to booking", value: "< 24 hours", icon: "lucide:clock" },
      { label: "Saved per campaign", value: "14 hours", icon: "lucide:timer" },
    ],
  },

  // 4) HubSpot (logo) — light pink bg same on hover
  {
    id: "hubspot",
    type: "logo",
    icon: "logos:hubspot-icon",
    text: "HubSpot",
    iconSize: 26,
    color: "bg-[#FCE9E8] hover:bg-[#FCE9E8]",
  },

  // 5) Munch (photo)
  {
    id: "munch",
    type: "photo",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&auto=format&fit=crop&q=60",
    bg: "bg-[#8EEBFF]",
    companyIcon: "", // add if you have
    company: "Munch",
    quote:
      "Passionfroot has completely transformed the way we approach creator marketing at Munch. We went from struggling to get responses to locking in a month's worth of collaborations in under a week. The platform’s streamlined communication and vetted creators have saved us both time and budget, allowing us to focus on scaling. With Passionfroot, we've built stronger relationships with creators, and our brand visibility has skyrocketed.",
    person: {
      name: "Jonathan Maimon",
      title: "Former VP of Marketing",
      company: "Munch",
    },
    stats: [
      { label: "Collabs", value: "33", icon: "lucide:handshake" },
      { label: "Saved per campaign", value: "78 hours", icon: "lucide:timer" },
    ],
  },

  // 6) FreshBooks (photo)
  {
    id: "freshbooks",
    type: "photo",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&auto=format&fit=crop&q=60",
    bg: "bg-[#63E38A]",
    companyIcon: "logos:freshbooks",
    company: "FreshBooks",
    quote:
      "Passionfroot has streamlined our multi-platform creator campaigns across YouTube, newsletters, podcasts and LinkedIn. With just a few clicks, we've connected with creators that perfectly align with our audience of small business owners and freelancers, driving significant engagement and customer growth. It's become a core part of our demand generation strategy.",
    person: {
      name: "Nolan Mikowski",
      title: "Senior Demand Generation Manager",
      company: "FreshBooks",
    },
    stats: [{ label: "Campaign launch time reduction", value: "70%", icon: "lucide:trending-down" }],
  },

  // 7) Intercom (logo) — dark bg same on hover
  {
    id: "intercom-logo",
    type: "logo",
    icon: "logos:intercom-ico",
    text: "INTERCOM",
    iconSize: 26,
    color: "bg-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white",
  },

  // 8) Attio (quote) — SAME structure as photo
  {
    id: "attio-quote",
    type: "quote",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&auto=format&fit=crop&q=60", // replace with Attio left image (office B/W)
    bg: "!bg-[#B58BFF]",
    colSpan: "col-span-2",
    companyIcon: "", // add if you have
    company: "Attio",
    quote:
      "Passionfroot really helped us level up our creator program into a strong growth channel. Instead of scouring the internet, their AI search enabled us to find and book the best creators in PLG.",
    person: {
      name: "Alex Vale",
      title: "Head of Growth",
      company: "Attio",
    },
    stats: [{ label: "Target customers reached", value: "3.2 Million", icon: "lucide:target" }],
  },

  // 9) Framer (logo) — light blue bg same on hover
  {
    id: "framer",
    type: "logo",
    icon: "logos:framer",
    text: "Framer",
    iconSize: 28,
    color: "bg-[#EAF3FF] hover:bg-[#EAF3FF]",
  },

  // 10) Replit (photo)
  {
    id: "replit",
    type: "photo",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&auto=format&fit=crop&q=60",
    bg: "bg-[#8EEBFF]",
    companyIcon: "", // add if you have
    company: "Replit",
    quote:
      "Passionfroot has been essential in scaling Replit’s creator marketing. What started as a small test quickly 10x'd into a six-figure monthly program because the platform made it easy to discover, activate, and manage the right creators. Instead of juggling spreadsheets and scattered outreach, we were able to launch multi-channel campaigns in days, not weeks. Passionfroot has turned creator marketing into one of our most impactful growth engines, helping us amplify our story and reach new audiences in AI and no-code.",
    person: {
      name: "Alex Lin",
      title: "GTM",
      company: "Replit",
    },
    stats: [
      { label: "CPM", value: "$14", icon: "lucide:dollar-sign" },
      { label: "Initial spend", value: "10x", icon: "lucide:trending-up" },
    ],
  },
  // ✅ Next 4 objects (11–14) — add these AFTER your first 10 items

  {
    id: "nebius",
    type: "photo",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&h=900&w=900",
    bg: "bg-[#58ADEF]",
    companyIcon: "", // add iconify key if you have
    company: "Nebius",
    quote:
      "Passionfroot has been instrumental in helping us reach engineers, founders, and researchers in the AI space. By leveraging top-tier creators across leading AI newsletters, we were able to precisely target and engage the right audience for Nebius. The platform made it easy to tap into high-quality creators, driving both visibility and impactful engagement in a way that truly accelerated our growth.",
    person: {
      name: "Olga Reger",
      title: "Senior Digital Marketing Manager",
      company: "Nebius",
    },
    stats: [
      { label: "Collabs", value: "14", icon: "lucide:handshake" },
      { label: "Target customers reached", value: "3.8 Million", icon: "lucide:users" },
    ],
  },

  {
    id: "pika",
    type: "logo",
    text: "Pika",
    color: "bg-[#E9D7BD] hover:bg-[#E9D7BD]", // ✅ same bg on hover
  },

  {
    id: "guidde",
    type: "photo",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&auto=format&fit=crop&q=60",
    bg: "bg-[#E05D6A]",
    companyIcon: "", // add iconify key if you have
    company: "guidde",
    quote:
      "Before using the platform, we spent countless hours trying to find the right creators for our niche — now, we’ve cut that time by over 50% while doubling the effectiveness of our campaigns. Passionfroot’s user-friendly interface made it easy for us to book, communicate, and track results seamlessly. Thanks to the platform, we’ve scaled our outreach, increased our brand visibility, and boosted signups in just six months. For marketers looking to maximize ROI and streamline creator partnerships, Passionfroot is an absolute game-changer.",
    person: {
      name: "Moran Altarac",
      title: "VP Marketing",
      company: "guidde.com",
    },
    stats: [
      { label: "Collabs", value: "41", icon: "lucide:handshake" },
      { label: "Average CPL", value: "$1.07", icon: "lucide:badge-dollar-sign" },
    ],
  },

  {
    id: "elevenlabs",
    type: "logo",
    text: "||ElevenLabs",
    color: "bg-[#57ABEB] hover:bg-[#57ABEB]", // ✅ same bg on hover
  },

];



export const MAP_TABS: MapTab[] = [
  {
    key: "newsletter",
    label: "Newsletter",
    icon: "mdi:file-document-outline",
    activeText: "#FF7A00",
    activeBg: "#FFF3E6",
    activeRing: "rgba(255,122,0,0.18)",
    chips: [
      { name: "Houck", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68d7f4fe6739014da4_avatar-1.avif" },
      { name: "Superhuman", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68cadbea52c4302d82_avatar.avif" },
      { name: "ByteByteGo", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fe69f899dc61d3a637ed38_avatar%20(4).avif" },
    ],
  },
  {
    key: "youtube",
    label: "Youtube",
    icon: "mdi:youtube",
    activeText: "#FF2D2D",
    activeBg: "#FFECEC",
    activeRing: "rgba(255,45,45,0.18)",
    chips: [
      { name: "Ali Abdaal", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68d7f4fe6739014da4_avatar-1.avif" },
      { name: "Sarah Grace", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68cadbea52c4302d82_avatar.avif" },
      { name: "Graham Stephan", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fe69f899dc61d3a637ed38_avatar%20(4).avif" },
    ],
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: "mdi:instagram",
    activeText: "#B06BFF",
    activeBg: "#F3E9FF",
    activeRing: "rgba(176,107,255,0.18)",
    chips: [
      { name: "Zach pogrob", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68d7f4fe6739014da4_avatar-1.avif" },
      { name: "Marina Mogilko", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fe69f899dc61d3a637ed38_avatar%20(4).avif" },
      { name: "Scott Clary", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68cadbea52c4302d82_avatar.avif" },
    ],
  },
  {
    key: "podcasts",
    label: "Podcasts",
    icon: "mdi:podcast",
    activeText: "#FF4CCB",
    activeBg: "#FFEAF7",
    activeRing: "rgba(255,76,203,0.18)",
    chips: [
      { name: "Big Technology", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68d7f4fe6739014da4_avatar-1.avif" },
      { name: "Economics Explained", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68cadbea52c4302d82_avatar.avif" },
      { name: "Dr Sheen Gurrib", avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fe69f899dc61d3a637ed38_avatar%20(4).avif" },
    ],
  },
];

export const ITEMS: CreatorFinderItem[] = [
  {
    image: "/find1_1.png",
    title: "AI-powered creator search",
    description:
      "Our AI lets you search all platforms – not just one. Simply search and find the right creator ambassadors for your business in minutes.",
  },
  {
    image: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fcd0aeb86eefe0fdef1d43_World%20Map-1.avif",
    title: "World’s largest B2B creator network",
    description:
      "The largest selection of creators across Newsletters, LinkedIn, Youtube, Instagram, Twitter, and more. All platforms & categories – in one place.",
  },
  {
    image: "/find3_1.png",
    title: "Creator media kits",
    description:
      "Analyze creators with verified stats, product previews, rates, and much more.",
  },
  {
    image: "/find4_1.png",
    title: "AI creator recommendations",
    description:
      "Tell us your goals – and our AI will build a campaign for you in seconds.",
  },
  {
    image: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fcd0aeb86eefe0fdef1d43_World%20Map-1.avif",
    title: "Evaluate a creator in seconds",
    badge: "Coming Soon",
    description:
      "Our AI evaluates and summarizes their latest content – no more digging in their feeds.",
  },
];

export const AI_PROFILE_CARDS: AiProfileCard[] = [
  {
    name: "Ali Abdaal",
    matchLabel: "Great match",
    score: 92,
    summaryTitle: "AI profile summary",
    summary:
      "Ali is the most reputable voice in productivity and in line with your brand",
    avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68d7f4fe6739014da4_avatar-1.avif",
  },
  {
    name: "Brian Jung",
    matchLabel: "Great match",
    score: 88,
    summaryTitle: "AI profile summary",
    summary:
      "Brian is popular on YouTube for creating content about cryptocurrency, finance, and investing.",
    avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67037b68cadbea52c4302d82_avatar.avif",
  },
  {
    name: "Marina Mogilko",
    matchLabel: "Great match",
    score: 95,
    summaryTitle: "AI profile summary",
    summary:
      "Marina talks about entrepreneurship as an immigrant - great for Duolingo",
    avatar: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fe69f899dc61d3a637ed38_avatar%20(4).avif",
  },
];


export const PLATFORMS: PlatformCard[] = [
  {
    title: "TikTok",
    icon: "ic:baseline-tiktok",
    bg: "linear-gradient(180deg,#f7a2db 0%, #f09ad2 55%, #f7a2db 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif",
  },
  {
    title: "Newsletter",
    icon: "mdi:file-document-outline",
    bg: "linear-gradient(180deg,#ffb36b 0%, #ff9f45 70%, #ffb36b 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0abdea1f85b137b33_Frame%20427323496.avif",
  },
  {
    title: "YouTube",
    icon: "mdi:youtube",
    bg: "linear-gradient(180deg,#f07a86 0%, #ea5f6d 70%, #f07a86 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b539ef60c50fd9ee_Frame%20427323499.avif",
  },
  {
    title: "LinkedIn",
    icon: "mdi:linkedin",
    bg: "linear-gradient(180deg,#7cc2ff 0%, #4aa6ff 70%, #7cc2ff 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e05cfd941726113c8d_slide%202.avif",
  },
  {
    title: "Podcast",
    icon: "mdi:podcast",
    bg: "linear-gradient(180deg,#76f0b2 0%, #4fe39a 70%, #76f0b2 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b9158c4c2a423b86_slide-3.avif",
  },
  {
    title: "Instagram",
    icon: "mdi:instagram",
    bg: "linear-gradient(180deg,#c08bff 0%, #b378ff 70%, #c08bff 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0b539ef60c50fd99e_Frame%20427323500.avif",
  },
  {
    title: "Twitter",
    icon: "mdi:twitter",
    bg: "linear-gradient(180deg,#77e2f2 0%, #4dd6ea 70%, #77e2f2 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0c9b886eab0aed2c7_Frame%20427323502.avif",
  },
  {
    title: "TikTok",
    icon: "ic:baseline-tiktok",
    bg: "linear-gradient(180deg,#f7a2db 0%, #f09ad2 55%, #f7a2db 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif",
  },
  {
    title: "Newsletter",
    icon: "mdi:file-document-outline",
    bg: "linear-gradient(180deg,#ffb36b 0%, #ff9f45 70%, #ffb36b 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0abdea1f85b137b33_Frame%20427323496.avif",
  },
  {
    title: "YouTube",
    icon: "mdi:youtube",
    bg: "linear-gradient(180deg,#f07a86 0%, #ea5f6d 70%, #f07a86 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b539ef60c50fd9ee_Frame%20427323499.avif",
  },
  {
    title: "LinkedIn",
    icon: "mdi:linkedin",
    bg: "linear-gradient(180deg,#7cc2ff 0%, #4aa6ff 70%, #7cc2ff 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e05cfd941726113c8d_slide%202.avif",
  },
  {
    title: "Podcast",
    icon: "mdi:podcast",
    bg: "linear-gradient(180deg,#76f0b2 0%, #4fe39a 70%, #76f0b2 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b9158c4c2a423b86_slide-3.avif",
  },
  {
    title: "Instagram",
    icon: "mdi:instagram",
    bg: "linear-gradient(180deg,#c08bff 0%, #b378ff 70%, #c08bff 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0b539ef60c50fd99e_Frame%20427323500.avif",
  },
  {
    title: "Twitter",
    icon: "mdi:twitter",
    bg: "linear-gradient(180deg,#77e2f2 0%, #4dd6ea 70%, #77e2f2 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0c9b886eab0aed2c7_Frame%20427323502.avif",
  },
  {
    title: "TikTok",
    icon: "ic:baseline-tiktok",
    bg: "linear-gradient(180deg,#f7a2db 0%, #f09ad2 55%, #f7a2db 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif",
  },
  {
    title: "Newsletter",
    icon: "mdi:file-document-outline",
    bg: "linear-gradient(180deg,#ffb36b 0%, #ff9f45 70%, #ffb36b 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0abdea1f85b137b33_Frame%20427323496.avif",
  },
  {
    title: "YouTube",
    icon: "mdi:youtube",
    bg: "linear-gradient(180deg,#f07a86 0%, #ea5f6d 70%, #f07a86 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b539ef60c50fd9ee_Frame%20427323499.avif",
  },
  {
    title: "LinkedIn",
    icon: "mdi:linkedin",
    bg: "linear-gradient(180deg,#7cc2ff 0%, #4aa6ff 70%, #7cc2ff 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e05cfd941726113c8d_slide%202.avif",
  },
  {
    title: "Podcast",
    icon: "mdi:podcast",
    bg: "linear-gradient(180deg,#76f0b2 0%, #4fe39a 70%, #76f0b2 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b9158c4c2a423b86_slide-3.avif",
  },
  {
    title: "Instagram",
    icon: "mdi:instagram",
    bg: "linear-gradient(180deg,#c08bff 0%, #b378ff 70%, #c08bff 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0b539ef60c50fd99e_Frame%20427323500.avif",
  },
  {
    title: "Twitter",
    icon: "mdi:twitter",
    bg: "linear-gradient(180deg,#77e2f2 0%, #4dd6ea 70%, #77e2f2 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0c9b886eab0aed2c7_Frame%20427323502.avif",
  },
  {
    title: "TikTok",
    icon: "ic:baseline-tiktok",
    bg: "linear-gradient(180deg,#f7a2db 0%, #f09ad2 55%, #f7a2db 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0e10d20ecb690ddf5_Frame%20427323501.avif",
  },
  {
    title: "Newsletter",
    icon: "mdi:file-document-outline",
    bg: "linear-gradient(180deg,#ffb36b 0%, #ff9f45 70%, #ffb36b 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0abdea1f85b137b33_Frame%20427323496.avif",
  },
  {
    title: "YouTube",
    icon: "mdi:youtube",
    bg: "linear-gradient(180deg,#f07a86 0%, #ea5f6d 70%, #f07a86 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b539ef60c50fd9ee_Frame%20427323499.avif",
  },
  {
    title: "LinkedIn",
    icon: "mdi:linkedin",
    bg: "linear-gradient(180deg,#7cc2ff 0%, #4aa6ff 70%, #7cc2ff 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e05cfd941726113c8d_slide%202.avif",
  },
  {
    title: "Podcast",
    icon: "mdi:podcast",
    bg: "linear-gradient(180deg,#76f0b2 0%, #4fe39a 70%, #76f0b2 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e1b9158c4c2a423b86_slide-3.avif",
  },
  {
    title: "Instagram",
    icon: "mdi:instagram",
    bg: "linear-gradient(180deg,#c08bff 0%, #b378ff 70%, #c08bff 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0b539ef60c50fd99e_Frame%20427323500.avif",
  },
  {
    title: "Twitter",
    icon: "mdi:twitter",
    bg: "linear-gradient(180deg,#77e2f2 0%, #4dd6ea 70%, #77e2f2 100%)",
    image:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670921e0c9b886eab0aed2c7_Frame%20427323502.avif",
  },
];

const img = (id: number, w = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const makeLongBlocks = (topic: string): BlogBlock[] => [
  { type: "p", text: `This is a demo long-form article about ${topic}. The structure matches your screenshot: lots of sections, images, and spacing.` },
  { type: "divider" },

  { type: "h2", text: "Why this matters now" },
  { type: "p", text: `Creator partnerships are no longer “nice to have”. For ${topic}, teams want repeatable growth, measurable outcomes, and clean workflows.` },
  { type: "image", src: img(3184633), alt: "Office planning", caption: "A simple framework beats scattered execution." },

  { type: "h2", text: "The current problem" },
  { type: "p", text: "Most teams still run creator programs with spreadsheets, DMs, and fragmented reporting. That makes planning, approval, and scale painful." },
  { type: "bullets", items: ["No visibility across campaigns", "Slow approvals", "Hard to replicate wins", "No consistent reporting"] },
  { type: "callout", title: "Shortcut", text: "Build a single operating system for creator work: sourcing → briefs → approvals → deliverables → reporting." },

  { type: "h2", text: "A simple model to rebuild" },
  { type: "p", text: "Start with 3 pillars: discovery, execution, and measurement. Each pillar needs an owner, a dashboard, and a repeatable playbook." },
  { type: "image", src: img(3183150), alt: "Startup desk", caption: "Keep workflows repeatable and lightweight." },

  { type: "h2", text: "What great looks like" },
  { type: "p", text: "High-performing teams ship faster, learn faster, and maintain brand consistency across creators." },
  { type: "image", src: img(3861969), alt: "AI concept", caption: "Measure outcomes, not vibes." },

  { type: "h2", text: "Execution checklist" },
  { type: "bullets", items: ["Define campaign goal + KPI", "Creator shortlists by ICP", "Clear briefs + timelines", "Approval system", "Content distribution plan", "Post-campaign report"] },

  { type: "h2", text: "Common mistakes" },
  { type: "p", text: "The biggest mistake is treating creator marketing as a one-off channel. It needs operations, not luck." },
  { type: "image", src: img(669615), alt: "Analytics", caption: "A single source of truth unlocks scale." },

  { type: "h2", text: "Final thoughts" },
  { type: "p", text: `If you're building a durable system for ${topic}, focus on repeatability. Small improvements compound quickly.` },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "implosions-and-explosions",
    title: "Implosions and Explosions: Rebuilding Advertising for the Fragmented Media Era",
    date: "JANUARY 12, 2026",
    readTime: "10 MIN READ",
    author: "Passionfroot Team",
    category: "Strategy",
    cover: img(3184633),
    excerpt: "A long-form breakdown of why media is fragmenting—and how modern growth teams can rebuild their playbook.",
    blocks: makeLongBlocks("fragmented media"),
  },
  {
    id: "post-2",
    slug: "creator-marketing-best-practices",
    title: "2026 Creator Marketing Best Practices",
    date: "JANUARY 5, 2026",
    readTime: "8 MIN READ",
    author: "Passionfroot Team",
    category: "Creator Marketing",
    cover: img(3184465),
    excerpt: "What the best teams do differently: systems, brief quality, approvals, and reporting.",
    blocks: makeLongBlocks("creator marketing"),
  },
  {
    id: "post-3",
    slug: "podcast-advertising-2024",
    title: "The Ultimate Guide to Podcast Advertising in 2024",
    date: "OCTOBER 3, 2024",
    readTime: "7 MIN READ",
    author: "Editorial",
    category: "Audio",
    cover: img(6476808),
    excerpt: "Everything you need to plan, buy, measure, and improve podcast ads.",
    blocks: makeLongBlocks("podcast advertising"),
  },
  {
    id: "post-4",
    slug: "youtube-influencer-marketing",
    title: "Everything You Need To Know About YouTube Influencer Marketing",
    date: "OCTOBER 18, 2024",
    readTime: "6 MIN READ",
    author: "Editorial",
    category: "Influencer",
    cover: img(4009402),
    excerpt: "How to pick creators, write briefs, and measure real outcomes on YouTube.",
    blocks: makeLongBlocks("YouTube influencer marketing"),
  },
  {
    id: "post-5",
    slug: "munch-case-study",
    title: "How Munch uses Passionfroot to fuel Creator-Led Growth",
    date: "SEPTEMBER 9, 2024",
    readTime: "5 MIN READ",
    author: "Case Studies",
    category: "Case Study",
    cover: img(3183150),
    excerpt: "A practical look at how a team built creator-led growth with repeatable workflows.",
    blocks: makeLongBlocks("creator-led growth"),
  },
  {
    id: "post-6",
    slug: "influencer-referral-programs",
    title: "The Ultimate Guide to Influencer Referral Programs",
    date: "AUGUST 27, 2024",
    readTime: "9 MIN READ",
    author: "Editorial",
    category: "Growth",
    cover: img(6476783),
    excerpt: "How to structure a referral program that creators actually want to promote.",
    blocks: makeLongBlocks("referral programs"),
  },
  {
    id: "post-7",
    slug: "attio-case-study",
    title: "How Attio uses Passionfroot to discover creators and fuel product-led growth",
    date: "AUGUST 21, 2024",
    readTime: "6 MIN READ",
    author: "Case Studies",
    category: "Case Study",
    cover: img(669615),
    excerpt: "How a PLG team discovered creators, ran approvals, and tracked impact.",
    blocks: makeLongBlocks("product-led growth"),
  },
  {
    id: "post-8",
    slug: "durable-case-study",
    title: "How Durable leverages creators to stand out in the AI gold-rush",
    date: "AUGUST 7, 2024",
    readTime: "5 MIN READ",
    author: "Case Studies",
    category: "Case Study",
    cover: img(3861969),
    excerpt: "Standing out with creators when everyone is shipping AI.",
    blocks: makeLongBlocks("AI positioning"),
  },
  {
    id: "post-9",
    slug: "wave-case-study",
    title: "How Wave AI leveraged Passionfroot to make their brand launch a tsunami",
    date: "AUGUST 1, 2024",
    readTime: "6 MIN READ",
    author: "Case Studies",
    category: "Case Study",
    cover: img(3184418),
    excerpt: "From launch planning to creator execution and reporting—end to end.",
    blocks: makeLongBlocks("brand launches"),
  },
];

export function getAllPosts() {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug) || null;
}

export function getRelatedPosts(slug: string, limit = 3) {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit);
}


export const FROOT_SALAD: CreatorItem[] = [
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

export const AI_CREATORS: CreatorItem[] = [
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

export const TECH_BUSINESS: CreatorItem[] = [
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

export const PRODUCTIVITY: CreatorItem[] = [
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

export const MARKETING_DESIGN: CreatorItem[] = [
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

export const GOLD_STANDARD: CreatorItem[] = [
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

export const Galleries_POSTS: BlogPost[] = [
  {
    id: "story-masters-of-work",
    slug: "masters-of-work",
    title:
      "How Masters of Work runs their productivity newsletter ads business on Passionfroot",
    subTitle:
      "How Masters of Work runs their productivity newsletter ads business on Passionfroot",
    date: "STORY",
    readTime: "5 MIN READ",
    author: "Passionfroot",
    category: "Stories",
    cover:
      "https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=1400",
    excerpt:
      "Masters of Work is an AI and productivity newsletter focused on sharing tools and tricks to help people automate…",
    blocks: [],
  },
  {
    id: "story-superpower-daily",
    slug: "superpower-daily",
    title: "How Superpower Daily makes 5 figures with Passionfroot",
    subTitle: "How Superpower Daily makes 5 figures with Passionfroot",
    date: "STORY",
    readTime: "4 MIN READ",
    author: "Passionfroot",
    category: "Stories",
    cover:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400",
    excerpt:
      "Superpower Daily is a ChatGPT extension and daily newsletter, offering the latest in AI news, tools, and…",
    blocks: [],
  },
  {
    id: "story-superhuman",
    slug: "superhuman",
    title:
      "How Superhuman built the largest newsletter ads business in AI with Passionfroot",
    subTitle:
      "How Superhuman built the largest newsletter ads business in AI with Passionfroot",
    date: "STORY",
    readTime: "4 MIN READ",
    author: "Passionfroot",
    category: "Stories",
    cover:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400",
    excerpt:
      "Superhuman is one of the biggest and fastest-growing AI newsletters globally, helping over 450,000 readers from…",
    blocks: [],
  },
];


export const FEATURES = [
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

export const TILES: TileCard[] = [
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

export const makePrivacyPolicyBlocks = (): BlogBlock[] => [
  // =========================
  // Preamble
  // =========================
  { type: "h2", text: "Preamble" },
  {
    type: "p",
    text:
      "This Privacy Policy explains what types of personal data (“Data”) we process, why we process it, and the scope of that processing.",
  },
  {
    type: "p",
    text:
      "It applies to processing carried out in connection with our services — including our websites and our external online presences (for example, social media profiles).",
  },
  {
    type: "callout",
    title: "Last updated",
    text: "13 June, 2025",
  },
  { type: "divider" },

  // =========================
  // Controller
  // =========================
  { type: "h2", text: "Controller" },
  { type: "p", text: "Passionfroot GmbH" },
  { type: "p", text: "Chausseestraße 40A, 10115 Berlin" },
  {
    type: "p",
    text:
      "Email: support@passionfroot.me (use this contact for privacy-related questions as well).",
  },
  {
    type: "p",
    text:
      "Legal notice (Impressum) is available on the company website.",
  },
  { type: "divider" },

  // =========================
  // Overview of processing operations
  // =========================
  { type: "h2", text: "Overview of processing operations" },

  { type: "h3", text: "Categories of processed data" },
  {
    type: "bullets",
    items: [
      "Event Data (Facebook): data about interactions/actions (e.g., visits, clicks, purchases) used for audience building and ad measurement; not the actual comment content, login details, or direct contact info.",
      "Content data: text inputs, photos, videos.",
      "Contact data: email address, telephone number.",
      "Meta/communication data: device details and IP address.",
      "Usage data: pages visited, access times, interest in content.",
    ],
  },

  { type: "h3", text: "Categories of data subjects" },
  {
    type: "bullets",
    items: [
      "Prospective customers",
      "Customers",
      "Communication partners (e.g., people contacting us or receiving messages)",
      "Users / website visitors",
    ],
  },

  { type: "h3", text: "Purposes of processing" },
  {
    type: "bullets",
    items: [
      "Providing and improving online services",
      "Customer support and contractual delivery",
      "Internal administration and organizational operations",
      "Marketing and remarketing",
      "Feedback collection",
      "Contact requests and communication",
      "Conversion tracking / measuring marketing effectiveness",
      "Building user-related profiles for marketing (where applicable)",
      "Custom Audiences for targeted advertising (where applicable)",
    ],
  },

  {
    type: "callout",
    title: "Facebook retention note",
    text:
      "Event Data used for Facebook audiences is retained by Facebook up to a maximum period (as described in the policy).",
  },

  { type: "divider" },

  // =========================
  // Legal bases
  // =========================
  { type: "h2", text: "Legal bases for the processing" },
  {
    type: "p",
    text:
      "Processing is based on GDPR legal grounds depending on the context — and additional national rules (such as Germany’s BDSG) may also apply.",
  },
  {
    type: "bullets",
    items: [
      "Consent (GDPR Art. 6(1)(a)) — when you actively agree.",
      "Contract / pre-contract steps (GDPR Art. 6(1)(b)) — to provide services or respond before a contract.",
      "Legitimate interests (GDPR Art. 6(1)(f)) — for operating and improving services, security, and direct marketing (where permitted).",
    ],
  },
  { type: "divider" },

  // =========================
  // Transmission of personal data
  // =========================
  { type: "h2", text: "Transmission of personal data" },
  {
    type: "p",
    text:
      "In some cases, data may be shared with recipients such as IT providers or embedded-content providers. Where required, appropriate contracts/agreements are used to protect the data.",
  },
  { type: "divider" },

  // =========================
  // Third countries
  // =========================
  { type: "h2", text: "Data processing in third countries" },
  {
    type: "p",
    text:
      "If data is processed outside the EU/EEA (or transferred to third parties outside those regions), it is done under applicable safeguards such as recognized adequacy decisions, standard contractual clauses, or comparable protections.",
  },
  {
    type: "p",
    text:
      "You can contact the company to request information about the safeguards relevant to a specific transfer.",
  },
  { type: "divider" },

  // =========================
  // Erasure
  // =========================
  { type: "h2", text: "Erasure of data" },
  {
    type: "p",
    text:
      "Data is deleted when it is no longer needed for the stated purposes, unless legal obligations or legitimate reasons require longer retention (for example, to defend legal claims).",
  },
  { type: "divider" },

  // =========================
  // Cookies
  // =========================
  { type: "h2", text: "Use of cookies" },
  {
    type: "p",
    text:
      "Cookies (and similar technologies) store information on your device to support website functions, remember settings, measure usage, and (where applicable) support marketing and personalization.",
  },
  {
    type: "h3",
    text: "Cookie types",
  },
  {
    type: "bullets",
    items: [
      "Session cookies: deleted when you close your browser.",
      "Persistent cookies: remain for a longer period (e.g., to remember preferences).",
      "First-party cookies: set by the website owner.",
      "Third-party cookies: set by other providers (e.g., analytics/ads).",
      "Essential cookies: required for site operation and security.",
      "Statistics/marketing/personalization cookies: used for measurement and targeting (where consent is required).",
    ],
  },
  {
    type: "p",
    text:
      "Cookie processing may rely on consent (when prompted via a cookie banner) or legitimate interests (for essential functions and service improvements).",
  },
  {
    type: "callout",
    title: "Typical retention",
    text:
      "Unless stated otherwise, persistent cookie retention can be up to around two years (as described in the policy).",
  },
  {
    type: "p",
    text:
      "Cookie consent can be managed and revoked through the cookie management solution (Cookiefirst / Usercentrics) as described in the policy.",
  },
  { type: "divider" },

  // =========================
  // Hosting & logs
  // =========================
  { type: "h2", text: "Provision of online services and web hosting" },
  {
    type: "p",
    text:
      "Web hosting is used to provide the website securely and efficiently. This can include infrastructure, storage, security services, and technical maintenance.",
  },
  {
    type: "p",
    text:
      "Server log files may be collected for security and stability (e.g., to prevent abuse and ensure reliable performance). Logs can include visited pages/files, timestamps, data volume, browser/OS, referrer URL, IP address, and requesting provider.",
  },
  {
    type: "callout",
    title: "Hosting provider example",
    text:
      "Netlify is listed as a hosting provider in the policy.",
  },
  { type: "divider" },

  // =========================
  // Contact
  // =========================
  { type: "h2", text: "Contacting us" },
  {
    type: "p",
    text:
      "When you contact the company (e.g., via form, email, phone, or social media), your details and message content are processed to respond and handle the request.",
  },
  {
    type: "p",
    text:
      "Legal basis is typically contract/pre-contract steps (when relevant) or legitimate interests in answering inquiries.",
  },
  {
    type: "callout",
    title: "Tooling example",
    text:
      "Notion is mentioned as a service provider used in this context.",
  },
  { type: "divider" },

  // =========================
  // Cloud services
  // =========================
  { type: "h2", text: "Cloud services" },
  {
    type: "p",
    text:
      "Cloud tools may be used for document storage, calendars, email delivery, spreadsheets, sharing documents, chats, and audio/video conferencing.",
  },
  {
    type: "p",
    text:
      "Providers may process master/contact data and content as part of collaboration workflows. They may also process usage data/metadata for security and service optimization.",
  },
  {
    type: "p",
    text:
      "If cloud tools are used to publish content or share documents externally, providers may store cookies for analytics or preferences, depending on legal requirements.",
  },
  { type: "divider" },

  // =========================
  // Newsletter
  // =========================
  { type: "h2", text: "Newsletter and electronic communications" },
  {
    type: "p",
    text:
      "Newsletters and similar messages may be sent to share information about the company, services, and promotions. In many cases, providing an email address is enough to subscribe, though additional fields may be requested (e.g., a name).",
  },
  {
    type: "h3",
    text: "Double opt-in",
  },
  {
    type: "p",
    text:
      "Newsletter subscriptions typically use a double opt-in step: after signing up, you confirm via email to prevent misuse of someone else’s email address.",
  },
  {
    type: "h3",
    text: "Logging and retention",
  },
  {
    type: "p",
    text:
      "To demonstrate consent and compliance, subscription timestamps and IP address may be logged. Unsubscribed email addresses may be retained for a limited period for evidence/defense purposes (as described in the policy).",
  },
  { type: "divider" },

  // =========================
  // Online marketing
  // =========================
  { type: "h2", text: "Online marketing" },
  {
    type: "p",
    text:
      "Data may be processed for online marketing — including showing content/ads based on potential interests and measuring how effective campaigns are.",
  },
  {
    type: "p",
    text:
      "This can involve building pseudonymous user profiles stored in cookies or similar technologies, using data such as pages visited, content viewed, and device/browser information.",
  },
  {
    type: "callout",
    title: "IP masking",
    text:
      "The policy describes using IP masking (shortening IP addresses) as a pseudonymization measure in some contexts.",
  },
  {
    type: "h3",
    text: "Facebook Pixel & Custom Audiences",
  },
  {
    type: "p",
    text:
      "Facebook Pixel can be used to build target groups (Custom Audiences), show ads to relevant audiences (including via partner networks), and measure conversions (e.g., whether an ad led to a website action).",
  },
  {
    type: "p",
    text:
      "The policy references special agreements and notes users can often exercise certain rights directly with the platform provider for platform-processed data.",
  },
  {
    type: "h3",
    text: "Analytics provider example",
  },
  {
    type: "p",
    text:
      "Google Analytics is listed as a provider in the policy, with opt-out options described via provider tools/settings.",
  },
  { type: "divider" },

  // =========================
  // Social media
  // =========================
  { type: "h2", text: "Profiles in social networks (social media)" },
  {
    type: "p",
    text:
      "The company maintains social media profiles to communicate with users and share information. Social platforms may process data outside the EU/EEA, which can affect how rights are enforced depending on jurisdiction.",
  },
  {
    type: "p",
    text:
      "Platforms often process usage behavior for research and advertising, potentially creating profiles and using cookies. Opt-out options are typically provided by the platform.",
  },
  {
    type: "callout",
    title: "Joint responsibility (limited scope)",
    text:
      "The policy describes joint responsibility with social media providers for the collection of certain page-visitor data (but not necessarily further processing).",
  },
  {
    type: "p",
    text:
      "Listed platforms in the policy include Instagram, Facebook, LinkedIn, and also references to Twitter/X, TikTok, and YouTube.",
  },
  { type: "divider" },

  // =========================
  // Plugins / embedded content
  // =========================
  { type: "h2", text: "Plugins and embedded functions and content" },
  {
    type: "p",
    text:
      "Embedded content (like videos, graphics, or other widgets) can be loaded from third-party providers. To deliver that content, the provider typically needs your IP address.",
  },
  {
    type: "p",
    text:
      "Third parties may also use pixel tags/web beacons and cookies for statistics or marketing, creating pseudonymous usage records.",
  },
  {
    type: "callout",
    title: "Provider examples",
    text:
      "The policy lists Google Fonts and Hotjar as examples of embedded/analytics-related services.",
  },
  { type: "divider" },

  // =========================
  // Changes
  // =========================
  { type: "h2", text: "Changes and updates to the privacy policy" },
  {
    type: "p",
    text:
      "The company may update this policy when processing practices change. Users are encouraged to review it periodically. If a change requires user action (such as new consent), users will be informed accordingly.",
  },
  {
    type: "p",
    text:
      "Addresses and contact details of third-party companies may change over time — users should verify them before contacting those providers.",
  },
  { type: "divider" },

  // =========================
  // Rights
  // =========================
  { type: "h2", text: "Rights of data subjects" },
  {
    type: "p",
    text:
      "Under GDPR, you have rights related to your personal data. Key rights described in the policy include:",
  },
  {
    type: "bullets",
    items: [
      "Right to object (especially to processing based on legitimate interests, and always to direct marketing).",
      "Right to withdraw consent at any time (where processing is based on consent).",
      "Right of access (confirmation, details, and a copy of your data).",
      "Right to rectification (fix inaccurate data or complete incomplete data).",
      "Right to erasure or restriction (where legal conditions apply).",
      "Right to data portability (receive your data in a structured format or transmit it to another controller).",
      "Right to lodge a complaint with a supervisory authority.",
    ],
  },
  { type: "divider" },

  // =========================
  // Terminology
  // =========================
  { type: "h2", text: "Terminology and definitions" },
  {
    type: "p",
    text:
      "The policy includes definitions to clarify terms used throughout (many drawn from GDPR). Examples include:",
  },
  {
    type: "bullets",
    items: [
      "Controller: the entity deciding why/how personal data is processed.",
      "Conversion tracking: measuring whether marketing led to a desired action.",
      "Custom Audiences / lookalikes: audience-building for ads based on behavior/interest signals.",
      "IP masking: shortening IP addresses to pseudonymize processing.",
      "Personal data: information linked to an identified/identifiable person.",
      "Processing: any handling of data (collection, storage, transfer, deletion).",
      "Remarketing: re-engaging users based on prior interactions (e.g., showing related ads later).",
      "Profiles: automated processing to analyze or predict aspects like interests/behavior.",
    ],
  },
  { type: "divider" },

  // =========================
  // Contact
  // =========================
  { type: "h2", text: "Contact us" },
  {
    type: "p",
    text:
      "For questions about the policy, you can contact the company by email (support@passionfroot.me).",
  },
];

export const makeCookiePolicyBlocks = (): BlogBlock[] => [
  // =========================
  // Intro
  // =========================
  { type: "h2", text: "Cookie Policy" },
  {
    type: "p",
    text:
      "This Cookie Policy explains what cookies and similar technologies are, how we use them, and how you can manage your preferences when using our websites and online services.",
  },
  {
    type: "p",
    text:
      "Depending on your location, certain cookies may only be placed with your consent (for example, analytics or marketing cookies). Essential cookies are usually required to provide core site functionality and security.",
  },
  {
    type: "p",
    text: "Last Update: 13 June, 2025",
  },
  { type: "divider" },

  // =========================
  // What are cookies
  // =========================
  { type: "h2", text: "What are cookies?" },
  {
    type: "p",
    text:
      "Cookies are small text files stored on your device (computer, phone, tablet) when you visit a website. They help websites recognize your device and remember certain information, such as your preferences or whether you’re logged in.",
  },
  {
    type: "p",
    text:
      "We also use similar technologies (for example, pixels, tags, local storage, and SDKs). For simplicity, this policy refers to all of these as “cookies”.",
  },
  { type: "divider" },

  // =========================
  // Why we use cookies
  // =========================
  { type: "h2", text: "Why we use cookies" },
  {
    type: "p",
    text:
      "We use cookies to operate our services, keep them secure, understand usage, and improve performance. In some cases (where permitted), we also use cookies to personalize content and measure marketing effectiveness.",
  },
  {
    type: "bullets",
    items: [
      "Essential: required for site functionality, security, and fraud prevention.",
      "Preferences: remember settings such as language or session choices.",
      "Analytics: understand how visitors use the site to improve UX and performance.",
      "Marketing: measure ad effectiveness and show relevant content (where applicable).",
    ],
  },
  { type: "divider" },

  // =========================
  // Cookie types
  // =========================
  { type: "h2", text: "Types of cookies we use" },

  { type: "h3", text: "1) Essential cookies" },
  {
    type: "p",
    text:
      "These cookies are necessary for the website to function and cannot be switched off in many systems. They are usually set in response to actions you make, such as setting privacy preferences, logging in, or filling in forms.",
  },
  {
    type: "bullets",
    items: [
      "Session management and authentication",
      "Security (e.g., abuse prevention, rate limiting)",
      "Load balancing and infrastructure stability",
      "Remembering your cookie choices (where applicable)",
    ],
  },

  { type: "h3", text: "2) Preference cookies" },
  {
    type: "p",
    text:
      "Preference cookies help the site remember choices you make to provide a more consistent experience (for example, language preferences).",
  },

  { type: "h3", text: "3) Analytics cookies" },
  {
    type: "p",
    text:
      "Analytics cookies help us measure traffic and understand how visitors move around the website. This helps us improve content, navigation, and performance. Where required, analytics cookies are only used with your consent.",
  },

  { type: "h3", text: "4) Marketing cookies" },
  {
    type: "p",
    text:
      "Marketing cookies may be used to measure advertising performance and help deliver relevant ads. These cookies may be set by us or by third-party providers. Where required, marketing cookies are only used with your consent.",
  },

  { type: "divider" },

  // =========================
  // First/third party + duration
  // =========================
  { type: "h2", text: "First-party and third-party cookies" },
  {
    type: "p",
    text:
      "First-party cookies are set by our website. Third-party cookies are set by providers whose tools we use (for example, analytics or embedded content). Third parties may process your data under their own policies.",
  },

  { type: "h3", text: "Session vs persistent cookies" },
  {
    type: "bullets",
    items: [
      "Session cookies: deleted when you close your browser.",
      "Persistent cookies: remain for a set period or until you delete them.",
    ],
  },
  {
    type: "callout",
    title: "Typical retention",
    text:
      "Retention depends on the cookie type. Some cookies expire at the end of the session; others may persist for weeks or months. Where applicable, our cookie banner or preference center shows more detail.",
  },

  { type: "divider" },

  // =========================
  // Legal basis (GDPR-friendly)
  // =========================
  { type: "h2", text: "Legal basis for using cookies" },
  {
    type: "p",
    text:
      "Where required by law, we rely on your consent for placing non-essential cookies (such as analytics or marketing cookies). Essential cookies are used based on legitimate interests (providing a secure and functional website) or where necessary to provide the service you request.",
  },
  {
    type: "bullets",
    items: [
      "Consent: for analytics/marketing cookies where legally required.",
      "Legitimate interests: for security, fraud prevention, and essential operations.",
      "Contract / requested service: where cookies are needed to provide features you use.",
    ],
  },
  { type: "divider" },

  // =========================
  // Managing preferences
  // =========================
  { type: "h2", text: "How to manage your cookie preferences" },
  {
    type: "p",
    text:
      "You can manage cookies using (1) our cookie banner / preference center (if available), and (2) your browser settings. You can also delete cookies already stored on your device.",
  },

  { type: "h3", text: "Cookie banner / preference center" },
  {
    type: "p",
    text:
      "If our website provides a cookie banner or preference center, you can use it to accept, reject, or customize non-essential cookie categories. You can also change your choice later.",
  },

  { type: "h3", text: "Browser settings" },
  {
    type: "p",
    text:
      "Most browsers allow you to block or delete cookies and control site permissions. Blocking some cookies may affect website functionality (for example, login or preferences).",
  },

  { type: "divider" },

  // =========================
  // Common cookie purposes
  // =========================
  { type: "h2", text: "Common cookies and similar technologies" },
  {
    type: "p",
    text:
      "Below are examples of common technologies you may encounter. The exact tools can vary over time depending on what is used on the site.",
  },
  {
    type: "bullets",
    items: [
      "Analytics tools: help measure page views, sessions, and site performance.",
      "Marketing pixels/tags: measure conversions and campaign performance.",
      "Embedded media: video players or widgets may load cookies from providers.",
      "Fraud/security tools: reduce spam, abuse, and account compromise attempts.",
    ],
  },
  { type: "divider" },

  // =========================
  // Do Not Track
  // =========================
  { type: "h2", text: "Do Not Track" },
  {
    type: "p",
    text:
      "Some browsers offer a “Do Not Track” (DNT) signal. Because there is no consistent industry standard for interpreting DNT, we may not respond to DNT signals in a uniform way. You can still control cookies via the preference center (if available) and browser settings.",
  },
  { type: "divider" },

  // =========================
  // Updates
  // =========================
  { type: "h2", text: "Changes to this Cookie Policy" },
  {
    type: "p",
    text:
      "We may update this Cookie Policy when we change how cookies are used or when required by law. We encourage you to review this policy periodically.",
  },
  { type: "divider" },

  // =========================
  // Contact
  // =========================
  { type: "h2", text: "Contact us" },
  {
    type: "p",
    text:
      "If you have questions about this Cookie Policy or how we use cookies, contact us at support@passionfroot.me.",
  },
];

export const makeTermsAndConditionsBlocks = (): BlogBlock[] => [
  // =========================
  // Intro
  // =========================
  { type: "h2", text: "Terms & Conditions" },
  {
    type: "p",
    text:
      "These Terms & Conditions (“Terms”) govern your access to and use of our websites, help center, and related online services (collectively, the “Services”). By accessing or using the Services, you agree to these Terms.",
  },
  {
    type: "callout",
    title: "Last updated",
    text: "13 June, 2025",
  },
  { type: "divider" },

  // =========================
  // Who we are
  // =========================
  { type: "h2", text: "Who we are" },
  {
    type: "p",
    text:
      "The Services are provided by Passionfroot GmbH (“we”, “us”, “our”). You can contact us at support@passionfroot.me for questions related to these Terms.",
  },
  { type: "divider" },

  // =========================
  // Eligibility
  // =========================
  { type: "h2", text: "Eligibility" },
  {
    type: "p",
    text:
      "You must be able to form a legally binding agreement to use the Services. If you use the Services on behalf of a company or another entity, you confirm that you have the authority to bind that entity to these Terms.",
  },
  { type: "divider" },

  // =========================
  // Accounts
  // =========================
  { type: "h2", text: "Accounts and access" },
  {
    type: "p",
    text:
      "Some parts of the Services may require an account. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
  },
  {
    type: "bullets",
    items: [
      "Provide accurate account information and keep it updated.",
      "Do not share your password or access tokens publicly.",
      "Notify us promptly if you suspect unauthorized access.",
    ],
  },
  { type: "divider" },

  // =========================
  // Acceptable use
  // =========================
  { type: "h2", text: "Acceptable use" },
  {
    type: "p",
    text:
      "You agree to use the Services lawfully and respectfully. You must not misuse the Services or attempt to harm the platform, other users, or third parties.",
  },
  {
    type: "bullets",
    items: [
      "Do not violate applicable laws or third-party rights.",
      "Do not attempt to access data or accounts that are not yours.",
      "Do not introduce malware, abuse APIs, or overload infrastructure.",
      "Do not scrape content in a way that violates our policies or applicable law.",
      "Do not use the Services to send spam or fraudulent communications.",
    ],
  },
  { type: "divider" },

  // =========================
  // Content
  // =========================
  { type: "h2", text: "Content and user submissions" },
  {
    type: "p",
    text:
      "You may be able to submit content through the Services (such as text, files, or messages). You retain ownership of your content, but you grant us the rights necessary to host, process, display, and deliver it as part of the Services.",
  },
  {
    type: "p",
    text:
      "You are responsible for ensuring you have the rights to submit your content and that your content does not infringe third-party rights or violate law.",
  },
  { type: "divider" },

  // =========================
  // Intellectual property
  // =========================
  { type: "h2", text: "Intellectual property" },
  {
    type: "p",
    text:
      "We and our licensors own the Services, including software, design, branding, and all related intellectual property. Except as explicitly allowed, you may not copy, modify, distribute, sell, or lease any part of the Services.",
  },
  { type: "divider" },

  // =========================
  // Third-party services
  // =========================
  { type: "h2", text: "Third-party services and links" },
  {
    type: "p",
    text:
      "The Services may contain links to third-party websites or may integrate third-party tools (for example, embedded media). We are not responsible for third-party services, their content, or their policies.",
  },
  { type: "divider" },

  // =========================
  // Subscriptions / Fees
  // =========================
  { type: "h2", text: "Fees and subscriptions" },
  {
    type: "p",
    text:
      "Some features may require payment. If you purchase a paid plan, you agree to pay the fees and applicable taxes. Pricing, plan features, and billing terms will be shown to you at checkout or within your account.",
  },
  {
    type: "p",
    text:
      "If a plan renews automatically, you can manage renewal settings from your account (where available).",
  },
  { type: "divider" },

  // =========================
  // Termination
  // =========================
  { type: "h2", text: "Suspension and termination" },
  {
    type: "p",
    text:
      "We may suspend or terminate access to the Services if we reasonably believe you violated these Terms, caused risk or harm to the Services, or if required to comply with law.",
  },
  {
    type: "p",
    text:
      "You may stop using the Services at any time. If you have a paid plan, cancellation and refund rules (if any) depend on the plan terms shown at purchase and applicable law.",
  },
  { type: "divider" },

  // =========================
  // Disclaimers
  // =========================
  { type: "h2", text: "Disclaimers" },
  {
    type: "p",
    text:
      "The Services are provided “as is” and “as available”. We do not guarantee that the Services will be uninterrupted, secure, or error-free, or that any specific results will be achieved through using the Services.",
  },
  { type: "divider" },

  // =========================
  // Limitation of liability
  // =========================
  { type: "h2", text: "Limitation of liability" },
  {
    type: "p",
    text:
      "To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenues, data, goodwill, or business opportunities.",
  },
  {
    type: "p",
    text:
      "Where liability cannot be excluded, our liability will be limited to the extent allowed by applicable law.",
  },
  { type: "divider" },

  // =========================
  // Indemnity
  // =========================
  { type: "h2", text: "Indemnity" },
  {
    type: "p",
    text:
      "You agree to indemnify and hold harmless us and our affiliates, officers, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from your use of the Services or violation of these Terms.",
  },
  { type: "divider" },

  // =========================
  // Privacy
  // =========================
  { type: "h2", text: "Privacy" },
  {
    type: "p",
    text:
      "Our processing of personal data is described in our Privacy Policy. Our use of cookies and similar technologies is described in our Cookie Policy. By using the Services, you acknowledge those policies.",
  },
  { type: "divider" },

  // =========================
  // Changes
  // =========================
  { type: "h2", text: "Changes to these Terms" },
  {
    type: "p",
    text:
      "We may update these Terms from time to time. If changes are material, we may provide additional notice (for example, via the Services). Continued use of the Services after changes become effective means you accept the updated Terms.",
  },
  { type: "divider" },

  // =========================
  // Governing law
  // =========================
  { type: "h2", text: "Governing law" },
  {
    type: "p",
    text:
      "These Terms are governed by applicable laws in the jurisdiction where the provider is established, unless mandatory consumer laws require otherwise. If you are a consumer, mandatory protections under your local law may still apply.",
  },
  { type: "divider" },

  // =========================
  // Contact
  // =========================
  { type: "h2", text: "Contact us" },
  {
    type: "p",
    text:
      "If you have questions about these Terms, contact us at support@passionfroot.me.",
  },
];
