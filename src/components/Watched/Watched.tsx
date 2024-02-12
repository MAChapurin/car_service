'use client'

import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { useAppSelector } from "@/hooks"
import { Section } from ".."
import Image from 'next/image';

import styles from './Watched.module.css'
import Link from 'next/link';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

export function Watched() {
  const { watched } = useAppSelector(state => state.watched)
  return (
    <>
      {!!watched.length &&
        <Section title="Вы смотрели">
          <motion.div
            className={styles.container}
            initial={textAnimation.hidden}
            whileInView={textAnimation.visible}
            exit={textAnimation.hidden}
            transition={{ duration: 0.3 }}
          >
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              effect={"slide"}
              loop={true}
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
              {
                watched.map(({ title, id, img }) => {
                  return (
                    <SwiperSlide key={id}>
                      <Link
                        className={styles.link}
                        href={`/services/${id}`}
                      >
                        <Image
                          className={styles.img}
                          src={img}
                          alt={title}
                          width={500}
                          height={300}
                          objectFit='cover'
                        />
                        <motion.h3
                          className={styles.h3}
                          initial={textAnimation.hidden}
                          whileInView={textAnimation.visible}
                          exit={textAnimation.hidden}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          {title}
                        </motion.h3>
                      </Link>
                    </SwiperSlide>
                  )
                })
              }

            </Swiper>
          </motion.div>

        </Section>
      }
    </>
  )
}