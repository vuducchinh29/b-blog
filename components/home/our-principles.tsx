'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import Linkedin from 'app/assets/images/linkedIn-icon.png'
import MrThanhDao from 'app/assets/images/our-team-01.png'
import MrLogan from 'app/assets/images/our-team-02.png'
import MsJosephine from 'app/assets/images/our-team-03.png'
import MsDaisy from 'app/assets/images/our-team-04.png'
import Image from 'next/image'

const data = [
  {
    name: 'Mr. Thanh Dao',
    title: 'FOUNDER',
    image: MrThanhDao,
    linkedin: 'https://www.linkedin.com/in/techcomthanh/',
  },
  {
    name: 'Mr. Logan',
    title: 'FOUNDER',
    image: MrLogan,
    linkedin: 'https://www.linkedin.com/in/logandefi/',
  },
  {
    name: 'Ms. Daisy M',
    title: 'Chief Investment Officer',
    image: MsDaisy,
    linkedin: 'https://www.linkedin.com/in/daisy-m-0050b199/',
  },
]

export const OurPrinciples = () => {
  return (
    <section
      className="bg-secondary p-0 lg:bg-primary lg:pb-[77px] lg:pt-[100px]"
      id="team-partner"
    >
      <div className="">
        <div className="ml-20 hidden items-center text-[32px] font-bold leading-[67px] lg:flex">
          <div className="relative z-[2] text-primary">
            <p className="relative z-[2] font-bold">
              <span className="font-bold text-white">Our Team</span>
            </p>
            <div
              className="absolute -left-[20rem] top-[120px] z-[1] hidden aspect-square 
              w-[443px] -translate-y-1/2 rounded-full bg-secondary lg:block"
            ></div>
          </div>
        </div>
        <h2 className="home-title ml-6 py-10 !text-white lg:hidden">Our Team</h2>
      </div>
      <div className="flex content-center justify-center py-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:flex-row lg:gap-[135px]">
          {data.map((_, idx) => (
            <div
              className={`${idx === 2 ? 'lg:col-span-2' : 'lg:col-span-1'} mb-[20px] text-center text-primary lg:mb-0 lg:text-secondary`}
              key={idx}
            >
              <Image className="m-auto" src={_.image} alt={_.name} />
              <p className="m-auto mt-[19px] flex content-center justify-center text-xl font-bold leading-[37.5px]">
                {_.name}{' '}
                <span>
                  <a href={_.linkedin} target="_blank">
                    <Image
                      className="relative top-2 ml-2 h-[20px] w-[20px]"
                      src={Linkedin}
                      alt={_.name}
                    />
                  </a>
                </span>
              </p>
              <p className="mb-[9px] text-xl font-bold leading-[37.5px]">{_.title}</p>
              {/* <p className="text-sm font-semibold italic leading-[26px] underline">{_.linkedin}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
