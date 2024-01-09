import { AboutSectionProps } from './Article.props'
import Link from 'next/link'

import cn from 'classnames'
import styles from './Article.module.css'
import Image from 'next/image'

export function Article({ className, quote, description, href, src, isReverse = false }: AboutSectionProps) {
  return (
    <div className={cn(styles.about, className, {

    })}>
      <div className={styles.about__left}>

        <Image
          className={cn(styles.about__img, {
            [styles.reverse]: isReverse
          })}
          src={src}
          alt={quote ? quote : 'Здесь могла бы быть наша фотография'}
          width={880}
          height={360} />
        {quote && <blockquote className={styles.about__quote}>{quote}</blockquote>}
        <p className={styles.about__description}>{description}</p>
        {href && <Link aria-label='Переход в раздел О нас' className={styles.about__link} href={href}>Подробнее...</Link>}
      </div>
    </div>
  )
}