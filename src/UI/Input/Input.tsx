import cn from 'classnames'

import { InputProps } from './Input.props'
import styles from './Input.module.css'

export function Input({ className, ...props }: InputProps) {
  return (
    <input className={cn(styles.input, className)} type="text" {...props} />
  )
}