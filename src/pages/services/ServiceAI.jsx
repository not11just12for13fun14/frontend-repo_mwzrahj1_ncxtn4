const brand = { primary: '#1c2a57', accent: '#0e8975' }

export default function ServiceAI() {
  return (
    <div className="bg-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-semibold" style={{ color: brand.primary }}>AI & Automation System</h1>
            <p className="mt-3 text-slate-600">Futuristic agents and copilots that streamline operations.</p>
          </div>
          <div className="h-56 rounded-xl bg-gradient-to-br from-[#1c2a57] to-[#0e8975]" />
        </header>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div id="chat" className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">AI Chat & Agents</h3>
            <p className="text-sm text-slate-600 mt-2">Assist customers and teams with reliable AI copilots.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Workflow Automation</h3>
            <p className="text-sm text-slate-600 mt-2">Order routing, reconciliation and communications.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Integration Layer</h3>
            <p className="text-sm text-slate-600 mt-2">Connect your stack with robust APIs and events.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">AI Safety</h3>
            <p className="text-sm text-slate-600 mt-2">Guardrails, monitoring and approvals to ensure trust.</p>
          </div>
        </div>

        <div className="mt-10">
          <a href="/contact" className="px-5 py-3 rounded-md text-white" style={{ background: brand.accent }}>Explore Use Cases</a>
        </div>
      </div>
    </div>
  )
}
