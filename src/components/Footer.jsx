export default function Footer() {
  return (
    <footer style={{ background: '#1A1A1A' }} className="py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
        <p className="tracking-wide">
          © {new Date().getFullYear()} <span className="text-white/80 font-semibold">JB Infrastructure</span>. All rights reserved.
        </p>
        <p className="tracking-wider uppercase text-xs">
          Your Ideas Tuned Into Reality
        </p>
        <a
          href="mailto:amit.jbinfrastructure@gmail.com"
          className="hover:text-yellow-400 transition-colors"
        >
          amit.jbinfrastructure@gmail.com
        </a>
      </div>
    </footer>
  )
}
