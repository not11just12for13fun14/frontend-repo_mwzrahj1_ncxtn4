export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-slate-900 font-semibold">Crystal Magnate</h3>
          <p className="text-slate-600 mt-3 text-sm">Your executive partner for e-commerce growth.</p>
          <div className="flex gap-3 mt-4">
            <a className="text-slate-500 hover:text-slate-900" href="#">Twitter</a>
            <a className="text-slate-500 hover:text-slate-900" href="#">LinkedIn</a>
            <a className="text-slate-500 hover:text-slate-900" href="#">GitHub</a>
          </div>
        </div>
        <div>
          <h4 className="text-slate-900 font-medium">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/about" className="hover:text-slate-900">About</a></li>
            <li><a href="/case-studies" className="hover:text-slate-900">Case Studies</a></li>
            <li><a href="/blog" className="hover:text-slate-900">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-medium">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/services/erp" className="hover:text-slate-900">E-Commerce ERP</a></li>
            <li><a href="/services/analytics" className="hover:text-slate-900">Advanced Analytics</a></li>
            <li><a href="/services/ai-automation" className="hover:text-slate-900">AI & Automation</a></li>
            <li><a href="/services/business-management" className="hover:text-slate-900">Business Management</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-medium">Newsletter</h4>
          <p className="text-slate-600 mt-2 text-sm">Get insights on analytics, AI and growth.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="Your email" className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e8975]" />
            <button className="px-4 py-2 rounded-md text-white" style={{ background: '#0e8975' }}>Join</button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Crystal Magnate. All rights reserved.
      </div>
    </footer>
  )
}
