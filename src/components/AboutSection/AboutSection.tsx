import { AboutSectionProps } from './AboutSection.props'
import Link from 'next/link'

import cn from 'classnames'
import styles from './AboutSection.module.css'

export function AboutSection({ className, quote, description, href, background, isReverse = false }: AboutSectionProps) {
  return (
    <div className={cn(styles.about, className, {
      [styles.reverse]: isReverse
    })}>
      <div className={styles.about__left}>
        {quote && <g className={styles.about__quote}>{quote}</g>}
        <p className={styles.about__description}>{description}</p>
        {href && <Link aria-label='Переход в раздел О нас' className={styles.about__link} href={href}>Подробнее...</Link>}
      </div>
      <div style={{ backgroundImage: background }} className={styles.about__right}></div>
    </div>
  )
}