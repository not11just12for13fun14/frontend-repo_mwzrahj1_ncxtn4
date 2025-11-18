import { useParams } from 'react-router-dom'

const brand = { primary: '#1c2a57', accent: '#0e8975' }

export default function CaseStudyDetail() {
  const { slug } = useParams()
  return (
    <div className="bg-white pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-4xl font-semibold" style={{ color: brand.primary }}>{slug?.replace('-', ' ')}</h1>
          <p className="mt-3 text-slate-600">Problem → Process → Solution → Results</p>
        </header>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Problem</h3>
            <p className="text-sm text-slate-600 mt-2">Fragmented operations and limited visibility across channels.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Process</h3>
            <p className="text-sm text-slate-600 mt-2">Discovery, data modeling, automation blueprint and implementation.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Solution</h3>
            <p className="text-sm text-slate-600 mt-2">Unified ERP, AI automations and executive dashboards.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Results</h3>
            <p className="text-sm text-slate-600 mt-2">+12% margin, -35% manual work, 2x decision velocity.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[{ label: 'Revenue Impact', value: '+18%' },{ label: 'Automation Coverage', value: '65%' },{ label: 'SLA Compliance', value: '98%' }].map((s,i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-6 bg-white text-center">
              <p className="text-3xl font-semibold" style={{ color: brand.primary }}>{s.value}</p>
              <p className="text-sm text-slate-600 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="/contact" className="px-5 py-3 rounded-md text-white" style={{ background: brand.accent }}>Work With Us</a>
        </div>
      </div>
    </div>
  )
}
