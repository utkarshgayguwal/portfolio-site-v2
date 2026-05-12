import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const LINKS = ['Work', 'Skills', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const logoRef  = useRef(null)
  const linksRef = useRef(null)
  const menuRef  = useRef(null)

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

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-[120]',
          'flex items-center justify-between px-6 md:px-12 py-5',
          'border-b transition-all duration-300',
          menuOpen
            ? 'border-transparent bg-transparent'
            : scrolled
              ? 'border-white/[0.08] bg-[#0a0a0a]/85 backdrop-blur-xl'
              : 'border-transparent',
        ].join(' ')}
      >
        {/* Logo */}
        <div
          ref={logoRef}
          className="font-mono text-[0.75rem] md:text-[0.85rem] tracking-[0.08em] text-[#a09a90] opacity-0 z-[130]"
        >
          <span className="text-[#e8734a]">UG</span> <span className="hidden sm:inline">/ UTKARSH GAYGUWAL</span>
        </div>

        {/* Desktop Links */}
        <ul ref={linksRef} className="hidden md:flex gap-10 list-none">
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

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-[130] w-8 h-8 flex flex-col justify-center items-end focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col gap-[6px] items-end">
            <span className={`h-[2px] bg-[#f0ece4] transition-all duration-300 origin-center ${menuOpen ? 'w-8 rotate-45 translate-y-[8px]' : 'w-8'}`} />
            <span className={`h-[2px] bg-[#f0ece4] transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-5'}`} />
            <span className={`h-[2px] bg-[#f0ece4] transition-all duration-300 origin-center ${menuOpen ? 'w-8 -rotate-45 -translate-y-[8px]' : 'w-8'}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-[#0a0a0a] z-[110] transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] md:hidden ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-extrabold uppercase tracking-tighter text-[#f0ece4] no-underline hover:text-[#e8734a] transition-colors"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link}
            </a>
          ))}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-6 font-mono text-[0.7rem] uppercase tracking-widest text-[#a09a90]">
            <a href="https://github.com/utkarshgayguwal" target="_blank" rel="noreferrer" className="hover:text-[#e8734a]">GitHub</a>
            <a href="https://linkedin.com/in/utkarsh-gayguwal" target="_blank" rel="noreferrer" className="hover:text-[#e8734a]">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  )
}
