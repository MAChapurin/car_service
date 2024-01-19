import { ServicesLinkListProps } from "./ServicesLinkList.props";

import styles from './ServicesLinkList.module.css'
import { ServicesLinkItem } from "..";

export function ServicesLinkList({ list }: ServicesLinkListProps) {
  return (
    <ul className={styles.ul}>
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