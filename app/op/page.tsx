import Footer from '@/components/op/footer'
import { HeroSection } from '@/components/op/hero-section'

export default async function Page() {
  return (
    <div className="overflow-hidden scroll-smooth pt-6 lg:pt-[70px]" id="about">
      <HeroSection />
      <Footer />
    </div>
  )
}
