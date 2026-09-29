import Reveal from './ui/Reveal';
import { company, site } from '@/data/site';

const links = [
  { label: 'GitHub', href: site.socials.github, handle: 'smartysumit' },
  { label: 'LinkedIn', href: site.socials.linkedin, handle: 'sumitchavda03' },
  { label: 'YouTube', href: site.socials.youtube, handle: '@sumitchavda-w3h' },
  { label: company.name, href: company.url, handle: 'leelaramtechnologies.com' },
  { label: `${company.name} on LinkedIn`, href: company.linkedin, handle: 'company/leelaram-technologies' },
  { label: company.product.name, href: company.product.url, handle: 'Shopify app' },
];

export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-ink-800">
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-copper-600/8 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-copper-600" />
            <span className="label">Contact</span>
          </div>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink-50 md:text-6xl">
            Building something that needs to scale?
          </h2>

          <a
            href={`mailto:${site.email}`}
            className="group mt-10 inline-flex items-center gap-3 text-lg break-all text-ink-100 transition-colors hover:text-copper-400 md:text-2xl"
          >
            <span className="border-b border-ink-600 pb-1 transition-colors group-hover:border-copper-600">
              {site.email}
            </span>
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </a>

          <p className="mt-4 font-mono text-sm text-ink-400">
            <a href={`tel:${site.phoneHref}`} className="transition-colors hover:text-copper-400">
              {site.phone}
            </a>
            <span className="mx-3 text-ink-700">/</span>
            {site.location}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center justify-between bg-ink-900 p-6 transition-colors hover:bg-ink-850"
                >
                  <span>
                    <span className="label block">{l.label}</span>
                    <span className="mt-1.5 block font-mono text-sm break-all text-ink-100 transition-colors group-hover:text-copper-400">
                      {l.handle}
                    </span>
                  </span>
                  <span
                    className="text-ink-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-copper-400"
                    aria-hidden
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-800 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-ink-400">
            © {new Date().getFullYear()} Sumit Chavda
          </p>
          <p className="font-mono text-xs text-ink-400">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
