/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import { getAllFilter } from '@/service/request'

import {
  fetchFilterSelect,
  fetchSecondStart,
  fetchSecondSuccess,
  fetchStart,
  fetchSuccess,
  setFilterChoosen
} from './home'

export const fetchContent = () => {
  return async (dispatch: any) => {
    dispatch(fetchStart()) // Dispatch loginStart action to set loading state
    try {
      const filter = await getAllFilter()
      if (filter === null) {
        throw new Error('One or more required variables are null.')
      } else {
        dispatch(fetchFilterSelect(filter))
        dispatch(setFilterChoosen('Featured'))
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

