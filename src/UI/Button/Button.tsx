import { motion } from "framer-motion";

import cn from 'classnames'

import { ButtonProps } from './Button.props'

import styles from './Button.module.css'


export function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <>
    <button
      className={cn(styles.button, className)}
      {...props}
      >
      {children}
    </button>
  </>
  )
}