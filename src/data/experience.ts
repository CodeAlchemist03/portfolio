export type Role = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  current?: boolean;
  points: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: 'Lucira Jewelry',
    role: 'Software Engineer',
    dates: 'Sep 2025 — Present',
    location: 'Mumbai, India',
    current: true,
    points: [
      'Sole engineer on the headless replatform: Next.js + Shopify Storefront API + MongoDB, at ~500K monthly sessions.',
      'Built and maintain 50+ GA4/GTM dataLayer events across search, PDP, cart, checkout, payments, accounts and scheme funnels; configured Google Ads conversion tracking and order-level UTM pass-through so revenue attributes to campaign.',
      'Modeled and joined source tables in BigQuery and exposed the payload via a Python REST API driving WebEngage notification triggers; built page-level Looker Studio dashboards.',
      'Rebuilt the Ornaverse ERP integration twice through breaking upstream changes to request schema, headers and attributes, and fixed a defect where customers lacking an ERP record failed silently at payment.',
      'Shipped and measured CRO changes — PDP and checkout social proof, above-the-fold offer placement, a paginated review redesign, rage-click fixes on customize and promo controls.',
      'Built a ring-size estimation tool measuring against a reference card or coin, accuracy-validated across device screens, plus faceted PLP filtering and a self-serve return journey.',
    ],
    stack: ['Next.js', 'MongoDB', 'Shopify APIs', 'Razorpay', 'BigQuery', 'GA4', 'GTM', 'WebEngage', 'GCP'],
  },
  {
    company: 'Leemis Innovations',
    role: 'Founder & Software Engineer',
    dates: 'Jan 2024 — Present',
    location: 'Mumbai, India',
    current: true,
    points: [
      'Run an independent consulting practice; designed, deployed and maintain 5+ production web and commerce platforms across jewelry, retail and construction.',
      'Own the full lifecycle from requirements and solution architecture through deployment, analytics implementation and post-launch support.',
      'Deliver Shopify storefronts, headless commerce applications, Next.js platforms, ERP integrations, payment gateways and business automation workflows.',
      'Work directly with domestic and international stakeholders to translate business requirements into scalable technical solutions.',
    ],
    stack: ['Next.js', 'Shopify', 'Node.js', 'REST APIs', 'Vercel'],
  },
  {
    company: 'Blazetrail Fintech Solutions',
    role: 'Software Development Engineer Intern',
    dates: 'Feb 2025 — Apr 2025',
    location: 'Mumbai, India',
    points: [
      'Developed a virtual trading platform supporting simulated trade execution, portfolio management and transaction workflows.',
      'Integrated backend APIs, authentication systems and market-data workflows to improve platform reliability and maintainability.',
      'Implemented trade lifecycle handling, portfolio updates and error-recovery mechanisms.',
    ],
    stack: ['React.js', 'REST APIs', 'Postman', 'Git', 'Agile'],
  },
];

export const education = {
  school: 'K J Somaiya Institute of Technology',
  degree: 'B.Tech, Computer Engineering (AI & Machine Learning)',
  dates: '2021 — 2025',
  grade: 'CGPI 9.6 / 10',
  leadership: 'Joint Treasurer, IET student chapter',
};

export const certifications = [
  'AWS Academy Cloud Foundations',
  'EC-Council Ethical Hacking Essentials',
  'Google Analytics',
  'Power BI',
  'Advanced Microsoft Excel',
];
