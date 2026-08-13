import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import StructuredData from '@/components/StructuredData';
import { site } from '@/data/site';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono-jb',
  subsets: ['latin'],
  display: 'swap',
});

const title = `${site.name} — ${site.role} | Headless Commerce & Next.js`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: 'technology',
  keywords: [
    'Sumit Chavda',
    'Software Engineer Mumbai',
    'Headless Commerce Developer',
    'Next.js Developer',
    'Shopify Storefront API',
    'Shopify Headless',
    'Analytics Engineering',
    'GA4 GTM',
    'MongoDB',
    'React Developer India',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: site.url,
    siteName: site.name,
    title,
    description: site.metaDescription,
    locale: 'en_IN',
    firstName: 'Sumit',
    lastName: 'Chavda',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: '#1B1C1F',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Font variables live on <html> so the --font-sans / --font-mono theme
    // tokens (declared at :root) can resolve them.
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Without JS the IntersectionObserver never fires, so keep every
            revealed block visible rather than blank. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="grain font-sans antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
