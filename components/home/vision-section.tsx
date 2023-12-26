'use client'

import VisionImage from 'app/assets/images/vision-section.png'
import useWindowSize from 'hooks/use-window-size'
import Image from 'next/image'

export const VisionSection = () => {
  const { width } = useWindowSize()
  return (
    <section className="mt-[19px] flex flex-col items-center p-6 lg:mt-20 lg:flex-row lg:gap-10">
      <div className="hidden w-[600px] lg:block">
        <Image src={VisionImage} alt="vision" className="w-full" />
      </div>
      <div className="w-full lg:w-[calc(100%-600px-40px)] lg:pr-20">
        <h2 className="home-title">{width < 1024 ? 'What We Do' : 'What We Do'}</h2>

        <Image src={VisionImage} alt="vision" className="mt-3 block w-full lg:mt-0 lg:hidden" />

        <p
          className="mt-4 text-center font-poppins text-sm font-medium leading-[29.19px] text-primary
          lg:mt-6 lg:text-left lg:text-xl lg:leading-[41px]"
        >
          Leveraging our extensive resources in web2 users, social networks, and communities in
          Vietnam - where user acquisition costs are extremely affordable - B.ARMY is uniquely
          positioned to fully support projects from their earliest stages.
          <br /> <br />
          With our deep local market expertise and developer resources, combined with Vietnam's low
          cost user base.
          <br /> <br /> We provide a full suite of assistance, from pre-funding support to
          onboarding early adopters and helping them scale their user base.
        </p>
      </div>
    </section>
  )
}
