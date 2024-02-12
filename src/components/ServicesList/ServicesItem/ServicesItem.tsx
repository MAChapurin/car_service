'use client'

import Link from "next/link";
import { ServicesItemProps } from "../ServicesList.props";
import Image from "next/image";

import { AnimatePresence, motion } from 'framer-motion'

import cn from "classnames";
import styles from './ServicesItem.module.css'

import { Lato, Raleway } from "next/font/google";
import { useState } from "react";

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700']
})

const raleWay = Raleway({
  subsets: ['cyrillic', 'latin'],
  display: 'swap'
})

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

const wrapAnimation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

const ulAnimation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}


export function ServicesItem({ className, title, img, links }: ServicesItemProps) {
  const [isOpen, setOpen] = useState<boolean>(false)
  return (
    <motion.div
      tabIndex={0}
      className={cn(styles.service, className)}
      onClick={() => { setOpen(true) }}
      onFocus={() => { setOpen(true) }}
      onBlur={() => { setOpen(false) }}
      initial={wrapAnimation.hidden}
      whileInView={wrapAnimation.visible}
      transition={{ duration: 0.5 }}
    >
      <Image
        className={styles.img}
        src={img}
        alt={title}
        width={430}
        height={499}
      />

      <AnimatePresence>
        {!isOpen
          &&
          <motion.h3
            className={cn(styles.h3, raleWay.className)}
            initial={textAnimation.hidden}
            whileInView={textAnimation.visible}
            exit={textAnimation.hidden}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h3>
        }
      </AnimatePresence>

      <AnimatePresence>
        {isOpen
          &&
          <motion.ul
            className={cn(styles.ul, raleWay.className)}
            initial={ulAnimation.hidden}
            whileInView={ulAnimation.visible}
            exit={ulAnimation.hidden}
          >
            {links.map(({ title, id }, index) => {
              return (
                <motion.li
                  key={id}
                  initial={textAnimation.hidden}
                  whileInView={textAnimation.visible}
                  exit={textAnimation.hidden}
                  transition={{ duration: 0.2 + index / 10 }}
                >

                  <Link className={styles.link} href={'/services/' + id}>
                    {title}
                  </Link>
                </motion.li>
              )
            })}
          </motion.ul>
        }
      </AnimatePresence>
    </motion.div>
  )
}
