import { projects } from '../data/projects'

const BASE = import.meta.env.BASE_URL

export default function Projects() {
  return (
    <>
      <div className="jb-separator" />
      <section
        id="projects"
        className="jb-gradient py-20 px-4 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Mini logo */}
          <div className="flex justify-center mb-6">
            <img src={`${BASE}assets/logo.png`} alt="JB" className="h-14 w-14 object-contain" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-black uppercase tracking-widest text-center mb-10">
            Our Projects
          </h2>

          <div className="overflow-x-auto rounded-xl shadow-xl">
            <table className="jb-table w-full border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th style={{ width: '42%' }}>Project Name</th>
                  <th style={{ width: '33%' }}>Client Name</th>
                  <th style={{ width: '25%' }}>Work Order No. / Date</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, i) => (
                  <tr key={i}>
                    <td>{p.name}</td>
                    <td>{p.client}</td>
                    <td className="text-center">{p.workOrder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
