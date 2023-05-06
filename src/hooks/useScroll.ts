import type { RefObject } from 'react'
import { useState } from 'react'

type PositionState = {
  x: number
  y: number
}

// TODO: To enhance Header component
export default function useScroll(_ref: RefObject<HTMLElement>): PositionState {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  return position
}
