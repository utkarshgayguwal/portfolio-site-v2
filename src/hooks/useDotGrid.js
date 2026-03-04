import { useEffect, useRef } from 'react'

const SPACING      = 36
const DOT_R        = 1.2
const GLOW_RADIUS  = 130
const COLOR_DIM    = 45
const COLOR_BRIGHT = 220
const ALPHA_DIM    = 0.30
const ALPHA_BRIGHT = 1.0

export function useDotGrid(heroRef) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const hero   = heroRef.current
    if (!canvas || !hero) return

    const ctx = canvas.getContext('2d')
    let dots      = []
    let mouse     = { x: -9999, y: -9999 }
    let isInHero  = false
    let rafId

    function resize() {
      canvas.width  = hero.offsetWidth
      canvas.height = hero.offsetHeight
      buildDots()
    }

    function buildDots() {
      dots = []
      const cols = Math.ceil(canvas.width  / SPACING) + 2
      const rows = Math.ceil(canvas.height / SPACING) + 2
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: c * SPACING, y: r * SPACING, bright: 0 })
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const rect = hero.getBoundingClientRect()
      const mx   = mouse.x - rect.left
      const my   = mouse.y - rect.top

      for (const d of dots) {
        let target = 0
        if (isInHero) {
          const dist = Math.sqrt((d.x - mx) ** 2 + (d.y - my) ** 2)
          if (dist < GLOW_RADIUS) {
            target = Math.pow(1 - dist / GLOW_RADIUS, 1.8)
          }
        }
        d.bright += (target - d.bright) * 0.1

        const v     = Math.round(COLOR_DIM + (COLOR_BRIGHT - COLOR_DIM) * d.bright)
        const alpha = ALPHA_DIM + (ALPHA_BRIGHT - ALPHA_DIM) * d.bright

        ctx.fillStyle = `rgba(${v},${v},${v},${alpha.toFixed(3)})`
        ctx.beginPath()
        ctx.arc(d.x, d.y, DOT_R, 0, Math.PI * 2)
        ctx.fill()
      }
      rafId = requestAnimationFrame(draw)
    }

    const onMove  = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    const onEnter = () => { isInHero = true  }
    const onLeave = () => { isInHero = false }

    document.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseenter', onEnter)
    hero.addEventListener('mouseleave', onLeave)
    window.addEventListener('resize', resize)

    resize()
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseenter', onEnter)
      hero.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', resize)
    }
  }, [heroRef])

  return canvasRef
}
