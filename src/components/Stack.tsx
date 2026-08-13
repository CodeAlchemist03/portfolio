import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { skillGroups } from '@/data/skills';

export default function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Tools I reach for"
      intro="Weighted toward what I actually run in production, not everything I've touched."
    >
      <div className="grid gap-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <div className="h-full bg-ink-900 p-7 transition-colors hover:bg-ink-850">
              <div className="flex items-center gap-3">
                <span className="h-px w-5 bg-copper-600" />
                <h3 className="font-mono text-xs tracking-[0.16em] text-ink-100 uppercase">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-snug text-ink-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
