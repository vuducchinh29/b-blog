import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <section className="pt-[60px] lg:pt-[90px]">{children}</section>
}
