'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import OurTeamImg01 from 'app/assets/images/our-team-01.png'
import OurTeamImg02 from 'app/assets/images/our-team-02.png'
import PrinciplesNumberImg01 from 'app/assets/images/principles-number-01.png'
import PrinciplesNumberImg02 from 'app/assets/images/principles-number-02.png'
import Image from 'next/image'
import { useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ourPrinciplesList = [
  {
    title: 'Mr. THANH DAO',
    detail: [
      'Co-Founder & CTO of LaunchZone',
      'Head of Investment & Application at VBA',
      'Former CTO of Nexty, former CEO of Ezdeﬁ e-wallet',
      'Inﬂuencer and guest speaker/ judge of many blockchain events/hackathon in Vietnam',
    ],
    image: OurTeamImg01,
    numImg: PrinciplesNumberImg01,
    profile: 'LinkedIn',
    link: 'https://www.linkedin.com/in/techcomthanh/',
  },
  {
    title: 'Mr. LOGAN',
    detail: [
      'Co-Founder & CMO of LaunchZone',
      'Founder of Mayor Capital',
      'Founder of Crypto Sale Mastery',
      'Influencer and community building expert in Vietnam’s financial industry',
    ],
    image: OurTeamImg02,
    numImg: PrinciplesNumberImg02,
    profile: 'Twitter',
    link: 'https://twitter.com/logandefi',
  },
]

export const OurPrinciples = () => {
  const [swiper, setSwiper] = useState<unknown>(null)
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <section className="bg-primary p-0 lg:pb-[77px] lg:pt-[25px]">
      <div className="">
        <div className="ml-20 hidden items-center text-[32px] font-bold leading-[67px] lg:flex">
          <div className="relative z-[2] text-primary">
            <p className="relative z-[2] font-bold">
              <span className="font-bold text-white">ADVISORY & MENTOR BOARDS</span>
            </p>
            <div
              className="absolute -left-[10rem] -top-[40%] z-[1] hidden aspect-square 
              w-[443px] -translate-y-1/2 rounded-full bg-secondary lg:block"
            ></div>
          </div>
        </div>
        <h2 className="home-title ml-6 !text-white lg:hidden">ADVISORY & MENTOR BOARDS</h2>
      </div>

      <div className="mt-4 bg-primary pt-10 lg:mt-0 lg:hidden">
        <Swiper
          className="yellow-invester-sw !pb-[74px]"
          modules={[Autoplay, Pagination]}
          effect="cards"
          spaceBetween={16}
          slidesPerView={1}
          autoplay={true}
          pagination
          onSwiper={setSwiper}
          onSlideChange={({ activeIndex }) => setSlideIndex(activeIndex)}
        >
          {ourPrinciplesList.map((_, idx, arr) => (
            <SwiperSlide key={idx}>
              <div className="px-6 font-poppins">
                <div className="flex items-center justify-between">
                  <Image src={_.image} alt={_.title} className="w-[91px]" />
                  <Image src={_.numImg} alt={idx + 1 + ''} className="h-[77px]" />
                </div>

                <h3 className="pb-4 pt-[21px] text-sm font-bold leading-[26px] text-secondary">
                  {_.title}
                </h3>

                <ul className="">
                  {_.detail.map((item, idx) => (
                    <li className="list-inside list-disc text-sm text-secondary" key={idx}>
                      {item}
                    </li>
                  ))}
                  <li className="list-inside list-disc text-sm text-secondary">
                    {_.profile}:{' '}
                    <span>
                      <a href={_.link} className="" target={'_blank'}>
                        {_.link}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden space-y-[47px] bg-primary pl-[120px] pr-[90px] lg:block">
        {ourPrinciplesList.map((_, idx) => (
          <div className="flex items-center" key={idx}>
            <div className="relative z-[2] w-[278px]">
              <Image src={_.image} alt={_.title} className="w-full" />
            </div>

            <div className="ml-[153px] mr-[105px] h-[77px] w-[115px]">
              <Image
                src={_.numImg}
                alt={idx + 1 + ''}
                className="h-full w-full object-contain object-right"
              />
            </div>

            <div className="flex-1 space-y-3 font-poppins text-secondary">
              <h3 className="text-xl font-bold leading-[37.5px]">{_.title}</h3>
              <ul className="">
                {_.detail.map((item, idx) => (
                  <li
                    className="list-inside list-disc text-left text-sm font-bold leading-[26px]"
                    key={idx}
                  >
                    {item}
                  </li>
                ))}
                <li className="list-inside list-disc text-left text-sm font-bold leading-[26px]">
                  {_.profile}:{' '}
                  <span>
                    <a href={_.link} className="" target={'_blank'}>
                      {_.link}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
