import { HeroSection } from '@/components/home/hero-section'
import { OutObjective } from '@/components/home/our-objective'
import { OutPortfolio } from '@/components/home/our-portfolio'
import { OurPrinciples } from '@/components/home/our-principles'
import { OutAdvisory } from '@/components/home/out-advisory'
import { TeamPartner } from '@/components/home/team-partner'
import { VisionSection } from '@/components/home/vision-section'

// const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <div className="overflow-hidden scroll-smooth pt-6 lg:pt-[70px]" id="about">
      <HeroSection />

      <VisionSection />

      <OutObjective />

      <TeamPartner />

      <OutPortfolio />

      <OurPrinciples />

      {/* <OutAdvisory /> */}

      {/* <OutInvester /> */}

      {/* <JoinWithUs /> */}
    </div>
  )
}
