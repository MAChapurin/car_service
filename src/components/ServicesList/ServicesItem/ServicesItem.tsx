import Link from "next/link";
import { ServicesItemProps, ServicesListProps } from "../ServicesList.props";
import Image from "next/image";

import cn from "classnames";
import styles from './ServicesItem.module.css'
import { Lato, Raleway } from "next/font/google";

const lato = Lato ({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700']
})

const raleWay = Raleway ({
  subsets: ['cyrillic', 'latin'],
  display: 'swap'
})


export function ServicesItem({ className, title, href, index, img }: ServicesItemProps) {
  return (
    <Link className={cn(styles.link, className)} href={href}>
      <Image
        className={styles.img}
        src={img}
        alt={title}
        width={430}
        height={499}
      />
        {index && <span className={cn(styles.index, lato.className)}>{index}</span>}
        <h3 className={cn(styles.h3, raleWay.className)}>{title}</h3>
    </Link>
  )
} 