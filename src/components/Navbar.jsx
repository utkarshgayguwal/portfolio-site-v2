import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const LINKS = ['Work', 'Skills', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const logoRef  = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // entrance animation
  useEffect(() => {
    gsap.to(logoRef.current, { opacity: 1, duration: 0.5, delay: 0.2, ease: 'power2.out' })
    gsap.to(linksRef.current.children, {
      opacity: 1, y: 0, stagger: 0.08, duration: 0.5, delay: 0.3, ease: 'power2.out',
    })
  }, [])

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-[100]',
        'flex items-center justify-between px-12 py-5',
        'border-b transition-all duration-300',
        scrolled
          ? 'border-white/[0.08] bg-[#0a0a0a]/85 backdrop-blur-xl'
          : 'border-transparent',
      ].join(' ')}
    >
      {/* Logo */}
      <div
        ref={logoRef}
        className="font-mono text-[0.85rem] tracking-[0.08em] text-[#a09a90] opacity-0"
      >
        <span className="text-[#e8734a]">UG</span> / UTKARSH GAYGUWAL
      </div>

      {/* Links */}
      <ul ref={linksRef} className="flex gap-10 list-none">
        {LINKS.map(link => (
          <li key={link} className="opacity-0 translate-y-1">
            <a
              href={`#${link.toLowerCase()}`}
              className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-[#a09a90] no-underline transition-colors hover:text-[#f0ece4]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
