import { useCursor } from '../hooks/useCursor'

export default function Cursor() {
  const { cursorRef, ringRef } = useCursor()

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef}   className="cursor-ring" />
    </>
  )
}
