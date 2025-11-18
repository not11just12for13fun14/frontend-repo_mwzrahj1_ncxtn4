import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ChevronDown } from 'lucide-react'

const brand = {
  primary: '#1c2a57',
  accent: '#0e8975',
}

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md transition-colors ${isActive ? 'text-[#0e8975]' : 'text-slate-700 hover:text-[#0e8975]'} `

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled ? 'bg-white/90 backdrop-blur border-b border-slate-200' : 'bg-white/70 backdrop-blur'} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md" style={{ background: brand.primary }} />
            <span className="font-semibold text-lg tracking-tight" style={{ color: brand.primary }}>Crystal Magnate</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>

            <div className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-slate-700 hover:text-[#0e8975]">
                Services <ChevronDown size={18} />
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-2 w-[880px] bg-white rounded-xl shadow-xl border border-slate-200 p-6 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">Solutions</p>
                  <ul className="space-y-2">
                    <li><NavLink to="/services/erp" className="block p-2 rounded-md hover:bg-slate-50">E-Commerce ERP</NavLink></li>
                    <li><NavLink to="/services/analytics" className="block p-2 rounded-md hover:bg-slate-50">E-Commerce Analytics</NavLink></li>
                    <li><NavLink to="/services/ai-automation" className="block p-2 rounded-md hover:bg-slate-50">AI & Automation</NavLink></li>
                    <li><NavLink to="/services/business-management" className="block p-2 rounded-md hover:bg-slate-50">Business Management</NavLink></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">Capabilities</p>
                  <ul className="space-y-2">
                    <li><NavLink to="/services/analytics#dashboards" className="block p-2 rounded-md hover:bg-slate-50">Dashboard Examples</NavLink></li>
                    <li><NavLink to="/services/erp#integrations" className="block p-2 rounded-md hover:bg-slate-50">Integrations</NavLink></li>
                    <li><NavLink to="/services/analytics#reporting" className="block p-2 rounded-md hover:bg-slate-50">Advanced Reporting</NavLink></li>
                    <li><NavLink to="/services/ai-automation#chat" className="block p-2 rounded-md hover:bg-slate-50">AI Chat & Automation</NavLink></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">Resources</p>
                  <ul className="space-y-2">
                    <li><NavLink to="/case-studies" className="block p-2 rounded-md hover:bg-slate-50">Case Studies</NavLink></li>
                    <li><NavLink to="/blog" className="block p-2 rounded-md hover:bg-slate-50">Blog</NavLink></li>
                    <li><NavLink to="/contact" className="block p-2 rounded-md hover:bg-slate-50">Free Consultation</NavLink></li>
                    <li><NavLink to="/contact" className="block p-2 rounded-md hover:bg-slate-50">Free Account</NavLink></li>
                  </ul>
                </div>
              </div>
            </div>

            <NavLink to="/case-studies" className={navLinkClass}>Case Studies</NavLink>
            <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="px-4 py-2 rounded-md text-white shadow-sm" style={{ background: brand.accent }}>Free Account</Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink to="/case-studies" className={navLinkClass} onClick={() => setOpen(false)}>Case Studies</NavLink>
            <NavLink to="/blog" className={navLinkClass} onClick={() => setOpen(false)}>Blog</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
