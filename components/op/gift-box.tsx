'use client'

import { ReactNode, useCallback, useEffect, useReducer, useState } from 'react'

import boxLid from 'app/assets/images/box-lid.png'
import box from 'app/assets/images/box.png'
import Image from 'next/image'
import Confetti from './confetti'
import { QRS } from './QR'
import { useRouter } from 'next/navigation'
interface Gift {
  name: string
}

const gifts: Gift[] = [
  { name: 'A retweet from B.ARMY (TOS applied)' },
  { name: 'A featured post on Coin28 Facebook (TOS Applied)' },
  { name: '30 minute call with our beautiful CEO' },
  { name: '30 minute call with our beautiful Head of Investment' },
  { name: '30 minute call with our beautiful CMO' },
  { name: '5k allocation 0% management fee of the next toptier investment deal from B.ARMY' },
  { name: '1k allocation 0% management fee of the next toptier investment deal from B.ARMY' },
  { name: '2k allocation 0% management fee of the next toptier investment deal from B.ARMY' },
  { name: '10k allocation 0% management fee of the next toptier investment deal from B.ARMY' },
  {
    name: '1 night gift voucher at our Resort https://solbungalows.com (weekdays excludes holidays)',
  },
  { name: 'Bring 10 users to your platform from our web2 users' },
  { name: 'A retweet from one of our KOLs Network' },
  { name: 'A technical advise from our Founder Thanh Dao' },
  { name: 'A advise to grow community in Vietnam from our Founder Logan' },
  { name: 'Request to connect to a partner in Vietnam' },
  {
    name: 'May your research lead you to hidden gems. Visit https://b.army for supports from us to the Vietnam market',
  },
  {
    name: 'May market trends align with your holdings. Visit https://b.army for supports from us to the Vietnam market',
  },
  {
    name: '2-night gift voucher at our Resort https://solbungalows.com (weekdays excludes holidays)',
  },
  {
    name: 'May you find the perfect entry and exit points. Visit https://b.army for supports from us to the Vietnam market',
  },
  {
    name: 'May your crypto journey bring you great fortune! Visit https://b.army for supports from us to the Vietnam market',
  },
]

