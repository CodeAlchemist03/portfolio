export default function Tag({ children }: { children: string }) {
  return (
    <li className="rounded-full border border-ink-700 bg-ink-850 px-3 py-1 font-mono text-[11px] tracking-wide text-ink-300">
      {children}
    </li>
  );
}
