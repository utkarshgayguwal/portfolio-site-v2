import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import { SKILL_GROUPS, SKILL_PILLS } from '../data/index'

gsap.registerPlugin(ScrollTrigger)

function SkillBar({ name, pct, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between font-mono text-[0.78rem] mb-2">
        <span className="text-[#f0ece4]">{name}</span>
        <span className="text-[#a09a90]">{pct}%</span>
      </div>
      <div className="h-px bg-white/[0.14] relative">
        <div
          className="skill-bar-fill absolute left-0 top-0 bottom-0 bg-[#e8734a]"
          style={{ width: animate ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function SkillGroup({ group, animate }) {
  const ref = useScrollReveal({ opacity: 0, y: 30, duration: 0.7 })

  return (
    <div ref={ref}>
      <div className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-[#e8734a] mb-6 pb-3 border-b border-white/[0.08]">
        {group.title}
      </div>
      {group.skills.map(s => (
        <SkillBar key={s.name} name={s.name} pct={s.pct} animate={animate} />
      ))}
    </div>
  )
}

export default function Skills() {
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef(null)
  const labelRef   = useScrollReveal({ opacity: 0, y: 20, duration: 0.7 })
  const titleRef   = useScrollReveal({ opacity: 0, y: 30, duration: 0.8 })
  const pillsRef   = useStaggerReveal({ opacity: 0, scale: 0.9, duration: 0.4, ease: 'back.out(1.5)' }, { start: 'top 88%' })

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 70%',
      once: true,
      onEnter: () => setAnimate(true),
    })
    return () => trigger.kill()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-12 bg-[#111111]">
      <div ref={labelRef} className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-[#e8734a] mb-5 flex items-center gap-3">
        <span className="inline-block w-5 h-px bg-[#e8734a]" />
        Capabilities
      </div>

      <div
        ref={titleRef}
        className="font-extrabold uppercase tracking-tight mb-16"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 0.95 }}
      >
        SKILLS
      </div>

      <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
        {SKILL_GROUPS.map(g => (
          <SkillGroup key={g.title} group={g} animate={animate} />
        ))}

        {/* Pills */}
        <div className="col-span-2 mt-8 max-md:col-span-1">
          <div className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-[#a09a90] mb-5">
            All Technologies
          </div>
          <div ref={pillsRef} className="flex flex-wrap gap-2">
            {SKILL_PILLS.map(pill => (
              <span
                key={pill}
                className="hoverable font-mono text-[0.75rem] tracking-[0.08em] px-4 py-2 border border-white/[0.14] text-[#a09a90] transition-all duration-200 hover:border-[#e8734a] hover:text-[#e8734a] hover:bg-[#e8734a]/[0.06]"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
