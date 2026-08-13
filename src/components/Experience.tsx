import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Tag from './ui/Tag';
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've shipped"
      intro="Owning production systems end to end — architecture and delivery through instrumentation, release and support."
    >
      <div className="relative">
        {/* Timeline spine */}
        <span className="absolute top-2 bottom-2 left-[7px] w-px bg-ink-800 md:left-[7px]" aria-hidden />

        <div className="space-y-14 md:space-y-20">
          {experience.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.06}>
              <div className="relative pl-9 md:pl-14">
                <span
                  className={`absolute top-2 left-0 h-[15px] w-[15px] rounded-full border-2 ${
                    role.current
                      ? 'border-copper-500 bg-ink-950'
                      : 'border-ink-600 bg-ink-950'
                  }`}
                  aria-hidden
                >
                  {role.current && (
                    <span className="absolute inset-[3px] rounded-full bg-copper-500" />
                  )}
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight text-ink-50 md:text-2xl">
                    {role.company}
                  </h3>
                  <span className="label">{role.dates}</span>
                </div>

                <p className="mt-1.5 text-copper-400">{role.role}</p>
                {role.location && (
                  <p className="mt-0.5 text-sm text-ink-400">{role.location}</p>
                )}

                <ul className="mt-6 space-y-3">
                  {role.points.map((pt) => (
                    <li key={pt} className="flex gap-3.5 text-sm leading-relaxed text-ink-300">
                      <span className="mt-2 h-px w-3.5 shrink-0 bg-ink-600" aria-hidden />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {role.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
