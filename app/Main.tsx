import BarmyBottom from '@/components/home/barmy-bottom'
import { HeroSection } from '@/components/home/hero-section'
import { JoinWithUs } from '@/components/home/join-with-us'
import { OutObjective } from '@/components/home/our-objective'
import { OutPortfolio } from '@/components/home/our-portfolio'
import { OurPrinciples } from '@/components/home/our-principles'
import OurTeam from '@/components/home/our-team'
import { OutAdvisory } from '@/components/home/out-advisory'
import { TeamPartner } from '@/components/home/team-partner'
import { VisionSection } from '@/components/home/vision-section'
import BottomCdt from 'app/assets/images/bottom-cdt.png'
import Image from 'next/image'

// const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <div className="overflow-hidden scroll-smooth pt-6 lg:pt-[70px]" id="about">
      <HeroSection />

      <VisionSection />

      <OutObjective />

      <OutPortfolio />

      <OurPrinciples />

      {/* <OurTeam /> */}

      <TeamPartner />
      {/* <OutAdvisory /> */}

      {/* <OutInvester /> */}

      <JoinWithUs />

      <div className="block lg:hidden">
        <BarmyBottom />
      </div>

      <div className="mt-[92px] flex w-full justify-end lg:mt-[41px]">
        <Image src={BottomCdt} className="" alt="bottom" />
      </div>
    </div>
  )
}
