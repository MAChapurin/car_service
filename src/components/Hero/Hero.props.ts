import { ReactNode } from "react"

export interface HeroProps {
  title: string
  description?: string
  buttonContent: ReactNode
  // background?: string
  // cb: ()=> void
}