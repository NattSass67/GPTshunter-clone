/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import { getAllFilter, getByDefaultCategory, getByFilterSelected, getByCategoryName, getExistCategory} from '@/service/request'

import {
  fetchFilterSelect,
  fetchSecondStart,
  fetchSecondSuccess,
  fetchStart,
  fetchSuccess,
  setFilterChoosen,
  setFilteredContent,
  setHomeCategory
} from './home'

import { categoryFunction } from './category'

export const fetchContent = () => {
  return async (dispatch: any) => {
    dispatch(fetchStart()) // Dispatch loginStart action to set loading state
    try {
      const filter = await getAllFilter()
      const category = await getByDefaultCategory()
      const homeFiltered = await getByFilterSelected('Featured')
      if (filter === null) {
        throw new Error('One or more required variables are null.')
      } else {
        dispatch(fetchFilterSelect(filter.data))
        dispatch(setFilterChoosen('Featured'))
        dispatch(setHomeCategory(category.data))
        dispatch(setFilteredContent(homeFiltered.data))
        setTimeout(async () => {
          dispatch(fetchSuccess())
          // Set success after 2000 milliseconds
        }, 2000)
      }
    } catch (error) {
      dispatch(fetchSuccess()) // Dispatch loginFailure action if login encounters an error
    }
  }
}

export const fetchCategoryContent = (name: string) => {
  return async (dispatch: any) => {
    dispatch(categoryFunction.fetchSecondStart()) // Dispatch loginStart action to set loading state
    try {
      const category = await getByCategoryName(name)
      if (category === null) {
        throw new Error('One or more required variables are null.')
      } else {
        dispatch(categoryFunction.setFilteredContent(category.data))
        setTimeout(async () => {
          dispatch(categoryFunction.fetchSecondSuccess())
          // Set success after 2000 milliseconds
        }, 2000)
      }
    } catch (error) {
      dispatch(categoryFunction.fetchSecondSuccess()) // Dispatch loginFailure action if login encounters an error
    }
  }
}

export const loadCategoryPage = () => {
  return async (dispatch: any) => {
    dispatch(categoryFunction.fetchStart()) // Dispatch loginStart action to set loading state
    try {
      const filter = await getExistCategory()
      if (filter === null) {
        throw new Error('One or more required variables are null.')
      } else {
        dispatch(categoryFunction.setExistCategory(filter.data))
        dispatch(categoryFunction.setDropChoosen(''))
        dispatch(categoryFunction.setFilteredContent(null))
        setTimeout(async () => {
          dispatch(categoryFunction.fetchSuccess())
          // Set success after 2000 milliseconds
        }, 2000)
      }
    } catch (error) {
      dispatch(categoryFunction.fetchSuccess()) // Dispatch loginFailure action if login encounters an error
    }
  }
}

