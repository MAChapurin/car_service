import { Logo } from '@/UI'
import Link from 'next/link'
import { Icon } from '../icon/icon'

import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
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
          <Icon icon='account' />
          <Icon icon='phone' />
        </div>

      </div>
    </header>
  )
}