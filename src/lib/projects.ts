export type Project = {
  slug: string;
  name: string;
  initial: string;
  category: string;
  tags: string[];
  industries: string[];
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "taurus-career-ai",
    name: "Taurus Career AI",
    initial: "T",
    category: "AI Platform · Career",
    tags: ["AI Platform", "Career/HR"],
    industries: [],
    summary:
      "AI-driven, mobile-first career platform combining job discovery, résumé optimization, and community collaboration.",
    overview:
      "Taurus Career AI is a comprehensive, AI-driven career platform designed to revolutionize how job seekers discover opportunities, optimize their professional profiles, and collaborate with peers. Built mobile-first, the platform leverages advanced AI algorithms to match candidates with the right roles while providing intelligent résumé enhancement suggestions.",
    challenge:
      "Job seekers struggle to navigate fragmented job markets, craft compelling résumés, and access professional networks. Traditional job portals lack personalization and AI-powered optimization capabilities.",
    solution:
      "We built a unified mobile-first platform with AI-powered job matching, intelligent résumé optimization using NLP, and a built-in community collaboration space. The platform uses machine learning to continuously improve recommendations.",
    tech: ["React Native", "Node.js", "Python", "TensorFlow", "Firebase", "AWS"],
  },
  {
    slug: "flycure-health",
    name: "Flycure Health",
    initial: "F",
    category: "Healthcare",
    tags: ["Healthcare"],
    industries: ["Healthtech"],
    summary:
      "Cross-platform medical tourism application connecting international patients with accredited hospitals in India.",
    overview:
      "Flycure Health is a cross-platform medical tourism application that connects international patients with accredited hospitals in India. The platform features multilingual support, real-time hospital listings, and in-app booking integrated with a secure backend.",
    challenge:
      "International patients face significant barriers in accessing quality healthcare in India — language barriers, lack of transparency in hospital ratings, and complex booking processes.",
    solution:
      "We developed a cross-platform application with multilingual support, real-time hospital listings, in-app booking, and role-based access controls for patients, doctors, and partners. Built with Node.js, Firebase, and REST APIs.",
    tech: ["Flutter", "Node.js", "Firebase", "REST APIs", "Google Cloud"],
  },
  {
    slug: "cloud-kitchen-pos",
    name: "Cloud Kitchen POS",
    initial: "C",
    category: "Enterprise",
    tags: ["Enterprise", "FoodTech"],
    industries: ["Enterprise"],
    summary:
      "Scalable POS system for a top cloud kitchen brand, managing 5 sub-brands and close to 100 kitchens.",
    overview:
      "A scalable Point-of-Sale system designed for India's top cloud kitchen brand, handling operations across 5 different sub-brands and nearly 100 kitchens nationwide.",
    challenge:
      "Managing orders, inventory, and analytics across 100 kitchens with 5 sub-brands required a unified, real-time system that could handle high throughput during peak hours.",
    solution:
      "We built a real-time order management system with OOS management, comprehensive reporting, AI-based analytics, and KDS (Kitchen Display System) integration. The system handles peak loads while maintaining sub-second response times.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "AWS", "Socket.io"],
  },
  {
    slug: "loyalty-app",
    name: "Contractor Loyalty App",
    initial: "C",
    category: "Enterprise",
    tags: ["Enterprise", "Construction"],
    industries: ["Enterprise"],
    summary:
      "Digital loyalty application fostering stronger relationships with contractors through a points-based rewards system.",
    overview:
      "A construction loyalty application designed to foster stronger relationships with contractors by rewarding repeat business and referrals. Features include points-based systems, tiered rewards, and exclusive member benefits that can be redeemed for cash.",
    challenge:
      "Construction companies lack digital tools to retain contractors, track loyalty, and incentivize repeat business in an industry where such programs are rare.",
    solution:
      "We built a digital loyalty platform with CRM integration for seamless reward tracking, personalized offers, and real-time points management. The app streamlines client interactions and boosts lifetime value.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Firebase", "AWS"],
  },
  {
    slug: "vehicle-tracking",
    name: "Trackway",
    initial: "T",
    category: "IoT / Mobility",
    tags: ["IoT/Mobility", "Mobility"],
    industries: ["Mobility"],
    summary:
      "Smart vehicle tracking platform with real-time monitoring, ride data analytics, and support integration.",
    overview:
      "Trackway is a smart and scalable vehicle tracking platform built to give users real-time visibility and control over their vehicles. Features include live location tracking, route playback, ride analytics, and custom status filters.",
    challenge:
      "Fleet operators needed a unified dashboard to monitor vehicles across locations with real-time data, route history, and performance analytics.",
    solution:
      "We built an intuitive dashboard with live GPS tracking, route playback, ride analytics, and custom status filters that transform raw movement into actionable insights.",
    tech: ["React", "Node.js", "MongoDB", "Google Maps API", "Socket.io", "AWS"],
  },
  {
    slug: "ai-lead-discovery",
    name: "AI Lead Discovery",
    initial: "A",
    category: "AI Platform",
    tags: ["AI Platform", "SalesTech"],
    industries: [],
    summary:
      "Cutting-edge AI-based solution automating lead management lifecycle with smart algorithms and data enrichment.",
    overview:
      "An AI-based lead discovery platform designed to automate and enhance the entire lead management lifecycle. The platform generates leads using smart algorithms that scan multiple data sources, qualifies them automatically, and enriches with firmographics and social profiles.",
    challenge:
      "Sales teams waste significant time manually sourcing, qualifying, and enriching leads from disparate data sources, leading to low conversion rates.",
    solution:
      "We built an AI-powered platform that automatically generates, qualifies, and enriches leads using multi-source data aggregation, behavior analysis, and ideal customer profile matching.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI", "AWS"],
  },
];

export const industries = [
  { name: "Fintech", projects: "10+ projects" },
  { name: "Edtech", projects: "3+ projects" },
  { name: "Healthtech", projects: "2+ projects" },
  { name: "Mobility", projects: "3+ projects" },
  { name: "Enterprise", projects: "5+ projects" },
  { name: "Retail & E-Commerce", projects: "4+ projects" },
];
