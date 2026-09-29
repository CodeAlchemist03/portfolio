export type Work = {
  slug: string;
  name: string;
  kind: string;
  url?: string;
  /** 'review' is a finished product waiting on a store's approval. */
  status: 'live' | 'building' | 'review';
  /** Marks projects rebuilt from the ground up, not iterated on. */
  rebuilt?: boolean;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const work: Work[] = [
  {
    slug: 'sellrank',
    name: 'SellRank',
    kind: 'Shopify app · LeelaRam Technologies',
    url: 'https://www.leelaramtechnologies.com/products/sellrank',
    status: 'review',
    rebuilt: true,
    year: '2025 — present',
    summary:
      'A Shopify app that ranks every collection by what actually sells — views, add-to-carts, orders, revenue and stock — and writes that order into Shopify’s own sorting, with no theme edits. Rebuilt from the collection-ordering engine first proven on Lucira’s live collections; submitted to the Shopify App Store in September 2026.',
    highlights: [
      'Percentage-slot order plans: each slot ranked by one of 19 measures or a weighted balanced score, narrowed by conditions such as in-stock only.',
      'Live preview of the exact resulting order, with pin, demote, move and drag-and-drop curation before anything syncs to Shopify.',
      'First-party web pixel counting product views and add-to-carts as daily totals per product, with no customer identifiers; optional GA4 import of up to 90 days of history.',
      'Daily or weekly automatic re-sorts, version history with per-version performance attribution, and sort-health drift alerts.',
      'Verified by 78,240+ automated sorting cases and an accuracy audit that runs against a live store.',
      'Built to App Store requirements: session-token auth, HMAC-verified compliance webhooks, expiring offline tokens and Shopify billing.',
    ],
    stack: ['Remix', 'TypeScript', 'Shopify Admin GraphQL API', 'Web Pixels', 'Polaris', 'Prisma', 'PostgreSQL'],
  },
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
  {
    slug: 'leelaram',
    name: 'LeelaRam Technologies',
    kind: 'Company site & publishing platform',
    url: 'https://www.leelaramtechnologies.com/',
    status: 'live',
    year: '2026 — present',
    summary:
      'The site for the company I founded: products, services, case studies and a long-form blog, built on Next.js with one connected structured-data graph tying the company, its founder, its products and its work together.',
    highlights: [
      '60+ long-form articles on Shopify merchandising, platform changes and building software, each with its own share image, plus an RSS feed and an llms.txt map for AI answer engines.',
      'SellRank product page with a chaptered walkthrough video, a screen-by-screen tour, version history and a five-part tutorial series.',
      'JSON-LD for Organization, Person, SoftwareApplication, VideoObject and BlogPosting, linked by stable IDs.',
      'Deployed to Vercel on every push, with Core Web Vitals tracked in production.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'JSON-LD', 'Vercel'],
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
