import Partner01Img from 'app/assets/images/partner-01.svg'
import Partner02Img from 'app/assets/images/partner-02.svg'
import Partner03Img from 'app/assets/images/partner-03.svg'
import Partner04Img from 'app/assets/images/partner-04.svg'
import Partner05Img from 'app/assets/images/partner-05.svg'
import Partner06Img from 'app/assets/images/partner-06.svg'
import Image from 'next/image'

const partnerList = [
  {
    avatar: Partner01Img,
    name: 'THEANH 28',
    content1: [
      {
        c1: '200+',
        c2: 'Multichannel communities.',
      },
      {
        c1: '100M+',
        c2: 'Followers.',
      },
      {
        c1: '10M+',
        c2: 'Growth rate follower / year.',
      },
    ],
    content2: '',
  },
  {
    avatar: Partner02Img,
    name: 'DC GROUP',
    content1: [
      {
        c1: '100B+',
        c2: 'Views on TikTok',
      },
      {
        c1: '500+',
        c2: 'Exclusive management of the most popular Creators/ KOLs in Vietnam.',
      },
      {
        c1: '60B+',
        c2: 'The first MCN with 60B+ views on Tiktok (the largest TikTok network in SEA).',
      },
    ],
    content2: '',
  },
  {
    avatar: Partner03Img,
    name: 'LAUNCHZONE | REDAO',
    content1: [
      {
        c1: '$1B ',
        c2: 'Highest monthly volume.',
      },
      {
        c1: '8th',
        c2: 'Ranked 8th in MVB program.',
      },
      {
        c1: '50+',
        c2: 'Supported 50+ global projects with each project raising $1-2 million.',
      },
      {
        c1: '260K+',
        c2: 'Followers on Twitter.',
      },
      {
        c1: '40K+',
        c2: 'Members on Telegram community.',
      },
    ],
    content2: '',
  },
  {
    avatar: Partner04Img,
    name: 'METAHUB',
    content1: [
      {
        c1: '100+',
        c2: 'Hosted events / year.',
      },
      {
        c1: '200+',
        c2: 'Network community - projects - exchange all over the world.',
      },
    ],
    content2: '',
  },
  {
    avatar: Partner05Img,
    name: 'VIETNAM BLOCKCHAIN',
    content1: [],
    content2: (
      <p className="">
        The first blockchain organization that was legally recognized in Vietnam .
        <br />
        <span className="text-primary">30K+</span> Members |{' '}
        <span className="text-primary">50+</span> Partners
      </p>
    ),
  },
  {
    avatar: Partner06Img,
    name: 'KOLSNETWORK',
    content1: [],
    content2: (
      <p className="">
        <span className="text-primary">100+</span> global and Vietnamese KOLs on Twitter.
      </p>
    ),
  },
]

export const TeamPartner = () => {
  return (
    <section className="relative pb-6 pt-6 lg:pb-16 lg:pt-16">
      <div className="absolute -top-[111px] left-0" id="team-partner"></div>
      <div
        className="absolute -right-[145px] top-[20px] z-[1] hidden aspect-square w-[296px] 
        rounded-full bg-primary
        lg:block"
      ></div>
      <div
        className="absolute -left-[145px] bottom-[20px] z-[1] hidden aspect-square w-[296px] 
        rounded-full bg-primary
        lg:block"
      ></div>
      <div className="relative z-[2] px-6 font-poppins lg:px-20">
        <h2 className="home-title !text-primary">Team & Partner</h2>

        <p className="py-4 text-sm leading-[26px] text-primary lg:pb-7 lg:pt-6 lg:text-xl lg:font-bold">
          We collaborate closely with best-in-class partners across the blockchain ecosystem
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-7">
          {partnerList.map((_, idx) => (
            <div
              key={idx}
              className="col-span-1 flex h-[452px] flex-col items-center bg-secondary px-6 pb-[38px] pt-[52px]"
            >
              <Image src={_.avatar} alt="avatar" className="mb-[27px] h-[125px]" />
              <p className="mb-[8px] text-base font-bold leading-[32px] text-primary">{_.name}</p>
              {_.content1.length ? (
                <div className="space-y-1 font-poppins text-base font-semibold">
                  {_.content1.map((content, idx) => (
                    <div className="flex w-full" key={idx}>
                      <p className="w-[73px] text-primary">{content.c1}</p>
                      <p className="w-[calc(100%-73px)] text-white">{content.c2}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {_.content2 ? (
                <div className="text-center font-poppins text-base font-semibold text-white">
                  {_.content2}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <p className="mt-[29px] px-6 text-center font-poppins text-base font-bold text-primary lg:mt-[53px] lg:px-20 lg:text-2xl">
        Let us know if you'd like an introduction to any of our valuable partners!
      </p>
    </section>
  )
}
