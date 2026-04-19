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
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        transition: 'all 0.3s ease',
        ...(scrolled
          ? {
              background: 'rgba(250,247,242,0.97)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
            }
          : { background: 'transparent' }),
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo + brand */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
          <img
            src={`${BASE}assets/logo.png`}
            alt="JB Infrastructure"
            style={{ height: 44, width: 44, objectFit: 'contain' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: scrolled ? 'var(--steel)' : 'white' }}>
              JB Infrastructure
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: scrolled ? 'var(--amber)' : 'rgba(255,200,80,0.9)', display: 'none' }} className="sm-visible">
              Your Ideas Tuned Into Reality
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 24, listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link"
                style={{ color: scrolled ? 'var(--slate)' : 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="btn-amber desktop-nav" style={{ fontSize: '0.65rem', padding: '0.6rem 1.4rem' }}>
          Get a Quote
        </a>

        {/* Hamburger */}
        <button
          id="nav-hamburger"
          onClick={() => setOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 8 }}
          className="mobile-nav"
          aria-label="Toggle navigation"
        >
          <span style={{ display: 'block', width: 24, height: 2, borderRadius: 2, background: scrolled ? 'var(--steel)' : 'white', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 24, height: 2, borderRadius: 2, background: scrolled ? 'var(--steel)' : 'white', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: 24, height: 2, borderRadius: 2, background: scrolled ? 'var(--steel)' : 'white', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'var(--linen)', borderTop: '1px solid var(--border)', padding: '1rem 1.5rem 1.5rem' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '0.75rem 0', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--slate)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li style={{ marginTop: 12 }}>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-amber" style={{ fontSize: '0.7rem' }}>
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 1023px) { .desktop-nav { display: none !important; } .mobile-nav { display: flex !important; } }
        @media (min-width: 1024px) { .desktop-nav { display: flex !important; } .mobile-nav { display: none !important; } }
        @media (min-width: 640px)  { .sm-visible { display: block !important; } }
      `}</style>
    </nav>
  )
}
