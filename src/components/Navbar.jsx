import { useState } from 'react'

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
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 shadow-lg" style={{ background: '#58287A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo + brand */}
        <a href="#home" className="flex items-center gap-3 flex-shrink-0">
          <img
            src={`${BASE}assets/logo.png`}
            alt="JB Infrastructure"
            className="h-10 w-10 object-contain rounded"
          />
          <span className="text-white font-bold text-base tracking-wider hidden sm:block">
            JB INFRASTRUCTURE
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-5">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/80 hover:text-yellow-300 font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <ul
          className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-2"
          style={{ background: '#4A1F68' }}
        >
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-white/80 hover:text-yellow-300 py-2 text-sm font-medium tracking-wide transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
