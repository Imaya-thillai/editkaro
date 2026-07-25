import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { Portfolio } from '@/components/portfolio'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Portfolio />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
