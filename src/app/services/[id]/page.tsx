import Image from 'next/image';

import { detailsServices } from "@/constants";

import cn from 'classnames'

import styles from './DetailServicesPage.module.css'
import Link from 'next/link';


export default function DetailServicePage({ params }: { params: { id: string } }) {
  const detailService = detailsServices.find(service => service.id === params.id)

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
        <Link className={cn(styles.link, styles.link__subscribe)} href={'/'}>Оформить услугу</Link>
        <Link className={cn(styles.link)} href={'/services'}>Посмотреть другие услуги</Link>
      </div>
    </div>
  )
}