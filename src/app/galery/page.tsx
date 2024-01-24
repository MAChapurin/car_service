import { Galery } from "@/components";

// import { galeryData } from "@/constants";

import styles from './galery.module.css'

export default function GaleryPage() {
  const galeryData: string[] = [
    '/galery/galery-1.jpg',
    '/galery/galery-2.jpg',
    '/galery/galery-3.jpg',
    '/galery/galery-4.jpg',
    '/galery/galery-5.jpg',
    '/galery/galery-6.jpg',
    '/galery/galery-7.jpg',
    '/galery/galery-8.jpg',
    '/galery/galery-9.jpg',
    '/galery/galery-10.jpg'
  ]

  const reverseData = [...galeryData].reverse();
  return (
    <>
      <h1 className={styles.h1}>Фотогалерея</h1>
      <Galery list={galeryData} title={'Ряд первый'} />
      <Galery list={reverseData} title={'Ряд второй'} />
      <Galery list={galeryData} title={'Ряд третий'} />
      <Galery list={reverseData} title={'Ряд четвертый'} />
    </>
  )
}