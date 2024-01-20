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
          <b>B.ARMY</b> is Ventures and Blockchain Ecosystem in Vietnam that aims to invest/incubate
          and penetrate projects into Vietnamese market, helping projects acquiring & onboarding
          Web3 users from our existing large number of Web2 users.
          <br /> <br />
          <b>B.ARMY</b> ecosystem includes two of the top social companies in Vietnam with more than
          200 billions Tiktok views & more than 100M subscribers and more than 300 KOLs.
        </p>
      </div>
    </section>
  )
}
