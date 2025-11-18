import { useParams } from 'react-router-dom'

const brand = { primary: '#1c2a57', accent: '#0e8975' }

export default function BlogDetail() {
  const { slug } = useParams()
  return (
    <div className="bg-white pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header>
          <p className="text-sm text-slate-500">Analytics</p>
          <h1 className="text-4xl font-semibold mt-1" style={{ color: brand.primary }}>{slug?.replace('-', ' ')}</h1>
        </header>

        <div className="mt-6 h-64 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />

        <article className="prose prose-slate max-w-none mt-6">
          <p>Executive analytics aligns decision velocity with operating cadence. This guide explores how to structure dashboards for clarity.</p>
          <h3>Principles</h3>
          <ul>
            <li>Focus on revenue, margin and cash</li>
            <li>Build trust with accuracy and freshness</li>
            <li>Enable drill-through and commentary</li>
          </ul>
          <h3>Framework</h3>
          <p>Layer KPIs, diagnostics and actions. Connect to automations where appropriate.</p>
        </article>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-slate-700 font-medium">Related posts</p>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {[1,2].map((n,i) => (
              <a key={i} href={`/blog/post-${n}`} className="rounded-lg border border-slate-200 p-4 hover:shadow-sm">
                <div className="h-24 rounded bg-slate-100" />
                <p className="mt-2 text-slate-900 text-sm">Scaling analytics {n}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
