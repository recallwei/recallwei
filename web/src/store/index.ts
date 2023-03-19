import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './headerSlice'

export const store = configureStore({
  reducer: {
    header: headerReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { headerAction } from './headerSlice'
