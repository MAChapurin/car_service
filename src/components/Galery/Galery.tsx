'use client'

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion'

import { useResize, useClickOutside } from '@/hooks';

import { Icon, Loader } from '@/components';

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Galery.css'
// import 'swiper/swiper-bundle.min.css';
import styles from './Galery.module.css'

const containerAnimation = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

const btnAnimation = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

const swiperXLAnimation = {
  hidden: {
    opacity: 0,
    y: 200
  },
  visible: {
    opacity: 1,
    y: 0
  }
}


export function Galery({ list, title = null, isLink = false }: GaleryProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [initialSlide, setInitialSlide] = useState<number>(0)

  const width = useResize();

  const modalRef = useRef(null)
  const handleCloseModal = () => {
    setVisible(false)
  }

  useClickOutside(modalRef, handleCloseModal)

  useEffect(() => {
    document.body.setAttribute('style', `overflow: ${visible && 'hidden'}`)
  }, [visible])
  return (
    <motion.div
      className={styles.galery}
      initial={containerAnimation.hidden}
      whileInView={containerAnimation.visible}
      exit={containerAnimation.hidden}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {title &&
        <h3 className={styles.h3}>{title}</h3>
      }
      {
        width ? <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          effect={"slide"}
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1280: {
              slidesPerView: 3
            },
            1440: {
              slidesPerView: 4
            }
          }}
        >
          {list.map((el, index) => {
            return (
              <SwiperSlide key={el}>
                <div className={styles.wrap}>
                  <Image
                    className={styles.img}
                    src={el}
                    alt={el}
                    width={500}
                    height={100}
                    onClick={() => {
                      setVisible(true)
                      setInitialSlide(index)
                    }}
                  />
                </div>
              </SwiperSlide>
            )
          })}

        </Swiper> :
          <div className={styles.loader}>
            <Loader />
          </div>
      }
      <motion.div
        className={styles.link__wrap}
        initial={btnAnimation.hidden}
        whileInView={btnAnimation.visible}
        exit={btnAnimation.hidden}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        {isLink && <Link className={styles.link} href={'/galery'}>Смотреть еще тут</Link>}
      </motion.div>
      <AnimatePresence>

        {visible &&
          <div className={styles.modal}>
            <motion.div
              className={styles.modal__content}
              ref={modalRef}
              initial={swiperXLAnimation.hidden}
              whileInView={swiperXLAnimation.visible}
              exit={swiperXLAnimation.hidden}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                className={styles.modal__close}
                onClick={handleCloseModal}>
                <Icon icon='close' />
              </button>
              <Swiper
                initialSlide={initialSlide}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                effect={"slide"}
                autoHeight={true}
              >
                {list.map((el) => {
                  return (
                    <SwiperSlide key={el}>
                      <div className={styles.sliderXLWrap}>
                        <Image
                          className={styles.imgXL}
                          src={el}
                          alt={el}
                          objectFit='contain'
                          objectPosition='center center'
                          fill
                        />
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </motion.div>
  )
}