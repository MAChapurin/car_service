'use client'

import cn from 'classnames'
import styles from './TabBar.module.css'
import { Button } from '..'
import { useState } from 'react'

export function TabBar({ callback, className, list, sortType }: TabBarProps) {
  const [btnText, setBtntext] = useState('Все')

  return (
    <>
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
      <div className={styles.dropdown}>

        <Button className={styles.dropdownBtn}>
          {btnText}
        </Button>
        <ul className={cn(styles.ulCol, className)}>
          {list.map((el) => {
            return (
              <li key={el.title}>
                <button
                  className={cn(styles.btn, {
                    [styles.active]: sortType === el.type
                  })}
                  data-type={el.type}
                  onClick={(e) => {
                    callback(e)
                    setBtntext(el.title)
                  }}
                >
                  {el.title}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}