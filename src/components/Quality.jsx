const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: 'Customized Solutions',
    desc: 'Every project designed to your specific geometry, load, and site constraints — no off-the-shelf compromises.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Superior Quality',
    desc: 'Rigorous QC at every fabrication stage — from raw material inspection to final erection sign-off.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
    title: 'Deep Expertise',
    desc: '12+ years of production and planning engineers who\'ve executed on NHAI, state highway, and private projects.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Timely Delivery',
    desc: 'We hold to agreed timelines — our track record with GR Infraprojects and APCO speaks to that discipline.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M6 3h12" />
        <path d="M6 8h12" />
        <path d="M6 3a7 7 0 0 1 0 14h3" />
        <path d="M9 17l6 4" />
      </svg>
    ),
    title: 'Competitive Pricing',
    desc: 'In-house manufacturing eliminates middlemen — you get project-grade quality at transparent pricing.',
  },
]

export default function Quality() {
  return (
    <section id="quality" style={{ background: 'var(--white)', padding: '100px 0' }}>
      <div className="section-container">
        {/* Big commitment statement */}
        <div
          style={{
            background: 'var(--steel)',
            borderRadius: 20,
            padding: 'clamp(36px, 5vw, 60px)',
            marginBottom: 72,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
          <div style={{ position: 'absolute', bottom: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(200,134,10,0.15)', filter: 'blur(60px)' }} />

          <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <span className="section-pill-white" style={{ marginBottom: 20, display: 'inline-block' }}>Our Standards</span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
                  fontWeight: 800,
                  color: 'white',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                  marginBottom: 20,
                  marginTop: 16,
                }}
              >
                Quality Isn't{' '}
                <span style={{ color: 'var(--amber-light)' }}>a Checkbox</span>
                <br />
                — It's Our Process
              </h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  'Committed to superior quality and the highest industry standards at every stage',
                  'QC procedures embedded throughout design, fabrication, and installation',
                  'Team continuously trained on the latest structural steel advancements',
                ].map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--amber-light)', marginTop: 2, flexShrink: 0 }}>✓</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Badge */}
            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 16,
                padding: '32px 28px',
                textAlign: 'center',
                flexShrink: 0,
                minWidth: 180,
              }}
              className="quality-badge"
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '3.5rem', color: 'rgba(255,255,255,0.08)', lineHeight: 1 }}>ISO</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'white', marginTop: -8 }}>Quality</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--amber-light)' }}>Assured</div>
              <div style={{ width: 32, height: 2, background: 'var(--amber)', margin: '12px auto' }} />
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>12+ Years<br />Manufacturing<br />Excellence</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ marginBottom: 48 }}>
          <span className="section-pill" style={{ marginBottom: 20, display: 'inline-block' }}>Why Choose Us</span>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 800,
              color: 'var(--charcoal)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginTop: 12,
            }}
          >
            Five Reasons Clients{' '}
            <span style={{ color: 'var(--steel)' }}>Come Back</span>
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              className="card-base"
              style={{ padding: '28px 24px' }}
            >
              <div
                style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(30,58,95,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--steel)',
                  marginBottom: 18,
                }}
              >
                {b.icon}
              </div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--charcoal)', marginBottom: 10, lineHeight: 1.2 }}>{b.title}</h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
