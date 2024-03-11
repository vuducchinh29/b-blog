import IconLogo from 'app/assets/images/icon-logo.webp'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="mb-16 flex w-full flex-col items-center space-y-4">
      <a className="group relative w-[500px] max-w-full" href=''>
        <div
          className="relative z-[2] flex w-[calc(100%-10px)] items-center justify-center rounded-full border-2 border-black bg-primary px-2 py-4 font-semibold 
          text-white group-hover:left-1.5 group-hover:top-1.5"
        >
          <Image
            src={IconLogo}
            alt="logo"
            className="absolute left-2 top-1/2 h-14 w-14 -translate-y-1/2 object-contain object-center"
          />
          Website
        </div>
        <div className="absolute right-0 top-2.5 z-[1] h-full w-[calc(100%-10px)] rounded-full bg-black"></div>
      </a>
      <a className="group relative w-[500px] max-w-full" href=''>
        <div
          className="relative z-[2] flex w-[calc(100%-10px)] items-center justify-center rounded-full border-2 border-black bg-primary px-2 py-4 font-semibold 
          text-white group-hover:left-1.5 group-hover:top-1.5"
        >
          <Image
            src={IconLogo}
            alt="logo"
            className="absolute left-2 top-1/2 h-14 w-14 -translate-y-1/2 object-contain object-center"
          />
          X
        </div>
        <div className="absolute right-0 top-2.5 z-[1] h-full w-[calc(100%-10px)] rounded-full bg-black"></div>
      </a>
      <a className="group relative w-[500px] max-w-full" href=''>
        <div
          className="relative z-[2] flex w-[calc(100%-10px)] items-center justify-center rounded-full border-2 border-black bg-primary px-2 py-4 font-semibold 
          text-white group-hover:left-1.5 group-hover:top-1.5"
        >
          <Image
            src={IconLogo}
            alt="logo"
            className="absolute left-2 top-1/2 h-14 w-14 -translate-y-1/2 object-contain object-center"
          />
          Global Channel
        </div>
        <div className="absolute right-0 top-2.5 z-[1] h-full w-[calc(100%-10px)] rounded-full bg-black"></div>
      </a>
      <a className="group relative w-[500px] max-w-full" href=''>
        <div
          className="relative z-[2] flex w-[calc(100%-10px)] items-center justify-center rounded-full border-2 border-black bg-primary px-2 py-4 font-semibold 
          text-white group-hover:left-1.5 group-hover:top-1.5"
        >
          <Image
            src={IconLogo}
            alt="logo"
            className="absolute left-2 top-1/2 h-14 w-14 -translate-y-1/2 object-contain object-center"
          />
          Group Chat
        </div>
        <div className="absolute right-0 top-2.5 z-[1] h-full w-[calc(100%-10px)] rounded-full bg-black"></div>
      </a>
      <a className="group relative w-[500px] max-w-full" href=''>
        <div
          className="relative z-[2] flex w-[calc(100%-10px)] items-center justify-center rounded-full border-2 border-black bg-primary px-2 py-4 font-semibold 
          text-white group-hover:left-1.5 group-hover:top-1.5"
        >
          <Image
            src={IconLogo}
            alt="logo"
            className="absolute left-2 top-1/2 h-14 w-14 -translate-y-1/2 object-contain object-center"
          />
          Facebook
        </div>
        <div className="absolute right-0 top-2.5 z-[1] h-full w-[calc(100%-10px)] rounded-full bg-black"></div>
      </a>
    </div>
  )
}

export default Footer
