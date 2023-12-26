'use client'

import DGGLogo from 'app/assets/images/dggnetwork.png'
import Image from 'next/image'

export const OutPortfolio = () => {
  return (
    <section className="mt-7 lg:mt-[85px]">
      <div className="px-6 lg:px-20">
        <h2 className="home-title">Our Portfolio</h2>
      </div>
      <div className="mt-5 flex h-[207px] items-center justify-center gap-6 bg-primary px-6 lg:px-20 lg:pt-8">
        <Image src={DGGLogo} alt="DGG Network Logo" className="blog w-[172px] lg:hidden" />
        <div className="block font-poppins font-bold text-white lg:hidden">
          <p className="text-[11px]">Gaming</p>
          <p className="text-[13px]">DGG Network </p>
          <p className="text-[9px]">NFT Game Publisher and Incubator in SEA</p>
        </div>
      </div>
    </section>
  )
}
