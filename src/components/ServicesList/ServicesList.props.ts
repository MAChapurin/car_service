
export interface ServicesItemProps {
  title: string
  href: string
  index?: number | string
  img: string
  className?: string
  links: ILink[]
}

export interface ServicesListProps {
  list: ServicesItemProps[]
  className?: string
}

type ILink = {
  title: string,
  id: string
}