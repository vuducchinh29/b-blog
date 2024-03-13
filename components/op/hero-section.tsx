import VietName_LG from 'app/assets/images/hero-section-large.svg'
import VietName_SM from 'app/assets/images/hero-section-small.svg'
import Image from 'next/image'
import GiftBoxAnimation from './gift-box'

export const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-24px)] px-6 lg:px-20">
      <div className="flex items-center lg:justify-between lg:gap-[40px] 2xl:gap-[97px]">
        <div className="w-full">
          <p className="mt-2 text-center text-base font-bold uppercase leading-[20px] lg:mb-20 lg:mt-6 lg:text-[40px] lg:leading-[50px]">
            TOP-TIER BLOCKCHAIN VC ECOSYSTEM TO PENETRATE THE{' '}
            <span className="text-[#F03D26]">VIETNAM</span> MARKET
          </p>

          <div className="mt-[30px] flex justify-center lg:mt-0 lg:hidden">
            <Image src={VietName_SM} alt="vietnam" className="w-[40%] min-w-[202px]" />
          </div>

          <GiftBoxAnimation />
        </div>
        <div className="relative -right-20 hidden lg:block">
          <Image src={VietName_LG} alt="vietnam" className="w-[556px]" />
        </div>
      </div>
    </section>
  )
}
