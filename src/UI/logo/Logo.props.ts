import { SVGProps } from 'react'

export interface LogoProps extends SVGProps<SVGElement> {
  href: string
  className?: string
}