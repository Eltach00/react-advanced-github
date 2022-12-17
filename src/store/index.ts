import { configureStore } from '@reduxjs/toolkit'
import githubAPI from './github/githubAPI'

export const store = configureStore({
  reducer: {
    [githubAPI.reducerPath]: githubAPI.reducer,
  },
})
