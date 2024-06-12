/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import {
  getAllFilter,
  getByDefaultCategory,
  getByFilterSelected,
  getByCategoryName,
  getExistCategory,
  getGptByID,
  getBySearchQuery,
  getByTagName,
  getByUserId
} from '@/service/request'

import {
  fetchFilterSelect,
  fetchSecondStart,
  fetchSecondSuccess,
  fetchStart,
  fetchSuccess,
  setFilterChoosen,
  setFilteredContent,
  setHomeCategory,
} from './home'

import { searchFunction } from './search'
import { categoryFunction } from './category'
import { gptStoreFunction } from './info-gpt'
import { tagsFunction } from './tags'
import { profileFunction } from './profile'

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
      console.error('Failed to fetch data:', error);
      dispatch(fetchSuccess()) // Dispatch loginFailure action if login encounters an error
    }
  }
}

export const fetchHomeFilterContent = (name: string) => {
  return async (dispatch: any) => {
    dispatch(fetchSecondStart()) // Dispatch loginStart action to set loading state
    try {
      const content = await getByFilterSelected(name)
      if (content === null) {
        throw new Error('One or more required variables are null.')
      } else {
        dispatch(setFilteredContent(content.data))
        setTimeout(async () => {
          dispatch(fetchSecondSuccess())
          // Set success after 2000 milliseconds
        }, 2000)
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      dispatch(fetchSecondSuccess()) // Dispatch loginFailure action if login encounters an error
    }
  }
}

export const fetchCategoryContent = (name: string, page: number) => {
  return async (dispatch: any) => {
    dispatch(categoryFunction.fetchSecondStart()) // Dispatch loginStart action to set loading state
    try {
      const category = await getByCategoryName(name,page)
      if (category === null) {
        throw new Error('One or more required variables are null.')
      } else {
        dispatch(categoryFunction.setFilteredContent(category.data.content))
        dispatch(categoryFunction.setTotalBanner(category.data.totalContent))
        setTimeout(async () => {
          dispatch(categoryFunction.fetchSecondSuccess())
          // Set success after 2000 milliseconds
        }, 2000)
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
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
        dispatch(categoryFunction.setFilteredContent(null))
        setTimeout(async () => {
          dispatch(categoryFunction.fetchSuccess())
          // Set success after 2000 milliseconds
        }, 2000)
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      dispatch(categoryFunction.fetchSuccess()) // Dispatch loginFailure action if login encounters an error
    }
  }
}

export const loadStoreInfoPage = (id: string) => {
  return async (dispatch: any) => {
    dispatch(gptStoreFunction.fetchStart()) // Dispatch loginStart action to set loading state
    try {
      const res = await getGptByID(id)
      if (res === null) {
        throw new Error('One or more required variables are null.')
      } else {
        dispatch(gptStoreFunction.setInfo(res.data))
        setTimeout(async () => {
          dispatch(gptStoreFunction.fetchSuccess())
          // Set success after 2000 milliseconds
        }, 2000)
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      dispatch(gptStoreFunction.fetchSuccess()) // Dispatch loginFailure action if login encounters an error
    }
  }
}


export const loadSearchPage = (query: string, page: number) => {
  return async (dispatch: any) => {
    dispatch(searchFunction.fetchStart()) // Dispatch loginStart action to set loading state
    try {
      const res = await getBySearchQuery(query, page)
      if (res === null) {
        throw new Error('One or more required variables are null.')
      } else {
        dispatch(searchFunction.setContent(res.data.content))
        dispatch(searchFunction.setTotalBanner(res.data.totalContent))
        setTimeout(async () => {
          dispatch(searchFunction.fetchSuccess())
          // Set success after 2000 milliseconds
        }, 2000)
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      dispatch(searchFunction.fetchSuccess()) // Dispatch loginFailure action if login encounters an error
    }
  }
}


export const loadTagsPage = (selected: string, page: number) => {
  return async (dispatch: any) => {
    dispatch(tagsFunction.fetchStart()) // Dispatch loginStart action to set loading state
    try {
      const filter = await getByTagName(selected,page)
      if (filter === null) {
        throw new Error('One or more required variables are null.')
      } else {
        dispatch(tagsFunction.setFilteredContent(filter.data.content))
        dispatch(tagsFunction.setRelatedTags(filter.data.relatedTags))
        dispatch(tagsFunction.setTotalBanner(filter.data.totalBanner))
        setTimeout(async () => {
          dispatch(tagsFunction.fetchSuccess())
          // Set success after 2000 milliseconds
        }, 2000)
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      dispatch(tagsFunction.fetchSuccess()) // Dispatch loginFailure action if login encounters an error
    }
  }
}


export const loadProfilePage = (id: string) => {
  return async (dispatch: any) => {
    dispatch(profileFunction.fetchStart()) // Dispatch loginStart action to set loading state
    try {
      const res = await getByUserId(id)
      if (res === null) {
        throw new Error('One or more required variables are null.')
      } else {
        dispatch(profileFunction.setProfile(res.data))
        setTimeout(async () => {
          dispatch(profileFunction.fetchSuccess())
          // Set success after 2000 milliseconds
        }, 2000)
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      dispatch(profileFunction.fetchSuccess()) // Dispatch loginFailure action if login encounters an error
    }
  }
}