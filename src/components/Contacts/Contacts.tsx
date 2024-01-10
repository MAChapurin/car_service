'use client'

import { YMaps, Map } from "@pbe/react-yandex-maps";

import Link from "next/link";

import { ContactsProps } from "./Contacts.props";

import { Subtitle } from "./Subtitle";

import styles from "./Contacts.module.css";



export const Contacts = ({ address, chart, coords, email, title, phones }: ContactsProps) => {
  const { lat, lon } = coords
  console.log("YANDEXMAP:", lat, lon);

  return (
    <div className={styles.contacts}>
      <YMaps>
        <div className={styles.contacts__map}>
          <Map
            width="100%"
            height="100%"
            state={{ center: [lat, lon], zoom: 9 }}
            defaultState={{ center: [lat, lon], zoom: 9 }}
          />
        </div>
      </YMaps>
      <div className={styles.contacts__container}>
        <h3 className={styles.contacts__title}>
          {title}
        </h3>
        <div className={styles.contacts__wrap}>
          <Subtitle subtitle="Телефонный номер:"/>
          {phones.map((phone) =>
            <Link
              className={styles.contacts__phone}
              key={phone}
              href={`tel${phone}`}
            />)}
        </div>
        <div className={styles.wrap}>
        <Subtitle subtitle="E-MAIL:"/>
        <Link href={`mailto:${email}`} className={styles.contacts__email}>
          {email}
        </Link>
        </div>
        
        <div className={styles.contacts__wrap}>
        <Subtitle subtitle="Адрес:"/>
          {address}
        </div>
        <div className={styles.contacts__wrap}>
        <Subtitle subtitle="График работы:"/>
            {chart}
        </div>

      </div>
    </div>
  );
};