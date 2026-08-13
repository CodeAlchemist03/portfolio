export const site = {
  name: 'Sumit Chavda',
  role: 'Software Engineer',
  tagline: 'Headless commerce, ERP integrations & analytics engineering',
  url: 'https://sumitchavda.vercel.app',
  /* Kept under ~160 chars so search results don't truncate it. */
  metaDescription:
    'Software Engineer in Mumbai building headless commerce on Next.js, MongoDB and the Shopify APIs — ERP integrations, analytics engineering and performance.',
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
    'I own a production headless commerce platform end to end — architecture, ERP and payment integrations, internal tooling, data pipelines and conversion experimentation — on Next.js, MongoDB and the Shopify APIs. Published GAN research at IEEE IGARSS 2025.',
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
  { href: '#research', label: 'Research' },
  { href: '#about', label: 'About' },
] as const;
