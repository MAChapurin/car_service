'use client'
import { useEffect, useState } from 'react';

import Image from 'next/image';

import { detailsServices } from "@/constants";

import cn from 'classnames'

import styles from './DetailServicesPage.module.css'
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Button } from '@/UI';
import { addCervice, addWatchedCervice, deleteService } from '@/store/features';


export default function DetailServicePage({ params }: { params: { id: string } }) {
  const detailService = detailsServices.find(service => service.id === params.id)

  const dispatch = useAppDispatch()
  const { cart } = useAppSelector(state => state.cart)
  const isInCart = cart.find(service => service.id === detailService?.id)
  const [btnText, setBtnText] = useState<'Добавить услугу' | 'Убрать услугу'>(isInCart ? 'Убрать услугу' : 'Добавить услугу')

  const handlerbtn = () => {
    if (detailService) {
      if (isInCart) {
        dispatch(deleteService(detailService.id))
        setBtnText('Добавить услугу')
      } else {
        dispatch(addCervice(detailService))
        setBtnText('Убрать услугу')
      }

      console.log(cart)
    }
  }

  useEffect(()=> {
    if(detailService) {
      dispatch(addWatchedCervice(detailService))
    }
  }, [])


  if (!detailService) {
    return (
      <p>Страница не найдена</p>
    )
  }

  const { title, img, description } = detailService

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{title}</h1>
      <div className={styles.content}>
        <Image
          alt={title}
          className={styles.img}
          src={img}
          width={700}
          height={400}
        />
        <p className={styles.description}>
          {description}
        </p>
      </div>
      <div className={styles.links}>
        <Button
          className={cn(styles.link, styles.link__subscribe)}
          onClick={handlerbtn}
        >{btnText}</Button>
        <Link
          className={cn(styles.link)}
          href={'/services'}>
          Посмотреть другие услуги
        </Link>
      </div>
    </div>
  )
}