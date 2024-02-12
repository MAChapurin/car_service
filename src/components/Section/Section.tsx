import { SectionProps } from './Section.props'

import cn from 'classnames'
import styles from './Section.module.css'
import { Title } from '@/UI'



export function Section({ title, className, children }: SectionProps) {
  return (
    <section className={cn(styles.section, className)}>
      {title &&
        <Title title={title} />
      }
      {children}
    </section>
  )
}