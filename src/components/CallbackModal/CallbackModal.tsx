'use client'
import { Modal } from "@/UI"
import { FormShort } from ".."
import { useAppDispatch, useAppSelector } from "@/hooks"
import { close } from '@/store/features'

export function CallbackModal() {
  const dispatch = useAppDispatch()
  const { isOpen } = useAppSelector(state => state.callback)
  const hanldlerClose = () => {
    dispatch(close())
  }
  return (
    <Modal
      isVisible={isOpen}
      onClose={hanldlerClose}
    >
      <FormShort
        onClose={hanldlerClose}
      />
    </Modal>
  )
}