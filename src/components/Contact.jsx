const contactDetails = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: 'Contact Person', value: 'Amit Kumar',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Mobile', value: '+91 8452824423 / 9569457060', href: 'tel:+918452824423',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email', value: 'amit@jbinfrastructure.in / amit.jbinfrastructure@gmail.com', href: 'mailto:amit@jbinfrastructure.in',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: 'Head Office (Mumbai)', value: 'GST: 27AIAPY0485F1Z3 — Plot No. 12/A-401, Priyanka Utkarsh, Sec 21, Ulawe, Navi Mumbai – 410206 (Lic: 1710300311441085)',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: 'Branch Office (Punjab)', value: 'GST: 03AIAPY0485F1ZD — Near Guru Kirpa Automobile Repair, Sultanpur Rural, Opposite Railway Station Parking, Sultanpur Lodhi, Kapurthala, Punjab - 144626',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: 'Branch Office (UP)', value: 'GST: 09AIAPY0485F1Z1 — Gaura Kalan, Chiraigaon, Varanasi, Uttar Pradesh - 221112',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24 px-4 relative overflow-hidden flex justify-center border-t border-slate-800">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6 fade-up">
          <div className="w-10 h-0.5 bg-sky-600" />
          <span className="text-sky-500 text-xs tracking-[0.3em] uppercase font-bold">Contact Directory</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 fade-up" style={{ animationDelay: '100ms' }}>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight">
            Get In <span className="text-sky-500">Touch</span>
          </h2>
          <a
            href="mailto:amit@jbinfrastructure.in"
            className="group relative inline-flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded font-bold tracking-wider text-sm uppercase transition-all duration-300 shadow-md flex-shrink-0"
          >
            <span className="relative z-10">Request a Consultation</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactDetails.map((d, i) => (
            <div
              key={i}
              className="industrial-panel industrial-card-hover rounded-lg p-6 flex items-start gap-4 fade-up group"
              style={{ animationDelay: `${150 + i * 50}ms` }}
            >
              <div className="text-sky-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 bg-slate-800 p-3 rounded-full border border-sky-500/20">{d.icon}</div>
              <div className="min-w-0 flex-1">
                <div className="text-slate-400 text-xs tracking-wider uppercase mb-2 font-bold group-hover:text-sky-400 transition-colors">{d.label}</div>
                {d.href ? (
                  <a
                    href={d.href}
                    className="text-white text-sm font-semibold hover:text-sky-400 transition-colors duration-200 break-all leading-relaxed"
                  >
                    {d.value}
                  </a>
                ) : (
                  <span className="text-white text-sm font-semibold leading-relaxed block">{d.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
