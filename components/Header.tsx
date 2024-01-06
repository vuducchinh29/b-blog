'use client'

import Logo from 'app/assets/images/logo.svg'
import Menu from 'app/assets/images/menu.svg'
import MobileLogo from 'app/assets/images/mobile-logo.svg'

import { Disclosure } from '@headlessui/react'
import useWindowSize from 'hooks/use-window-size'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { classNames } from 'utils'

const Header = () => {
  const [navList, setNavList] = useState([
    { name: 'About', href: '/#about', current: true },
    { name: 'Team & Partner', href: '/#team-partner', current: false },
    { name: 'Join Us', href: '/#join-us', current: false },
  ])

  const [activeName, setActiveName] = useState('')

  const { width } = useWindowSize()

  return (
    <header className="">
      <Disclosure as="nav" className="fixed left-0 top-0 z-50 w-full bg-secondary lg:bg-white">
        {({ open }) => (
          <>
            <div className="flex h-[80px] w-full items-center justify-between px-6 lg:h-[112px] lg:px-20">
              <Link className="" href={'/'}>
                <Image
                  priority
                  src={MobileLogo}
                  alt="b.army logo"
                  className="block h-6 w-[101px] lg:hidden"
                  width={24}
                  height={101}
                />
                <Image
                  src={Logo}
                  alt="b.army logo"
                  className="hidden h-[42px] w-[171px] lg:block"
                />
              </Link>

              <div className="hidden items-center justify-between gap-[70px] lg:flex">
                {navList.map((_, idx) => (
                  <Link
                    key={idx}
                    className="group relative text-2xl font-bold leading-[50px] text-primary"
                    href={_.href}
                  >
                    <div>{_.name}</div>
                    <div
                      className="absolute bottom-0.5 left-0 h-1.5 w-[0%] bg-[#D52827] transition-all
                      duration-300 ease-in-out group-hover:w-full"
                    ></div>
                  </Link>
                ))}
              </div>

              <Disclosure.Button
                className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-white
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <div className="">
                  <Image src={Menu} alt="menu bar mobile" />
                </div>
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-6 pb-3">
                {navList.map((_) => (
                  <Disclosure.Button
                    key={_.name}
                    as={Link}
                    href={_.href}
                    className={classNames(
                      _.current
                        ? 'bg-primary text-white'
                        : 'text-primary hover:bg-primary hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={_.current ? 'page' : undefined}
                  >
                    {_.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div> */}
    </header>
  )
}

export default Header
