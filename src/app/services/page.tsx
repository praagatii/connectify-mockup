import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

const serviceGroups = [
  {
    group: "Digital Solutions",
    services: [
      {
        name: "Web Application Development",
        description:
          "Engineer scalable web applications using robust architectures, ensuring responsiveness and efficiency through strategic API integrations.",
        points: ["React, Next.js, Angular", "Progressive Web Apps", "API Design & Integration", "Performance Optimization"],
      },
      {
        name: "Mobile Application Development",
        description:
          "Craft intuitive mobile applications with seamless UX/UI, leveraging cutting-edge frameworks and agile methodologies.",
        points: ["iOS & Android Native", "React Native & Flutter", "App Store Optimization", "Push Notifications"],
      },
      {
        name: "SaaS Solutions",
        description:
          "Optimize business processes with Software as a Service offerings, providing scalable and modular solutions backed by cloud infrastructure.",
        points: ["Multi-tenant Architecture", "Subscription Management", "Scalable Infrastructure", "Analytics & Reporting"],
      },
      {
        name: "E-Commerce Support",
        description:
          "Develop secure e-commerce platforms with PCI-compliant solutions, integrating payment gateways and robust backend systems.",
        points: ["Payment Gateway Integration", "PCI Compliance", "Inventory Management", "Order Processing"],
      },
    ],
  },
  {
    group: "Technology Services",
    services: [
      {
        name: "Cloud Computing",
        description:
          "Implement cloud-native solutions for enhanced scalability and reliability using microservices architecture and containerization.",
        points: ["Microservices Architecture", "Docker & Kubernetes", "CI/CD Pipelines", "Auto-scaling"],
      },
      {
        name: "AWS Consulting & Support",
        description:
          "Navigate cloud infrastructure with our AWS specialists — strategic architecture design, cost optimization, and continuous support.",
        points: ["Architecture Design", "Cost Optimization", "Security Best Practices", "Migration & Support"],
      },
      {
        name: "AI / ML Solutions",
        description:
          "Harness artificial intelligence and machine learning for predictive analytics, natural language processing, and data-driven insights.",
        points: ["Large Language Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      },
      {
        name: "Blockchain",
        description:
          "Implement decentralized ledger technology for transparent and secure transactions, using cryptographic principles for data integrity.",
        points: ["Smart Contracts", "DeFi Applications", "NFT Marketplaces", "Enterprise Blockchain"],
      },
    ],
  },
  {
    group: "Advisory",
    services: [
      {
        name: "Product Consulting",
        description:
          "Transform ideas into market-ready products — guiding through every stage from strategy and design to development and growth.",
        points: ["Product Strategy", "User Research", "Feature Prioritization", "Go-to-Market Planning"],
      },
      {
        name: "Project Outsourcing",
        description:
          "Expert IT sourcing and offshoring solutions, providing top-tier talent and cost-effective services tailored to your needs.",
        points: ["Dedicated Teams", "Talent Acquisition", "Cost Optimization", "Project Management"],
      },
    ],
  },
];

const techStack = [
  "React", "Next.js", "Angular", "Flutter", "React Native", "Swift",
  "Node.js", "Python", "Java", ".NET", "FastAPI", "Django",
  "PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis", "Oracle",
  "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins",
  "TensorFlow", "OpenAI", "Blockchain", "Grafana", "Elasticsearch", "Socket.io",
];

export const metadata = {
  title: "Services — Connectify Tech",
  description:
    "End-to-end technology solutions from Connectify Tech — web, mobile, SaaS, e-commerce, cloud, AI/ML, and advisory services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our Services"
        title="End-to-End Technology Solutions"
        description="From ideation to deployment, we deliver comprehensive solutions that drive real business results."
      />

      <div className="px-6 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl space-y-20">
          {serviceGroups.map((group) => (
            <section key={group.group}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                {group.group}
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {group.services.map((service, i) => (
                  <article
                    key={service.name}
                    className="rounded-2xl border border-white/10 bg-surface p-8"
                  >
                    <span className="font-mono text-xs text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-inter text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Technology
            </h2>
            <h3 className="mt-4 font-inter text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
              Our tech stack
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              We work with the best tools and frameworks to build robust,
              scalable, and future-proof solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <FinalCta />
    </>
  );
}