import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { HeaderState, ThemeMode } from '@/types'

const initialState: HeaderState = {
  themeMode: 'light'
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeThemeMOde: (state, action: PayloadAction<ThemeMode>) => {
      state.themeMode = action.payload
    }
  }
})

export const headerAction = headerSlice.actions

export default headerSlice.reducer
