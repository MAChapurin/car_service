'use client'

import { useEffect, useRef, useState } from 'react'

import { Button } from '@/UI'
import cn from 'classnames'
import styles from './FormShort.module.css'
import { FormShortProps } from './FormShort.props'

export function FormShort({ onClose }: FormShortProps) {
  const [isSuccess, setSuccess] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [tel, setTel] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(true)

  const nameRef = useRef<HTMLInputElement>(null)

  const handlerSubmit = () => {
    setSuccess(true)
  }

  useEffect(() => {
    nameRef.current?.focus()
  }, [])
  return (
    <div className={styles.container}>
      {!isSuccess &&
        <form
          className={cn(
            styles.form,
            {
              [styles.active]: !isSuccess
            }
          )}
          onSubmit={(e) => {
            e.preventDefault()
            handlerSubmit()
          }}>
          <label className={styles.label}>
            Введите ваше имя
            <input
              type="text"
              className={styles.input}
              placeholder='Ваше имя'
              ref={nameRef}
              required
              value={name}
              onChange={(e)=> {
                setName(e.target.value)
              }}
            />
          </label>
          <label className={styles.label}>
            Введите ваш номер телефона
            <input
              type='tel'
              className={styles.input}
              required
              placeholder='Ваш телефон'
              onChange={(e)=> {
                setTel(e.target.value)
              }}
            />
          </label>
          <div className={styles.wrap}>
            <input checked={checked} id='checkbox' type="checkbox" 
            onChange={(e)=> {
              setChecked(prev => !prev)
            }}
            />
            <label htmlFor="checkbox">
              Согласие на обработку персональных данных
            </label>
          </div>
          <Button 
          disabled={name.length < 2 || tel.length < 11 || !checked}
          type='submit' className={styles.submitBtn}>
            Оформить заявку
          </Button>
        </form>
      }
      {isSuccess &&
        <div className={styles.success}>
          Ваша заявка отправлена
          <Button 
          onClick={() => { onClose() }}>Ok</Button>
        </div>
      }
    </div>
  )
}