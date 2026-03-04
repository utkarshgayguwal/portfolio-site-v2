import { useState, useEffect, useRef } from 'react'

export function useTypewriter(words, { startDelay = 900, typeSpeed = 60, eraseSpeed = 35, pauseAfter = 1800 } = {}) {
  const [text, setText]       = useState('')
  const [isReady, setReady]   = useState(false)
  const indexRef  = useRef(0)
  const timerRef  = useRef(null)

  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), startDelay)
    return () => clearTimeout(timeout)
  }, [startDelay])

  useEffect(() => {
    if (!isReady) return

    function type(word, onDone) {
      let i = 0
      timerRef.current = setInterval(() => {
        setText(word.slice(0, ++i))
        if (i >= word.length) {
          clearInterval(timerRef.current)
          timerRef.current = setTimeout(onDone, pauseAfter)
        }
      }, typeSpeed)
    }

    function erase(onDone) {
      timerRef.current = setInterval(() => {
        setText(prev => {
          if (prev.length <= 0) {
            clearInterval(timerRef.current)
            onDone()
            return ''
          }
          return prev.slice(0, -1)
        })
      }, eraseSpeed)
    }

    function cycle() {
      erase(() => {
        indexRef.current = (indexRef.current + 1) % words.length
        type(words[indexRef.current], cycle)
      })
    }

    type(words[0], cycle)

    return () => clearInterval(timerRef.current)
  }, [isReady]) // eslint-disable-line

  return text
}
