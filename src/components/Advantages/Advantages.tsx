import { Icon } from '..'

import { AdvantagesProps } from './Advantages.props'

import styles from './Advantages.module.css'


export function Advantages({ list }: AdvantagesProps) {
  return (
    <ul className={styles.ul}>
      {list.map(({ icon, title }) => {
        return (
          <li
            className={styles.li}
            key={icon}>
            <Icon className={styles.icon} icon={icon} />
            <h3
              className={styles.h3}>
              {title}
            </h3>
          </li>
        )
      })}
    </ul>
  )
}