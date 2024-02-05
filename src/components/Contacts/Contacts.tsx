'use client'

import { useState } from "react";
import Link from "next/link";

import { YMaps, Map } from "@pbe/react-yandex-maps";


import { ContactsProps } from "./Contacts.props";

import { Button, Modal } from "@/UI";
import { Subtitle } from "./Subtitle";

import cn from "classnames";
import styles from "./Contacts.module.css";
import { FormShort } from "..";



export const Contacts = ({ address, chart, coords, email, title, phones }: ContactsProps) => {
  const { lat, lon } = coords
  const [visible, setVisible] = useState<boolean>(false)

  const handlerBtn = () => {
    setVisible(prev => !prev)
  }
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
        <div className={cn(styles.contacts__wrap, styles.contacts__phones__wrap)}>
          <Subtitle subtitle="Телефонный номер:" />
          <ul className={styles.phones__wrap}>
            {phones.map((phone) => {
              return (
                <Link
                  className={styles.contacts__phone}
                  key={phone}
                  href={`tel${phone}`}
                >
                  {phone}
                </Link>
              )
            }
            )}
          </ul>
        </div>
        <div className={styles.wrap}>
          <Subtitle subtitle="E-MAIL:" />
          <Link href={`mailto:${email}`} className={styles.contacts__email}>
            {email}
          </Link>
        </div>

        <div className={styles.contacts__wrap}>
          <Subtitle subtitle="Адрес:" />
          {address}
        </div>
        <div className={styles.contacts__wrap}>
          <Subtitle subtitle="График работы:" />
          {chart}
        </div>
        <Button
          id="contacts-btn"
          className={styles.contacts__btn}
          onClick={handlerBtn}
        >
          Заказать обратный звонок
        </Button>
      </div>
      <Modal isVisible={visible} onClose={() => { setVisible(false) }}>
        <FormShort onClose={() => { setVisible(false) }} />
      </Modal>
    </div>
  );
};