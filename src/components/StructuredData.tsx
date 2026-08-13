import { education } from '@/data/experience';
import { site } from '@/data/site';
import { work } from '@/data/work';

/**
 * Person schema for rich results. Keeping it in one place means the knowledge
 * graph stays in sync with the data files the page itself renders from.
 */
export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    telephone: site.phone,
    image: `${site.url}/opengraph-image`,
    jobTitle: site.role,
    description: site.metaDescription,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Lucira Jewelry',
      url: 'https://www.lucirajewelry.com/',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: education.school,
    },
    knowsAbout: [
      'Headless Commerce',
      'Next.js',
      'Shopify Storefront API',
      'MongoDB',
      'ERP Integration',
      'Analytics Engineering',
      'Core Web Vitals',
      'Generative Adversarial Networks',
    ],
    sameAs: [site.socials.github, site.socials.linkedin, site.socials.youtube],
    // Projects with a public URL, so search engines can associate them.
    subjectOf: work
      .filter((w) => w.url)
      .map((w) => ({
        '@type': 'CreativeWork',
        name: w.name,
        url: w.url,
        description: w.summary,
      })),
  };

  return (
    <script
      type="application/ld+json"
      // Content is authored by us, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
