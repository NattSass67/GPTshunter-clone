import { createSlice } from '@reduxjs/toolkit'
import { Category, CardBanner } from '@/types/category'
import { RelatedTags } from '@/types/tags'
import { Profile } from '@/types/profile'

interface ProfileState {
  loading: boolean
  secondaryLoading: boolean
  profile: Profile|null
}

const initialState: ProfileState = {
  loading: false,
  secondaryLoading: false,
  profile: null,
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
    setProfile(state, action) {
      state.profile = action.payload
    },
  },
})

export const profileFunction = sessionSlice.actions

export default sessionSlice.reducer
