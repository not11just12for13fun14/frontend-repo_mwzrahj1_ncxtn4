const brand = { primary: '#1c2a57', accent: '#0e8975' }

const cards = [
  { title: 'E-Commerce ERP Solution', link: '/services/erp', desc: 'Inventory, orders, channels and orchestration.', color: 'from-[#1c2a57] to-[#0e8975]' },
  { title: 'E-Commerce Advance Analytics', link: '/services/analytics', desc: 'Executive dashboards, attribution and forecasting.', color: 'from-[#1c2a57] to-[#0e8975]' },
  { title: 'AI & Automation System', link: '/services/ai-automation', desc: 'Agents, chat and workflow automation.', color: 'from-[#1c2a57] to-[#0e8975]' },
  { title: 'Business Management', link: '/services/business-management', desc: 'Finance, ops, CRM and planning.', color: 'from-[#1c2a57] to-[#0e8975]' },
]

export default function Services() {
  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold" style={{ color: brand.primary }}>Services</h1>
        <p className="mt-3 text-slate-600 max-w-3xl">Explore our suite of solutions crafted for executive velocity and operational excellence.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <a key={i} href={c.link} className="group rounded-xl border border-slate-200 p-6 hover:shadow-xl transition-shadow bg-white">
              <div className={`h-32 rounded-lg bg-gradient-to-br ${c.color}`} />
              <h3 className="mt-4 font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              <span className="mt-3 inline-block text-[#0e8975] group-hover:underline">Read More</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
