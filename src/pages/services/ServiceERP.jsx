const brand = { primary: '#1c2a57', accent: '#0e8975' }

export default function ServiceERP() {
  return (
    <div className="bg-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-semibold" style={{ color: brand.primary }}>E-Commerce ERP Solution</h1>
            <p className="mt-3 text-slate-600">Unify orders, inventory, channels and finance with real-time analytics.</p>
          </div>
          <div className="h-56 rounded-xl bg-gradient-to-br from-[#1c2a57] to-[#0e8975]" />
        </header>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Account management</h3>
            <p className="text-sm text-slate-600 mt-2">Roles, permissions and audit logging to keep governance tight.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Inventory management</h3>
            <p className="text-sm text-slate-600 mt-2">Multi-WH, reorder points, safety stock and replenishment.</p>
          </div>
          <div id="integrations" className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Channel integration</h3>
            <p className="text-sm text-slate-600 mt-2">Native connectors for Amazon, Walmart and Shopify.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Automated processing</h3>
            <p className="text-sm text-slate-600 mt-2">Rules engine for order routing, invoicing and fulfillment.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white md:col-span-2">
            <h3 className="font-semibold text-slate-900">Real-time analytics</h3>
            <p className="text-sm text-slate-600 mt-2">Dashboards for inventory turns, order SLAs, margin and cash.</p>
          </div>
        </div>

        <div className="mt-10">
          <a href="/contact" className="px-5 py-3 rounded-md text-white" style={{ background: brand.accent }}>Talk to an Expert</a>
        </div>
      </div>
    </div>
  )
}
