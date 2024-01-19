import Link from 'next/link';
import { ServicesLinkProps } from '../ServicesLinkList.props';
import Image from 'next/image';

import styles from './ServicesLinkItem.module.css'
// import { Suspense } from 'react';

export function ServicesLinkItem({ title, id, img }: ServicesLinkProps) {
  return (
    // <Suspense fallback={<p>Loading...</p>}>
      <Link
        className={styles.link}
        href={`/services/${id}`}>
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
    // </Suspense>
  )
}