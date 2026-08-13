'use client';

import { useEffect, useState } from 'react';
import { navLinks, site } from '@/data/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-800 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-copper-500 transition-transform group-hover:scale-150" />
          <span className="font-mono text-sm font-medium tracking-tight text-ink-100">
            sumit<span className="text-ink-400">.chavda</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-wide text-ink-300 transition-colors hover:text-copper-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="hidden rounded-full border border-ink-700 px-4 py-2 font-mono text-xs tracking-wide text-ink-100 transition-colors hover:border-copper-600 hover:text-copper-400 sm:inline-block"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-ink-100 transition-transform ${
                  open ? 'top-1.5 rotate-45' : 'top-0.5'
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-ink-100 transition-transform ${
                  open ? 'top-1.5 -rotate-45' : 'top-2.5'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-ink-800 bg-ink-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-mono text-sm text-ink-200 transition-colors hover:text-copper-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
