import { createSlice } from '@reduxjs/toolkit'

export interface CallbackProps {
  isOpen: boolean
}

const initialState: CallbackProps = {
  isOpen: false
}

export const callbackSlice = createSlice({
  name: '@callbackModal',
  initialState,
  reducers: {
    toogle: state => {
      state.isOpen = !state.isOpen
    },
    open: state => {
      state.isOpen = true
    },
    close: state => {
      state.isOpen = false
    }
  }
})

export const { toogle, open, close } = callbackSlice.actions
export default callbackSlice.reducer
