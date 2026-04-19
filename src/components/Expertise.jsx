const items = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M2 20h20M4 20V8l8-6 8 6v12" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
    title: 'Structural Steel',
    outcome: 'Robust steel structures built to last — trusses, parapets, pergolas, and toll plaza canopies for major highway infrastructure.',
    proof: '12+ years of fabrication',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M17.66 6.34l-2.12 2.12M4.22 19.78l2.12-2.12" />
      </svg>
    ),
    title: 'Metal Fabrication',
    outcome: 'Precision custom components manufactured at our MIDC Taloja facility — exactly to your specifications, every time.',
    proof: 'Advanced CNC equipment',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="8.5" x2="22" y2="8.5" />
        <line x1="2" y1="15.5" x2="22" y2="15.5" />
      </svg>
    ),
    title: 'Space Frame Structures',
    outcome: 'Visually striking, structurally sound space frame systems — from design to installed completion across 30+ national projects.',
    proof: '30+ major installations',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Pipeline & Quick Fixes',
    outcome: 'Rapid, industry-compliant pipeline repairs and on-site structural maintenance — minimising downtime for your project.',
    proof: 'Fast-response teams',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" style={{ background: 'var(--linen)', padding: '100px 0' }}>
      <div className="section-container">
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 64 }}>
          <span className="section-pill">What We Build</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--charcoal)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              maxWidth: 520,
            }}
          >
            Four Core Disciplines,{' '}
            <span style={{ color: 'var(--steel)' }}>One Capable Partner</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--muted)', maxWidth: 520, lineHeight: 1.7, marginTop: 4 }}>
            Every service we offer is backed by in-house manufacturing, qualified engineers, and a track record on national highway projects.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="card-base"
              style={{ padding: '36px 28px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: 'var(--steel)',
                  transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.35s ease',
                }}
                className="expertise-bar"
              />

              {/* Icon */}
              <div style={{ color: 'var(--steel)', marginBottom: 20 }}>{item.icon}</div>

              {/* Title */}
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--charcoal)', marginBottom: 12, lineHeight: 1.2 }}>
                {item.title}
              </h3>

              {/* Outcome */}
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.835rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20 }}>
                {item.outcome}
              </p>

              {/* Proof pill */}
              <div
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(30,58,95,0.07)',
                  border: '1px solid rgba(30,58,95,0.12)',
                  borderRadius: 100,
                  padding: '4px 12px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--steel)',
                }}
              >
                <span style={{ color: 'var(--amber)', fontSize: '0.7rem' }}>✓</span>
                {item.proof}
              </div>

              <style>{`.card-base:hover .expertise-bar { transform: scaleX(1) !important; }`}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
