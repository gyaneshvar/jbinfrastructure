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
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      
      // Simple logic to detect active section
      const sections = links.map(l => document.querySelector(l.href))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && window.scrollY >= (section.offsetTop - 100)) {
          setActive(links[i].href)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b-2 transition-all duration-300 font-label-bold text-label-bold uppercase tracking-tight ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md border-outline-variant shadow-sm'
          : 'bg-surface/80 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 sm:px-8 lg:px-16 h-20 max-w-container-max mx-auto">
        {/* Brand */}
        <a href="#home" className="text-lg lg:text-xl font-headline-md font-black tracking-tighter text-primary flex items-center gap-2 group">
          <img
            src={`${BASE}assets/logo.png`}
            alt="JB Infrastructure"
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col leading-none">
            <span>JB Infrastructure</span>
          </div>
        </a>

        {/* Links (Desktop) */}
        <ul className="hidden xl:flex gap-4 lg:gap-6 items-center h-full pt-1">
          {links.map(l => (
            <li key={l.href} className="h-full flex items-center">
              <a
                href={l.href}
                className={`transition-colors duration-200 py-2 hover:text-secondary ${
                  active === l.href
                    ? 'text-secondary border-b-2 border-secondary font-bold'
                    : 'text-on-surface-variant hover:bg-surface-variant/50 rounded px-2'
                }`}
                onClick={() => setActive(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Trailing Action */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-secondary text-on-secondary px-6 py-3 rounded hover:bg-secondary-container hover:text-on-secondary-container hover:shadow-[inset_0px_0px_0px_2px_#00112a] transition-all duration-200 inline-block text-center"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="xl:hidden text-primary p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="material-symbols-outlined text-[32px]">
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-surface border-t border-outline-variant absolute w-full left-0 top-full shadow-lg">
          <ul className="px-6 py-4 flex flex-col gap-2">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => {
                    setActive(l.href)
                    setOpen(false)
                  }}
                  className={`block py-3 transition-colors border-b border-surface-variant last:border-b-0 ${
                    active === l.href ? 'text-secondary font-bold' : 'text-on-surface-variant'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
               <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block w-full bg-secondary text-on-secondary px-6 py-3 rounded text-center transition-all duration-200 active:scale-95"
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
