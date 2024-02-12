'use client'

import { motion } from 'framer-motion'

import { TitleProps } from "./Title.props";

import styles from './Title.module.css'

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

export function Title({ title }: TitleProps) {
  return (
    <motion.h2
      className={styles.h2}
      initial={textAnimation.hidden}
      whileInView={textAnimation.visible}
      exit={textAnimation.hidden}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
  )
}