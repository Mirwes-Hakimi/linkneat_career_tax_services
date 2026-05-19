import { useEffect } from 'react'
import './App.css'

import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import StatsBar      from './components/StatsBar'
import LanguageBanner from './components/LanguageBanner'
import Services      from './components/Services'
import WhyUs         from './components/WhyUs'
import CtaBand       from './components/CtaBand'
import Process       from './components/Process'
import Testimonials  from './components/Testimonials'
import FAQ           from './components/FAQ'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <LanguageBanner />
        <Services />
        <WhyUs />
        <CtaBand />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
