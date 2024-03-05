'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface ServicesWatchedLinkProps {
  img: string
  id: string
  title: string
}

interface ICart {
  watched: ServicesWatchedLinkProps[]
}

const keyLS = 'watched'

const watchedLS = localStorage?.getItem(keyLS)

const initialState: ICart = {
  watched: watchedLS ? JSON.parse(watchedLS) : []
}

export const watchedSlice = createSlice({
  name: '@watched',
  initialState,
  reducers: {
    addWatchedCervice: (
      state,
      action: { payload: ServicesWatchedLinkProps }
    ) => {
      const newService = action.payload

      state.watched.push(action.payload)
      state.watched = Array.from(
        new Set(state.watched.map(el => JSON.stringify(el)))
      ).map(el => JSON.parse(el))
      localStorage.setItem(keyLS, JSON.stringify(state.watched))
    },
    resetWatch: state => {
      state.watched = []
      localStorage.setItem(keyLS, JSON.stringify(state.watched))
    }
  }
})

export const { addWatchedCervice, resetWatch } = watchedSlice.actions
export default watchedSlice.reducer
