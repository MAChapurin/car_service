'use client'

import cn from 'classnames'
import styles from './TabBar.module.css'

export function TabBar({ callback, className, list, sortType }: TabBarProps) {
  return (
    <ul className={cn(styles.ul, className)}>
      {list.map((el) => {
        return (
          <li key={el.title}>
            <button
              className={cn(styles.btn, {
                [styles.active]: sortType === el.type
              })}
              data-type={el.type}
              onClick={callback}
            >
              {el.title}
            </button>
          </li>
        )
      })}
    </ul>
  )
}