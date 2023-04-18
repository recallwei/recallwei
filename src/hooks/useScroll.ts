import { RefObject, useEffect, useState } from 'react'

type PositionState = {
  x: number
  y: number
}

const useScroll = (ref: RefObject<HTMLElement>): PositionState => {}

export default useScroll
