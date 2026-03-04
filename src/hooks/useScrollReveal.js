import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Attach a GSAP scroll-reveal to a ref.
 * @param {object} fromVars  - gsap.from() vars
 * @param {object} options   - ScrollTrigger options override
 */
export function useScrollReveal(fromVars = {}, options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
          ...options,
        },
        ...fromVars,
        ease: fromVars.ease || 'power3.out',
      })
    }, el)

    return () => ctx.revert()
  }, []) // eslint-disable-line

  return ref
}

/**
 * Staggered reveal for a list of children inside a container ref.
 */
export function useStaggerReveal(fromVars = {}, options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el.children, {
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          once: true,
          ...options,
        },
        stagger: 0.1,
        ...fromVars,
        ease: fromVars.ease || 'power3.out',
      })
    }, el)

    return () => ctx.revert()
  }, []) // eslint-disable-line

  return ref
}
