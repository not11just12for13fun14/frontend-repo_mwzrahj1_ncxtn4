import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceERP from './pages/services/ServiceERP'
import ServiceAnalytics from './pages/services/ServiceAnalytics'
import ServiceAI from './pages/services/ServiceAI'
import ServiceBusiness from './pages/services/ServiceBusiness'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'

function ScrollToTop() {
  useEffect(() => {
    const onHashChange = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    onHashChange()
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-800">
        <ScrollToTop />
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/erp" element={<ServiceERP />} />
            <Route path="/services/analytics" element={<ServiceAnalytics />} />
            <Route path="/services/ai-automation" element={<ServiceAI />} />
            <Route path="/services/business-management" element={<ServiceBusiness />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
