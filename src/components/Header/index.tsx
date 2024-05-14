import { HeaderBar, Text } from './styles'

import logo from '../../assets/image/logo.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="Efood" />
    <Text>Viva experiências gastronômicas no conforto da sua casa </Text>
  </HeaderBar>
)

export default Header
