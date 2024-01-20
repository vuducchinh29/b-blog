'use client'

import DGGLogo from 'app/assets/images/dggnetwork.png'
import Image from 'next/image'
import PrivaSea from 'app/assets/images/LOGO INVEST/1.PrivaSea.png'
import AlteredStateMachineImage from 'app/assets/images/LOGO INVEST/2. Altered State Machine_.png'
import ApeX from 'app/assets/images/LOGO INVEST/5.Apex.png'
import PortalImage from 'app/assets/images/LOGO INVEST/4. Portal.jpg'
import DopamineImage from 'app/assets/images/LOGO INVEST/3.Dopamine.png'
import FuelNetworkImage from 'app/assets/images/LOGO INVEST/6. Fuel Network.jpg'
import Another1 from 'app/assets/images/LOGO INVEST/6.Another-1.png'
import OpenOceanImage from 'app/assets/images/LOGO INVEST/8. OpenOcean.webp'
import KyberNetworkCrystalImage from 'app/assets/images/LOGO INVEST/9. Kyber Network Crystal.jpg'
import BiconomyImage from 'app/assets/images/LOGO INVEST/10. Biconomy.jpg'
import QuickSwapImage from 'app/assets/images/LOGO INVEST/11. QuickSwap.png'
import MetavaultImage from 'app/assets/images/LOGO INVEST/12. Metavault.png'
import ArbitrumImage from 'app/assets/images/LOGO INVEST/13. Arbitrum.jpg'
import CamelotImage from 'app/assets/images/LOGO INVEST/14. Camelot_.jpg'
import RadiantImage from 'app/assets/images/LOGO INVEST/16. Radiant.png'
import MaticImage from 'app/assets/images/LOGO INVEST/15. Matic.png'
import OptimismImage from 'app/assets/images/LOGO INVEST/17. Optimism.png'
import VelodromeImage from 'app/assets/images/LOGO INVEST/18. Velodrome_.png'
import ApolloXImage from 'app/assets/images/LOGO INVEST/19. ApolloX.png'
import Unisat_Image from 'app/assets/images/LOGO INVEST/20. Unisat_.jpg'
import BNB48ClubImage from 'app/assets/images/LOGO INVEST/21. BNB48 Club.png'
import DGGNetworkImage from 'app/assets/images/LOGO INVEST/22. DGG Network_.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Fragment, useState } from 'react'

const itemList = [
  { name: 'PrivaSea', image: PrivaSea },
  { name: 'Portal', image: PortalImage },
  { name: 'Dopamine', image: DopamineImage },
  { name: 'Fuel Network', image: FuelNetworkImage },
  { name: 'ApeX', image: ApeX },
  { name: 'Another-1', image: Another1 },
  { name: 'Altered State Machine', image: AlteredStateMachineImage },
  { name: 'OpenOcean', image: OpenOceanImage },
  { name: 'Biconomy', image: BiconomyImage },
  { name: 'QuickSwap', image: QuickSwapImage },
  { name: 'Metavault Trade', image: MetavaultImage },
  { name: 'Arbitrum', image: ArbitrumImage },
  { name: 'Camelot', image: CamelotImage },
  { name: 'ApolloX', image: ApolloXImage },
  { name: 'Unisat', image: Unisat_Image },
  { name: 'BNB48 Club', image: BNB48ClubImage },
  { name: 'DGG Network', image: DGGNetworkImage },
  // { name: 'Sovi Universe', image: SoviUniverseImage },
  // { name: 'Kyber Network Crystal', image: KyberNetworkCrystalImage },
  // { name: 'Radiant', image: RadiantImage },
  // { name: 'Matic', image: MaticImage },
  // { name: 'Optimism', image: OptimismImage },
  // { name: 'Velodrome', image: VelodromeImage },
]

export const OutPortfolio = () => {
  const [swiper, setSwiper] = useState<unknown>(null)
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <section className="mt-7 lg:mt-[85px]">
      <div className="mb-[14px] px-6 lg:mb-0 lg:px-20">
        <h2 className="home-title !lg:leading-0 !leading-[49px]">Investment Portfolio</h2>
      </div>
      <div className="mt-5 hidden space-y-[54px] bg-primary px-6 lg:block lg:px-20 lg:pb-[89px] lg:pt-[97px]">
        {/* <Image src={DGGLogo} alt="DGG Network Logo" className="blog w-[172px] lg:w-[264px]" />
        <div className="block font-poppins font-bold text-white">
          <p className="text-[11px] lg:text-[17px]">Gaming</p>
          <p className="text-[13px] lg:text-[20px]">DGG Network </p>
          <p className="text-[9px] lg:text-sm">NFT Game Publisher and Incubator in SEA</p>
        </div> */}

        <div className="flex justify-center gap-[95px]">
          {itemList.map((_, idx) => (
            <Fragment key={idx}>
              {idx >= 0 && idx < 6 && (
                <div className="flex flex-col items-center gap-3">
                  <div className="overflow-hidden rounded-full border-2 border-[#D79F01] bg-white">
                    <Image
                      src={_.image}
                      alt={_.name}
                      className="h-[90px] w-[90px] rounded-full !p-[2px]"
                    />
                  </div>
                  <p className="text-xs font-bold text-secondary">{_.name}</p>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="flex justify-center gap-[95px]">
          {itemList.map((_, idx) => (
            <Fragment key={idx}>
              {idx >= 6 && idx < 12 && (
                <div className="flex flex-col items-center gap-3">
                  <div className="overflow-hidden rounded-full border-2 border-[#D79F01] bg-white">
                    <Image
                      src={_.image}
                      alt={_.name}
                      className="h-[90px] w-[90px] rounded-full !p-[2px]"
                    />
                  </div>
                  <p className="text-xs font-bold text-secondary">{_.name}</p>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="flex justify-center gap-[95px]">
          {itemList.map((_, idx) => (
            <Fragment key={idx}>
              {idx >= 12 && idx < 18 && (
                <div className="flex flex-col items-center gap-3">
                  <div className="overflow-hidden rounded-full border-2 border-[#D79F01] bg-white">
                    <Image
                      src={_.image}
                      alt={_.name}
                      className="h-[90px] w-[90px] rounded-full !p-[2px]"
                    />
                  </div>
                  <p className="text-xs font-bold text-secondary">{_.name}</p>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="flex justify-center gap-[95px]">
          {itemList.map((_, idx) => (
            <Fragment key={idx}>
              {idx >= 18 && idx < 22 && (
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={_.image}
                    alt={_.name}
                    className="h-[90px] w-[90px] overflow-hidden rounded-full border-2 border-[#D79F01] !p-[3px]"
                  />
                  <p className="text-xs font-bold text-secondary">{_.name}</p>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="block bg-primary pb-[77px] pt-20 lg:hidden">
        <Swiper
          className="yellow-invester-sw"
          modules={[Autoplay, Pagination]}
          effect="cards"
          spaceBetween={16}
          slidesPerView={3}
          autoplay={true}
          onSwiper={setSwiper}
          onSlideChange={({ activeIndex }) => setSlideIndex(activeIndex)}
        >
          {itemList.map((_, idx, arr) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center gap-3 px-6 font-poppins">
                <div className="h-[90px] w-[90px] overflow-hidden rounded-full border-2 border-[#D79F01]">
                  <Image src={_.image} alt={_.name} className="h-full w-full object-cover" />
                </div>
                <p className="text-center text-xs font-bold text-secondary">{_.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
