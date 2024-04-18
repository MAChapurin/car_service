'use client'

import Link from 'next/link'
import { useAppDispatch } from '@/hooks'

import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps'

import { toogle } from '@/store/features'
import { ContactsProps } from '../Contacts.props'

import { Button } from '@/UI'
import { Subtitle } from '../Subtitle'

import cn from 'classnames'
import styles from './ContactsPage.module.css'


export const ContactsPage: React.FC<ContactsProps> = ({
  address,
  chart,
  coords,
  email,
  title,
  phones,
  requisites
}) => {
  const { lat, lon } = coords
  const dispatch = useAppDispatch()

  const handlerBtn = () => {
    dispatch(toogle())
  }
  return (
    <div className={styles.contacts}>
      <div className={cn(styles.contacts__container, styles.contacts__top)}>
        <div
          className={cn(styles.contacts__wrap, styles.contacts__phones__wrap)}
        >
          <Subtitle subtitle='Телефонный номер:' />
          <div className={styles.phones__wrap}>
            {phones.map(phone => {
              return (
                <Link
                  className={styles.contacts__phone}
                  key={phone}
                  href={`tel${phone}`}
                >
                  {phone}
                </Link>
              )
            })}
          </div>
        </div>
        <div className={styles.contacts__wrap}>
          <Subtitle subtitle='E-MAIL:' />
          <Link href={`mailto:${email}`} className={styles.contacts__email}>
            {email}
          </Link>
        </div>

        <div className={styles.contacts__wrap}>
          <Subtitle subtitle='Адрес:' />
          {address}
        </div>
        <div className={styles.contacts__wrap}>
          <Subtitle subtitle='График работы:' />
          {chart}
        </div>
      </div>
      <YMaps>
        <div className={styles.contacts__map}>
          <Map
            width='100%'
            height='100%'
            state={{ center: [lat, lon], zoom: 18, behaviors: ['drag'] }}
            defaultState={{ center: [lat, lon], zoom: 18 }}
          >
            <ZoomControl
              options={{ position: { right: '10px' }, size: 'auto' }}
            />
            <Placemark geometry={[lat, lon]} />
          </Map>
        </div>
      </YMaps>
      <div className={styles.contacts__container}>
        <h3 className={styles.contacts__title}>{title}</h3>
        <div className={styles.contacts__wrap}>
          <Subtitle subtitle='Реквизиты счета:' />
          <ul className={styles.contacts__props}>
            {requisites.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Button
          id='contacts-btn'
          className={styles.contacts__btn}
          onClick={handlerBtn}
        >
          Заказать обратный звонок
        </Button>
      </div>
    </div>
  )
}
