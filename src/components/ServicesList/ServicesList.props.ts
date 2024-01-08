
export interface ServicesItemProps {
  title: string
  href: string
  index?: number | string
  img: string
  className?: string
}

export interface ServicesListProps {
  list: ServicesItemProps[]
}