import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { company } from '@/data/site';
import { writing } from '@/data/writing';

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });

export default function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Notes from building"
      intro={`I write about Shopify, merchandising and building software on the ${company.name} blog. Essays, a profile, and the engineering behind SellRank.`}
    >
      <div className="grid gap-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800 md:grid-cols-2 lg:grid-cols-3">
        {writing.map((a, i) => (
          <Reveal key={a.url} delay={i * 0.05} className="h-full">
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col bg-ink-900 p-7 transition-colors hover:bg-ink-850"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] tracking-wider text-copper-400 uppercase">
                  {a.kind}
                </span>
                <span
                  className="text-ink-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-copper-400"
                  aria-hidden
                >
                  ↗
                </span>
              </div>
              <h3 className="mt-4 text-lg leading-snug font-semibold tracking-tight text-ink-50 transition-colors group-hover:text-copper-400">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-300">{a.summary}</p>
              <p className="label mt-auto pt-6">
                <time dateTime={a.date}>{formatDate(a.date)}</time> · {a.readingTime}
              </p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <a
          href={company.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 font-mono text-xs text-ink-200 transition-colors hover:text-copper-400"
        >
          <span className="border-b border-ink-600 pb-0.5">All articles on the {company.name} blog</span>
          <span aria-hidden>↗</span>
        </a>
      </Reveal>
    </Section>
  );
}
