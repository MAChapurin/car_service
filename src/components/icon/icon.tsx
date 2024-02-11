import { IconProps } from "./icon.props"
import { Account, ArrowUp, Badge, Burger, BurgerBtn, Checked, CloseIcon, Confidence, DataIcon, Email, FAQIcon, Gear, Instagramm, Pact, People, Phone, Pin, Telegramm, Time, VK, WhatsUp } from "./icons"

export function Icon({ icon, ...props }: IconProps) {
  const iconsConfig = {
    ['account']: <Account {...props} />,
    ['arrowUp']: <ArrowUp {...props}/>,
    ['badge']: <Badge {...props}/>,
    ['burger']: <Burger {...props} />,
    ['burgerBtn']: <BurgerBtn {...props} />,
    ['confidence']: <Confidence {...props}/>,
    ['checked']: <Checked {...props} />,
    ['close']: <CloseIcon {...props}/>,
    ['data']: <DataIcon {...props}/>,
    ['email']: <Email {...props} />,
    ['faq']: <FAQIcon {...props}/>,
    ['gear']: <Gear {...props}/>,
    ['instagramm']: <Instagramm {...props}/>,
    ['people']: <People {...props} />,
    ['pact']: <Pact {...props}/>,
    ['phone']: <Phone {...props} />,
    ['pin']: <Pin {...props} />,
    ['telegramm']: <Telegramm {...props}/>,
    ['time']: <Time {...props} />,
    ['vk']: <VK {...props}/>,
    ['whatsUp']: <WhatsUp {...props} />
  }
  return iconsConfig[icon]
}