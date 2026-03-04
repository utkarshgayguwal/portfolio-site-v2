import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Footer() {
  const ref = useScrollReveal({ opacity: 0, duration: 0.7 }, { start: 'top 95%' })

  return (
    <footer
      ref={ref}
      className="px-12 py-8 border-t border-white/[0.08] bg-[#0a0a0a] flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center"
    >
      <div className="font-mono text-[0.72rem] text-[#a09a90] tracking-[0.08em]">
        © 2026 UTKARSH GAYGUWAL — LARAVEL BACKEND DEVELOPER
      </div>
      <a
        href="#hero"
        className="font-mono text-[0.72rem] text-[#a09a90] no-underline tracking-[0.1em] transition-colors hover:text-[#e8734a]"
      >
        BACK TO TOP ↑
      </a>
    </footer>
  )
}
