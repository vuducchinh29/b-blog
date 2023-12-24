import BinanceLogo from 'app/assets/images/binance.svg'
import SolanaLogo from 'app/assets/images/solana.svg'
import { useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const investerList = [SolanaLogo, BinanceLogo, SolanaLogo, BinanceLogo, SolanaLogo, BinanceLogo]

export const OutInvester = () => {
  const [swiper, setSwiper] = useState<unknown>(null)
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <section className="pt-6 lg:pt-12">
      <div className="px-6 lg:px-20">
        <h2 className="home-title !text-primary !leading-[66px]">Our Investor</h2>
      </div>

      <div className="pt-3 lg:pt-4">
        <div className="relative hidden lg:block">
          <div className="">
            <Swiper
              className="blue-invester-sw relative"
              modules={[Autoplay, Pagination]}
              effect="cards"
              spaceBetween={0}
              slidesPerView={4}
              autoplay={true}
              pagination={false}
              onSwiper={setSwiper}
              onSlideChange={({ activeIndex }) => setSlideIndex(activeIndex)}
            >
              {investerList.map((_, idx) => (
                <SwiperSlide className="bg-primary px-5 pb-[33px] pt-[53px]" key={idx}>
                  <div className="flex w-[326px] items-center justify-center" key={idx}>
                    <img src={_} alt="invester" className="w-full" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="grid grid-cols-3 bg-primary px-6 py-[18px] lg:hidden">
          {investerList.map((_, idx) => (
            <div className="col-span-1 flex items-center justify-center" key={idx}>
              <img src={_} alt="invester" className="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
