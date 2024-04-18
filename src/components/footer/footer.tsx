'use client'

import Link from 'next/link'
import { Icon } from '..'
import { FooterProps } from './footer.props'

import styles from './footer.module.css'

export function Footer({ contacts }: FooterProps) {
  const { address, chart, email, phones } = contacts
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <section className={styles.footer__contacts}>
            <h2 className={styles.footer__title}>CSA SERVIS</h2>
            <div className={styles.footer__phones}>
              {phones.map((phone) => {
                return (
                  <Link
                    className={styles.footer__wrap}
                    key={phone}
                    href={`tel${phone}`}
                  >
                    <Icon className={styles.footer__icon} icon='phone' />
                    {phone}
                  </Link>
                )
              })}
            </div>
            <Link href={`mailto:${email}`} className={styles.footer__wrap}>
              <Icon className={styles.footer__icon} icon='email' />
              {email}
            </Link>
            <Link href={'/contacts'} className={styles.footer__wrap}>
              <Icon className={styles.footer__icon} icon='pin' />
              {address}
            </Link>
            <Link href={'contacts'} className={styles.footer__wrap}>
              <Icon className={styles.footer__icon} icon='time' />
              {chart}
            </Link>
          </section>

          <section className={styles.footer__center}>
            <h3 className={styles.footer__h3}>Прочее</h3>
            <Link href='/' className={styles.footer__wrap}>
              <Icon className={styles.footer__icon} icon='faq' width={24} />
              Часто задаваемые воросы
            </Link>
            <Link href='/' className={styles.footer__wrap}>
              <Icon className={styles.footer__icon} icon='confidence' width={24} />
              Политика конфиденциальности
            </Link>
            <Link href='/' className={styles.footer__wrap}>
              <Icon className={styles.footer__icon} icon='data' width={24} />
              Политика обработка данных
            </Link>
            <Link href='/' className={styles.footer__wrap}>
              <Icon className={styles.footer__icon} icon='pact' width={24} />
              Соглашение на обработку данных
            </Link>
          </section>

          <section className={styles.footer__right}>
            <h3 className={styles.footer__h3}>Соцсети</h3>
            <div className={styles.footer__socials}>
              <Link className={styles.footer__wrap} href={`tel:${'Whats up'}`}>
                <Icon className={styles.footer__icon} icon='whatsUp' />
              </Link>
              <Link className={styles.footer__wrap} href={`tel:${'Whats up'}`}>
                <Icon className={styles.footer__icon} icon='telegramm' />
              </Link>
              <Link className={styles.footer__wrap} href={`/vk.com`}>
                <Icon className={styles.footer__icon} icon='vk' />
              </Link>
              <Link className={styles.footer__wrap} href={`/instagramm.com`}>
                <Icon className={styles.footer__icon} icon='instagramm' />
              </Link>
            </div>
          </section>

        </div>
      </footer>
      <div className={styles.underFooter}>
      © { new Date().getFullYear()}
      </div>
    </>
  )
}