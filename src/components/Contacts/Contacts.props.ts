interface ICoords {
  lat: number;
  lon: number;
}

export interface ContactsProps {
  coords: ICoords;
  phones: string[];
  title: string;
  email: string;
  address: string;
  chart: string;
}
