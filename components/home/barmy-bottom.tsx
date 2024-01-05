import React from 'react'
import Logo from 'app/assets/images/logo.png'
import Image from 'next/image'

const BarmyBottom = () => {
  return (
    <div className="mt-[39px] flex flex-col items-center justify-center">
      <Image src={Logo} alt="logo" className="w-[255px]" />
      <p className="mt-[39px] text-center font-poppins text-base font-bold text-primary lg:text-2xl">
        Let us know if you'd like an introduction to any of our valuable partners!
      </p>
    </div>
  )
}

export default BarmyBottom
