'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'
import type { ReactOnlyChildrenProps } from '@/types'

export default function StoreProvider({ children }: ReactOnlyChildrenProps): JSX.Element {
  return <Provider store={store}>{children}</Provider>
}
