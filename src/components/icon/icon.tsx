import { IconProps } from "./icon.props"
import { Account, Badge, Burger, BurgerBtn, Checked, Email, Gear, People, Phone, Pin, Telegramm, Time, WhatsUp } from "./icons"

export function Icon({ icon, ...props }: IconProps) {
  const iconsConfig = {
    ['account']: <Account {...props} />,
    ['badge']: <Badge {...props}/>,
    ['burger']: <Burger {...props} />,
    ['burgerBtn']: <BurgerBtn {...props} />,
    ['checked']: <Checked {...props} />,
    ['email']: <Email {...props} />,
    ['gear']: <Gear {...props}/>,
    ['people']: <People {...props} />,
    ['phone']: <Phone {...props} />,
    ['pin']: <Pin {...props} />,
    ['telegramm']: <Telegramm {...props}/>,
    ['time']: <Time {...props} />,
    ['whatsUp']: <WhatsUp {...props} />
  }
  return iconsConfig[icon]
}