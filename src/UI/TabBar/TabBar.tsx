'use client'

import cn from 'classnames'
import styles from './TabBar.module.css'
import { useRef, useState } from 'react'
import { useClickOutside } from '@/hooks'

export function TabBar({ callback, className, classNameDropdown, list, sortType }: TabBarProps) {
  const [btnText, setBtntext] = useState('Все')
  const [isVisible, setIsVisible] = useState(false)

  const handlerDropdown = () => {
    setIsVisible(prev => !prev)
  }

  const closeDropdown = () => {
    setIsVisible(false)
  }

  const dropdownRef = useRef(null)
  useClickOutside(dropdownRef, closeDropdown)
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
      <div ref={dropdownRef} className={cn(styles.dropdown, classNameDropdown)}>

        <button
          className={styles.dropdownBtn}
          onClick={handlerDropdown}
        >
          Фильтровать по &quot;{btnText}&quot;
        </button>
        {isVisible &&
          <ul
            className={cn(styles.ulCol, className)}
          >
            {list.map((el) => {
              return (
                <li key={el.title}>
                  {
                    sortType !== el.type &&
                    <button
                      className={cn(styles.btn, styles.dropdownBtn)}
                      data-type={el.type}
                      onClick={(e) => {
                        callback(e)
                        setBtntext(el.title)
                        setIsVisible(false)
                      }}
                    >
                      {el.title}
                    </button>
                  }

                </li>
              )
            })
            }
          </ul>
        }
      </div>
    </>
  )
}