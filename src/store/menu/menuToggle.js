import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'menu',
  initialState: {
    menu: true
  },
  reducers: {
    toggleMenu(state, action) {
      state.menu = action.payload
    }
  }
})

export const { toggleMenu } = slice.actions
export default slice.reducer