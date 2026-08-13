import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { certifications, education } from '@/data/experience';

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Background"
      intro="I finished a B.Tech in AI/ML while shipping production commerce platforms — the research and the engineering have run in parallel from the start."
    >
      <div className="grid gap-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800 lg:grid-cols-2">
        {/* Education */}
        <Reveal className="h-full">
          <div className="flex h-full flex-col bg-ink-900 p-8 md:p-10">
            <span className="label">Education</span>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink-50 md:text-2xl">
              {education.school}
            </h3>
            <p className="mt-2 text-ink-300">{education.degree}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              <div>
                <p className="font-mono text-2xl text-copper-400">{education.grade}</p>
                <p className="label mt-1">Final standing</p>
              </div>
              <div>
                <p className="font-mono text-2xl text-ink-100">{education.dates}</p>
                <p className="label mt-1">Duration</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-ink-300">{education.leadership}</p>

            <div className="mt-auto pt-8">
              <span className="label">Certifications</span>
              <ul className="mt-4 flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-ink-700 bg-ink-850 px-3 py-1 font-mono text-[11px] tracking-wide text-ink-300"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Video résumé */}
        <Reveal delay={0.08} className="h-full">
          <div className="flex h-full flex-col bg-ink-900 p-8 md:p-10">
            <span className="label">Video résumé</span>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink-50 md:text-2xl">
              Two minutes, in my own words
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              A short walkthrough of how I work and what I&apos;ve built.
            </p>

            <div className="mt-6 overflow-hidden rounded-lg border border-ink-800">
              <iframe
                src="https://www.youtube-nocookie.com/embed/rdqrq79y2Mo"
                title="Sumit Chavda — video résumé"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-video w-full"
              />
            </div>

            <div className="mt-auto pt-8">
              <a
                href="https://youtu.be/rdqrq79y2Mo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-ink-200 transition-colors hover:text-copper-400"
              >
                <span className="border-b border-ink-600 pb-0.5">Watch on YouTube</span>
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
