import { useState, useEffect } from 'react'

const BASE = import.meta.env.BASE_URL

const links = [
  { href: '#home',      label: 'Home' },
  { href: '#about',     label: 'About Us' },
  { href: '#expertise', label: 'Capabilities' },
  { href: '#services',  label: 'Services' },
  { href: '#projects',  label: 'Projects' },
  { href: '#gallery',   label: 'Gallery' },
  { href: '#quality',   label: 'Standards' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        {/* Logo + brand */}
        <a href="#home" className="flex items-center gap-4 flex-shrink-0 group">
          <img
            src={`${BASE}assets/logo.png`}
            alt="JB Infrastructure"
            className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-white font-black text-xl tracking-wide uppercase transition-colors duration-300">
              JB Infrastructure
            </span>
            <span className="text-sky-500 text-xs tracking-widest font-semibold uppercase hidden sm:block">
              Structural Excellence
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link text-slate-300 hover:text-white font-semibold text-sm tracking-wide transition-colors duration-300 uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button – desktop */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-2.5 rounded text-sm font-bold tracking-wider uppercase transition-colors duration-300 shadow-md"
          >
            Get a Quote
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 shadow-xl">
          <ul className="px-6 py-4 flex flex-col">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-slate-300 hover:text-white py-4 text-sm font-bold tracking-wider uppercase transition-colors border-b border-slate-800 last:border-b-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-sky-400 hover:text-sky-300 py-4 text-sm font-bold tracking-wider uppercase transition-colors"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
