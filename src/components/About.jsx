const stats = [
  { value: '30+',  label: 'Projects Completed' },
  { value: '12+',  label: 'Years Experience' },
  { value: '10+',  label: 'States Served' },
  { value: '100%', label: 'Quality Assured' },
]

const bullets = [
  {
    title: 'Proven Track Record',
    body: 'With 12+ years and 30+ major infrastructure projects delivered — from toll plaza canopies in Assam to stadium steel in Gorakhpur — we bring unmatched depth of experience to every engagement.',
  },
  {
    title: 'End-to-End Capability',
    body: 'We handle everything: design, fabrication, and on-site erection. One partner. Total accountability. No sub-contracting chains that slow down your project.',
  },
  {
    title: 'National-Scale Reach, Local Expertise',
    body: 'Operating from Mumbai, Punjab, and Varanasi — with our MIDC Taloja manufacturing facility — we\'re equipped to serve projects at any scale, anywhere in India.',
  },
]

const clients = [
  'GR Infraprojects',
  'APCO Infratech',
  'Simplex Infrastructures',
  'Dilip Buildcon',
  'Skylark Infra',
  'Anupam Nirman',
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--white)', padding: '100px 0 0' }}>
      <div className="section-container">
        {/* Label */}
        <div style={{ marginBottom: 48 }}>
          <span className="section-pill">Who We Are</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
          {/* Left: headline + bullets */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--charcoal)',
                marginBottom: 40,
                letterSpacing: '-0.01em',
              }}
            >
              Steel Structures Built on{' '}
              <span style={{ color: 'var(--steel)' }}>12 Years</span>{' '}
              of Trust
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {bullets.map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      flexShrink: 0, width: 40, height: 40, borderRadius: 10,
                      background: 'var(--steel)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginTop: 2,
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.75rem', color: 'rgba(255,255,255,0.9)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--charcoal)', marginBottom: 6 }}>{b.title}</div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats grid */}
          <div>
            {/* Stats 2x2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 36 }}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="card-base"
                  style={{
                    padding: '28px 24px',
                    textAlign: 'center',
                    borderLeft: '3px solid var(--amber)',
                    transition: 'all 0.25s',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.5rem', color: 'var(--steel)', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 8 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Tagline card */}
            <div
              style={{
                background: 'var(--steel)',
                borderRadius: 16,
                padding: '28px 28px',
                color: 'white',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', marginBottom: 8 }}>
                "Your Ideas Tuned Into Reality"
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.6, margin: 0 }}>
                Backed by a manufacturing unit at MIDC Taloja and a dedicated engineering team — we deliver.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted by strip */}
      <div
        style={{
          marginTop: 72,
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          background: 'var(--linen)',
          padding: '24px 0',
        }}
      >
        <div className="section-container" style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap', flexShrink: 0 }}>
            Trusted by
          </span>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center', flex: 1 }}>
            {clients.map((c, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  color: 'var(--slate)',
                  opacity: 0.7,
                  whiteSpace: 'nowrap',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
