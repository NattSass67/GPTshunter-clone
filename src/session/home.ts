import { createSlice } from '@reduxjs/toolkit'

interface HomeState {
  loading: boolean
  secondaryLoading: boolean
  filterSelect: { title: string[] }
  filterChoosen: string
  filteredContent: any
  homeCategory: { name: string; content: any }[]
}

const initialState: HomeState = {
  loading: false,
  secondaryLoading: false,
  filterSelect: { title: [] },
  filterChoosen: '',
  filteredContent: null,
  homeCategory: [],
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
    fetchFilterSelect(state, action) {
      state.filterSelect = action.payload
    },
    setFilterChoosen(state, action) {
      state.filterChoosen = action.payload
    },
    setHomeCategory(state, action) {
      state.homeCategory = action.payload
    },
    setFilteredContent(state, action){
      state.filteredContent =action.payload
    }
  },
})

export const {
  fetchStart,
  fetchSuccess,
  fetchSecondStart,
  fetchSecondSuccess,
  fetchFilterSelect,
  setFilterChoosen,
  setHomeCategory,
  setFilteredContent
} = sessionSlice.actions

export default sessionSlice.reducer
