import Link from 'next/link';
import { ServicesLinkProps } from '../ServicesLinkList.props';
import Image from 'next/image';

import styles from './ServicesLinkItem.module.css'

export function ServicesLinkItem({ title, id, img }: ServicesLinkProps) {
  return (
    <Link
      className={styles.link}
      href={id}>
      <Image
        className={styles.img}
        src={img}
        alt={title}
        width={335}
        height={200} />
      <h4>
        {title}
      </h4>
    </Link>
  )
}