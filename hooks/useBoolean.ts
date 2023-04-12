'use client'
import { useState } from 'react'

type UseBoolean = {
  state: boolean
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
}

export default function useBoolean(initState: boolean = false): UseBoolean {
  const [state, setState] = useState<boolean>(initState)
  const toggle = () => setState(!state)
  const setTrue = () => setState(true)
  const setFalse = () => setState(false)
  return { state, toggle, setTrue, setFalse }
}
