'use client'

import { ReactNode, useCallback, useEffect, useReducer, useState } from 'react'

import boxLid from 'app/assets/images/box-lid.png'
import box from 'app/assets/images/box.png'
import Image, { StaticImageData } from 'next/image'
import Confetti from './confetti'
import DemoGift from 'app/assets/images/demo-gift.jpeg'
import { QRS } from './QR'
import { useRouter } from 'next/navigation'
interface Gift {
  name: string
  image?: StaticImageData
  probability: number
}

const gifts: Gift[] = [
  { name: 'Quà 1', image: DemoGift, probability: 2 },
  { name: 'Quà 2', image: DemoGift, probability: 1 },
  { name: 'Quà 3', image: DemoGift, probability: 1 },
  { name: 'Quà 4', image: DemoGift, probability: 1 },
  { name: 'Quà 5', image: DemoGift, probability: 1 },
  { name: 'Quà 6', image: DemoGift, probability: 1 },
  { name: 'Quà 7', image: DemoGift, probability: 1 },
  { name: 'Quà 8', image: DemoGift, probability: 0.5 },
  { name: 'Quà 9', image: DemoGift, probability: 0.5 },
  { name: 'Quà 10', image: DemoGift, probability: 1 },
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
  const [gift, setGift] = useState<Gift>({ name: '', image: undefined, probability: 1 })
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
    console.log('gift', g)
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
    const totalWeight = gifts.reduce((total, gift) => total + gift.probability, 0)
    const index = Number(seed % BigInt(totalWeight))
    let sum = 0

    console.log(seed, BigInt(totalWeight), index)

    for (const gift of gifts) {
      sum += gift.probability
      if (index < sum) {
        return gift
      }
    }

    return gifts[0] // Fallback nếu có lỗi
  }

  useEffect(() => {
    const queryString = window.location.search
    const query = queryString.substring(1)
    const qr = QRS.find((e) => e.includes(query))
    console.log(qr)
    if (!qr || qr?.length === 0) {
      router.push('/') // back to home page
    }
  }, [])

  return (
    <div className="relative h-52 w-full">
      <Confetti open={jump === 'jump'} />
      {gift.image ? (
        <div className="flex flex-col items-center">
          <Image src={gift.image} alt="Gift image" />
          <p className="">{gift.name}</p>
        </div>
      ) : (
        <div className="img-container">
          {/* <Image className={`kuku ${jump}`} src={kuku} alt="kuku" /> */}
          <button className="box flex items-center justify-center" onClick={animate}>
            <Image src={box} alt="box" />
          </button>
          <Image className={`lid ${move} ${rotating} ${rotated}`} src={boxLid} alt="box-lid" />
        </div>
      )}
    </div>
  )
}
