'use client'

import { motion } from "framer-motion";

import { Button } from '@/UI'

import { Inter } from 'next/font/google'

import { HeroProps } from './Hero.props'

import cn from 'classnames'

import styles from './Hero.module.css'

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  display: 'swap'
})

export function Hero({ buttonContent, description, title }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <motion.h1
          className={styles.hero__title}
          initial={{ translateY: 500, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 300
          }}
        >{title}</motion.h1>
        {description && <motion.p
          className={cn(styles.hero__description, inter.className)}
          initial={{ translateY: 500, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 300,
            delay: 0.5,
          }}
        >{description}</motion.p>}
        <motion.div
        className={styles.hero__btn_wrap}
        initial={{ translateY: 500, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 300,
          delay: 0.7,
        }}
        >

          <Button
            className={styles.hero__btn}
          >
            {buttonContent}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}