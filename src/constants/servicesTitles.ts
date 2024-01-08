interface ServicesItemProps {
  title: string
  href: string
  index?: number | string
  img: string
  className?: string
}

export const servicesTitles: ServicesItemProps[] = [
  {
    title: 'Трансмиссия',
    href: 'transmition',
    index: '01',
    img: '/services/Трансмиссия.png'
  },
  {
    title: 'Двигатель',
    href: 'transmition',
    index: '02',
    img: '/services/Двигатель.png'
  },
  {
    title: 'Ходовая часть',
    href: 'transmition',
    index: '03',
    img: '/services/Ходовая_часть.png'
  },
  {
    title: 'Прочие работы',
    href: 'transmition',
    index: '04',
    img: '/services/Прочие_работы.png'
  },
]