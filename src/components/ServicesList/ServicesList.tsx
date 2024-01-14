import { ServicesListProps } from "./ServicesList.props";

import { ServicesItem } from "@/components";

import cn from 'classnames'
import styles from './ServicesList.module.css'


export function ServicesList({ list, className }: ServicesListProps) {
  return (
    <ul className={cn(styles.ul, className)}>
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