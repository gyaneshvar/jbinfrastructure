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
    <footer className="bg-[#020617] border-t border-cyan-900/30 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-full h-[300px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-14 relative z-10">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="fade-up" style={{ animationDelay: '0ms' }}>
            <a href="#home" className="flex items-center gap-3 mb-5 group">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-md rounded-full group-hover:bg-cyan-400/40 transition-colors duration-300" />
                <img
                  src={`${BASE}assets/logo.png`}
                  alt="JB Infrastructure"
                  className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
                />
              </div>
              <span className="text-white font-black text-sm tracking-widest uppercase group-hover:text-cyan-400 transition-colors duration-300">JB Infrastructure</span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[250px]">
              Engineering high-precision structures that construct the foundation of tomorrow — from concept to dimensional reality.
            </p>
          </div>

          {/* Navigation */}
          <div className="fade-up" style={{ animationDelay: '100ms' }}>
            <h4 className="text-cyan-500 text-[10px] tracking-[0.4em] uppercase font-bold mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-cyan-500" />
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-400 hover:text-cyan-400 text-xs tracking-[0.1em] transition-colors duration-200 block w-fit group flex items-center gap-2"
                  >
                    <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] tracking-tighter">&gt;&gt;</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="fade-up" style={{ animationDelay: '200ms' }}>
            <h4 className="text-cyan-500 text-[10px] tracking-[0.4em] uppercase font-bold mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-cyan-500" />
              Network Hub
            </h4>
            <div className="space-y-3 text-xs">
              <p className="text-white font-bold">Amit Kumar</p>
              <a href="tel:+918452824423" className="block text-slate-400 hover:text-cyan-300 transition-colors duration-200">
                +91 8452824423 / 9569457060
              </a>
              <a
                href="mailto:amit@jbinfrastructure.in"
                className="block text-slate-400 hover:text-cyan-400 transition-colors duration-200 break-all"
              >
                amit@jbinfrastructure.in / amit.jbinfrastructure@gmail.com
              </a>
              <p className="text-slate-500 py-1 border-t border-cyan-900/30 mt-3 flex gap-2 w-fit">
                Navi Mumbai <span className="text-cyan-500">·</span> Taloja MIDC <span className="text-cyan-500">·</span> Varanasi
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cyan-900/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px] tracking-wider">
            © {new Date().getFullYear()} JB Infrastructure. All Rights Reserved.
          </p>
          <p className="text-cyan-600/50 text-[9px] tracking-[0.4em] uppercase font-bold flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
            System Online / Precision Optimized
          </p>
        </div>
      </div>
    </footer>
  )
}
