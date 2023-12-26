import AdvisoryAvatar1 from 'app/assets/images/advisory-avatar-1.png'
import AdvisoryAvatar2 from 'app/assets/images/advisory-avatar-2.png'
import AdvisoryAvatar3 from 'app/assets/images/advisory-avatar-3.png'
import AdvisoryAvatar4 from 'app/assets/images/advisory-avatar-4.png'
import AdvisoryAvatar5 from 'app/assets/images/advisory-avatar-5.png'
import AdvisoryAvatar6 from 'app/assets/images/advisory-avatar-6.png'
import Image from 'next/image'

const data = [
  {
    image: AdvisoryAvatar1,
    name: 'Mr. TRUONG DINH',
    position: 'Co-Founder & CEO of DGG network',
    content:
      'Marketing and Branding Expert on multichannel, especially TikTok channel. He is also known as an expert in optimizing and increasing revenue on the Tiktok platform in general and TikTok Ad in particular.',
  },
  {
    image: AdvisoryAvatar2,
    name: 'Mr. PHONG DAO',
    position: 'Managing Lawyer Investpush Legal',
    content:
      'Business consulting expert with nearly 20 years of experience in various investment projects.',
  },
  {
    image: AdvisoryAvatar3,
    name: 'Mr. CHUU CHU',
    position: 'Founder of DC Group',
    content:
      'An expert with 10 years of experience in the MMO, Digital Marketing, and Online Business fields.',
  },
  {
    image: AdvisoryAvatar4,
    name: 'Mr. TUAN HUNG',
    position: 'Founder of TA28',
    content:
      'With 8 years of experience & expertise in the media & entertainment industry, Mr. Hung has led Theanh28 Entertainment to become a leading channel in the social media field.',
  },
  {
    image: AdvisoryAvatar5,
    name: 'Mr. THANH NGUYEN',
    position: 'Co-Founder of Trustkey',
    content:
      'With over 15 years of experience in the IT industry, Mr. Thanh holds a PhD in Mathematical Foundations for Computer Science, specializing in the field of large-scale systems for tens of millions of users.',
  },
  {
    image: AdvisoryAvatar6,
    name: 'Mr. THANH NGUYEN',
    position: 'Co-Founder of Verichains',
    content:
      'Well-recognized security researcher with 20 years of security experience focused on large-scale application, blockchain technology, firmware, chipset, and micro-architecture.',
  },
]

export const OutAdvisory = () => {
  return (
    <section className="pt-6 lg:pt-12">
      <div className="px-6 lg:px-20">
        <h2 className="home-title !leading-[66px] !text-primary">Our Advisory & Mental Boards</h2>
      </div>

      <div className="mt-[18px] grid grid-cols-1 gap-y-[18px] px-6 lg:mt-[55px] lg:grid-cols-3 lg:gap-x-[22px] lg:gap-y-8 lg:px-20">
        {data.map((_, idx) => (
          <AdvisoryItem
            image={_.image}
            name={_.name}
            position={_.position}
            content={_.content}
            key={idx}
          />
        ))}
      </div>
    </section>
  )
}

const AdvisoryItem = ({ image, name, position, content }) => {
  return (
    <div className="col-span-1 flex min-h-[391px] flex-col items-center bg-primary px-[27px] pb-[27px] pt-[37px] font-poppins text-white lg:min-h-[403px]">
      <Image src={image} alt={name} className="mb-[15px] w-[119px] lg:w-[123px]" />
      <h4 className="text-[19px]">{name}</h4>
      <ul className="mb-[10px] mt-[20px]">
        <li className="list-inside list-disc text-center text-[13px] font-bold italic lg:text-sm">
          {position}
        </li>
      </ul>
      <p className="text-center text-xs font-bold">{content}</p>
    </div>
  )
}
