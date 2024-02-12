'use client'

import { useAppDispatch, useAppSelector } from "@/hooks"

import Link from "next/link"
import Image from "next/image"

import { AnimatePresence, motion } from 'framer-motion'

import { deleteService } from "@/store/features"

import { Icon } from ".."

import styles from './Cart.module.css'
import { Button } from "@/UI"

const itemAnimation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

export function Cart() {
  const dispatch = useAppDispatch()
  const { cart } = useAppSelector(state => state.cart)
  const handlerBtn = () => {
    alert('Modal form is coming')
  }
  return (
    <div className={styles.cart}>
      {!cart.length &&
        <p className={styles.cart__empty}>Здесь пока ничего нет</p>
      }
      <ul className={styles.cart__list}>
        {!!cart.length &&

          cart.map(({ title, id, img }, index) => {
            return (
              <AnimatePresence key={id}>
                <motion.li
                  className={styles.cart__item}
                  initial={itemAnimation.hidden}
                  whileInView={itemAnimation.visible}
                  exit={itemAnimation.hidden}
                  transition={{ duration: 0.2 + index / 10 }}
                >
                  <Link
                    className={styles.cart__link}
                    href={`/services/${id}`}
                  >
                    <div className={styles.cart__imgWrap}>
                      <Image
                        alt={title}
                        src={img}
                        fill
                        objectFit="cover"
                      />
                    </div>
                    <h3 className={styles.cart__h3}>{title}</h3>
                  </Link>
                  <button
                    className={styles.cart__closebtn}
                    onClick={() => {
                      dispatch(deleteService(id))
                    }}
                  >
                    <Icon icon="close" />
                  </button>
                </motion.li>
              </AnimatePresence>
            )
          })
        }
      </ul>
      {!!cart.length &&
        <motion.div
          className={styles.cart__btnWrap}
          initial={itemAnimation.hidden}
          whileInView={itemAnimation.visible}
          exit={itemAnimation.hidden}
          transition={{ duration: 0.5 }}
        >
          <Button
            id="contacts-btn"
            className={styles.contacts__btn}
            onClick={handlerBtn}
          >
            Перейти к оформлению
          </Button>
        </motion.div>
      }
    </div>
  )
}