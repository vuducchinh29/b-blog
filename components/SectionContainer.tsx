import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <section className="pt-[80px] lg:pt-[112px]">{children}</section>
}
