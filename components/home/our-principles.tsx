'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import PrinciplesNumberImg01 from 'app/assets/images/principles-number-01.png'
import PrinciplesNumberImg02 from 'app/assets/images/principles-number-02.png'
import PrinciplesNumberImg03 from 'app/assets/images/principles-number-03.png'
import PrinciplesImg01 from 'app/assets/images/principles01.png'
import PrinciplesImg02 from 'app/assets/images/principles02.png'
import PrinciplesImg03 from 'app/assets/images/principles03.png'
import Image from 'next/image'
import { useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ourPrinciplesList = [
  {
    title: 'Trust and Integrity',
    detail:
      'We hold ourselves to the highest standards of trust and integrity, fostering strong relationships built on transparency, honesty, and reliability. With ethical practices at the core of our values, we prioritize the long-term interests of the startups we support, ensuring their trust in us remains unwavering.',
    image: PrinciplesImg01,
    numImg: PrinciplesNumberImg01,
  },
  {
    title: 'Long-term Partnership',
    detail:
      'We believe in cultivating long-term partnerships built on mutual trust, shared goals, and comprehensive support. As a committed partner, we provide ongoing guidance, resources, and strategic advice to help startups grow and succeed. Throughout their journey, we stand by startups as a trusted partner, assisting them in overcoming challenges and capturing opportunities.',
    image: PrinciplesImg02,
    numImg: PrinciplesNumberImg02,
  },
  {
    title: 'Innovation and Adaptability',
    detail:
      'At the heart of our culture are innovation and adaptability. We encourage startups to explore cutting-edge ideas and technologies by pushing boundaries in the blockchain landscape. By staying ahead of trends and emerging opportunities, we foster an agile and adaptable environment empowering startups to thrive in the ever-evolving blockchain world.',
    image: PrinciplesImg03,
    numImg: PrinciplesNumberImg03,
  },
]

export const OurPrinciples = () => {
  const [swiper, setSwiper] = useState<unknown>(null)
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <section className="mt-[38px] bg-white p-0 lg:mt-[59px] lg:bg-primary lg:pb-[77px] lg:pt-[25px]">
      <div className="">
        <div className="ml-20 hidden items-center text-[32px] font-bold leading-[67px] lg:flex">
          <div className="relative z-[2] text-primary">
            <span className="relative z-[2]">Our Prin</span>
            <div
              className="absolute -right-2 -top-[40%] z-[1] hidden aspect-square 
              w-[443px] -translate-y-1/2 rounded-full bg-secondary lg:block"
            ></div>
          </div>
          <p className="text-white">ciples</p>
        </div>
        <h2 className="home-title ml-6 lg:hidden">Our Principles</h2>
      </div>

      <div className="mt-4 bg-primary pt-10 lg:mt-0 lg:hidden">
        <Swiper
          className="yellow-invester-sw pb-[74px]"
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

                <p className="text-sm text-secondary">{_.detail}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden space-y-[47px] bg-primary pl-[120px] pr-[90px] lg:block">
        {ourPrinciplesList.map((_, idx) => (
          <div className="flex items-center" key={idx}>
            <div className="w-[216px]">
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
              <p className="text-sm font-bold leading-[26px]">{_.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
