import Link from "next/link";
import { ServicesItemProps, ServicesListProps } from "../ServicesList.props";
import Image from "next/image";


export function ServicesItem({ className, title, href, index, img }: ServicesItemProps) {
  return (
    <Link className={className} href={href}>
      <Image
        src={img}
        alt={title}
      />
      {index && <span>{index}</span>}
    </Link>
  )
} 