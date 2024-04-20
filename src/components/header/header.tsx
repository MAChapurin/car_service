'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useAppSelector } from '@/hooks'

import { Logo, ScrollBtn } from '@/UI'
import { BurgerMenu, Icon } from '@/components'

import cn from 'classnames'
import styles from './header.module.css'

export function Header() {
  const pathname = usePathname()
  const { cart } = useAppSelector(state => state.cart)
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <BurgerMenu />
          <div className={styles.header__left}>
            <Logo />
          </div>

          <nav className={styles.header__nav}>
            <Link className={cn(styles.header__link, { [styles.active]: pathname === '/' })} href='/'>Главная</Link>
            <Link className={cn(styles.header__link, { [styles.active]: pathname === '/about' })} href='/about'>О нас</Link>
            <Link className={cn(styles.header__link, { [styles.active]: pathname === '/services' })} href='/services'>Услуги</Link>
            <Link className={cn(styles.header__link, { [styles.active]: pathname === '/galery' })} href='/galery'>Галерея</Link>
            <Link className={cn(styles.header__link, { [styles.active]: pathname === '/contacts' })} href='/contacts'>Контакты</Link>
          </nav>

          <div className={styles.header__right}>

            <Link
              href={'/cart'}
              className={styles.header__cart}
            >
              <Icon icon='cart' />
              <span
                className={styles.header__cartCount}>
                {cart.length > 0 && cart.length}
              </span>
            </Link>
            <Link className={styles.phone} href={'tel:+78142332211'}>
              <Icon icon='phone' />
            </Link>
            <Link target='_blank' href={'https://github.com/MAChapurin/car_service'}>
             <Icon icon='github'/>
            </Link>
          </div>
        </div>
      </header>
      <ScrollBtn />
    </>
  )
}