import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { githunReducer } from './github/github.slice'
import githubAPI from './github/githubAPI'

export const store = configureStore({
  reducer: {
    [githubAPI.reducerPath]: githubAPI.reducer,
    github: githunReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubAPI.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
