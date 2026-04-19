import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--linen)', padding: '100px 0' }}>
      <div className="section-container">
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 20 }}>
          <span className="section-pill">Track Record</span>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--charcoal)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              <span style={{ color: 'var(--steel)' }}>30+</span> Projects Delivered{' '}
              <br />Pan-India
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--muted)', maxWidth: 400, lineHeight: 1.7 }}>
              From Assam to Rajasthan, Mizoram to Maharashtra — major national infrastructure clients trust JB Infrastructure.
            </p>
          </div>
        </div>

        {/* Geography callout strip */}
        <div
          style={{
            display: 'flex', gap: 12, flexWrap: 'wrap',
            marginBottom: 40, marginTop: 28,
          }}
        >
          {['Assam', 'Uttar Pradesh', 'Maharashtra', 'Odisha', 'Mizoram', 'Punjab', 'Rajasthan', 'Jharkhand'].map(state => (
            <span
              key={state}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '0.68rem',
                letterSpacing: '0.05em',
                background: 'var(--white)',
                border: '1px solid var(--border)',
                color: 'var(--steel)',
                borderRadius: 100,
                padding: '5px 14px',
              }}
            >
              📍 {state}
            </span>
          ))}
        </div>

        {/* Projects table */}
        <div style={{ background: 'var(--white)', borderRadius: 16, border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="project-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
              <thead>
                <tr>
                  <th style={{ width: '4%'  }}>#</th>
                  <th style={{ width: '47%' }}>Project Name</th>
                  <th style={{ width: '33%' }}>Client</th>
                  <th style={{ width: '16%' }}>Work Order / Date</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, i) => (
                  <tr key={i}>
                    <td>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          color: 'var(--amber)',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </td>
                    <td style={{ color: 'var(--charcoal)', lineHeight: 1.55 }}>{p.name}</td>
                    <td>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          color: 'var(--steel)',
                        }}
                      >
                        {p.client}
                      </span>
                    </td>
                    <td style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>{p.workOrder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
