import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import homeReducer from './home'
import categoryReducer from './category'
import storeReducer from './info-gpt'
import searchReducer from './search'
import tagsReducer from './tags'
import profileReducer from './profile'
import appReducer from './app'

// Combine all reducers into the rootReducer
const rootReducer = combineReducers({
  homeSession: homeReducer,
  categorySession: categoryReducer,
  storeSession: storeReducer,
  searchSession: searchReducer,
  tagsSession: tagsReducer,
  profileSession: profileReducer,
  appSession: appReducer
  // Add other reducers here if needed
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['homeSession', 'categorySession', 'searchSession','appSession'], // List of reducers to persist
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: rootReducer,
// })

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export { store }
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
