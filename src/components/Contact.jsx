const contactDetails = [
  {
    icon: 'business_center',
    label: 'Contact Person', 
    value: 'Amit Kumar',
  },
  {
    icon: 'call',
    label: 'Mobile', 
    value: '+91 8452824423 / +91 9569457060', 
    href: 'tel:+918452824423',
  },
  {
    icon: 'mail',
    label: 'Email', 
    value: 'amit@jbinfrastructure.in', 
    href: 'mailto:amit@jbinfrastructure.in',
  },
]

const offices = [
  {
    icon: 'corporate_fare',
    title: 'Head Office (Mumbai)',
    address: 'Plot No. 12/A-401, Priyanka Utkarsh, Sec 21, Ulawe, Navi Mumbai – 410206',
    gst: 'GST: 27AIAPY0485F1Z3',
    lic: 'Lic: 1710300311441085'
  },
  {
    icon: 'factory',
    title: 'Branch Office (Punjab)',
    address: 'Near Guru Kirpa Automobile Repair, Sultanpur Rural, Opposite Railway Station Parking, Sultanpur Lodhi, Kapurthala, Punjab - 144626',
    gst: 'GST: 03AIAPY0485F1ZD'
  },
  {
    icon: 'warehouse',
    title: 'Branch Office (UP)',
    address: 'Gaura Kalan, Chiraigaon, Varanasi, Uttar Pradesh - 221112',
    gst: 'GST: 09AIAPY0485F1Z1'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-container-max mx-auto px-4 sm:px-8 lg:px-16 py-16">
      {/* Header Section */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-0.5 bg-secondary" />
          <span className="text-secondary font-label-bold text-label-bold tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <div className="w-12 h-0.5 bg-secondary" />
        </div>
        <h1 className="font-headline-xl text-[40px] md:text-[56px] text-primary mb-6 uppercase leading-none tracking-tighter">
          Let's Build Something <span className="text-secondary">Monumental</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Request a quote for your next infrastructure project or contact our offices to discuss structural engineering solutions tailored to your scale.
        </p>
      </div>

      {/* Main Content Bento Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* Contact Form Area (Takes up 7 columns on XL) */}
        <div className="xl:col-span-7 bg-surface border border-outline-variant p-8 md:p-10 relative overflow-hidden shadow-[4px_4px_0px_0px_#00112a]">
          {/* Subtle Blueprint Grid Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-5 grid-lines" />
          
          <div className="relative z-10">
            <h2 className="font-headline-lg text-[32px] text-primary mb-8 border-b-4 border-secondary inline-block pb-2 uppercase">
              Request a Quote
            </h2>
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="first-name">First Name</label>
                  <input className="bg-surface-container-low border-2 border-primary/20 focus:border-secondary p-3 font-body-md text-on-surface outline-none transition-colors" id="first-name" required type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="last-name">Last Name</label>
                  <input className="bg-surface-container-low border-2 border-primary/20 focus:border-secondary p-3 font-body-md text-on-surface outline-none transition-colors" id="last-name" required type="text" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="email">Business Email</label>
                  <input className="bg-surface-container-low border-2 border-primary/20 focus:border-secondary p-3 font-body-md text-on-surface outline-none transition-colors" id="email" required type="email" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="phone">Phone Number</label>
                  <input className="bg-surface-container-low border-2 border-primary/20 focus:border-secondary p-3 font-body-md text-on-surface outline-none transition-colors" id="phone" required type="tel" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="project-type">Project Type</label>
                  <select className="bg-surface-container-low border-2 border-primary/20 focus:border-secondary p-3 font-body-md text-on-surface outline-none transition-colors appearance-none cursor-pointer" id="project-type" required defaultValue="">
                    <option disabled value="">Select Project Scope</option>
                    <option value="steel">Structural Steel / PEB</option>
                    <option value="pipeline">Industrial Pipeline</option>
                    <option value="spaceframe">Space Frame / Canopy</option>
                    <option value="fabrication">Metal Fabrication</option>
                    <option value="other">Other Engineering Need</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="location">Project Location</label>
                  <input className="bg-surface-container-low border-2 border-primary/20 focus:border-secondary p-3 font-body-md text-on-surface outline-none transition-colors" id="location" placeholder="City, Region" required type="text" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-label-bold text-on-surface uppercase" htmlFor="details">Project Details & Requirements</label>
                <textarea className="bg-surface-container-low border-2 border-primary/20 focus:border-secondary p-3 font-body-md text-on-surface outline-none transition-colors resize-y" id="details" required rows="5"></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="bg-secondary text-on-secondary px-8 py-4 font-label-bold text-label-bold uppercase tracking-widest hover:bg-secondary-container hover:text-on-secondary-container transition-all duration-200 hover:shadow-[inset_0px_0px_0px_2px_#00112a] active:scale-95 flex items-center gap-2">
                  Submit Request <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Information Side (Takes up 5 columns on XL) */}
        <div className="xl:col-span-5 flex flex-col gap-6">
          
          {/* Main Contact */}
          <div className="bg-primary text-on-primary p-8 border-t-4 border-secondary shadow-[4px_4px_0px_0px_#f59e0b]">
            <h3 className="font-headline-md text-2xl uppercase mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
              Direct Contact
            </h3>
            <div className="space-y-6 font-body-md text-inverse-primary">
              {contactDetails.map((d, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="material-symbols-outlined mt-1 text-secondary">{d.icon}</span>
                  <div>
                    <strong className="text-on-primary block font-label-bold text-xs tracking-widest uppercase mb-1">{d.label}</strong>
                    {d.href ? (
                      <a href={d.href} className="hover:text-secondary transition-colors break-all">
                        {d.value}
                      </a>
                    ) : (
                      <span>{d.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Offices List */}
          <div className="flex flex-col gap-4">
            {offices.map((office, i) => (
              <div key={i} className="bg-surface-container-lowest border border-outline-variant p-6 flex items-start gap-4 hover:border-primary transition-colors shadow-[4px_4px_0px_0px_#e2e2e2]">
                <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {office.icon}
                </span>
                <div>
                  <h4 className="font-label-bold text-primary uppercase tracking-wide mb-2">{office.title}</h4>
                  <p className="font-body-md text-sm text-on-surface-variant mb-2 leading-relaxed">
                    {office.address}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-surface-container text-on-surface-variant text-[10px] font-label-bold tracking-widest px-2 py-1 uppercase rounded-sm">
                      {office.gst}
                    </span>
                    {office.lic && (
                      <span className="inline-block bg-surface-container text-on-surface-variant text-[10px] font-label-bold tracking-widest px-2 py-1 uppercase rounded-sm">
                        {office.lic}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
