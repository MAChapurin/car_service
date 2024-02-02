'use client'
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'

import cn from 'classnames'
import styles from './BurgerMenu.module.css'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from ".."

const burgerAnimation = {
  hidden: {
    // x: -100,
    y: -100,
    opacity: 0
  },
  visible: {
    // x: 0,
    y: 0,
    opacity: 1
  }
}

const navAnimation = {
  hidden: {
    x: 100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

const socialsAnimation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

export function BurgerMenu() {
  const pathname = usePathname()
  const [isVisible, setVisible] = useState<boolean>(false)



  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      body.setAttribute('style', `${isVisible && "overflow: hidden"}`)
    }
  }, [isVisible]);

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
          <motion.div
            style={{ overflowY: "auto" }}
            className={styles.container}
            initial={burgerAnimation.hidden}
            whileInView={burgerAnimation.visible}
            exit={burgerAnimation.hidden}
          >
            <motion.nav
              className={styles.nav}
              initial={navAnimation.hidden}
              whileInView={navAnimation.visible}
              exit={navAnimation.hidden}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Link className={cn(styles.link, { [styles.active]: pathname === '/' })} href='/'>Главная</Link>
              <Link className={cn(styles.link, { [styles.active]: pathname === '/about' })} href='/about'>О нас</Link>
              <Link className={cn(styles.link, { [styles.active]: pathname === '/services' })} href='/services'>Услуги</Link>
              <Link className={cn(styles.link, { [styles.active]: pathname === '/galery' })} href='/galery'>Галерея</Link>
              <Link className={cn(styles.link, { [styles.active]: pathname === '/contacts' })} href='/contacts'>Контакты</Link>
            </motion.nav>

            <ul className={styles.burger__socials}>
              <motion.li
                initial={socialsAnimation.hidden}
                whileInView={socialsAnimation.visible}
                // exit={socialsAnimation.hidden}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link className={styles.burger__wrap} href={`tel:${'Whats up'}`}>
                  <Icon className={styles.burger__icon} icon='whatsUp' />
                </Link>
              </motion.li>
              <motion.li
                initial={socialsAnimation.hidden}
                whileInView={socialsAnimation.visible}
                // exit={socialsAnimation.hidden}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link className={styles.burger__wrap} href={`tel:${'Whats up'}`}>
                  <Icon className={styles.burger__icon} icon='telegramm' />
                </Link>
              </motion.li>
              <motion.li
                initial={socialsAnimation.hidden}
                whileInView={socialsAnimation.visible}
                // exit={socialsAnimation.hidden}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <Link className={styles.burger__wrap} href={`/vk.com`}>
                  <Icon className={styles.burger__icon} icon='vk' />
                </Link>
              </motion.li>
              <motion.li
                initial={socialsAnimation.hidden}
                whileInView={socialsAnimation.visible}
                // exit={socialsAnimation.hidden}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <Link className={styles.burger__wrap} href={`/instagramm.com`}>
                  <Icon className={styles.burger__icon} icon='instagramm' />
                </Link>
              </motion.li>
            </ul>

            <motion.nav
              className={styles.burger__rest}
              initial={navAnimation.hidden}
              whileInView={navAnimation.visible}
              // exit={navAnimation.hidden}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Link href='/' className={styles.burger__wrap}>
                <Icon className={styles.footer__icon} icon='faq' width={24} />
                Часто задаваемые воросы
              </Link>
              <Link href='/' className={styles.burger__wrap}>
                <Icon className={styles.footer__icon} icon='confidence' width={24} />
                Политика конфиденциальности
              </Link>
              <Link href='/' className={styles.burger__wrap}>
                <Icon className={styles.footer__icon} icon='data' width={24} />
                Политика обработка данных
              </Link>
              <Link href='/' className={styles.burger__wrap}>
                <Icon className={styles.footer__icon} icon='pact' width={24} />
                Соглашение на обработку данных
              </Link>
            </motion.nav>

          </motion.div>}
      </AnimatePresence>
    </>
  )
}