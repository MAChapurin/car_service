interface ICoords {
  lat: number;
  lon: number;
}

interface IContacts {
  coords: ICoords;
  phones: string[];
  title: string;
  email: string;
  address: string;
  chart: string;
}

export const contacts: IContacts = {
  title: 'CSA CITY SERVIS AUTOMATIC',
  phones: ['+79034499220', '+79883673411'],
  coords: { lat: 55.752004, lon: 37.617734 },
  email: 'csa-servis@mail.ru',
  address: 'г.Краснодар ул. Селезнева 157',
  chart: 'С понедельника по субботу с 10:00 до 19:00 без перерыва.',
};
