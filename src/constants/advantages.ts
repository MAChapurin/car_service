import { IconType } from "@/components/icon/icon.props"

interface IArvantages {
  icon: IconType
  title: string
}

export const advantages: IArvantages[] = [
  {
    icon: 'badge',
    title: ' Квалифицированные сотрудники'
  },
  {
    icon: 'gear',
    title: 'Профессиональное оборудование'
  },
  {
    icon: 'people',
    title: 'Работа с юр. лицами'
  },
  {
    icon: 'checked',
    title: 'Гарантия выполненных работ'
  }
]