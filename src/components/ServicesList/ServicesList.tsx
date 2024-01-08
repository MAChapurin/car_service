import { ServicesListProps } from "./ServicesList.props";

import { ServicesItem } from "@/components";

import styles from './ServicesList.module.css'


export function ServicesList({ list }: ServicesListProps) {
  return (
    <ul className={styles.ul}>
      {list.map((item) => {
        return (
          <li key={item.title}>
            <ServicesItem {...item} />
          </li>
        )
      })}
    </ul>
  )
}