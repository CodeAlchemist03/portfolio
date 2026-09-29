import Image from 'next/image';
import portrait from '@/assets/profile.jpeg';
import { company, metrics, site } from '@/data/site';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      {/* Warm bloom behind the headline — the only colour on the page at rest. */}
      <div className="pointer-events-none absolute -top-24 left-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-copper-600/12 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid items-center gap-14 md:grid-cols-[1.35fr_1fr] md:gap-16">
          <div>
            <div className="mb-8 flex flex-wrap items-center gap-2.5">
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-copper-600/40 bg-ink-900/60 py-1.5 pr-4 pl-2.5 backdrop-blur transition-colors hover:border-copper-500"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-copper-500" />
                </span>
                <span className="font-mono text-[11px] tracking-wider text-ink-200">
                  {company.role} @ {company.name}
                </span>
              </a>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-ink-700 bg-ink-900/60 py-1.5 pr-4 pl-2.5 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-400" />
                <span className="font-mono text-[11px] tracking-wider text-ink-300">
                  Software Engineer @ Lucira Jewelry
                </span>
              </span>
            </div>

            <h1 className="text-[2.75rem] leading-[0.95] font-semibold tracking-[-0.03em] text-ink-50 sm:text-6xl lg:text-[5.25rem]">
              Sumit
              <br />
              Chavda
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-200 md:text-xl">
              I build and own{' '}
              <span className="text-copper-400">headless commerce platforms</span> — architecture,
              ERP and payment integrations, internal tooling, data pipelines and conversion
              experimentation.
            </p>

            <p className="mt-5 max-w-xl leading-relaxed text-ink-300">
              I also founded{' '}
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-ink-600 text-ink-100 transition-colors hover:border-copper-600 hover:text-copper-400"
              >
                {company.name}
              </a>
              , where I build{' '}
              <a
                href={company.product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-ink-600 text-ink-100 transition-colors hover:border-copper-600 hover:text-copper-400"
              >
                {company.product.name}
              </a>
              , a Shopify app that ranks collections by what actually sells. It&apos;s now in
              Shopify App Store review.
            </p>

            <p className="mt-5 max-w-xl leading-relaxed text-ink-400">
              Next.js, MongoDB and the Shopify APIs in production at scale. Published GAN research
              at IEEE IGARSS 2025. B.Tech CE (AI/ML), CGPI 9.6/10.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-50 px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-copper-400"
              >
                View selected work
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href={site.resume}
                download="Sumit_Chavda_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-ink-700 px-6 py-3 text-sm text-ink-100 transition-colors hover:border-copper-600 hover:text-copper-400"
              >
                Download résumé
              </a>
            </div>

            <p className="label mt-9">{site.location} · Available for select engagements</p>
          </div>

          {/* Portrait — shown as-is, no filters or tint overlays. The frame uses
              the photo's native 3:4 ratio, so nothing is cropped or distorted. */}
          <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-[17rem] md:max-w-[21rem]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-ink-700">
              <Image
                src={portrait}
                alt="Sumit Chavda"
                fill
                priority
                sizes="(max-width: 640px) 240px, (max-width: 768px) 272px, 336px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Metrics strip */}
        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800 md:mt-28 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-ink-900 p-6">
              <dt className="font-mono text-3xl font-medium tracking-tight text-copper-400 md:text-4xl">
                {m.value}
              </dt>
              <dd className="mt-2.5 text-sm leading-snug font-medium text-ink-100">{m.label}</dd>
              <dd className="mt-1 text-xs leading-snug text-ink-400">{m.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
