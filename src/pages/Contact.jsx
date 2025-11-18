const brand = { primary: '#1c2a57', accent: '#0e8975' }

export default function Contact() {
  return (
    <div className="bg-white pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-4xl font-semibold" style={{ color: brand.primary }}>Contact</h1>
          <p className="mt-3 text-slate-600">Let’s discuss analytics, AI and ERP programs for your organization.</p>
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
            <textarea rows="6" className="sm:col-span-2 border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0e8975]" placeholder="Message" />
          </div>
          <button className="mt-4 px-5 py-3 rounded-md text-white" style={{ background: brand.accent }}>Send Message</button>
        </form>
      </div>
    </div>
  )
}
