'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { detailsServices, pathData } from '@/constants'

import styles from './Breadcrumbs.module.css'
import { useRef } from 'react'
// import { useEffect } from 'react'

const navAnimation = {
  hidden: {
    y: -30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

const linkAnimation = {
  hidden: {
    x: -30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const ref = useRef<HTMLUListElement>(null)
  const detailsServicesPaths = detailsServices.map(({id, title})=> {
    return {
      title,
      path: `/${id}`
    }
  })
  const paths = [...pathData, ...detailsServicesPaths]
  const pathnameSplit = pathname.split('/').slice(1)

  return (
    <motion.ul
      className={styles.nav}
      initial={navAnimation.hidden}
      whileInView={navAnimation.visible}
      exit={navAnimation.hidden}
      viewport={{ once: true }}
      ref={ref}
    >
      <li>
        <Link
          className={styles.link}
          href={'/'}>Главная
        </Link>
      </li>
      {pathnameSplit.map((item) => {
        const resObj = paths.find(el => el.path === `/${item}`)
        if (!resObj || item.length === 0) return null
        const { title, path } = resObj
        return (
          <AnimatePresence key={title + path}>
            <motion.li
              initial={linkAnimation.hidden}
              whileInView={linkAnimation.visible}
              exit={linkAnimation.hidden}
            >
              <Link
                className={styles.link}
                href={path}>
                <span>▸</span>
                <span>{title}</span>
              </Link>
            </motion.li>
          </AnimatePresence>
        )
      })}
    </motion.ul>
  )
}