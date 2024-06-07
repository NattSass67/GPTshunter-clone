import { createSlice } from '@reduxjs/toolkit'

interface CategoryState {
  loading: boolean
  secondaryLoading: boolean
  dropSelect: { name: string; count: number }[]
  dropChoosen: string
  filteredContent: any
  page: number
}

const initialState: CategoryState = {
  loading: false,
  secondaryLoading: false,
  dropSelect: [],
  dropChoosen: '',
  filteredContent: null,
  page: 1
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
    setDropChoosen(state, action) {
      state.dropChoosen = action.payload
    },
    setExistCategory(state, action) {
      state.dropSelect = action.payload
    },
    setPage(state, action) {
        state.page = action.payload
      },
  },
})

export const categoryFunction = sessionSlice.actions

export default sessionSlice.reducer