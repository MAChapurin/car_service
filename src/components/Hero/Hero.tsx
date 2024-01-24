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
        <h1
          className={styles.hero__title}
        >{title}</h1>
        {description && <p
          className={cn(styles.hero__description, inter.className)}
        >{description}</p>}
        <div
          className={styles.hero__btn_wrap}
        >

          <Button
            className={styles.hero__btn}
          >
            {buttonContent}
          </Button>
        </div>
      </div>
    </section>
  )
}