export type Article = {
  title: string;
  url: string;
  /** ISO date, as published. */
  date: string;
  readingTime: string;
  kind: 'Essay' | 'Profile' | 'Engineering';
  summary: string;
};

/* A hand-picked selection from the LeelaRam Technologies blog, where I write.
   Titles, dates and reading times match the published posts exactly. */
export const writing: Article[] = [
  {
    title: 'Submitting a Shopify App for Review in 2026: The Checklist We Used for SellRank',
    url: 'https://www.leelaramtechnologies.com/blog/submitting-a-shopify-app-for-review-2026',
    date: '2026-09-28',
    readingTime: '6 min read',
    kind: 'Engineering',
    summary: 'The AI self-review, the no-shop-domain rule, protected customer data and privacy webhooks.',
  },
  {
    title: 'Expiring Offline Tokens on Shopify: The January 2027 Deadline, and the Webhook Failures We Hit',
    url: 'https://www.leelaramtechnologies.com/blog/shopify-expiring-offline-tokens-webhook-failures',
    date: '2026-09-28',
    readingTime: '7 min read',
    kind: 'Engineering',
    summary: 'Why uninstall and privacy webhooks returned 500s when a token could not be refreshed, and the fix.',
  },
  {
    title: 'How a Solo Founder Keeps Learning Without Falling Behind',
    url: 'https://www.leelaramtechnologies.com/blog/how-a-solo-founder-keeps-learning',
    date: '2026-09-23',
    readingTime: '8 min read',
    kind: 'Essay',
    summary: 'No senior engineer down the hall, no training budget. What replaces them is a system: read narrow, build to understand, write down what surprised you.',
  },
  {
    title: 'What a Live Store Taught Me That No Course Did',
    url: 'https://www.leelaramtechnologies.com/blog/what-a-live-store-taught-me',
    date: '2026-09-22',
    readingTime: '8 min read',
    kind: 'Essay',
    summary: 'The difference between learning to build software and learning what it has to survive: real catalogues, real orders, a store open for business.',
  },
  {
    title: 'Sumit Chavda on Building LeelaRam Technologies: From a Live Jewellery Store to a Shopify App',
    url: 'https://www.leelaramtechnologies.com/blog/sumit-chavda-founder-leelaram-technologies',
    date: '2026-09-11',
    readingTime: '8 min read',
    kind: 'Profile',
    summary: 'Years inside a working e-commerce business before a line of the product, and how that shaped SellRank and the way the company builds.',
  },
  {
    title: 'How We Test a Sorting Engine: 78,240 Cases Before the First Customer',
    url: 'https://www.leelaramtechnologies.com/blog/how-we-test-a-sorting-engine',
    date: '2026-09-07',
    readingTime: '7 min read',
    kind: 'Engineering',
    summary: 'A sorting app that is “roughly right” is a liability on a live store. The verification suite behind SellRank.',
  },
];
