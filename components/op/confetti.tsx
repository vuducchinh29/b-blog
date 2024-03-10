'use client'

import { Fragment, useCallback, useEffect, useState } from 'react'

const count = 200

export default function Confetti({ open }) {
  const [points, setPoints] = useState([])

  const generatePoints = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const p: any = []

    for (let i = 0; i < count; i++) {
      p.push(<p className={`${open ? 'animated' : ''}`} key={i} />)
    }
    setPoints(p)
  }, [open])

  useEffect(() => {
    generatePoints()
  }, [generatePoints])

  return (
    <Fragment>
      <div className={`confetti ${open ? 'animated' : ''}`}>{points.map((c) => c)}</div>
    </Fragment>
  )
}
