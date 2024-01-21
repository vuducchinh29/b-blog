'use client'

import PrivaSea from 'app/assets/images/LOGO INVEST/1.PrivaSea.png'
import BiconomyImage from 'app/assets/images/LOGO INVEST/10. Biconomy.jpg'
import QuickSwapImage from 'app/assets/images/LOGO INVEST/11. QuickSwap.png'
import MetavaultImage from 'app/assets/images/LOGO INVEST/12. Metavault.png'
import ArbitrumImage from 'app/assets/images/LOGO INVEST/13. Arbitrum.jpg'
import CamelotImage from 'app/assets/images/LOGO INVEST/14. Camelot_.jpg'
import ApolloXImage from 'app/assets/images/LOGO INVEST/19. ApolloX.png'
import AlteredStateMachineImage from 'app/assets/images/LOGO INVEST/2. Altered State Machine_.png'
import Unisat_Image from 'app/assets/images/LOGO INVEST/20. Unisat_.jpg'
import BNB48ClubImage from 'app/assets/images/LOGO INVEST/21. BNB48 Club.png'
import DGGNetworkImage from 'app/assets/images/LOGO INVEST/22. DGG Network_.jpg'
import DopamineImage from 'app/assets/images/LOGO INVEST/3.Dopamine.png'
import PortalImage from 'app/assets/images/LOGO INVEST/4. Portal.jpg'
import ApeX from 'app/assets/images/LOGO INVEST/5.Apex.png'
import FuelNetworkImage from 'app/assets/images/LOGO INVEST/6. Fuel Network.jpg'
import Another1 from 'app/assets/images/LOGO INVEST/6.Another-1.png'
import OpenOceanImage from 'app/assets/images/LOGO INVEST/8. OpenOcean.webp'
import Image from 'next/image'
import { useState } from 'react'
import 'swiper/css/grid'
import { Autoplay, Grid, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

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
      <div className="mb-[14px] hidden px-6 lg:mb-0 lg:block lg:px-20">
        <h2 className="home-title !lg:leading-0 !leading-[49px]">Investment Portfolio</h2>
      </div>

      <div className="relative mt-5 hidden bg-primary lg:block lg:px-20 lg:pb-[89px] lg:pt-[97px]">
        <div
          className="absolute -bottom-10 -right-[10px] z-[1] hidden aspect-square 
          w-[244px] rounded-full bg-secondary lg:block"
        ></div>
        <div className="relative z-[2] rounded-[62.3px] border-[12.82px] border-white px-5 pb-[84px] pt-[109px]">
          <div className="absolute -top-[calc((95px+13px)/2)] left-1/2 z-[3] flex h-[95px] w-[426px] -translate-x-1/2 items-center justify-center rounded-[32px] bg-secondary">
            <p className="font-poppins text-[31px] font-bold text-primary">Our Investment</p>
          </div>

          <div className="flex justify-center space-y-[54px] px-6">
            {/* <Image src={DGGLogo} alt="DGG Network Logo" className="blog w-[172px] lg:w-[264px]" />
          <div className="block font-poppins font-bold text-white">
            <p className="text-[11px] lg:text-[17px]">Gaming</p>
            <p className="text-[13px] lg:text-[20px]">DGG Network </p>
            <p className="text-[9px] lg:text-sm">NFT Game Publisher and Incubator in SEA</p>
          </div> */}

            <div className="grid max-w-[804px] grid-cols-4 gap-6 lg:grid-cols-5 xl:grid-cols-6 xl:gap-[59px]">
              {itemList.map((_, idx) => (
                <div key={idx} className="col-span-1">
                  {idx >= 0 && idx < 22 && (
                    <div className="flex flex-col items-center gap-3">
                      <div className="aspect-square w-[84px] overflow-hidden rounded-full border-2 border-[#D79F01]">
                        <Image
                          src={_.image}
                          alt={_.name}
                          className="h-full w-full rounded-full object-cover object-center !p-[2px]"
                        />
                      </div>
                      <p className="text-xs font-bold text-secondary">{_.name}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="block bg-primary lg:hidden">
        <h2 className="home-title !lg:leading-0 ml-6 block py-10 !leading-[49px] lg:hidden">
          Investment Portfolio
        </h2>
        <div className="pb-[77px]">
          <Swiper
            className="yellow-invester-sw"
            modules={[Autoplay, Pagination, Grid]}
            effect="cards"
            spaceBetween={16}
            slidesPerView={3}
            autoplay={true}
            onSwiper={setSwiper}
            onSlideChange={({ activeIndex }) => setSlideIndex(activeIndex)}
            grid={{ rows: 2, fill: 'row' }}
          >
            {itemList.map((_, idx, arr) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center gap-3 px-6 font-poppins">
                  <div className="h-[90px] w-[90px] overflow-hidden rounded-full border-2 border-[#D79F01]">
                    <Image
                      src={_.image}
                      alt={_.name}
                      className="h-full w-full rounded-full object-cover !p-[2px]"
                    />
                  </div>
                  <p className="text-center text-xs font-bold text-secondary">{_.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
