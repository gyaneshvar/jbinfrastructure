import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-amber-500" />
          <span className="text-amber-400 text-xs tracking-[0.4em] uppercase font-semibold">Track Record</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 uppercase leading-tight">
            Our <span className="text-amber-500">Projects</span>
          </h2>
          <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
            Delivered across India — from Assam to Rajasthan, Mizoram to Maharashtra.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-5 text-left text-amber-600 text-xs tracking-widest uppercase font-bold border-b border-gray-200" style={{ width: '4%' }}>#</th>
                  <th className="py-4 px-5 text-left text-amber-600 text-xs tracking-widest uppercase font-bold border-b border-gray-200" style={{ width: '44%' }}>Project Name</th>
                  <th className="py-4 px-5 text-left text-amber-600 text-xs tracking-widest uppercase font-bold border-b border-gray-200" style={{ width: '34%' }}>Client</th>
                  <th className="py-4 px-5 text-left text-amber-600 text-xs tracking-widest uppercase font-bold border-b border-gray-200" style={{ width: '18%' }}>Work Order / Date</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? 'bg-gray-50/60' : 'bg-white'
                    } hover:bg-gray-100 transition-colors duration-150`}
                  >
                    <td className="py-4 px-5 text-amber-600 font-black text-sm border-b border-gray-100">
                      {String(i + 1).padStart(2, '0')}
                    </td>
                    <td className="py-4 px-5 text-gray-900 text-xs sm:text-sm leading-relaxed border-b border-gray-100">
                      {p.name}
                    </td>
                    <td className="py-4 px-5 text-gray-600 text-xs leading-relaxed border-b border-gray-100">
                      {p.client}
                    </td>
                    <td className="py-4 px-5 text-gray-400 text-xs border-b border-gray-100 whitespace-nowrap">
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
