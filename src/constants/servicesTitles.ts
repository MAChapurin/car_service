interface ServicesItemProps {
  title: string
  href: string
  index?: number | string
  img: string
  className?: string
  type?: 'engine' | 'chassis' | 'transmition' | 'others'
  links: Array<{title: string, id: string}>
}

export const servicesTitles: ServicesItemProps[] = [
  {
    title: 'Трансмиссия',
    href: 'transmition',
    index: '01',
    img: '/services/Трансмиссия.png',
    type: 'transmition',
    links: [
      {
        title: 'Ремонт PowerShift',
        id: 'repair-power-shift',
      },
      {
        title: 'Ремонт Easytronic',
        id: 'repair-easytronic',
      },
      {
        title: 'Ремонт механических коробок передач',
        id: 'repair-mechanical-gearbox',
      },
      {
        title: 'Ремонт автоматических коробок передач',
        id: 'repair-automatic-gearbox',
      },
      {
        title: 'Ремонт CVT',
        id: 'repair-CVT',
      },
      {
        title: 'Диагностика и ремонт электронных систем АКПП',
        id: 'diagnostics-and-repair-of-electronic-automatic-transmission-systems',
      },
      {
        title: 'Адаптация электронных систем АКПП',
        id: 'adaptation-of-electronic-automatic-transmission-systems',
      },
      {
        title: 'Техническое послегарантийное обслуживание АКПП',
        id: 'post-warranty-technical-maintenance-akpp',
      },
      {
        title: 'Ремонт раздаточных коробок',
        id: 'transfer-case-repair',
      },
    ]
    
  },
  {
    title: 'Двигатель',
    href: 'transmition',
    index: '02',
    img: '/services/Двигатель.png',
    type: 'engine',
    links: [
      {
        title: 'Ремонт и замена навесного оборудования двигателя',
        id: 'repair-and-replacement-of-engine-attachments',
      },
      {
        title: 'Ремонт бензиновых и дизельных двигателей',
        id: 'repair-of-gasoline-and-diesel-engines',
      },
      {
        title: 'Замена ремней и цепей ГРМ',
        id: 'replacing-timing-belts-and-chains',
      },
      {
        title: 'Электронная и оптическая диагностика',
        id: 'electronic-and-optical-diagnostics',
      },
      {
        title: 'Диагностика и ремонт системы охлаждения двигателя',
        id: 'diagnostics-and-repair-of-the-engine-cooling-system',
      },
      {
        title: 'Электрика двигателя',
        id: 'engine-electrics',
      },
      {
        title: 'Замена технических жидкостей',
        id: 'replacing-technical-fluids',
      },
      {
        title: 'Диагностика и ремонт топливной системы двигателя',
        id: 'diagnostics-and-repair-of-the-engine-fuel-system',
      },
      {
        title: 'Диагностика, ремонт и заправка системы кондиционирования автомобиля',
        id: 'diagnostics-repair-and-refilling-of-the-car-air-conditioning-system',
      },
      {
        title: 'Ремонт выхлопной системы',
        id: 'exhaust-system-repair',
      },
    
    ]
  },
  {
    title: 'Ходовая часть',
    href: 'transmition',
    index: '03',
    img: '/services/Ходовая_часть.png',
    type: 'chassis',
    links: [
      {
        title: '3D Развал схождения',
        id: '3D-wheel-alignment',
      },
      {
        title: 'Ремонт рулевой системы',
        id: 'steering-system-repair',
      },
      {
        title: 'Диагностика и ремонт тормозной системы',
        id: 'diagnostics-and-repair-of-the-brake-system',
      },
      {
        title: 'Ремонт и замена подвески автомобиля',
        id: 'car-suspension-repair-and-replacement',
      },
    ]
  },
  {
    title: 'Прочие работы',
    href: 'transmition',
    index: '04',
    img: '/services/Прочие_работы.png',
    type: 'others',
    links: [
      {
        title: 'Сварочно-восстановительные работы',
        id: 'welding-and-restoration-work',
      },
      {
        title: 'Удаление обломанных болтов, шпилек и гаек',
        id: 'removing-broken-bolts-studs-and-nuts',
      },
      {
        title: 'Восстановление резьбовых соединений',
        id: 'restoration-of-threaded-connections',
      },
    ]
  },
]