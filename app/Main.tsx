import { HeroSection } from '@/components/home/hero-section'
import { OutObjective } from '@/components/home/our-objective'
import { OurPrinciples } from '@/components/home/our-principles'
import { VisionSection } from '@/components/home/vision-section'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <div className="overflow-hidden scroll-smooth pt-6 lg:pt-[70px]" id="about">
      <HeroSection />

      <VisionSection />

      <OutObjective />

      <OurPrinciples />

      {/* <TeamPartner /> */}

      {/* <OutInvester /> */}

      {/* <JoinWithUs /> */}
    </div>
  )
}
