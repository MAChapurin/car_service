import { SVGProps } from 'react';

export type IconType =
  | 'account'
  | 'arrowUp'
  | 'badge'
  | 'burger'
  | 'burgerBtn'
  | 'checked'
  | 'gear'
  | 'people'
  | 'pin'
  | 'email'
  | 'phone'
  | 'time'
  | 'whatsUp'
  | 'telegramm';

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconType;
}
