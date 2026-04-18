import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-24 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6 fade-up">
          <div className="w-10 h-0.5 bg-sky-600" />
          <span className="text-sky-500 text-xs tracking-[0.3em] uppercase font-bold">Track Record</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 fade-up" style={{ animationDelay: '100ms' }}>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase leading-tight">
            Our <span className="text-sky-500">Dossier</span>
          </h2>
          <p className="text-slate-300 text-sm max-w-sm leading-relaxed p-4 bg-slate-800 rounded border-l-4 border-sky-600">
            Delivered across India — from Assam to Rajasthan, Mizoram to Maharashtra.
          </p>
        </div>

        <div className="industrial-panel border border-slate-700 rounded-lg fade-up" style={{ animationDelay: '200ms' }}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-800 border-b border-slate-700">
                  <th className="py-5 px-6 text-left text-slate-400 text-xs tracking-wider uppercase font-bold" style={{ width: '6%' }}>#</th>
                  <th className="py-5 px-6 text-left text-slate-400 text-xs tracking-wider uppercase font-bold" style={{ width: '42%' }}>Project Name</th>
                  <th className="py-5 px-6 text-left text-slate-400 text-xs tracking-wider uppercase font-bold" style={{ width: '30%' }}>Client</th>
                  <th className="py-5 px-6 text-left text-slate-400 text-xs tracking-wider uppercase font-bold" style={{ width: '22%' }}>Work Order / Date</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors duration-300 group"
                  >
                    <td className="py-5 px-6 text-sky-500 font-bold text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </td>
                    <td className="py-5 px-6 text-slate-200 text-sm font-semibold">
                      {p.name}
                    </td>
                    <td className="py-5 px-6 text-slate-400 text-sm">
                      {p.client}
                    </td>
                    <td className="py-5 px-6 text-slate-500 text-sm whitespace-nowrap">
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
