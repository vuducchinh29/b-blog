import React from 'react'
import MrThanhDao from 'app/assets/images/our-team-01.png'
import MrLogan from 'app/assets/images/our-team-02.png'
import MsJosephine from 'app/assets/images/our-team-03.png'
import MsDaisy from 'app/assets/images/our-team-04.png'
import Image from 'next/image'

const data = [
  {
    name: 'Mr. THANH DAO',
    title: 'FOUNDER',
    image: MrThanhDao,
    linkedin: 'https://www.linkedin.com/in/josephinehuongnguyen/',
  },
  {
    name: 'Daisy M - Head of Barmy Ventures',
    title: 'FOUNDER',
    image: MrLogan,
    linkedin: 'https://www.linkedin.com/in/daisy-m-0050b199/',
  },
  {
    name: 'Josephine Huong Nguyen - CEO',
    title: 'CEO',
    image: MsJosephine,
    linkedin: 'https://www.linkedin.com/in/josephinehuongnguyen/',
  },
  {
    name: 'Daisy M - Head of Barmy Ventures',
    title: 'Head of Barmy Ventures',
    image: MsDaisy,
    linkedin: 'https://www.linkedin.com/in/daisy-m-0050b199/',
  },
]

const OurTeam = () => {
  return (
    <div className="bg-primary px-6 pb-[62px] lg:px-20" id="team-partner">
      <h2 className="home-title !lg:text-primary pb-[25px] pt-4 !text-white lg:pb-[47px] lg:pt-[47px]">
        Our Team
      </h2>
      <div className="flex content-center justify-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:flex-row lg:gap-[135px]">
          {data.map((_, idx) => (
            <div className="col-span-1 text-secondary" key={idx}>
              <Image className="m-auto" src={_.image} alt={_.name} />
              <p className="mt-[19px] text-xl font-bold leading-[37.5px]">{_.name}</p>
              <p className="mb-[9px] text-xl font-bold leading-[37.5px]">{_.title}</p>
              <p className="text-sm font-semibold italic leading-[26px] underline">{_.linkedin}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam
