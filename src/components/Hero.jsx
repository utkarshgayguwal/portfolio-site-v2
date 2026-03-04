import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTypewriter } from '../hooks/useTypewriter'
import { useDotGrid }    from '../hooks/useDotGrid'
import { ROLES, STATS }  from '../data/index'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef    = useRef(null)
  const tagRef     = useRef(null)
  const line1Ref   = useRef(null)
  const line2Ref   = useRef(null)
  const bottomRef  = useRef(null)
  const statsRef   = useRef(null)
  const scrollRef  = useRef(null)
  const nameRef    = useRef(null)

  const roleText = useTypewriter(ROLES)
  const canvasRef = useDotGrid(heroRef)

  // entrance timeline
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.to(tagRef.current,    { opacity: 1, duration: 0.6 }, 0.3)
      .to(line1Ref.current,  { y: '0%', opacity: 1, duration: 0.9 }, 0.55)
      .to(line2Ref.current,  { y: '0%', opacity: 1, duration: 0.9 }, 0.72)
      .to(bottomRef.current, { opacity: 1, y: 0, duration: 0.8   }, 1.0)
      .to(statsRef.current,  { opacity: 1, duration: 0.7          }, 1.1)
      .to(scrollRef.current, { opacity: 1, duration: 0.5          }, 1.3)

    // parallax on scroll
    gsap.to(nameRef.current, {
      scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      y: 40, ease: 'none',
    })
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end px-12 pb-16 overflow-hidden"
    >
      {/* Dot grid canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Noise */}
      <div className="noise absolute inset-0 pointer-events-none z-0" />

      {/* Stats — right side */}
      <div
        ref={statsRef}
        className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col gap-8 opacity-0 max-md:hidden"
      >
        {STATS.map(({ num, label }) => (
          <div key={label} className="text-right border-r border-[#e8734a] pr-5">
            <div className="text-[2.2rem] font-extrabold leading-none">{num}</div>
            <div className="font-mono text-[0.68rem] tracking-[0.15em] uppercase text-[#a09a90] mt-1">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Role tag */}
      <div
        ref={tagRef}
        className="relative z-10 font-mono text-[0.78rem] tracking-[0.18em] uppercase text-[#e8734a] mb-6 flex items-center gap-3 opacity-0"
      >
        <span className="inline-block w-6 h-px bg-[#e8734a] shrink-0" />
        <span>{roleText}</span>
        <span className="blink inline-block w-0.5 h-[1em] bg-[#e8734a] ml-0.5 align-middle" />
      </div>

      {/* Name */}
      <div
        ref={nameRef}
        className="relative z-10 mb-10 overflow-hidden"
        style={{ fontSize: 'clamp(4.5rem, 11vw, 10rem)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.03em', textTransform: 'uppercase' }}
      >
        <span className="block overflow-hidden">
          <span ref={line1Ref} className="block opacity-0" style={{ transform: 'translateY(110%)' }}>
            UTKARSH
          </span>
        </span>
        <span className="block overflow-hidden">
          <span ref={line2Ref} className="text-outline block opacity-0" style={{ transform: 'translateY(110%)' }}>
            GAYGUWAL
          </span>
        </span>
      </div>

      {/* Bottom row */}
      <div
        ref={bottomRef}
        className="relative z-10 flex items-end justify-between opacity-0"
        style={{ transform: 'translateY(20px)' }}
      >
        <p className="font-serif italic text-[#a09a90] text-[1.15rem] leading-relaxed max-w-[420px]">
          Building secure, scalable backend systems for FinTech, GovTech & enterprise platforms.
          Laravel specialist & open-source contributor.
        </p>
        <div className="flex gap-4 items-center">
          <a href="#work"    className="btn-primary">View Work</a>
          <a href="#contact" className="btn-ghost">Let's Talk →</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-0 right-0 opacity-0 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#a09a90] [writing-mode:vertical-rl] flex items-center gap-2"
      >
        Scroll
        <span className="scroll-line block w-px h-[50px] bg-[#a09a90]" />
      </div>
    </section>
  )
}
