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

export function Hero({ buttonContent, description, title }: HeroProps) {
  const handlerBtn = () => {
    if (typeof window !== 'undefined') {
      const el = document.getElementById('contacts-btn');
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          el.focus()
          console.log(document.activeElement)
        }, 2000)
      }
    }
  }
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <motion.h1
          className={styles.hero__title}
          initial={textAnimation.hidden}
          whileInView={textAnimation.visible}
          exit={textAnimation.hidden}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h1>
        {description && <motion.p
          className={cn(styles.hero__description, inter.className)}
          initial={textAnimation.hidden}
          whileInView={textAnimation.visible}
          exit={textAnimation.hidden}
          transition={{ duration: 0.5 }}
        >
          {description}
          </motion.p>}
        <div
          className={styles.hero__btn_wrap}
        >

          <Button
            onClick={handlerBtn}
            className={styles.hero__btn}
          >
            {buttonContent}
          </Button>
        </div>
      </div>
    </section>
  )
}