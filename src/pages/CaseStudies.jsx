const brand = { primary: '#1c2a57', accent: '#0e8975' }

const cases = Array.from({ length: 9 }, (_, i) => ({
  slug: `case-${i + 1}`,
  title: `Enterprise Growth Case ${i + 1}`,
  desc: 'Revenue lift and automation across channels.',
}))

export default function CaseStudies() {
  return (
    <div className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold" style={{ color: brand.primary }}>Case Studies</h1>
        <p className="mt-3 text-slate-600">Selected work across analytics, AI and ERP.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <a key={i} href={`/case-studies/${c.slug}`} className="rounded-xl border border-slate-200 bg-white hover:shadow-xl transition-shadow">
              <div className="h-40 rounded-t-xl bg-gradient-to-br from-[#1c2a57] to-[#0e8975]" />
              <div className="p-5">
                <h3 className="font-medium text-slate-900">{c.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{c.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