const init_state = {
  move: 'move',
  jump: '',
  rotated: '',
  rotating: '',
}
export default function GiftBoxAnimation() {
  const router = useRouter()
  const [isDone, setIsDone] = useState<boolean>(false)
  const [gift, setGift] = useState<Gift>({ name: '' })
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state,
    }),
    init_state
  )

  const { move, rotating, rotated, jump } = state

  const onOpen = useCallback(() => {
    const seed = getSeedFromURL() + getDailyUnixTime()
    const g = selectGift(seed, gifts)
    setIsDone(true)
    setGift(g)
  }, [])

  const animate = useCallback(() => {
    if (!isDone) {
      setTimeout(() => {
        setState({ rotating: 'rotating' })
        setState({ jump: 'jump' })
      }, 300)
      setTimeout(() => {
        setState({ rotated: 'rotated' })
        onOpen?.()
      }, 1000)
    }
    const moving = move === 'move' ? '' : 'move'
    setState({ move: moving })
  }, [isDone, move, onOpen])

  const getSeedFromURL = (): bigint => {
    const queryString = window.location.search
    const query = queryString.substring(1)
    return BigInt('0x' + query)
  }

  const getDailyUnixTime = (): bigint => {
    const now = new Date()
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const unixTime = Math.floor(startOfDay.getTime() / 1000)
    return BigInt(unixTime)
  }

  const selectGift = (seed: bigint, gifts: Gift[]): Gift => {
    const five_ended = seed.toString().slice(-5)
    if (Number(five_ended) >= 0 && Number(five_ended) <= 199) {
      return gifts[0]
    }
    if (Number(five_ended) >= 200 && Number(five_ended) <= 299) {
      return gifts[1]
    }
    if (Number(five_ended) >= 300 && Number(five_ended) <= 1299) {
      return gifts[2]
    }
    if (Number(five_ended) >= 1300 && Number(five_ended) <= 2299) {
      return gifts[3]
    }
    if (Number(five_ended) >= 2300 && Number(five_ended) <= 3299) {
      return gifts[4]
    }
    if (Number(five_ended) >= 3300 && Number(five_ended) <= 3399) {
      return gifts[5]
    }
    if (Number(five_ended) >= 3400 && Number(five_ended) <= 3599) {
      return gifts[6]
    }
    if (Number(five_ended) >= 3600 && Number(five_ended) <= 3799) {
      return gifts[7]
    }
    if (Number(five_ended) >= 3800 && Number(five_ended) <= 3801) {
      return gifts[8]
    }
    if (Number(five_ended) >= 3802 && Number(five_ended) <= 4001) {
      return gifts[9]
    }
    if (Number(five_ended) >= 4002 && Number(five_ended) <= 4201) {
      return gifts[10]
    }
    if (Number(five_ended) >= 4202 && Number(five_ended) <= 4401) {
      return gifts[11]
    }
    if (Number(five_ended) >= 4402 && Number(five_ended) <= 5401) {
      return gifts[12]
    }
    if (Number(five_ended) >= 5402 && Number(five_ended) <= 6401) {
      return gifts[13]
    }
    if (Number(five_ended) >= 6402 && Number(five_ended) <= 6501) {
      return gifts[14]
    }
    if (Number(five_ended) >= 6502 && Number(five_ended) <= 29851) {
      return gifts[15]
    }
    if (Number(five_ended) >= 29852 && Number(five_ended) <= 53200) {
      return gifts[16]
    }
    if (Number(five_ended) >= 53201 && Number(five_ended) <= 53300) {
      return gifts[17]
    }
    if (Number(five_ended) >= 53301 && Number(five_ended) <= 76650) {
      return gifts[18]
    }
    return gifts[19]
  }

  useEffect(() => {
    const queryString = window.location.search
    const query = queryString.substring(1)
    const qr = QRS.find((e) => e.includes(query))
    if (!qr || qr?.length === 0) {
      router.push('/') // back to home page
    }
  }, [])

  const render_gift_name = (gift: any) => {
    const index = gifts.indexOf(gift)
    if (index === 15) {
      return (
        <p className="text-center text-xl font-bold">
          May your research lead you to hidden gems. Visit{' '}
          <a href="https://b.army" className="underline">
            https://b.army
          </a>{' '}
          for supports from us to the Vietnam market
        </p>
      )
    }
    if (index === 16) {
      return (
        <p className="text-center text-xl font-bold">
          May market trends align with your holdings. Visit{' '}
          <a href="https://b.army" className="underline">
            https://b.army
          </a>{' '}
          for supports from us to the Vietnam market
        </p>
      )
    }
    if (index === 18) {
      return (
        <p className="text-center text-xl font-bold">
          May you find the perfect entry and exit points. Visit{' '}
          <a href="https://b.army" className="underline">
            https://b.army
          </a>{' '}
          for supports from us to the Vietnam market
        </p>
      )
    }
    if (index === 19) {
      return (
        <p className="text-center text-xl font-bold">
          May your crypto journey bring you great fortune! Visit{' '}
          <a href="https://b.army" className="underline">
            https://b.army
          </a>{' '}
          for supports from us to the Vietnam market
        </p>
      )
    }
    return (
      <>
        <p className="text-center text-xl font-bold">{gift.name}</p>
        <p className="mt-2">
          Talk to{' '}
          <a href="https://t.me/CollabwithAri" target="_blank" className="underline">
            https://t.me/CollabwithAri
          </a>{' '}
          to claim your gift
        </p>
      </>
    )
  }

  return (
    <div className="relative mt-20 h-52 w-full">
      <Confetti open={jump === 'jump'} />
      {gift.name ? (
        <div className="m-auto mt-[100px] flex flex-col items-center lg:max-w-[500px]">
          {render_gift_name(gift)}
        </div>
      ) : (
        <div className="img-container">
          <button className="box flex items-center justify-center" onClick={animate}>
            <Image src={box} alt="box" />
          </button>
          <Image className={`lid ${move} ${rotating} ${rotated}`} src={boxLid} alt="box-lid" />
        </div>
      )}
    </div>
  )
}
