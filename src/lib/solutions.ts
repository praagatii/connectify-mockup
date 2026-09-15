export type SolutionGroup = {
  id: string;
  index: string;
  name: string;
  href: string;
  description: string;
  image: string;
};

export const solutionGroups: SolutionGroup[] = [
  {
    id: "digital-solutions",
    index: "01",
    name: "Digital Solutions",
    href: "/solutions#digital-solutions",
    description:
      "Full-stack digital product engineering — from web and mobile to SaaS and commerce platforms.",
    image: "/case-studies/cloud-kitchen-pos.jpg",
  },
  {
    id: "technology-services",
    index: "02",
    name: "Technology Services",
    href: "/solutions#technology-services",
    description:
      "Cloud, AI and managed technology services that keep platforms reliable and future-ready.",
    image: "/case-studies/stackintel.jpg",
  },
  {
    id: "business-advisory",
    index: "03",
    name: "Business Advisory",
    href: "/solutions#business-advisory",
    description:
      "Strategy and advisory add-ons that turn technology into markets, revenue and enterprise value.",
    image: "/case-studies/finfan.jpg",
  },
  {
    id: "investment-consulting",
    index: "04",
    name: "Investment Consulting",
    href: "/solutions#investment-consulting",
    description:
      "Capital advisory across strategy, debt, equity fundraising and post-raise support.",
    image: "/case-studies/odinmo-baas.jpg",
  },
];

export const solutionLinks = solutionGroups.map((group) => ({
  name: group.name,
  href: group.href,
}));