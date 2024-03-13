'use client'
import { motion } from "framer-motion";

import { Icon } from '..'

import { AdvantagesProps } from './Advantages.props'

import styles from './Advantages.module.css'

const itemAnimation = {
  hiddenLeft: {
    x: -200,
    opacity: 0
  },
  hiddenRight: {
    x: 200,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

const iconAnimation = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1
  }
}


export function Advantages({ list }: AdvantagesProps) {
  return (
    <ul className={styles.ul}>
      {list.map(({ icon, title }, index) => {
        return (
          <motion.li
            initial={index < 2 ? itemAnimation.hiddenLeft : itemAnimation.hiddenRight}
            whileInView={itemAnimation.visible}
            exit={itemAnimation.hiddenRight}
            transition={{ duration: 0.3, delay: index === 1 || index === 2 ? 0 : 0.3 }}
            viewport={{ once: true }}
            className={styles.li}
            key={icon}>
            <motion.div
              initial={iconAnimation.hidden}
              whileInView={iconAnimation.visible}
              exit={iconAnimation.hidden}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Icon className={styles.icon} icon={icon} />
            </motion.div>
            <h3
              className={styles.h3}>
              {title}
            </h3>
          </motion.li>
        )
      })}
    </ul>
  )
}