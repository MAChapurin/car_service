'use client'
import Link from "next/link"

import { useRouter } from "next/router"
import { Button } from "@/UI"
import { Raleway, Source_Serif_4 } from "next/font/google"

import cn from 'classnames'
import styles from './notFound.module.css'

const raleWay = Raleway({
  subsets: ['cyrillic', 'latin'],
  display: 'swap'
})

const sourceSerif_4 = Source_Serif_4({
  subsets: ['cyrillic', 'latin'],
  display: 'swap'
})

export default function _404() {

  return (
    <div className={cn(styles.container, raleWay.className)}>
      <h1 className={styles.h1}>Не существующая страница</h1>
      <div className={styles.code}>404</div>
      <div className={styles.divider}></div>
      <h2 className={styles.h2}>страница не найдена</h2>
      <p className={styles.message}>страницу которую вы ищете не существует либо устарела</p>
      <Link href={'/'} className={cn(styles.link, sourceSerif_4.className)}>На главную</Link>
    </div>
  )
}