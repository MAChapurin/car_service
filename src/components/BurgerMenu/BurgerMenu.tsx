'use client'

import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'

import cn from 'classnames'
import styles from './BurgerMenu.module.css'
import Link from "next/link"
import { usePathname } from "next/navigation"

const navAnimation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

export function BurgerMenu() {
  const pathname = usePathname()
  const [isVisible, setVisible] = useState<boolean>(false)
  return (
    <>
      <button
        aria-label='Кнопка открытия выдвижного меню'
        className={cn(
          styles.btn,
          {
            [styles.open]: isVisible
          }
        )}
        onClick={() => {
          setVisible(!isVisible)
        }}
      >
        <span className={cn(
          styles.line,
          styles.top,
          {
            [styles.open]: isVisible
          })}></span>
        <span className={cn(
          styles.line,
          styles.center,
          {
            [styles.open]: isVisible
          })}></span>
        <span className={cn(
          styles.line,
          styles.bottom,
          {
            [styles.open]: isVisible
          })}></span>
      </button >
      <AnimatePresence>
        {isVisible &&
          <motion.nav
            className={styles.nav}
            initial={navAnimation.hidden}
            whileInView={navAnimation.visible}
            exit={navAnimation.hidden}
          >
            <Link className={cn(styles.link, { [styles.active]: pathname === '/' })} href='/'>Главная</Link>
            <Link className={cn(styles.link, { [styles.active]: pathname === '/about' })} href='/about'>О нас</Link>
            <Link className={cn(styles.link, { [styles.active]: pathname === '/services' })} href='/services'>Услуги</Link>
            <Link className={cn(styles.link, { [styles.active]: pathname === '/galery' })} href='/galery'>Галерея</Link>
            <Link className={cn(styles.link, { [styles.active]: pathname === '/contacts' })} href='/contacts'>Контакты</Link>
          </motion.nav>}
      </AnimatePresence>
    </>
  )
}