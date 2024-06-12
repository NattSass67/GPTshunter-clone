import { CardBanner } from '@/types/category'
import { RelatedTags } from '@/types/tags'
import { createSlice } from '@reduxjs/toolkit'

interface TagsState {
  loading: boolean
  secondaryLoading: boolean
  filteredContent: CardBanner[] | null
  relatedTags: RelatedTags | null
  totalBanner: number
}

const initialState: TagsState = {
  loading: false,
  secondaryLoading: false,
  filteredContent: null,
  relatedTags: null,
  totalBanner: 0,
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
    setFilteredContent(state, action) {
      state.filteredContent = action.payload
    },
    setRelatedTags(state, action) {
      state.relatedTags = action.payload
    },
    setTotalBanner(state, action) {
      state.totalBanner = action.payload
    },
  },
})

export const tagsFunction = sessionSlice.actions

export default sessionSlice.reducer
