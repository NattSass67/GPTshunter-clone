import { createSlice } from '@reduxjs/toolkit'
import { GptInfo } from '@/types/gpt'

interface InfoState {
  loading: boolean
  secondaryLoading: boolean
  info: GptInfo|null
}

const initialState: InfoState = {
  loading: false,
  secondaryLoading: false,
  info: null
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
    setInfo(state, action) {
      state.info = action.payload
    },
  },
})

export const gptStoreFunction = sessionSlice.actions

export default sessionSlice.reducer
