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
