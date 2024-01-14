'use client'

import cn from 'classnames'
import styles from './TabBar.module.css'

export function TabBar({ callback, className, list }: TabBarProps) {
  return (
    <ul className={cn(styles.ul, className)}>
      {list.map((el) => {
        return (
          <li key={el.title}>
            <button onClick={callback} className={styles.btn}>
              {el.title}
            </button>
          </li>
        )
      })}
    </ul>
  )
}