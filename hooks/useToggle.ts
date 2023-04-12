'use client'
import { useState } from 'react'

export default function useToggle(initState: boolean = false): [boolean, () => void] {
  const [currentState, setCurrentState] = useState<boolean>(initState)
  const toggle = () => setCurrentState(!currentState)
  return [currentState, toggle]
}
