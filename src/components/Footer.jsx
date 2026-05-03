const BASE = import.meta.env.BASE_URL

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#quality', label: 'Quality' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="w-full border-t-4 border-secondary bg-primary relative font-body-md text-body-md overflow-hidden">
      {/* Subtle Grid Lines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 grid-lines" />
      
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-8 lg:px-16 py-20 max-w-container-max mx-auto">
        {/* Brand & Intro */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <a href="#home" className="text-lg font-headline-md font-bold text-secondary uppercase flex items-center gap-2 group">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
              architecture
            </span>
            J.B. Infrastructure
          </a>
          <p className="text-on-primary-fixed-variant mt-4 max-w-xs leading-relaxed">
            Forging the nation's framework through uncompromising engineering, monumental scale, and structural rigidity.
          </p>
        </div>

        {/* Navigation */}
        <div className="col-span-1">
          <h4 className="text-secondary font-label-bold text-label-bold mb-6 uppercase tracking-wider">Navigation</h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-on-primary-fixed-variant hover:text-on-primary hover:translate-x-1 transition-all duration-200 block"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <h4 className="text-secondary font-label-bold text-label-bold mb-6 uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-3 text-on-primary-fixed-variant">
            <p className="text-on-primary font-bold">Amit Kumar</p>
            <a href="tel:+918452824423" className="hover:text-on-primary hover:translate-x-1 transition-all duration-200 block">
              +91 8452824423<br />+91 9569457060
            </a>
            <a href="mailto:amit@jbinfrastructure.in" className="hover:text-on-primary hover:translate-x-1 transition-all duration-200 block break-all">
              amit@jbinfrastructure.in<br/>amit.jbinfrastructure@gmail.com
            </a>
          </div>
        </div>

        {/* Locations */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <h4 className="text-secondary font-label-bold text-label-bold mb-6 uppercase tracking-wider">Locations</h4>
          <ul className="flex flex-col gap-3 text-on-primary-fixed-variant">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">pin_drop</span>
              Navi Mumbai (Head Office)
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">pin_drop</span>
              Kapurthala, Punjab
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">pin_drop</span>
              Varanasi, UP
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-surface-tint/30">
        <div className="max-w-container-max mx-auto px-8 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-on-primary-fixed-variant text-sm text-center md:text-left">
            © {new Date().getFullYear()} J.B. Infrastructure. Engineering Excellence.
          </p>
          <p className="text-on-primary-fixed-variant text-xs tracking-[0.4em] uppercase text-center md:text-right">
            Your Ideas Tuned Into Reality
          </p>
        </div>
      </div>
    </footer>
  )
}
