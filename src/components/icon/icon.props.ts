import { SVGProps } from 'react';

export type IconType =
  | 'account'
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
