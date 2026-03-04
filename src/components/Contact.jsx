import { useScrollReveal } from '../hooks/useScrollReveal'
import { CONTACT_DETAILS } from '../data/index'

export default function Contact() {
  const labelRef = useScrollReveal({ opacity: 0, y: 20, duration: 0.7 })
  const leftRef  = useScrollReveal({ opacity: 0, y: 30, duration: 0.8 })
  const formRef  = useScrollReveal({ opacity: 0, y: 30, duration: 0.8 }, { start: 'top 78%' })

  return (
    <section id="contact" className="py-28 px-12 bg-[#161616]">
      <div ref={labelRef} className="font-mono text-[0.72rem] tracking-[0.22em] uppercase text-[#e8734a] mb-5 flex items-center gap-3">
        <span className="inline-block w-5 h-px bg-[#e8734a]" />
        Get In Touch
      </div>

      <div className="grid grid-cols-2 gap-24 max-md:grid-cols-1 max-md:gap-12">
        {/* Left */}
        <div ref={leftRef}>
          <div
            className="font-extrabold uppercase tracking-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 0.95 }}
          >
            LET'S{' '}
            <span className="font-serif font-normal italic text-[#e8734a] normal-case">build</span>
            <br />SOMETHING.
          </div>

          <p className="font-mono text-[0.8rem] text-[#a09a90] tracking-[0.08em] mb-12 leading-relaxed">
            Open to backend roles, freelance projects,<br />and open-source collaborations.
          </p>

          <div className="space-y-4">
            {CONTACT_DETAILS.map(({ label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#a09a90] w-[70px]">
                  {label}
                </span>
                <span className="text-[0.9rem] text-[#f0ece4]">
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-[#f0ece4] no-underline border-b border-transparent transition-colors hover:text-[#e8734a] hover:border-[#e8734a]"
                    >
                      {value}
                    </a>
                  ) : value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div ref={formRef} className="space-y-5">
          {[
            { label: 'Your Name', type: 'text',  placeholder: 'John Doe' },
            { label: 'Email',     type: 'email', placeholder: 'john@example.com' },
          ].map(({ label, type, placeholder }) => (
            <div key={label}>
              <label className="block font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#a09a90] mb-2">
                {label}
              </label>
              <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-[#0a0a0a] border border-white/[0.14] px-4 py-3 font-mono text-[0.85rem] text-[#f0ece4] outline-none focus:border-[#e8734a] transition-colors placeholder:text-[#a09a90]/50"
              />
            </div>
          ))}

          <div>
            <label className="block font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#a09a90] mb-2">
              Message
            </label>
            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full bg-[#0a0a0a] border border-white/[0.14] px-4 py-3 font-mono text-[0.85rem] text-[#f0ece4] outline-none focus:border-[#e8734a] transition-colors resize-none placeholder:text-[#a09a90]/50"
            />
          </div>

          <div className="pt-2">
            <a href="mailto:utkarshgayguwal@gmail.com" className="btn-primary inline-block">
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
