import { createSlice } from '@reduxjs/toolkit'
import { Category,CardBanner } from '@/types/category'

interface InfoState {
  loading: boolean
  secondaryLoading: boolean
  content: CardBanner[]|null
}

const initialState: InfoState = {
  loading: false,
  secondaryLoading: false,
  content: null
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
    setContent(state, action) {
      state.content = action.payload
    },
  },
})

export const searchFunction = sessionSlice.actions

export default sessionSlice.reducer
