import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'

const StoreProvider = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <Provider store={store}>{children}</Provider>
)

export default StoreProvider
