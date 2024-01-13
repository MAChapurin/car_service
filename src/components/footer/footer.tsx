'use client'

import Link from 'next/link'
import { Icon } from '..'
import { FooterProps } from './Footer.props'

import styles from './Footer.module.css'

export function Footer({ contacts, navigation, services }: FooterProps) {
  const { address, chart, email, phones } = contacts
  return (
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__contacts}>
            <h2 className={styles.footer__title}>CSA SERVIS</h2>
            <div className={styles.footer__wrap}>
              <Icon className={styles.footer__icon} icon='phone' />
              {phones.map((phone) => {
                return (
                  <Link
                    className={styles.footer__phone}
                    key={phone}
                    href={`tel${phone}`}
                  >
                    {phone}
                  </Link>
                )
              })}
            </div>
            <div className={styles.footer__wrap}>
              <Icon className={styles.footer__icon} icon='email' />
              {email}
            </div>
            <div className={styles.footer__wrap}>
              <Icon className={styles.footer__icon} icon='pin' />
              {address}
            </div>
            <div className={styles.footer__wrap}>
              <Icon className={styles.footer__icon} icon='time' />
              {chart}
            </div>
          </div>

          <div className={styles.footer__services}>
            <h3 className={styles.footer__h3}>Услуги</h3>
            <nav className={styles.footer__nav}>
              {services.map((service) => {
                return (
                  <Link
                    className={styles.footer__link}
                    key={service}
                    href={service}
                  >
                    {service}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className={styles.footer__navigation}>
            <h3 className={styles.footer__h3}>Навигация по сайту</h3>
            <nav className={styles.footer__nav}>
              {navigation.map((link) => {
                return (
                  <Link
                    className={styles.footer__link}
                    key={link}
                    href={link}
                  >
                    {link}
                  </Link>
                )
              })}
            </nav>

            <h3 className={styles.footer__h3}>Навигация по сайту</h3>

            <div className={styles.footer__socials}>
              <div className={styles.footer__wrap}>
                <Icon className={styles.footer__icon} icon='whatsUp' />
                <Link href={`tel:${'Whats up'}`}>Whats up</Link>
              </div>
              <div className={styles.footer__wrap}>
                <Icon className={styles.footer__icon} icon='telegramm' />
                <Link href={`tel:${'Whats up'}`}>Telegram</Link>
              </div>
            </div>
          </div>

        </div>
      </footer>
  )
}