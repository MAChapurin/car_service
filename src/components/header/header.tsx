'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Logo, ScrollBtn } from '@/UI'
import { Icon } from '@/components'

import cn from 'classnames'
import styles from './Header.module.css'

export function Header() {
  const pathname = usePathname()
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <button
            aria-label='Кнопка открытия выдвижного меню'
            className={styles.header__burger}
            onClick={() => {
              alert('test burger')
            }}
          >
            <Icon icon='burgerBtn' />
          </button>
          <div className={styles.header__left}>
            <Logo />
            {/* <button className={styles.header__btn}>
            <Icon icon='burger' />
            Услуги
          </button> */}
          </div>

          <nav className={styles.header__nav}>
            <Link className={cn(styles.header__link, { [styles.active]: pathname === '/' })} href='/'>Главная</Link>
            <Link className={cn(styles.header__link, { [styles.active]: pathname === '/about' })} href='/about'>О нас</Link>
            <Link className={cn(styles.header__link, { [styles.active]: pathname === '/services' })} href='/services'>Услуги</Link>
            <Link className={cn(styles.header__link, { [styles.active]: pathname === '/galery' })} href='/galery'>Галерея</Link>
            <Link className={cn(styles.header__link, { [styles.active]: pathname === '/contacts' })} href='/contacts'>Контакты</Link>
          </nav>

          <div className={styles.header__right}>
          <Link className={styles.phone} href={'tel:+78142332211'}>
              <Icon icon='phone' />
            </Link>
            <Link href={'/#'}>
              <Icon icon='account' />
            </Link>
          </div>

        </div>
      </header>
      <ScrollBtn />
    </>
  )
}