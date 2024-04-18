export interface FormShortProps {
  onClose: ()=> void
}

export interface IClient {
  name: string
  phone: number | string
  message?: string
}