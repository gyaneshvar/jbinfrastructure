const contactDetails = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: 'Contact Person',
    value: 'Amit Kumar',
    highlight: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 8452824423 / 9569457060',
    href: 'tel:+918452824423',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'amit@jbinfrastructure.in',
    href: 'mailto:amit@jbinfrastructure.in',
  },
]

const offices = [
  {
    city: 'Mumbai',
    type: 'Head Office',
    address: 'Plot No. 12/A-401, Priyanka Utkarsh, Sec 21, Ulawe, Navi Mumbai – 410206',
    gst: '27AIAPY0485F1Z3',
  },
  {
    city: 'Punjab',
    type: 'Branch Office',
    address: 'Near Guru Kirpa Automobile Repair, Sultanpur Lodhi, Kapurthala, Punjab – 144626',
    gst: '03AIAPY0485F1ZD',
  },
  {
    city: 'Varanasi (UP)',
    type: 'Branch Office',
    address: 'Gaura Kalan, Chiraigaon, Varanasi, Uttar Pradesh – 221112',
    gst: '09AIAPY0485F1Z1',
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--linen)', padding: '100px 0 0' }}>
      {/* CTA banner */}
      <div
        style={{
          background: 'var(--amber)',
          padding: '40px 0',
          marginBottom: 72,
        }}
      >
        <div className="section-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                color: 'white',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Ready to Start Your Project?
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.82)', marginTop: 8, marginBottom: 0 }}>
              Call or email Amit Kumar — get a quote within 24 hours.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="tel:+918452824423"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'white',
                color: 'var(--amber)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '0.8rem 1.6rem',
                borderRadius: 8,
              }}
            >
              📞 Call Now
            </a>
            <a
              href="mailto:amit@jbinfrastructure.in"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.18)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.5)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '0.78rem 1.6rem',
                borderRadius: 8,
              }}
            >
              ✉ Email Us
            </a>
          </div>
        </div>
      </div>

      <div className="section-container" style={{ paddingBottom: 100 }}>
        <div style={{ marginBottom: 48 }}>
          <span className="section-pill" style={{ marginBottom: 20, display: 'inline-block' }}>Get In Touch</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--charcoal)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginTop: 12,
            }}
          >
            Contact{' '}
            <span style={{ color: 'var(--steel)' }}>Information</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          {/* Direct contact */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
              Direct Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {contactDetails.map((d, i) => (
                <div
                  key={i}
                  className="card-base"
                  style={{ padding: '20px 22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 40, height: 40,
                      borderRadius: 10,
                      background: d.highlight ? 'var(--steel)' : 'rgba(30,58,95,0.07)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: d.highlight ? 'white' : 'var(--steel)',
                    }}
                  >
                    {d.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 5 }}>{d.label}</div>
                    {d.href ? (
                      <a href={d.href} style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.9rem', color: 'var(--charcoal)', textDecoration: 'none', wordBreak: 'break-all' }}
                         onMouseEnter={e => e.target.style.color = 'var(--steel)'}
                         onMouseLeave={e => e.target.style.color = 'var(--charcoal)'}
                      >
                        {d.value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--charcoal)' }}>{d.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
              Our Offices
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {offices.map((o, i) => (
                <div
                  key={i}
                  className="card-base"
                  style={{ padding: '20px 22px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--steel)' }}>{o.city}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: '0.58rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        background: i === 0 ? 'rgba(200,134,10,0.1)' : 'rgba(30,58,95,0.07)',
                        color: i === 0 ? 'var(--amber)' : 'var(--steel)',
                        border: `1px solid ${i === 0 ? 'rgba(200,134,10,0.2)' : 'rgba(30,58,95,0.12)'}`,
                        borderRadius: 100,
                        padding: '2px 8px',
                      }}
                    >
                      {o.type}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 8px' }}>{o.address}</p>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', letterSpacing: '0.05em', color: 'var(--muted)', opacity: 0.7 }}>GST: {o.gst}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
