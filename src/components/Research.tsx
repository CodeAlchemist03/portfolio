import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Tag from './ui/Tag';
import { research } from '@/data/work';

export default function Research() {
  return (
    <Section id="research" eyebrow="Research" title="Published work">
      <Reveal>
        <article className="group relative overflow-hidden rounded-xl border border-ink-800 bg-ink-900/40 p-8 md:p-12">
          <div className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-copper-600/8 blur-[100px]" />

          <div className="relative">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-copper-600/30 bg-copper-600/8 px-2.5 py-1 font-mono text-[10px] tracking-wider text-copper-400 uppercase">
                IEEE IGARSS 2025
              </span>
              <span className="rounded-full border border-ink-700 px-2.5 py-1 font-mono text-[10px] tracking-wider text-ink-300 uppercase">
                {research.status}
              </span>
            </div>

            <h3 className="mt-6 max-w-3xl text-xl leading-snug font-semibold tracking-tight text-ink-50 md:text-3xl">
              {research.title}
            </h3>

            <p className="label mt-4">{research.venue}</p>

            <p className="mt-6 max-w-3xl leading-relaxed text-ink-300">{research.summary}</p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {research.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
