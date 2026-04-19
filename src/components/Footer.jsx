const BASE = import.meta.env.BASE_URL

const navLinks = [
  { href: '#home',      label: 'Home' },
  { href: '#about',     label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#services',  label: 'Services' },
  { href: '#projects',  label: 'Projects' },
  { href: '#gallery',   label: 'Gallery' },
  { href: '#quality',   label: 'Quality' },
  { href: '#contact',   label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--steel)', color: 'white' }}>
      {/* Top border stripe */}
      <div style={{ height: 3, background: 'var(--amber)' }} />

      <div className="section-container" style={{ padding: '60px 1.5rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: 48, marginBottom: 52 }}>
          {/* Brand column */}
          <div>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, textDecoration: 'none' }}>
              <img
                src={`${BASE}assets/logo.png`}
                alt="JB Infrastructure"
                style={{ height: 44, width: 44, objectFit: 'contain' }}
              />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white' }}>
                JB Infrastructure
              </span>
            </a>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 260, marginBottom: 24 }}>
              Precision-built steel space frames and structural solutions for India's highways, stadiums, and national infrastructure since 2012.
            </p>
            {/* Locations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['Mumbai (Head Office)', 'Taloja MIDC (Facility)', 'Sultanpur Lodhi, Punjab', 'Varanasi, UP'].map(l => (
                <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--amber-light)', fontSize: '0.6rem' }}>📍</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber-light)', marginBottom: 20 }}>Navigation</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'white'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber-light)', marginBottom: 20 }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: 2 }}>Amit Kumar</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>Director</div>
              </div>
              <a href="tel:+918452824423" style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                 onMouseEnter={e => e.target.style.color = 'white'}
                 onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
              >
                +91 8452824423
              </a>
              <a href="tel:+919569457060" style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                 onMouseEnter={e => e.target.style.color = 'white'}
                 onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
              >
                +91 9569457060
              </a>
              <a href="mailto:amit@jbinfrastructure.in" style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', wordBreak: 'break-all' }}
                 onMouseEnter={e => e.target.style.color = 'var(--amber-light)'}
                 onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                amit@jbinfrastructure.in
              </a>

              {/* CTA */}
              <a href="#contact" className="btn-amber" style={{ fontSize: '0.65rem', marginTop: 8, padding: '0.65rem 1.4rem' }}>
                Get a Quote →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '20px 0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            © {new Date().getFullYear()} JB Infrastructure. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            Your Ideas Tuned Into Reality
          </p>
        </div>
      </div>
    </footer>
  )
}
