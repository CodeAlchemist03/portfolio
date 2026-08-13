import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Tag from './ui/Tag';
import { work } from '@/data/work';

export default function Work() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Platforms in production"
      intro="Commerce and lead-generation platforms I designed, built and still maintain. Each of the live sites below was taken through a second, ground-up rebuild — new architecture, not a reskin."
    >
      <div className="space-y-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800">
        {work.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <article className="group relative bg-ink-900 p-7 transition-colors hover:bg-ink-850 md:p-10">
              {/* Copper hairline that wipes in on hover. */}
              <span className="rule absolute inset-x-0 top-0 h-px scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="grid gap-8 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-12">
                <div>
                  <span className="label">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink-50 md:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-300">{p.kind}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase ${
                        p.status === 'live'
                          ? 'border-emerald-500/25 bg-emerald-500/8 text-emerald-400'
                          : 'border-copper-600/30 bg-copper-600/8 text-copper-400'
                      }`}
                    >
                      <span
                        className={`h-1 w-1 rounded-full ${
                          p.status === 'live' ? 'bg-emerald-400' : 'bg-copper-400'
                        }`}
                      />
                      {p.status === 'live' ? 'Live' : 'In progress'}
                    </span>
                    {p.rebuilt && (
                      <span className="rounded-full border border-ink-700 px-2.5 py-1 font-mono text-[10px] tracking-wider text-ink-300 uppercase">
                        Rebuilt v2
                      </span>
                    )}
                  </div>

                  <p className="label mt-4">{p.year}</p>

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-ink-200 transition-colors hover:text-copper-400"
                    >
                      <span className="border-b border-ink-600 pb-0.5 group-hover:border-copper-600">
                        {new URL(p.url).hostname.replace('www.', '')}
                      </span>
                      <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>

                <div>
                  <p className="leading-relaxed text-ink-200">{p.summary}</p>

                  <ul className="mt-6 space-y-3">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3.5 text-sm leading-relaxed text-ink-300">
                        <span className="mt-2 h-px w-3.5 shrink-0 bg-ink-600" aria-hidden />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
