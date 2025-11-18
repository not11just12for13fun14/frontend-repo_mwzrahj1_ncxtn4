const brand = { primary: '#1c2a57', accent: '#0e8975' }

export default function ServiceBusiness() {
  return (
    <div className="bg-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-semibold" style={{ color: brand.primary }}>Business Management</h1>
            <p className="mt-3 text-slate-600">Finance, ops and planning solutions tailored to your organization.</p>
          </div>
          <div className="h-56 rounded-xl bg-gradient-to-br from-[#1c2a57] to-[#0e8975]" />
        </header>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Financials</h3>
            <p className="text-sm text-slate-600 mt-2">Margin tracking, cash visibility and forecasting.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Operations</h3>
            <p className="text-sm text-slate-600 mt-2">SLA monitoring, vendor performance and throughput.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">CRM</h3>
            <p className="text-sm text-slate-600 mt-2">Pipeline, account health and success automation.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Planning</h3>
            <p className="text-sm text-slate-600 mt-2">S&OP cadence, demand planning and scenarios.</p>
          </div>
        </div>

        <div className="mt-10">
          <a href="/contact" className="px-5 py-3 rounded-md text-white" style={{ background: brand.accent }}>Discuss Your Needs</a>
        </div>
      </div>
    </div>
  )
}
