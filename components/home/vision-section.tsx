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
        <h2 className="home-title">{width < 1024 ? 'Vision' : 'Our Vision'}</h2>

        <Image src={VisionImage} alt="vision" className="mt-3 block w-full lg:mt-0 lg:hidden" />

        <p
          className="mt-4 text-center font-poppins text-sm font-medium leading-[29.19px] text-primary
          lg:mt-6 lg:text-left lg:text-xl lg:leading-[41px]"
        >
          We aspire to be the forefront blockchain venture capital ecosystem in Vietnam, igniting
          the growth of innovative projects and cutting-edge technologies.
        </p>

        <h2 className="home-title pb-5 pt-7 lg:pb-4 lg:pt-8">
          {width < 1024 ? 'Vision' : 'Our Vision'}
        </h2>

        <p
          className="mt-4 text-center font-poppins text-sm font-medium leading-[29.19px] text-primary
          lg:mt-6 lg:text-left lg:text-xl lg:leading-[41px]"
        >
          Founded by seasoned experts in the technology industry and marketing enthusiasts, B.ARMY
          recognizes the vast potential of blockchain technology. Our mission is to tackle the
          funding and user acquisition challenges faced by Web3 startups, providing strategic
          solutions to empower their growth.
        </p>
      </div>
    </section>
  )
}
