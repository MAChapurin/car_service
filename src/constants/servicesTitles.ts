interface ServicesItemProps {
  title: string
  href: string
  index?: number | string
  img: string
  className?: string
  type?: 'engine' | 'chassis' | 'transmition' | 'others'
}

export const servicesTitles: ServicesItemProps[] = [
  {
    title: 'Трансмиссия',
    href: 'transmition',
    index: '01',
    img: '/services/Трансмиссия.png',
    type: 'transmition'
    
  },
  {
    title: 'Двигатель',
    href: 'transmition',
    index: '02',
    img: '/services/Двигатель.png',
    type: 'engine'
  },
  {
    title: 'Ходовая часть',
    href: 'transmition',
    index: '03',
    img: '/services/Ходовая_часть.png',
    type: 'chassis'
  },
  {
    title: 'Прочие работы',
    href: 'transmition',
    index: '04',
    img: '/services/Прочие_работы.png',
    type: 'others'
  },
]