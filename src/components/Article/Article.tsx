'use client'

import { AboutSectionProps } from './Article.props'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from "framer-motion";

import cn from 'classnames'
import styles from './Article.module.css'

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


export function Article({ className, quote, description, href, src, isReverse = false }: AboutSectionProps) {
  return (
    <div className={cn(styles.about, className)}>
      <div className={styles.about__left}>
        <Image
          className={cn(styles.about__img, {
            [styles.reverse]: isReverse
          })}
          src={src}
          alt={quote ? quote : 'Здесь могла бы быть наша фотография'}
          width={880}
          height={360} />
        {quote &&
          <motion.blockquote
            className={styles.about__quote}
            initial={textAnimation.hidden}
            whileInView={textAnimation.visible}
            exit={textAnimation.hidden}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            {quote}
          </motion.blockquote>}
        <motion.p
          className={styles.about__description}
          initial={textAnimation.hidden}
          whileInView={textAnimation.visible}
          exit={textAnimation.hidden}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
        {href && <Link aria-label='Переход в раздел О нас' className={styles.about__link} href={href}>Подробнее...</Link>}
      </div>
    </div>
  )
}