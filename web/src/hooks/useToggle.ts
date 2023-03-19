'use client'
import { useState } from 'react'

const useToggle = (initState: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initState)
  const toggle = () => setState(!state)

  return [state, toggle]
}

export default useToggle
