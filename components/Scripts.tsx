'use client'

import { GA_MEASUREMENT_ID } from 'configs/env'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'
import * as gtag from 'utils/gtag'

const Scripts = () => {
  const pathname = usePathname()

  useEffect(() => {
    console.log(`Route changed to: ${pathname}`)
    gtag.pageview(pathname)
  }, [pathname])

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${GA_MEASUREMENT_ID});
        `}
      </Script>
    </>
  )
}

export default Scripts
