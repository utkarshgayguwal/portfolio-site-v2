import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PROJECTS } from '../data/index'

gsap.registerPlugin(ScrollTrigger)

function WorkItem({ project }) {
  const titleRef = useRef(null)

  const onEnter = () => gsap.to(titleRef.current, { x: 6,  duration: 0.25, ease: 'power2.out' })
  const onLeave = () => gsap.to(titleRef.current, { x: 0, duration: 0.25, ease: 'power2.out' })

  return (
    <div
      className="work-item-accent relative grid grid-cols-[80px_1fr_auto] items-center gap-8 px-10 py-8 border-b border-white/[0.08] last:border-b-0 transition-colors duration-200 hover:bg-[#111111] cursor-none"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <span className="font-mono text-[0.72rem] text-[#a09a90] tracking-[0.1em]">
        {project.num}
      </span>

      <div>
        <div ref={titleRef} className="text-[1.25rem] font-bold mb-1">
          {project.title}
        </div>
        <div className="font-mono text-[0.72rem] text-[#a09a90] tracking-[0.06em]">
          {project.meta}
        </div>
      </div>

      <div className="flex gap-2 flex-wrap justify-end max-md:hidden">
        {project.tags.map(tag => (
          <span
            key={tag.label}
            className={[
              'font-mono text-[0.65rem] tracking-[0.08em] uppercase px-3 py-1 border',
              tag.accent
                ? 'border-[#e8734a] text-[#e8734a]'
                : 'border-white/[0.14] text-[#a09a90]',
            ].join(' ')}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Work() {
  const labelRef = useScrollReveal({ opacity: 0, y: 20, duration: 0.7 })
  const titleRef = useScrollReveal({ opacity: 0, y: 30, duration: 0.8 }, { start: 'top 83%' })
  const gridRef  = useRef(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.from(el.children, {
        scrollTrigger: { trigger: el, start: 'top 78%', once: true },
        opacity: 0, x: -20, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section id="work" className="py-28 px-12 bg-[#0a0a0a]">
      <div ref={labelRef} className="section-label font-mono text-[0.72rem] tracking-[0.22em] uppercase text-[#e8734a] mb-5 flex items-center gap-3">
        <span className="inline-block w-5 h-px bg-[#e8734a]" />
        Selected Work
      </div>

      <div
        ref={titleRef}
        className="font-extrabold uppercase tracking-tight mb-16"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 0.95 }}
      >
        PROJECTS
      </div>

      <div ref={gridRef} className="border border-white/[0.08]">
        {PROJECTS.map(p => <WorkItem key={p.num} project={p} />)}
      </div>
    </section>
  )
}
