import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon:
    | 'account'
    | 'burger'
    | 'burgerBtn'
    | 'pin'
    | 'email'
    | 'phone'
    | 'time'
    | 'whatsUp'
    | 'telegramm';
}
