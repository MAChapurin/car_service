'use client'

import Link from 'next/link'

import { Logo } from '@/UI'
import { Icon } from '@/components'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <button
          aria-label='Кнопка открытия выдвижного меню'
          className={styles.header__burger}
          onClick={()=> {
            alert('test burger')
          }}
          >
            <Icon icon='burgerBtn'/>
          </button>
        <div className={styles.header__left}>
          <Logo />
          <button className={styles.header__btn}>
            <Icon icon='burger' />
            Услуги
          </button>
        </div>

        <nav className={styles.header__nav}>
          <Link className={styles.header__link} href='/about'>О нас</Link>
          <Link className={styles.header__link} href='/###'>Покупателям</Link>
          <Link className={styles.header__link} href='/contacts'>Контакты</Link>
        </nav>

        <div className={styles.header__right}>
          <Link href={'/#'}>
            <Icon icon='account' />
          </Link>
          <Link className={styles.phone} href={'tel:+78142332211'}>
            <Icon icon='phone' />
          </Link>
        </div>

      </div>
    </header>
  )
}