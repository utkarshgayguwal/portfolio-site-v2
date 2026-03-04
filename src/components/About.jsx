import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import { TIMELINE } from '../data/index'

export default function About() {
  const labelRef    = useScrollReveal({ opacity: 0, y: 20, duration: 0.7 })
  const titleRef    = useScrollReveal({ opacity: 0, y: 30, duration: 0.8 })
  const textRef     = useScrollReveal({ opacity: 0, x: -30, duration: 0.9 })
  const rightRef    = useScrollReveal({ opacity: 0, x: 30, duration: 0.9 }, { start: 'top 75%' })
  const timelineRef = useStaggerReveal({ opacity: 0, x: 20, duration: 0.6 }, { start: 'top 80%' })

  return (
    <section id="about" className="py-28 px-12 bg-[#0a0a0a]">
      <div ref={labelRef} className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-[#e8734a] mb-5 flex items-center gap-3">
        <span className="inline-block w-5 h-px bg-[#e8734a]" />
        About
      </div>

      <div
        ref={titleRef}
        className="font-extrabold uppercase tracking-tight mb-16"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 0.95 }}
      >
        ME
      </div>

      <div className="grid grid-cols-2 gap-24 items-start max-md:grid-cols-1 max-md:gap-12">
        {/* Left — bio */}
        <div ref={textRef}>
          {[
            <>I'm a <strong className="text-[#f0ece4] not-italic font-sans">Laravel Backend Developer</strong> based in Mumbai with 1.5+ years of experience building production-ready systems across <strong className="text-[#f0ece4] not-italic font-sans">FinTech, GovTech, Healthcare, and US-based enterprise platforms</strong>.</>,
            <>I've shipped 20+ projects — from migrating legacy banking apps to building enterprise audit systems with 170+ trigger points. I care deeply about <strong className="text-[#f0ece4] not-italic font-sans">clean architecture, secure APIs, and maintainable codebases</strong>.</>,
            <>Beyond client work, I actively <strong className="text-[#f0ece4] not-italic font-sans">build and publish Laravel packages</strong> on Packagist — because good tools make developers faster. Currently expanding into <strong className="text-[#f0ece4] not-italic font-sans">full-stack development with React</strong> to bridge the gap between backend and frontend.</>,
            <>I value work that is <em>secure, scalable, and boring in the best possible way</em>.</>,
          ].map((p, i) => (
            <p key={i} className="font-serif italic text-[#a09a90] text-[1.1rem] leading-[1.75] mb-6">{p}</p>
          ))}

          <div className="flex gap-4 mt-8">
            <a href="mailto:utkarshgayguwal@gmail.com" className="btn-primary">Email Me</a>
            <a href="https://github.com/utkarshgayguwal" target="_blank" rel="noreferrer" className="btn-ghost">GitHub ↗</a>
            <a href="https://linkedin.com/in/utkarsh-gayguwal" target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn ↗</a>
          </div>
        </div>

        {/* Right — timeline */}
        <div ref={rightRef}>
          <div ref={timelineRef}>
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="grid gap-6 py-6 border-b border-white/[0.08] first:pt-0"
                style={{ gridTemplateColumns: '100px 1fr' }}
              >
                <div className="font-mono text-[0.72rem] tracking-[0.1em] text-[#a09a90] pt-1">
                  {item.period}
                </div>
                <div>
                  <div className="text-[1rem] font-bold mb-1">{item.title}</div>
                  <div className="font-mono text-[0.72rem] text-[#e8734a] tracking-[0.08em] mb-2">
                    {item.company}
                  </div>
                  <div className="text-[0.85rem] text-[#a09a90] leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
