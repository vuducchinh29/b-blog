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
          Using our vast web2 user resources and thriving social networks within Vietnam, where user
          acquisition costs are notably low, B.ARMY excels in providing comprehensive support to
          projects right from their inception.
          <br /> <br />
          With our extensive local market knowledge, developer resources, and the advantage of
          Vietnam's cost-effective user base, we provide end-to-end support, spanning from
          pre-funding aid to nurturing early adopters and enabling the scalable expansion of their
          user base
        </p>
      </div>
    </section>
  )
}
