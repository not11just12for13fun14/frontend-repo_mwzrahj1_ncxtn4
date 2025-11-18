const brand = { primary: '#1c2a57', accent: '#0e8975' }

export default function ServiceAnalytics() {
  return (
    <div className="bg-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-semibold" style={{ color: brand.primary }}>E-Commerce Advance Analytics</h1>
            <p className="mt-3 text-slate-600">Decision-grade dashboards and models for executives.</p>
          </div>
          <div className="h-56 rounded-xl bg-gradient-to-br from-[#1c2a57] to-[#0e8975]" />
        </header>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div id="dashboards" className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Dashboards</h3>
            <p className="text-sm text-slate-600 mt-2">Revenue, margin, cohorts and attribution views.</p>
          </div>
          <div id="reporting" className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Advanced Reporting</h3>
            <p className="text-sm text-slate-600 mt-2">Self-serve, scheduled and anomaly detection reports.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Forecasting</h3>
            <p className="text-sm text-slate-600 mt-2">Demand and cash flow projections with scenario modeling.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Data Platform</h3>
            <p className="text-sm text-slate-600 mt-2">Warehousing, pipelines and governance for reliability.</p>
          </div>
        </div>

        <div className="mt-10">
          <a href="/contact" className="px-5 py-3 rounded-md text-white" style={{ background: brand.accent }}>Request a Demo</a>
        </div>
      </div>
    </div>
  )
}
