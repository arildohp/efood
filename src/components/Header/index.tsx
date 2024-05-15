import { Hero, Text, Image } from './styles'

import logo from '../../assets/image/logo.svg'

const Header = () => (
  <Hero>
    <Image src={logo} alt="Efood" />
    <Text>Viva experiências gastronômicas no conforto da sua casa </Text>
  </Hero>
)

export default Header
