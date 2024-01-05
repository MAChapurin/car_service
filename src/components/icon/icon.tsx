import { IconProps } from "./icon.props"
import { Account, Burger, Email, Phone, Pin, Telegramm, Time, WhatsUp } from "./icons"


export function Icon({ icon, ...props }: IconProps) {
  const iconsConfig = {
    ['account']: <Account {...props} />,
    ['burger']: <Burger {...props} />,
    ['email']: <Email {...props} />,
    ['phone']: <Phone {...props} />,
    ['pin']: <Pin {...props} />,
    ['telegramm']: <Telegramm {...props}/>,
    ['time']: <Time {...props} />,
    ['whatsUp']: <WhatsUp {...props} />
  }
  return iconsConfig[icon]
}