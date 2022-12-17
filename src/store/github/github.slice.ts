import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const LS_FAV_KEY = 'lfk'
interface GitHubState {
  favorourites: string[]
}

const initialState: GitHubState = {
  favorourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
}

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favorourites.push(action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorourites))
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favorourites = state.favorourites.filter(
        (fav) => fav !== action.payload
      )
    },
  },
})

export const githunActions = githubSlice.actions
export const githunReducer = githubSlice.reducer
