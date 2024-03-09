'use client'

import { motion } from "framer-motion";

import cn from 'classnames'

import { ButtonProps } from './Button.props'

import styles from './Button.module.css'

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}


export function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.div
      initial={textAnimation.hidden}
      whileInView={textAnimation.visible}
      exit={textAnimation.hidden}
      transition={{ duration: 0.3, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <button
        className={cn(styles.button, className)}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  )
}