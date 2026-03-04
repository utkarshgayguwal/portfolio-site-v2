import { TICKER_ITEMS } from '../data/index'

export default function Ticker() {
  // double items for seamless loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="overflow-hidden border-t border-b border-white/[0.08] bg-[#111111] py-4">
      <div className="ticker-animate flex whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[0.78rem] tracking-[0.15em] uppercase text-[#a09a90] px-8"
          >
            <span className="text-[#e8734a] mr-2">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
