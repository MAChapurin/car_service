interface ICoords {
  lat: number
  lon: number
}

interface IContacts {
  coords: ICoords
  phones: string[]
  title: string
  email: string
  address: string
  chart: string,
  requisites: string[];
}

export const contacts: IContacts = {
  title: 'CSA CITY SERVICE AUTOMATIC',
  phones: ['+79034499220'],
  coords: { lat: 45.025304, lon: 39.037081 },
  email: 'csa-servis@mail.ru',
  address: 'г.Краснодар ул. Селезнева 157',
  chart: 'С понедельника по субботу с 10:00 до 19:00',
  requisites: [
    'ИНН: 234205747116',
    'Расчетный счет: 40802810700005962213',
    'Банк: АО "ТИНЬКОФФ БАНК"',
    'ИНН банка: 7710140679',
    'БИК банка: 044525974',
    'Корреспондентский счет банка: 30101810145250000974',
    'Юридический адрес банка: Москва, 127287, ул. 2-я Хуторская, д. 38А, стр. 26'
  ]
}
