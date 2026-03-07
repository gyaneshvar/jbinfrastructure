const BASE = import.meta.env.BASE_URL

const contactDetails = [
  { label: 'Contact Person', value: 'Amit Kumar Yadav' },
  { label: 'Mobile', value: '+91 8090898765', href: 'tel:+918090898765' },
  { label: 'Email', value: 'amit.jbinfrastructure@gmail.com', href: 'mailto:amit.jbinfrastructure@gmail.com' },
  { label: 'Address', value: 'Pandeypur, Varanasi, Uttar Pradesh' },
  {
    label: 'Registered Office',
    value: 'Plot No. 12/A-401, Priyanka Utkarsh, Sec 21, Ulawe, Navi Mumbai – 410206',
  },
  {
    label: 'Manufacturing Unit',
    value: 'Lotlikar Compound Gala No. 15, MIDC Taloja, Behind Hindalco Co. Tandre Village, Taluka Panvel, Dist. Raigarh',
  },
  { label: 'GST IN', value: '27AIAPY0485F1Z3' },
  { label: 'License', value: 'Maharashtra Company Act, 1948 – Lic. No. 1710300311441085' },
]

export default function Contact() {
  return (
    <>
      <div className="jb-separator" />
      <section
        id="contact"
        className="jb-gradient py-20 px-4 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)',
          }}
        />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Mini logo */}
          <div className="flex justify-center mb-6">
            <img src={`${BASE}assets/logo.png`} alt="JB" className="h-14 w-14 object-contain" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-black uppercase tracking-widest text-center mb-10">
            Contact<br />Information
          </h2>

          <div className="border border-white/40 rounded-xl p-8 backdrop-blur-sm bg-white/10 space-y-4">
            {contactDetails.map((d, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 text-sm sm:text-base">
                <span className="font-bold text-black min-w-[160px] flex-shrink-0">{d.label}:</span>
                {d.href ? (
                  <a
                    href={d.href}
                    className="text-black/80 hover:text-black underline underline-offset-2 transition-colors"
                  >
                    {d.value}
                  </a>
                ) : (
                  <span className="text-black/80">{d.value}</span>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-black/60 text-sm mt-8 tracking-[0.3em] uppercase">
            Get in Touch With Us
          </p>
        </div>
      </section>
    </>
  )
}
