'use client'

import { useEffect, useRef, useState } from 'react'

import { Button } from '@/UI'
import cn from 'classnames'
import styles from './FormShort.module.css'
import { FormShortProps } from './FormShort.props'

export function FormShort({onClose}: FormShortProps) {
  const [isSuccess, setSuccess] = useState<boolean>(false)

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
          ref={nameRef} />
      </label>
      <label className={styles.label}>
        Введите ваш номер телефона
        <input type='tel' className={styles.input} placeholder='Ваш телефон' />
      </label>
      <div className={styles.wrap}>
        <input id='checkbox' type="checkbox" />
        <label htmlFor="checkbox">Согласие на обработку персональных данных</label>
      </div>
      <Button type='submit' className={styles.submitBtn}>
        Оформить заявку
      </Button>
    </form>
  }
      {isSuccess &&
        <div className={styles.success}>
          Ваша заявка отправлена
          <Button onClick={()=> {onClose()}}>Ok</Button>
        </div>
      }
    </div>
  )
}