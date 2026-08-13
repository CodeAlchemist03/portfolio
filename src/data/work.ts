export type Work = {
  slug: string;
  name: string;
  kind: string;
  url?: string;
  status: 'live' | 'building';
  /** Marks projects rebuilt from the ground up, not iterated on. */
  rebuilt?: boolean;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const work: Work[] = [
  {
    slug: 'lucira',
    name: 'Lucira Jewelry',
    kind: 'Headless commerce platform',
    url: 'https://www.lucirajewelry.com/',
    status: 'live',
    rebuilt: true,
    year: '2025 — present',
    summary:
      'Sole engineer on the migration of a D2C lab-grown diamond brand from a themed Shopify storefront to a headless Next.js + Shopify Storefront API + MongoDB architecture, serving ~500K monthly sessions across an omnichannel retail network in India.',
    highlights: [
      'Rebuilt the storefront from the ground up as a headless app — owning architecture, delivery, release, instrumentation and production support.',
      'Migrated the full Savings Scheme product off a standalone subdomain onto the primary domain via a staged cutover, collapsing two codebases and hosting environments into one at full feature parity.',
      'Shipped Vault of Dreams, a 9+1 month instalment savings product, on Razorpay with Ornaverse ERP-backed enrollment, instalment tracking and receipt reconciliation.',
      'Built a metaobject-driven programmatic SEO system generating live Gold/Silver/Platinum rate pages across N+ Indian cities over a single shared rate-update path, preserving legacy URLs to retain search equity.',
      'Built MongoDB-backed admin dashboards so marketing and ops self-serve daily metal rates, offers, homepage and city content — removing engineering from routine content changes.',
      'Cut LCP 55% (28.0s → 12.7s) through image optimization, code splitting and render-path work.',
      'Shipped a pincode journey resolving a shopper’s nearest store and re-ranking ready-to-ship inventory by proximity, with leads routed from GCP into Zoho CRM.',
    ],
    stack: ['Next.js', 'Shopify Storefront API', 'MongoDB', 'Razorpay', 'Ornaverse ERP', 'GA4 / GTM', 'BigQuery', 'GCP'],
  },
  {
    slug: 'lucira-mobile',
    name: 'Lucira Mobile',
    kind: 'React Native app',
    status: 'building',
    year: '2026 — in progress',
    summary:
      'Extending the Lucira commerce experience to mobile with Expo — reusing the headless Shopify data layer already powering the web storefront so catalogue, cart and account stay in sync across surfaces.',
    highlights: [
      'Expo + React Native client consuming the same Shopify Storefront API layer as the web platform.',
      'Native navigation, component and gesture fundamentals with a full CRUD implementation.',
      'Shared session and account model so the mobile and web experiences stay consistent.',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Shopify Storefront API'],
  },
  {
    slug: 'primestyle',
    name: 'PrimeStyle',
    kind: 'US jewelry storefront',
    url: 'https://primestyle.com/',
    status: 'live',
    rebuilt: true,
    year: '2024 — present',
    summary:
      'Leading the end-to-end redevelopment of a production Shopify storefront for a US diamond and engagement-ring brand trading since 2001 — theme architecture, custom development and performance, with international stakeholders.',
    highlights: [
      'Rebuilt the storefront architecture rather than patching the existing theme — restructuring templates, sections and the product data model.',
      'Advanced product customization flows for custom engagement rings and bridal sets.',
      'Recommendation and merchandising surfaces across natural and lab-grown diamond catalogues.',
      'Analytics instrumentation and performance work across the funnel.',
    ],
    stack: ['Shopify', 'Liquid', 'JavaScript', 'GA4 / GTM', 'Core Web Vitals'],
  },
  {
    slug: 'chamunda',
    name: 'Chamunda Constructions',
    kind: 'Lead-generation site',
    url: 'https://www.chamundaconstructions.in/',
    status: 'live',
    rebuilt: true,
    year: '2024 — present',
    summary:
      'Designed, built and deployed a high-performance Next.js site for a Mumbai civil contracting firm specialising in building finishing work — built for lead generation, SEO visibility and brand credibility with builders.',
    highlights: [
      'Rebuilt from the ground up on a second pass — new information architecture around services, projects and process.',
      'Project portfolio and service pages structured for local SEO across Mumbai search terms.',
      'Quote-request journey and lead capture as the primary conversion path.',
      'Responsive frontend with optimized content delivery and scalable content workflows.',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'SEO', 'Vercel'],
  },
];

export const research = {
  title: 'Transforming Synthetic Aperture Radar Satellite Images to Optical Images Using Generative Adversarial Networks',
  venue: 'IEEE IGARSS 2025 — Brisbane, Australia',
  status: 'Presented & published',
  summary:
    'Trained a GAN to translate Synthetic Aperture Radar imagery into optical satellite imagery, improving the interpretability of weather-independent SAR data. Co-authored, presented and published at the IEEE Geoscience and Remote Sensing Symposium 2025.',
  stack: ['Python', 'PyTorch', 'TensorFlow', 'GANs', 'OpenCV'],
};
