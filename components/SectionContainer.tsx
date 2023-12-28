import { ReactNode } from 'react'
import Scripts from './Scripts'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="pt-[60px]">
      <Scripts />
      {children}
    </section>
  )
}
