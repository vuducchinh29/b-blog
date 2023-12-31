'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import PImage1 from 'app/assets/images/value/Composition_13_1.png'
import PImage2 from 'app/assets/images/value/Composition_13_2.png'
import PImage3 from 'app/assets/images/value/Composition_13_3.png'
import PImage4 from 'app/assets/images/value/Composition_13_4.png'

import useWindowSize from 'hooks/use-window-size'
import Image from 'next/image'
import { useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const outObjectiveList = [
  {
    title: '',
    detail:
      'Providing full pre-launch support to help projects prepare and plan their strategy in Vietnam',
    image: PImage1,
  },
  {
    title: '',
    detail:
      'Onboarding early adopters in Vietnam to test, refine and gather initial feedback on products/services',
    image: PImage2,
  },
  {
    title: '',
    detail:
      'Assisting with user acquisition in Vietnam to help projects scale their Vietnamese user base',
    image: PImage3,
  },
  {
    title: '',
    detail:
      'Leveraging our experience to support continued international user retention and expansion as projects grow globally',
    image: PImage4,
  },
]

export const OutObjective = () => {
  const [swiper, setSwiper] = useState<unknown>(null)
  const [slideIndex, setSlideIndex] = useState(0)

  const { width } = useWindowSize()

  return (
    <section className="mt-4 lg:mt-[85px]">
      <div className="px-6 lg:px-20">
        <h2 className="home-title">{'Our Objectives'}</h2>
      </div>

      <div className="px-7 lg:px-20">
        <Swiper
          className="relative z-[3] mt-4 !pb-16 lg:mt-8"
          modules={[Autoplay, Pagination]}
          effect="cards"
          spaceBetween={16}
          slidesPerView={width >= 1440 ? 4 : width >= 1300 ? 3 : 2}
          autoplay={true}
          pagination
          onSwiper={setSwiper}
          onSlideChange={({ activeIndex }) => setSlideIndex(activeIndex)}
        >
          {outObjectiveList.map((_, idx, arr) => (
            <SwiperSlide className="" key={idx}>
              <ObjectiveItem image={_.image} title={_.title} detail={_.detail} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

const ObjectiveItem = ({ image, title, detail }) => {
  return (
    <div className="font-poppins">
      <div
        className="flex h-[287px] flex-col items-center space-y-4 bg-primary px-[15px] pb-[18px]
        pt-[19.75px] lg:h-[387px] lg:space-y-8 lg:pb-[35px] lg:pl-[38px] lg:pr-[26px] lg:pt-[39px]"
      >
        <Image src={image} alt="" className="" />
        <p
          className="line-clamp-4 text-center text-[11px] font-semibold
          leading-[22.5px] text-secondary lg:text-[14px] lg:leading-[26px]"
        >
          {detail}
        </p>
      </div>
    </div>
  )
}
