import { configureStore } from '@reduxjs/toolkit'
import cart from './features/cart/cart.slice'
import watched from './features/watched/watched.slice'

const store = configureStore({
  reducer: {
    cart,
    watched
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch