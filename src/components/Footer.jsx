const BASE = import.meta.env.BASE_URL

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#quality', label: 'Standards' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid sm:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="fade-up" style={{ animationDelay: '0ms' }}>
            <a href="#home" className="flex items-center gap-4 mb-6 group">
              <img
                src={`${BASE}assets/logo.png`}
                alt="JB Infrastructure"
                className="h-12 w-12 object-contain group-hover:scale-105 transition-transform duration-300 relative z-10"
              />
              <span className="text-white font-black text-lg tracking-wide uppercase group-hover:text-sky-400 transition-colors duration-300">JB Infrastructure</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Engineering high-precision structures that construct the foundation of tomorrow — from concept to dimensional reality.
            </p>
          </div>

          {/* Navigation */}
          <div className="fade-up" style={{ animationDelay: '100ms' }}>
            <h4 className="text-slate-300 text-xs tracking-widest uppercase font-bold mb-6 flex items-center gap-3">
              <span className="w-6 h-0.5 bg-sky-600" />
              Corporate
            </h4>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 hover:text-sky-400 text-sm font-semibold tracking-wide transition-colors duration-200 block w-fit"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="fade-up" style={{ animationDelay: '200ms' }}>
            <h4 className="text-slate-300 text-xs tracking-widest uppercase font-bold mb-6 flex items-center gap-3">
              <span className="w-6 h-0.5 bg-sky-600" />
              Offices
            </h4>
            <div className="space-y-4 text-sm font-semibold">
              <p className="text-white">Amit Kumar</p>
              <a href="tel:+918452824423" className="block text-slate-400 hover:text-sky-400 transition-colors duration-200">
                +91 8452824423 / 9569457060
              </a>
              <a
                href="mailto:amit@jbinfrastructure.in"
                className="block text-slate-400 hover:text-sky-400 transition-colors duration-200 break-all"
              >
                amit@jbinfrastructure.in
              </a>
              <p className="text-slate-500 pt-4 border-t border-slate-800 flex gap-3 w-fit">
                Navi Mumbai <span className="text-sky-600">•</span> Taloja MIDC <span className="text-sky-600">•</span> Varanasi
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs tracking-wide">
            © {new Date().getFullYear()} JB Infrastructure. All Rights Reserved.
          </p>
          <p className="text-sky-600/70 text-xs tracking-wider uppercase font-bold flex items-center gap-2">
            Engineering Excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
