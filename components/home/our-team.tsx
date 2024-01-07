import React from 'react'
import JosephineAvatar from 'app/assets/images/joseohine.png'
import DaisyAvatar from 'app/assets/images/daisy.png'
import Image from 'next/image'

const data = [
  {
    name: 'Josephine Huong Nguyen - CEO',
    image: JosephineAvatar,
    linkedin: 'https://www.linkedin.com/in/josephinehuongnguyen/',
  },
  {
    name: 'Daisy M - Head of Barmy Ventures',
    image: DaisyAvatar,
    linkedin: 'https://www.linkedin.com/in/daisy-m-0050b199/',
  },
]

const OurTeam = () => {
  return (
    <div className="bg-secondary px-6 pb-[62px] lg:px-20" id="team-partner">
      <h2 className="home-title !lg:text-primary pb-[25px] pt-4 !text-white lg:pb-[47px] lg:pt-[47px]">
        Our Team
      </h2>
      <div className="flex flex-col justify-center gap-[35px] lg:flex-row lg:gap-[135px]">
        {data.map((_, idx) => (
          <div className="flex flex-col items-center justify-center text-primary" key={idx}>
            <Image src={_.image} alt={_.name} />
            <p className="mb-[9px] mt-[19px] text-xl font-bold leading-[37.5px]">{_.name}</p>
            <p className="text-sm font-semibold italic leading-[26px] underline">{_.linkedin}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam
