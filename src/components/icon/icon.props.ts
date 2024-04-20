import { SVGProps } from 'react';

export type IconType =
  | 'account'
  | 'arrowUp'
  | 'badge'
  | 'burger'
  | 'burgerBtn'
  | 'cart'
  | 'checked'
  | 'confidence'
  | 'close'
  | 'data'
  | 'faq'
  | 'gear'
  | 'github'
  | 'instagramm'
  | 'pact'
  | 'people'
  | 'pin'
  | 'email'
  | 'phone'
  | 'time'
  | 'vk'
  | 'whatsUp'
  | 'telegramm';

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconType;
}
