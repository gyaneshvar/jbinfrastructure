import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="bg-[#020617] py-24 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-[#020617] to-[#020617] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4 fade-up">
          <div className="w-10 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
          <span className="text-cyan-400 text-xs tracking-[0.4em] uppercase font-semibold">Track Record</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 fade-up" style={{ animationDelay: '100ms' }}>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed glass-panel px-4 py-2 border-l border-cyan-500/30">
            Delivered across India — from Assam to Rajasthan, Mizoram to Maharashtra.
          </p>
        </div>

        <div className="glass-panel overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.05)] rounded-2xl fade-up" style={{ animationDelay: '200ms' }}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="py-5 px-5 text-left text-cyan-400 text-xs tracking-[0.2em] uppercase font-bold" style={{ width: '4%' }}>#</th>
                  <th className="py-5 px-5 text-left text-cyan-400 text-xs tracking-[0.2em] uppercase font-bold" style={{ width: '44%' }}>Project Name</th>
                  <th className="py-5 px-5 text-left text-cyan-400 text-xs tracking-[0.2em] uppercase font-bold" style={{ width: '34%' }}>Client</th>
                  <th className="py-5 px-5 text-left text-cyan-400 text-xs tracking-[0.2em] uppercase font-bold" style={{ width: '18%' }}>Work Order / Date</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-cyan-500/5 transition-colors duration-300 group"
                  >
                    <td className="py-4 px-5 text-cyan-500 font-black text-sm group-hover:text-cyan-400 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </td>
                    <td className="py-4 px-5 text-slate-200 text-xs sm:text-sm leading-relaxed font-medium group-hover:text-white transition-colors">
                      {p.name}
                    </td>
                    <td className="py-4 px-5 text-slate-400 text-xs leading-relaxed group-hover:text-slate-300 transition-colors">
                      {p.client}
                    </td>
                    <td className="py-4 px-5 text-slate-500 text-xs whitespace-nowrap group-hover:text-cyan-200/70 transition-colors">
                      {p.workOrder}
                    </td>
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
