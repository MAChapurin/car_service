'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { motion } from "framer-motion";

import { detailsServices } from "@/constants";

import cn from 'classnames'

import styles from './DetailServicesPage.module.css'
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Button } from '@/UI';
import { addCervice, addWatchedCervice, deleteService } from '@/store/features';

const textAnimation = {
  hidden: {
    x: 100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  },
  hiddenScale: {
    scale: 0,
    // opacity: 0
  },
  visibleScale: {
    scale: 1,
    // opacity: 1
  }
}


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

  useEffect(() => {
    if (detailService) {
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
      <motion.h1
        className={styles.h1}
        initial={textAnimation.hiddenScale}
        whileInView={textAnimation.visibleScale}
        exit={textAnimation.hiddenScale}
        transition={{ duration: 0.3 }}
      >{title}</motion.h1>
      <div className={styles.content}>
        <motion.div
          className={styles.wrap}
          initial={textAnimation.hiddenScale}
          whileInView={textAnimation.visibleScale}
          exit={textAnimation.hiddenScale}
          transition={{ duration: 0.3 }}
        >
          <Image
            alt={title}
            className={styles.img}
            src={img}
            width={700}
            height={400}
          />
        </motion.div>
        <motion.p
          className={styles.description}
          initial={textAnimation.hidden}
          whileInView={textAnimation.visible}
          exit={textAnimation.hidden}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
      <div className={styles.links}>
        <Button
          className={cn(styles.link, styles.link__subscribe)}
          onClick={handlerbtn}
        >{btnText}</Button>
        <motion.div
          className={cn(styles.link)}
          initial={textAnimation.hidden}
          whileInView={textAnimation.visible}
          exit={textAnimation.hidden}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Link
            // className={cn(styles.link)}
            href={'/services'}>
            Посмотреть другие услуги
          </Link>
        </motion.div>
      </div>
    </div>
  )
}