'use client'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Link from 'next/link';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useResize } from '@/hooks';

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Galery.css'
// import 'swiper/swiper-bundle.min.css';
import styles from './Galery.module.css'
import Image from 'next/image';
import { Button } from '@/UI';
import { Loader } from '@/components';


export function Galery({ list, title = null, isLink = false }: GaleryProps) {
  const swiper = useSwiper();
  const width = useResize();
  // const width =4;

  function getCountSliders(width: number) {
    if (width < 768) return 1
    if (width < 1024) return 2
    if (width < 1280) return 3
    return 4
  }

  const prev = () => {
    if (swiper) swiper.slidePrev()
  }

  const next = () => {
    if (swiper) swiper.slideNext()
  }

  return (
    <div className={styles.galery}>
      {title &&
        <h3 className={styles.h3}>{title}</h3>
      }
      {width ?
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={width ? getCountSliders(width) : 'auto'}
          // slidesPerView={'auto'}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          effect={"slide"}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
        >
          {list.map((el) => {
            return (
              <SwiperSlide key={el}>
                <div className={styles.wrap}>
                  <Image className={styles.img} src={el} alt={el} width={500} height={100} />
                </div>
              </SwiperSlide>
            )
          })}

        </Swiper> :
        <div className={styles.loader}>
          <Loader />
        </div>
      }
      <div className={styles.link__wrap}>
        {isLink && <Link className={styles.link} href={'/galery'}>Смотреть еще тут</Link>}
      </div>
    </div>
  )
}