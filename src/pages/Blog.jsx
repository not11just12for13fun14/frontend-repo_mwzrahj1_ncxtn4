import { useState } from 'react'

const brand = { primary: '#1c2a57', accent: '#0e8975' }

const posts = Array.from({ length: 9 }, (_, i) => ({
  slug: `post-${i + 1}`,
  title: `Scaling executive analytics ${i + 1}`,
  category: ['AI','Analytics','ERP'][i % 3],
}))

export default function Blog() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? posts : posts.filter(p => p.category === filter)
  return (
    <div className="bg-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold" style={{ color: brand.primary }}>Insights</h1>
            <p className="mt-3 text-slate-600">Analytics, AI and enterprise operations.</p>
          </div>
          <div className="flex gap-2">
            {['All','AI','Analytics','ERP'].map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`px-3 py-2 rounded-md border ${filter===c ? 'text-white' : 'text-slate-700'} ${filter===c ? 'border-transparent' : 'border-slate-300'}`} style={{ background: filter===c ? brand.accent : 'transparent' }}>{c}</button>
            ))}
          </div>
        </header>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <a key={i} href={`/blog/${p.slug}`} className="rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-shadow p-6">
              <div className="h-40 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200" />
              <h3 className="mt-4 font-medium text-slate-900">{p.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{p.category}</p>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-4 py-2 rounded-md border border-slate-300">Load more</button>
        </div>
      </div>
    </div>
  )
}
