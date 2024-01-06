import { ReactNode } from "react"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  className?: string
  children: ReactNode
}