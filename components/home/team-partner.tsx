import Partner01Img from 'app/assets/images/partner-01.svg'
import Partner02Img from 'app/assets/images/partner-02.svg'
import Partner03Img from 'app/assets/images/partner-03.svg'
import Partner04Img from 'app/assets/images/partner-04.svg'

const partnerList = [
  {
    avatar: Partner01Img,
    name: 'John Doe',
    position: 'CEO & Managing Partner',
  },
  {
    avatar: Partner02Img,
    name: 'Jane Smith',
    position: 'COO & Managing Partner',
  },
  {
    avatar: Partner03Img,
    name: 'Bob Miller',
    position: 'Investment Director',
  },
  {
    avatar: Partner04Img,
    name: 'Lisa Wong',
    position: 'Operations Manager',
  },
]

export const TeamPartner = () => {
  return (
    <section className="relative pb-6 pt-6 lg:pb-16 lg:pt-16">
      <div className="absolute -top-[111px] left-0" id="team-partner"></div>
      <div
        className="absolute -bottom-[68px] -right-[145px] z-[1] hidden aspect-square w-[443px] 
        rounded-full bg-secondary
        lg:block"
      ></div>
      <div className="relative z-[2] px-6 font-poppins lg:px-20">
        <h2 className="home-title !text-primary">Team & Partner</h2>

        <p className="py-4 text-sm leading-[26px] text-primary lg:pb-7 lg:pt-6 lg:font-bold">
          {/* Our passionate team of experts and blockchain enthusiasts harnesses
          diverse backgrounds and extensive experience to empower startups in
          their blockchain journey. Through strategic partnerships with renowned
          organizations and leading technology firms, we amplify our network,
          resources, and expertise. This ensures startups receive unparalleled
          support for success. Together, we cultivate a dynamic ecosystem that
          fosters collaboration, fuels growth, and accelerates the adoption of
          blockchain technology. */}
          Led by John and Jane, our team brings together diverse expertise across technology,
          investing, and startup operations. We have experience building multiple successful
          companies from the ground up.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {partnerList.map((_, idx) => (
            <div
              key={idx}
              className="col-span-1 flex h-[258px] flex-col items-center justify-center rounded-[20px] bg-primary"
            >
              <img src={_.avatar} alt="avatar" className="h-[125px]" />
              <p className="text-base font-bold leading-[32px] text-white">{_.name}</p>
              <p className="mt-0.5 text-base font-bold leading-[32px] text-[#e8e8e8]">
                {_.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
