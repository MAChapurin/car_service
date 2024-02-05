import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode
  isVisible: boolean
  onClose: ()=> void
}