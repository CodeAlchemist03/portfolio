import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, intro, children }: Props) {
  return (
    <section id={id} className="border-t border-ink-800 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="mb-14 max-w-3xl md:mb-20">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-copper-600" />
              <span className="label">{eyebrow}</span>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-ink-50 md:text-6xl">
              {title}
            </h2>
            {intro && (
              <p className="mt-6 text-base leading-relaxed text-ink-300 md:text-lg">
                {intro}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
