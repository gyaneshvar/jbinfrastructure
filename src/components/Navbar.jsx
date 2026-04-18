import { useState, useEffect } from 'react'

const BASE = import.meta.env.BASE_URL

const links = [
  { href: '#home',      label: 'Home' },
  { href: '#about',     label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#services',  label: 'Services' },
  { href: '#projects',  label: 'Projects' },
  { href: '#gallery',   label: 'Gallery' },
  { href: '#quality',   label: 'Quality' },
  { href: '#contact',   label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#020617]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,240,255,0.1)] border-b border-white/10'
          : 'bg-transparent'
      } `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo + brand */}
        <a href="#home" className="flex items-center gap-3 flex-shrink-0 group">
          <img
            src={`${BASE}assets/logo.png`}
            alt="JB Infrastructure"
            className="h-11 w-11 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-black text-base sm:text-lg tracking-widest uppercase group-hover:text-cyan-400 transition-colors duration-300">
              JB Infrastructure
            </span>
            <span className="text-cyan-400 text-[10px] tracking-[0.35em] uppercase font-semibold hidden sm:block">
              Precision Engineering
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link text-slate-300 hover:text-cyan-400 font-medium text-xs tracking-[0.15em] transition-colors duration-300 uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button – desktop */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-transparent border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400 px-5 py-2 rounded text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
        >
          Initialize Contact
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-transform duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-transform duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#020617]/95 backdrop-blur-2xl border-t border-white/10">
          <ul className="px-6 py-5 flex flex-col gap-1">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-slate-400 hover:text-cyan-400 py-3 text-sm font-medium tracking-widest uppercase transition-colors border-b border-white/5 last:border-b-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
