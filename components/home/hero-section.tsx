import GoPenetratingIcon from 'app/assets/images/go-penetrating.png'
import VietName_LG from 'app/assets/images/hero-section-large.svg'
import VietName_SM from 'app/assets/images/hero-section-small.svg'
import HotBg2 from 'app/assets/images/info-box-2.png'
import HotBg from 'app/assets/images/info-box.png'
import AcceleratorIcon from 'app/assets/images/join-our-accelerator-program.png'
import UptrendIcon from 'app/assets/images/uptrend.svg'
import Image from 'next/image'
import { classNames } from 'utils'

const infoList = [
  {
    name: 'Tiktok Network views',
    value: '100B+',
  },
  {
    name: 'Social Network users',
    value: '70M+',
  },
  {
    name: 'Tiktok KOLs',
    value: '1K+',
  },
  {
    name: 'Blockchain Communties',
    value: '25',
  },
  {
    name: 'VCs',
    value: '20',
  },
]

const hots = [
  {
    name: 'Raise Capital',
    icon: UptrendIcon,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdqz9G81lLEu0vyl9M8PbEYG2kSE2wv6ne5bNLFTVHcLkWF4g/viewform?usp=send_form',
  },
  {
    name: 'Go Penetrating',
    icon: GoPenetratingIcon,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdqz9G81lLEu0vyl9M8PbEYG2kSE2wv6ne5bNLFTVHcLkWF4g/viewform?usp=send_form',
  },
  {
    name: 'Join Our Accelerator Program',
    icon: AcceleratorIcon,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdqz9G81lLEu0vyl9M8PbEYG2kSE2wv6ne5bNLFTVHcLkWF4g/viewform?usp=send_form',
  },
]

export const HeroSection = () => {
  return (
    <section className="px-6 lg:px-20">
      <div className="flex items-center lg:justify-between lg:gap-[40px] 2xl:gap-[97px]">
        <div className="w-full lg:w-auto">
          {/* <h2 className="font-poppins text-xl font-bold leading-[41px] text-secondary lg:text-[32px] lg:leading-[66px]">
            About us
          </h2> */}

          <p className="mt-2 text-base font-bold uppercase leading-[20px] lg:mt-6 lg:text-[40px] lg:leading-[50px]">
            TOP-TIER BLOCKCHAIN ECOSYSTEM TO PENETRATE THE{' '}
            <span className="text-[#F03D26]">VIETNAM</span> MARKET
          </p>

          <div className="mt-[30px] flex justify-center lg:mt-0 lg:hidden">
            <Image src={VietName_SM} alt="vietnam" className="w-[40%] min-w-[202px]" />
          </div>

          <div className="mt-[30px] grid grid-cols-2 gap-4 lg:mt-[63px] lg:gap-6 xl:grid-cols-3">
            {infoList.map((_, idx) => (
              <InfoBox name={_.name} value={_.value} key={idx} />
            ))}
          </div>
        </div>
        <div className="relative -right-20 hidden lg:block">
          <Image src={VietName_LG} alt="vietnam" className="w-[556px]" />
        </div>
      </div>

      <div className="mt-7 hidden w-full grid-cols-1 gap-4 lg:mt-[150px] lg:grid-cols-3 lg:gap-[37px]">
        {hots.map((_, idx) => (
          <div className="relative col-span-1" key={idx}>
            <a href={_.link} target="__blank">
              <div className="absolute left-0 top-0 z-[2] flex h-full w-full items-center gap-5 p-[34px] lg:gap-6 lg:p-10">
                <Image src={_.icon} alt="icon" />
                <p
                  className={classNames(
                    'font-poppins text-base font-bold lg:text-[19px]',
                    idx === 0 ? 'text-white' : 'text-primary'
                  )}
                >
                  {_.name}
                </p>
              </div>
              <Image
                src={idx === 0 ? HotBg : HotBg2}
                alt="hot item"
                className="relative z-[1] w-full"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

const InfoBox = ({ value, name }) => {
  return (
    <div
      className="def-shadow col-span-1 flex h-[74px] flex-col items-center justify-center rounded-[10.73px]
      bg-white lg:h-[111px] lg:p-3"
    >
      <p className="text-base font-bold text-primary lg:text-2xl">{value}</p>
      <p className="line-clamp-1 text-center text-xs font-bold text-[#404040] lg:text-lg">{name}</p>
    </div>
  )
}
