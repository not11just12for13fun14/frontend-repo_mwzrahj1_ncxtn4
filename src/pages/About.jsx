import { motion } from 'framer-motion'

const brand = { primary: '#1c2a57', accent: '#0e8975' }
const section = 'py-20'

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold" style={{ color: brand.primary }}>About Crystal Magnate</h1>
          <p className="mt-3 text-slate-600 max-w-3xl">We partner with executives to drive measurable e-commerce growth through analytics, AI and integrated business systems.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className={section}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Who We Are</h2>
            <p className="mt-3 text-slate-600">A cross-functional team of technologists and operators. We blend data strategy, engineering and automation to optimize the full commerce stack.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-72 rounded-xl bg-gradient-to-br from-[#1c2a57] to-[#0e8975]" />
        </div>
      </section>

      {/* Genesis timeline */}
      <section className={section}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900">Our Genesis</h2>
          <div className="mt-6 relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200" />
            {[
              { year: '2019', text: 'Founded to bring executive-grade analytics to commerce.' },
              { year: '2021', text: 'Expanded into AI automations and agents.' },
              { year: '2023', text: 'Launched integrated ERP capabilities and multi-channel orchestration.' },
            ].map((i, idx) => (
              <div key={idx} className="flex gap-4 items-start mb-6">
                <div className="w-3 h-3 rounded-full bg-[#0e8975] mt-2" />
                <div>
                  <p className="text-sm text-slate-500">{i.year}</p>
                  <p className="text-slate-700">{i.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className={section}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900">Our Services</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['E-Commerce ERP','Advanced Analytics','AI & Automation','Business Management'].map((s, i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                <p className="font-medium text-slate-900">{s}</p>
                <p className="text-sm text-slate-600 mt-2">Executive-grade solutions built to scale.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impactful outcomes */}
      <section className={section}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Impactful Outcomes</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {['Revenue lift with better decisions','Lower costs via automation','Faster ops through integration'].map((b, i) => (
                <li key={i} className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#0e8975]" />{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Vision & Approach</h2>
            <p className="mt-3 text-slate-600">We focus on clarity, speed and measurable outcomes. We co-create with stakeholders and iterate with data.</p>
          </div>
        </div>
      </section>

      {/* Collaboration process */}
      <section className={`${section} pb-28`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900">Collaboration Process</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            {['Discover','Design','Deliver'].map((step, i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-6 text-center">
                <div className="w-10 h-10 rounded-full mx-auto" style={{ background: '#0e8975' }} />
                <p className="mt-3 font-medium text-slate-900">{step}</p>
                <p className="text-sm text-slate-600">Workshops, prototyping, implementation.</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href="/contact" className="px-5 py-3 rounded-md text-white" style={{ background: brand.accent }}>Start a Conversation</a>
          </div>
        </div>
      </section>
    </div>
  )
}
