'use client'

import { useEffect, useRef, useState } from 'react'

import { Button } from '@/UI'
import { withMask } from 'use-mask-input'
import cn from 'classnames'

import { FormShortProps, IClient } from './FormShort.props'
import styles from './FormShort.module.css'


export function FormShort({ onClose }: FormShortProps) {
  const [isSuccess, setSuccess] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(true)
  const [message, setMessage] = useState<string>('')

  const [errorName, setErrorName] = useState<string | null>(null)

  const nameRef = useRef<HTMLInputElement>(null)
  const btnOkRef = useRef<HTMLButtonElement>(null)

  const checkName = () => {
    if (name.length === 0) {
      setErrorName('Поле обязательно к заполнению')
      nameRef.current?.focus()
    }
    if (name.length === 1) {
      setErrorName('Имя слишком короткое')
      nameRef.current?.focus()
    }
    if (name.search(/\d/) != -1) {
      setErrorName('Имя не должно содержать цифры')
      nameRef.current?.focus()
    }
  }

  const sendRequest = async (data: IClient) => {
    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json()).then(data => {
      console.log(data)
    })
  }

  const handlerSubmit = () => {
    setSuccess(true)
    sendRequest({ name, phone, message })
    btnOkRef.current?.focus()
  }

  useEffect(() => {
    nameRef.current?.focus()
  }, [])
  return (
    <div className={styles.container}>
      {!isSuccess && (
        <form
          className={cn(styles.form, {
            [styles.active]: !isSuccess
          })}
          onSubmit={e => {
            e.preventDefault()
            handlerSubmit()
          }}
        >
          <label className={styles.label}>
            Введите ваше имя
            <input
              type='text'
              className={styles.input}
              placeholder='Ваше имя'
              ref={nameRef}
              value={name}
              onChange={e => {
                setName(e.target.value)
                setErrorName(null)
              }}
              onBlur={checkName}
            />
            {errorName && <span>{errorName}</span>}
          </label>
          <label className={styles.label}>
            Введите ваш номер телефона
            <input
              type='tel'
              className={styles.input}
              required
              placeholder="+7(___)___-__-__"
              onChange={e => {
                setPhone(e.target.value)
                console.log(phone)
              }}
              ref={withMask('+7(999)999-9999')}
            />
          </label>
          <div className={styles.wrap}>
            <input
              checked={checked}
              id='checkbox'
              type='checkbox'
              onChange={e => {
                setChecked(prev => !prev)
              }}
            />
            <label htmlFor='checkbox'>
              Согласие на обработку персональных данных
            </label>
          </div>
          <label htmlFor='text-area' className={styles.label}>
            Чем мы можем вам помочь ?
          </label>
          <textarea id='text-area' className={styles.message} onChange={(e) => {
            setMessage(e.target.value)
          }} cols={30} rows={5}>{message}</textarea>
          <Button
            disabled={name.length < 2 || phone.length < 11 || !checked}
            type='submit'
            className={styles.submitBtn}
          >
            Оформить заявку
          </Button>
        </form>
      )}
      {isSuccess && (
        <div className={styles.success}>
          Ваша заявка отправлена
          <Button
            ref={btnOkRef}
            onClick={() => {
              onClose()
            }}
          >
            Ok
          </Button>
        </div>
      )}
    </div>
  )
}
