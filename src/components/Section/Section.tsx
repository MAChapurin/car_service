import { SectionProps } from './Section.props'

import cn from 'classnames'
import styles from './Section.module.css'

export function Section({ title, className, children }: SectionProps) {
  return (
    <section className={cn(styles.section, className)}>
      {title && <h2 className={styles.h2}>{title}</h2>}
      {children}
    </section>
  )
}