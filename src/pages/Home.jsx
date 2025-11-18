import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BarChart3, Bot, Building2, Boxes, CheckCircle2, ArrowRight } from 'lucide-react'

const brand = {
  primary: '#1c2a57',
  accent: '#0e8975',
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const section = 'py-20'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[640px] flex items-center">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight" style={{ color: brand.primary }}>
              Your Tech Executive Partner for E-commerce Growth
            </h1>
            <p className="mt-5 text-lg text-slate-700">
              Enhancing executive decision-making through analytics, AI automation, and integrated business solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="px-5 py-3 rounded-md text-white shadow-sm" style={{ background: brand.accent }}>Get Free Consultation</Link>
              <Link to="/services" className="px-5 py-3 rounded-md border border-slate-300 text-slate-800 hover:border-slate-400">Explore Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What makes us different */}
      <section className={`${section} bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl">
            <h2 className="text-3xl font-semibold" style={{ color: brand.primary }}>What Makes Us Different</h2>
            <p className="mt-3 text-slate-600">We merge executive strategy with hands-on engineering. Our approach is data-driven, automation-first, and tuned for enterprise scale.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { icon: BarChart3, title: 'Executive Analytics', desc: 'Decision-grade dashboards aligned to revenue, margin and operational KPIs.' },
              { icon: Bot, title: 'AI Automation', desc: 'Reduce manual work with AI agents, chat, and automated workflows.' },
              { icon: Building2, title: 'Enterprise Craft', desc: 'Architecture, security and governance suitable for scale.' },
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-lg transition-shadow">
                <f.icon className="text-[#0e8975]" />
                <h3 className="mt-4 font-medium text-slate-900">{f.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
                <Link to="/about" className="mt-4 inline-flex items-center gap-1 text-[#0e8975] hover:underline">View Details <ArrowRight size={16} /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Services Grid */}
      <section className={`${section} bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold" style={{ color: brand.primary }}>Products & Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { icon: BarChart3, title: 'E-Commerce Advance Analytics', link: '/services/analytics', desc: 'Revenue, cohort, attribution and forecasting.' },
              { icon: Bot, title: 'AI & Automation System', link: '/services/ai-automation', desc: 'AI chat, agents, workflow automations and copilots.' },
              { icon: Boxes, title: 'Business Management', link: '/services/business-management', desc: 'Finance, ops, CRM and planning solutions.' },
              { icon: Building2, title: 'E-Commerce ERP Solution', link: '/services/erp', desc: 'Inventory, order orchestration, multi-channel integrations.' },
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-xl border border-slate-200 p-6 bg-white hover:shadow-xl transition-all">
                <card.icon className="text-[#0e8975]" />
                <h3 className="mt-3 font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{card.desc}</p>
                <Link to={card.link} className="mt-4 inline-flex items-center gap-1 text-[#0e8975] group-hover:gap-2 transition-all">Read More <ArrowRight size={16} /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Expertise */}
      <section className={`${section} bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8 items-start">
          {[
            { title: 'AI', text: 'Chat, agents and automations designed for measurable impact.' },
            { title: 'Analytics', text: 'Dashboards, data models and forecasting built for executives.' },
            { title: 'E-Commerce ERP', text: 'Inventory, channels and orchestration with real-time insight.' },
          ].map((col, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold text-slate-900">{col.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{col.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies Slider (simple scrollable row) */}
      <section className={`${section} bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold" style={{ color: brand.primary }}>Case Studies</h2>
            <Link to="/case-studies" className="text-[#0e8975]">View All</Link>
          </div>
          <div className="mt-6 overflow-x-auto scrollbar-thin">
            <div className="flex gap-6 min-w-max pr-4">
              {[1,2,3,4,5,6].map((n,i) => (
                <Link key={i} to={`/case-studies/case-${n}`} className="w-80 shrink-0 rounded-xl border border-slate-200 bg-white hover:shadow-xl transition-shadow">
                  <div className="h-40 bg-gradient-to-br from-[#1c2a57] to-[#0e8975] rounded-t-xl" />
                  <div className="p-5">
                    <h3 className="font-medium text-slate-900">Enterprise Growth Case {n}</h3>
                    <p className="text-slate-600 text-sm mt-1">Improving margins and automations across channels.</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${section} bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold" style={{ color: brand.primary }}>Testimonials</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((n,i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
                <p className="text-slate-700">“Crystal Magnate brought executive clarity and automation to our e-commerce operations.”</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="text-slate-900 text-sm font-medium">Alex Morgan</p>
                    <p className="text-slate-500 text-xs">COO, RetailCo</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className={`${section} bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold" style={{ color: brand.primary }}>Insights</h2>
            <Link to="/blog" className="text-[#0e8975]">View All</Link>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((n,i) => (
              <Link key={i} to={`/blog/post-${n}`} className="rounded-xl border border-slate-200 p-6 bg-white hover:shadow-lg transition-shadow">
                <div className="h-40 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200" />
                <h3 className="mt-4 font-medium text-slate-900">How to scale analytics for executives {n}</h3>
                <p className="mt-2 text-slate-600 text-sm">A framework for aligning dashboards with operating cadence.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={`${section} bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-semibold" style={{ color: brand.primary }}>Get in Touch</h2>
            <p className="mt-3 text-slate-600">Talk to our team about analytics, AI automation, and ERP solutions.</p>
            <div className="mt-6 space-y-2 text-slate-700 text-sm">
              <p><span className="font-medium">Email:</span> hello@crystalmagnate.com</p>
              <p><span className="font-medium">Phone:</span> +1 (555) 123-4567</p>
              <p><span className="font-medium">Address:</span> 500 Executive Blvd, Suite 120, NY</p>
            </div>
          </div>

          <form className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e8975]" placeholder="Name" />
              <input className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e8975]" placeholder="Email" type="email" />
              <input className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e8975]" placeholder="Phone" />
              <input className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e8975]" placeholder="Address" />
              <textarea rows="4" className="sm:col-span-2 border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e8975]" placeholder="Message" />
            </div>
            <button className="mt-4 px-5 py-3 rounded-md text-white" style={{ background: brand.accent }}>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}
