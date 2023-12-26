import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="font-sen text-xl text-primary lg:text-[40px] lg:leading-[48px]">{children}</h1>
  )
}
