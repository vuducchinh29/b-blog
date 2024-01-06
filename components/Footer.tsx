'use client'

import AMobileIcon from 'app/assets/images/a-mobile-icon.svg'
import DiscordMobileIcon from 'app/assets/images/discord-mobile-icon.svg'
import GithubMobileIcon from 'app/assets/images/github-mobile-icon.svg'
import Logo from 'app/assets/images/logo.png'
import TeleMobileIcon from 'app/assets/images/tele-mobile-icon.svg'
import XMobileIcon from 'app/assets/images/x-mobile-icon.svg'
import EmailIcon from 'app/assets/images/contact/email.svg'
import XIcon from 'app/assets/images/contact/x.svg'
import BinanceFeedIcon from 'app/assets/images/contact/binance-feed.svg'
import TelegramIcon from 'app/assets/images/contact/telegram.svg'
import ThreadsIcon from 'app/assets/images/contact/threads.svg'
import DebankIcon from 'app/assets/images/contact/debank.svg'
import DiscordIcon from 'app/assets/images/contact/discord.svg'
import GithubIcon from 'app/assets/images/contact/github.svg'

import Image from 'next/image'

const contacts = [
  {
    name: 'Business@b.army',
    image: EmailIcon,
    link: 'mailto:Business@b.army',
  },
  {
    name: 'X',
    image: XIcon,
    link: 'https://twitter.com/BARMYGROUP',
  },
  {
    name: 'Binance Feed',
    image: BinanceFeedIcon,
    link: 'https://www.binance.com/vi/feed/profile/B_ARMY',
  },
  {
    name: 'Telegram',
    image: TelegramIcon,
    link: 'https://t.me/barmychannel',
  },
  {
    name: 'Threads',
    image: ThreadsIcon,
    link: '#',
  },
  {
    name: 'Debank',
    image: DebankIcon,
    link: 'https://debank.com/profile/0x82e459f86d2993a29c86eba19b86cd5712a223eb/stream',
  },
  {
    name: 'Discord',
    image: DiscordIcon,
    link: '#',
  },
  {
    name: 'Github',
    image: GithubIcon,
    link: '#',
  },
]

export default function Footer() {
  return (
    <footer className="footer-shadow bg-white font-poppins" id="join-us">
      <div className=" px-6 pt-[38px] lg:px-[38px]">
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

          {/* <div
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
          </div> */}

          <div className="mt-[40px] lg:mt-0">
            <h3 className="text-[14px] font-bold uppercase text-[#0F1E78] lg:text-center lg:text-[24px]">
              Contact us
            </h3>
            <div className="mt-[40px] grid lg:mt-[30px] lg:grid-cols-3">
              {contacts.map((_, idx) => (
                <div key={idx} className="mr-[50px] flex items-center">
                  <Image src={_.image} className="" alt="bottom" />
                  <a href={_.link} target="_blank" className="font-[600] text-[#0F1E78]">
                    {_.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden opacity-0 lg:block lg:w-[100px] lg:max-w-full"></div>
        </div>

        <div className="block space-y-6 border-t border-t-[#E6E8EC] pb-6 pt-[57px] lg:hidden">
          <p className="text-xs leading-5 text-[#777E90]">
            Copyright © 2023 B.Army. All rights reserved
          </p>
        </div>
      </div>

      <div className="hidden justify-center border-t border-t-primary px-6 py-3 text-[13px] font-medium text-primary lg:flex lg:px-20">
        Copyright © 2023 B.Army. All rights reserved
      </div>
    </footer>
  )
}
