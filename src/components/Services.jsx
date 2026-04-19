const services = [
  {
    num: '01',
    title: 'Structural Steel',
    tagline: 'The backbone of modern infrastructure.',
    points: [
      'Custom design & fabrication of high-load steel components',
      'Trusses, parapets, pergolas, toll plaza canopies',
      'Stringent QC at every fabrication stage',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M2 20h20M4 20V8l8-6 8 6v12" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Metal Fabrication',
    tagline: 'Precision to the millimetre.',
    points: [
      'Manufactured to exact client specifications',
      'Advanced equipment at MIDC Taloja facility',
      'Versatile capability across complex geometries',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Space Frame Structures',
    tagline: 'Engineering that wows — and endures.',
    points: [
      'Space frame steel tube design & manufacturing',
      'Architect-grade aesthetics with structural integrity',
      'Complete erection services across India',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="8.5" x2="22" y2="8.5" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Pipeline & Quick Fixes',
    tagline: 'Responsive. Reliable. On-site.',
    points: [
      'Rapid pipeline repair across active construction sites',
      'Full compliance with industry safety standards',
      'Minimal project disruption guaranteed',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--steel)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background texture */}
      <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />

      {/* Amber glow accent */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(200,134,10,0.12)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 64 }}>
          <span className="section-pill-white">What We Offer</span>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                maxWidth: 480,
              }}
            >
              End-to-End Steel Solutions,{' '}
              <span style={{ color: 'var(--amber-light)' }}>Delivered</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.62)', maxWidth: 360, lineHeight: 1.7 }}>
              From structural design through fabrication and on-site erection — one call covers your entire project lifecycle.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {services.map(s => (
            <div
              key={s.num}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16,
                padding: '36px 28px',
                transition: 'background 0.25s, border-color 0.25s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(200,134,10,0.4)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Num + icon row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.2rem', color: 'rgba(255,255,255,0.12)', lineHeight: 1 }}>{s.num}</span>
                <div style={{ color: 'var(--amber-light)' }}>{s.icon}</div>
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'white', marginBottom: 8, lineHeight: 1.2 }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>{s.tagline}</p>

              {/* Divider */}
              <div style={{ width: 32, height: 1, background: 'var(--amber)', marginBottom: 20, opacity: 0.6 }} />

              {/* Points */}
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.points.map((p, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--amber-light)', fontSize: '0.7rem', marginTop: 3, flexShrink: 0 }}>▸</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.55 }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          style={{
            marginTop: 56,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 16,
            padding: '28px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'white', marginBottom: 6 }}>
              Ready to start your project?
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', margin: 0 }}>
              Talk to Amit Kumar and get a quote within 24 hours.
            </p>
          </div>
          <a href="#contact" className="btn-amber" style={{ fontSize: '0.75rem', flexShrink: 0 }}>
            Get a Quote →
          </a>
        </div>
      </div>
    </section>
  )
}
