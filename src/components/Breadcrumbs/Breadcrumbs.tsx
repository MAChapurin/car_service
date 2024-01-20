'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { pathData } from '@/constants/pathData'

import styles from './Breadcrumbs.module.css'

export function Breadcrumbs() {
  const pathname = usePathname()

  const pathnameSplit = pathname.split('/').slice(1)
  useEffect(() => {
    console.log('pathnameSplit ->', pathnameSplit)
  }, [pathname])
  return (
    <nav className={styles.nav}>
      <Link
        className={styles.link}
        href={'/'}>/Главная
      </Link>
      {pathnameSplit.map((item) => {
        const resObj = pathData.find(el => el.path === `/${item}`)
        if (!resObj || item.length === 0) return null
        const { title, path } = resObj
        return <Link
          className={styles.link}
          key={title + path}
          href={path}>
          /{title}
        </Link>
      })}
    </nav>
  )
}