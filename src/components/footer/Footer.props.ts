interface IContacts {
  phones: string[];
  title: string;
  email: string;
  address: string;
  chart: string;
}

export interface FooterProps {
  contacts: IContacts
}