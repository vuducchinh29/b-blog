'use client'

import DGGLogo from 'app/assets/images/dggnetwork.png'
import Image from 'next/image'

export const OutPortfolio = () => {
  return (
    <section className="mt-7 lg:mt-[85px]">
      <div className="px-6 lg:px-20">
        <h2 className="home-title">Our Portfolio</h2>
      </div>
      <div className="mt-5 flex h-[207px] items-center justify-center gap-6 bg-primary px-6 lg:h-[293px] lg:px-20 lg:pt-8">
        <Image src={DGGLogo} alt="DGG Network Logo" className="blog w-[172px] lg:w-[264px]" />
        <div className="block font-poppins font-bold text-white">
          <p className="text-[11px] lg:text-[17px]">Gaming</p>
          <p className="text-[13px] lg:text-[20px]">DGG Network </p>
          <p className="text-[9px] lg:text-sm">NFT Game Publisher and Incubator in SEA</p>
        </div>
      </div>
    </section>
  )
}
