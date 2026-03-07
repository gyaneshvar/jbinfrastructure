const contactDetails = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: 'Contact Person', value: 'Amit Kumar Yadav',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Mobile', value: '+91 8090898765', href: 'tel:+918090898765',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email', value: 'amit.jbinfrastructure@gmail.com', href: 'mailto:amit.jbinfrastructure@gmail.com',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Personal Address', value: 'Pandeypur, Varanasi, Uttar Pradesh',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: 'Registered Office', value: 'Plot No. 12/A-401, Priyanka Utkarsh, Sec 21, Ulawe, Navi Mumbai – 410206',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    label: 'Manufacturing Unit', value: 'Lotlikar Compound Gala No. 15, MIDC Taloja, Behind Hindalco Co. Tandre Village, Taluka Panvel, Dist. Raigarh',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: 'GST IN', value: '27AIAPY0485F1Z3',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'License', value: 'Maharashtra Company Act, 1948 – Lic. No. 1710300311441085',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-amber-500" />
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-semibold">Get In Touch</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight">
            Contact <span className="text-amber-400">Information</span>
          </h2>
          <a
            href="mailto:amit.jbinfrastructure@gmail.com"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-7 py-3 rounded font-black tracking-widest text-xs uppercase transition-all duration-200 shadow-lg shadow-amber-500/20 flex-shrink-0"
          >
            Email Us
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactDetails.map((d, i) => (
            <div
              key={i}
              className="card-glow bg-gray-800 border border-gray-700 rounded-xl p-5 flex items-start gap-4 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="text-amber-400 flex-shrink-0 mt-0.5">{d.icon}</div>
              <div className="min-w-0">
                <div className="text-gray-500 text-[10px] tracking-widest uppercase mb-1.5">{d.label}</div>
                {d.href ? (
                  <a
                    href={d.href}
                    className="text-white text-sm font-medium hover:text-amber-400 transition-colors duration-200 break-all"
                  >
                    {d.value}
                  </a>
                ) : (
                  <span className="text-white text-sm font-medium leading-relaxed">{d.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
