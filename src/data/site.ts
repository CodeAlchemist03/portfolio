export const site = {
  name: 'Sumit Chavda',
  role: 'Software Engineer & Founder',
  tagline: 'Headless commerce, Shopify apps & analytics engineering',
  url: 'https://sumitchavda.vercel.app',
  /* Kept under ~160 chars so search results don't truncate it. */
  metaDescription:
    'Software engineer in Mumbai and founder of LeelaRam Technologies, maker of the SellRank Shopify app. Headless commerce on Next.js and the Shopify APIs.',
  location: 'Mumbai, India',
  email: 'sumitchavda3003@gmail.com',
  phone: '+91 98922 60330',
  phoneHref: '+919892260330',
  resume: '/resume.pdf',
  socials: {
    github: 'https://github.com/smartysumit',
    linkedin: 'https://linkedin.com/in/sumitchavda03',
    youtube: 'https://youtube.com/@sumitchavda-w3h',
  },
  intro:
    'I own a production headless commerce platform end to end — architecture, ERP and payment integrations, internal tooling, data pipelines and conversion experimentation — on Next.js, MongoDB and the Shopify APIs. I also founded LeelaRam Technologies, where I build SellRank, a Shopify app that ranks collections by what actually sells. Published GAN research at IEEE IGARSS 2025.',
} as const;

/* The company I founded, and its first product. The structured data points at
   the company site's own Organization node (@id), so search engines can tie
   this page and leelaramtechnologies.com to the same entity. */
export const company = {
  name: 'LeelaRam Technologies',
  role: 'Founder',
  url: 'https://www.leelaramtechnologies.com',
  schemaId: 'https://www.leelaramtechnologies.com/#organization',
  linkedin: 'https://www.linkedin.com/company/leelaram-technologies/',
  blog: 'https://www.leelaramtechnologies.com/blog',
  slogan: 'Software that grows with your business',
  product: {
    name: 'SellRank',
    url: 'https://www.leelaramtechnologies.com/products/sellrank',
    status: 'In Shopify App Store review',
  },
} as const;

export const metrics = [
  { value: '500K', label: 'Monthly sessions served', note: 'Lucira Jewelry, across India' },
  { value: '150+', label: 'Production features shipped', note: 'Integrations, dashboards, migrations' },
  { value: '55%', label: 'LCP reduction', note: '28.0s → 12.7s on storefront' },
  { value: '50+', label: 'Analytics events designed', note: 'GA4 / GTM / Ads / WebEngage' },
] as const;

export const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#writing', label: 'Writing' },
  { href: '#research', label: 'Research' },
  { href: '#about', label: 'About' },
] as const;
