export type NavLinkItem = {
  label: string;
  href: string;
  desc?: string;
  icon?: string; // iconify name
};

export type MegaMenuConfig = {
  trigger: string; // "For Brands"
  primary: NavLinkItem[]; // 3 big items
  resourcesTitle?: string; // "Resources"
  resources?: NavLinkItem[]; // small links
  asideBadge?: string; // "Guide"
  asideTitle?: string;
  asideDesc?: string;
};

export type MenuItem = {
  title: string;
  description?: string;
  href: string;
  icon: string; // iconify
};

export type Stat = {
  value: string;
  label: string;
};

export type PlatformCard = {
  title: string;
  icon: string; // iconify icon
  bg: string; // css color or gradient
  image: string; // can be remote (make sure next.config allows domain)
};

export type MapTabKey = "newsletter" | "youtube" | "instagram" | "podcasts";

export type MapChip = {
  name: string;
  avatar: string;
};

export type CreatorFinderItem = {
  image: string;
  title: string;
  description: string;
  badge?: string;
};

export type TileBase = {
  id: string;
  colSpan?: string; // tailwind col-span classes
  bg?: string; // tailwind bg class (used by photo/quote)
};

// stats + person (shared)
export type TileStat = {
  label: string;
  value: string;
  icon?: string; // iconify/lucide key
};

export type TilePerson = {
  name: string;
  title?: string;
  company?: string;
};

// ✅ Shared structure for photo + quote (same fields)
export type StoryTile = TileBase & {
  type: "photo" | "quote";
  img: string;
  bg: string; // required because right panel tint comes from it
  companyIcon?: string; // iconify key OR empty string
  company: string;
  quote: string;
  person: TilePerson;
  stats?: TileStat[];
  // optional: if later you want different left image in modal
  leftImg?: string;
};

// ✅ Logo tile
export type LogoTile = TileBase & {
  type: "logo";
  icon?: string;
  text?: string;
  iconSize?: number;
  color: string; // ✅ required for logo cards (include hover:bg-.. here)
};

export type Tile = StoryTile | LogoTile;


export type FooterLink = { label: string; href: string; badge?: string };

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type AiProfileCard = {
  name: string;
  matchLabel: string; // "Great match"
  score: number; // 92, 88, 95
  summaryTitle: string; // "AI profile summary"
  summary: string;
  avatar: string; // image path/url
};

export type MapTab = {
  key: MapTabKey;
  label: string;
  icon: string;          // iconify icon
  activeText: string;    // active label color
  activeBg: string;      // active pill bg
  activeRing: string;    // active pill border/ring
  chips: MapChip[];
};

export type MegaMenuConf = {
  key: "brands" | "creators";
  label: string;
  previewBg: string; // css gradient
  previewImage: string; // remote image
  mainItems: MenuItem[];
  resourceItems: MenuItem[];
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "divider" };

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string; // e.g. "JANUARY 12, 2026"
  readTime: string; // e.g. "10 MIN READ"
  author: string;
  category: string;
  cover: string; // pexels
  excerpt: string;
  blocks: BlogBlock[];
};

export type HeaderConfig = {
  brandName: string;
  brandHref: string;

  menus: {
    brands: MegaMenuConfig;
    creators: MegaMenuConfig;
  };

  topLinks: NavLinkItem[]; // About, Careers

  login: {
    trigger: string; // Login
    subtitle: string; // "Login as a"
    options: NavLinkItem[]; // Creator, Brand
  };

  cta: {
    label: string; // Get access
    href: string;
  };
};

export const headerConfig: HeaderConfig = {
  brandName: "YourBrand",
  brandHref: "/",

  menus: {
    brands: {
      trigger: "For Brands",
      primary: [
        {
          label: "Features",
          desc: "Find creators, manage campaigns, and pay — in one place.",
          href: "/brands/features",
          icon: "mdi:stars-outline",
        },
        {
          label: "Customers",
          desc: "See how teams scale partnerships and grow demand.",
          href: "/brands/customers",
          icon: "mdi:account-group-outline",
        },
        {
          label: "Pricing",
          desc: "Plans for every stage. Start simple, scale later.",
          href: "/pricing/brands",
          icon: "mdi:credit-card-outline",
        },
      ],
      resourcesTitle: "Resources",
      resources: [
        { label: "Blog", href: "/blog" },
        { label: "Pricing Guide", href: "/guides/pricing" },
      ],
      asideBadge: "Guide",
      asideTitle: "Sponsorship pricing guide",
      asideDesc: "Benchmarks + checklist to price and plan partnerships.",
    },

    creators: {
      trigger: "For Creators",
      primary: [
        {
          label: "Features",
          desc: "Tools to close more brand deals, easier and faster.",
          href: "/creators/features",
          icon: "mdi:flash-outline",
        },
        {
          label: "Customers",
          desc: "Learn how creators monetize with partnerships.",
          href: "/creators/customers",
          icon: "mdi:account-heart-outline",
        },
        {
          label: "Pricing",
          desc: "Creator plans built for growth and consistency.",
          href: "/pricing/creators",
          icon: "mdi:tag-outline",
        },
      ],
      resourcesTitle: "Resources",
      resources: [
        { label: "Creator Gallery", href: "/creator-gallery" },
        { label: "Blog", href: "/blog" },
        { label: "Podcasts", href: "/podcasts" },
        { label: "Pricing Guide", href: "/guides/pricing" },
      ],
      asideBadge: "Resource",
      asideTitle: "Creator kit",
      asideDesc: "A simple kit to pitch brands + package your offers.",
    },
  },

  topLinks: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
  ],

  login: {
    trigger: "Login",
    subtitle: "Login as a",
    options: [
      { label: "Creator", href: "/login/creator" },
      { label: "Brand", href: "/login/brand" },
    ],
  },

  cta: {
    label: "Get access",
    href: "/get-access",
  },
};
