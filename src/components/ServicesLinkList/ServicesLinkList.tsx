import { ServicesLinkListProps } from "./ServicesLinkList.props";

import { ServicesLinkItem } from "..";

import cn from 'classnames'
import styles from './ServicesLinkList.module.css'

export function ServicesLinkList({ list }: ServicesLinkListProps) {
  return (
    <ul className={cn(
      styles.ul,
      {
        [styles.short]: list.length === 1
      }
    )}>
      {list.map((link) => {
        return (
          <li
            className={styles.li}
            key={link.id}>
            <ServicesLinkItem {...link} />
          </li>
        )
      })}
    </ul>
  )
}

