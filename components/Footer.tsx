'use client'

import FBMobileIcon from 'app/assets/images/fb-mobile-icon.svg'
import InsMobileIcon from 'app/assets/images/instagram-mobile-icon.svg'
import Logo from 'app/assets/images/logo.png'
import XMobileIcon from 'app/assets/images/tw-mobile-icon.svg'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer-shadow bg-white font-poppins lg:pt-[38px]">
      <div className=" px-6 pt-[47px] lg:px-20">
        {/* <div className="pb-[43.5px] lg:pb-0">
          <Image src={Logo} alt="b.army logo" className="h-7 w-[118px] lg:h-[42px] lg:w-[171px]" />
        </div> */}

        <div className="flex w-full flex-col lg:flex-row lg:justify-between">
          <div className="mb-[26px] flex items-center lg:mb-0">
            <Image
              src={Logo}
              alt="b.army logo"
              className="h-7 w-[118px] lg:h-[42px] lg:w-[171px]"
            />
          </div>

          {/* <div
              className='space-y-[41px] border-t border-t-[#E6E8EC] py-8 text-[#23262F] 
              lg:max-w-[120px] lg:space-y-5 lg:border-none lg:py-0 lg:pb-[53px] lg:text-primary'
            >
              <h3 className='text-xs font-bold uppercase'>About us</h3>
              <div className='space-y-2'>
                <p className='text-sm leading-6'></p>
                <p className='text-sm leading-6'></p>
                <p className='text-sm leading-6'></p>
                <p className='text-sm leading-6'></p>
              </div>
            </div> */}

          <div
            className="space-y-[41px] border-t border-t-[#E6E8EC] py-8
              text-primary lg:max-w-[441px] lg:space-y-5 lg:border-none lg:py-0 lg:pb-[30px]"
          >
            <h3 className="text-xs font-bold uppercase lg:text-[17px]">Contact us</h3>
            <div className="space-y-2">
              <p className="text-sm font-medium leading-6">
                For inquiries and discussions regarding investment or project promotion
                opportunities, please feel free to fill in necessary information.
                <br />
                <br />
                We are actively seeking to support and invest in the most promising blockchain
                startups worldwide.
              </p>
            </div>
          </div>

          <div className="hidden opacity-0 lg:block lg:w-[100px] lg:max-w-full"></div>

          <div className="hidden w-[184px] lg:block lg:py-0 lg:pb-[53px]">
            <div className="flex h-full items-end justify-between">
              <div className="social-shadow flex aspect-square w-[34px] items-center justify-center rounded-full bg-white">
                <Image src={FBMobileIcon} alt="facebook mobile icon" className="w-3" />
              </div>
              <div className="social-shadow flex aspect-square w-[34px] items-center justify-center rounded-full bg-white">
                <Image src={XMobileIcon} alt="x mobile icon" className="w-3" />
              </div>
              <div className="social-shadow flex aspect-square w-[34px] items-center justify-center rounded-full bg-white">
                <Image src={InsMobileIcon} alt="instagram mobile icon" className="w-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="block space-y-6 border-t border-t-[#E6E8EC] pb-6 pt-[57px] lg:hidden">
          <p className="text-xs leading-5 text-[#777E90]">
            Copyright © 2023 B.Army. All rights reserved
          </p>
          <div className="flex gap-6">
            <Image src={FBMobileIcon} alt="facebook mobile icon" className="w-5" />
            <Image src={XMobileIcon} alt="x mobile icon" className="w-5" />
            <Image src={InsMobileIcon} alt="instagram mobile icon" className="w-5" />
          </div>
        </div>
      </div>

      <div className="hidden justify-center border-t border-t-primary px-6 py-3 text-[13px] font-medium text-primary lg:flex lg:px-20">
        Copyright ® 2023 by B.Army
      </div>
    </footer>
  )
}
