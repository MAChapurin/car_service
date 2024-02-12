'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface ServicesLinkProps {
  img: string
  id: string
  title: string
}

interface ICart {
  cart: ServicesLinkProps[]
}

const keyLS = 'cart'

const cartLS = localStorage.getItem(keyLS)

const initialState: ICart = {
  cart: cartLS ? JSON.parse(cartLS) : [],
}

export const counterSlice = createSlice({
  name: '@cart',
  initialState,
  reducers: {
    addCervice: (state, action: {payload: ServicesLinkProps}) => {
      state.cart.push(action.payload)
      localStorage.setItem(keyLS, JSON.stringify(state.cart))
    },
    deleteService: (state, action: {payload: string}) => {
      state.cart = state.cart.filter(service => service.id !== action.payload)
      localStorage.setItem(keyLS, JSON.stringify(state.cart))
    },
    resetCart: (state) => {
      state.cart = []
      localStorage.setItem(keyLS, JSON.stringify(state.cart))
    },
  },
})

export const { addCervice, deleteService, resetCart } = counterSlice.actions
export default counterSlice.reducer