import { createSlice } from '@reduxjs/toolkit'

interface AppState {
  loading: boolean
  secondaryLoading: boolean
  theme: string
}

const initialState: AppState = {
  loading: false,
  secondaryLoading: false,
  theme: "dark",                                               
}

/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
const sessionSlice = createSlice({
  name: 'fetching',
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true // Set loading state to true when login starts
    },
    fetchSuccess(state) {
      state.loading = false // Set loading state to false when login succeeds
    },
    fetchSecondStart(state) {
      state.secondaryLoading = true // Set loading state to true when login starts
    },
    fetchSecondSuccess(state) {
      state.secondaryLoading = false // Set loading state to false when login succeeds
    },
    setTheme(state, action) {
      state.theme = action.payload
    },
  },
})

export const appFunction = sessionSlice.actions

export default sessionSlice.reducer
