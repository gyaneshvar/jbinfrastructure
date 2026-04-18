const BASE = import.meta.env.BASE_URL

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#quality', label: 'Quality' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-5 group">
              <img
                src={`${BASE}assets/logo.png`}
                alt="JB Infrastructure"
                className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-white font-black text-sm tracking-widest uppercase">JB Infrastructure</span>
            </a>
            <p className="text-gray-600 text-xs leading-relaxed max-w-[220px]">
              Designing and manufacturing steel structures that stand the test of time — from concept to completion.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-amber-400 text-[10px] tracking-[0.4em] uppercase font-bold mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-400 hover:text-white text-xs tracking-wider transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-400 text-[10px] tracking-[0.4em] uppercase font-bold mb-5">Contact</h4>
            <div className="space-y-3 text-xs">
              <p className="text-white font-bold">Amit Kumar Yadav</p>
              <a href="tel:+918452824423" className="block text-gray-400 hover:text-white transition-colors duration-200">
                +91 8452824423 / 9569457060
              </a>
              <a
                href="mailto:amit@jbinfrastructure.in"
                className="block text-gray-400 hover:text-amber-500 transition-colors duration-200 break-all"
              >
                amit@jbinfrastructure.in / amit.jbinfrastructure@gmail.com
              </a>
              <p className="text-gray-400">Navi Mumbai · Taloja MIDC · Varanasi</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs tracking-wide">
            © {new Date().getFullYear()} JB Infrastructure. All rights reserved.
          </p>
          <p className="text-gray-600 text-[10px] tracking-[0.4em] uppercase">
            Your Ideas Tuned Into Reality
          </p>
        </div>
      </div>
    </footer>
  )
}
