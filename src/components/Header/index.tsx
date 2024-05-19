import { Hero, Text, Image } from './styles'
import { Link } from 'react-router-dom'

import logo from '../../assets/image/logo.svg'

const Header = () => (
  <Hero>
    <Image>
      <Link to={'/restaurant'}>
        <img src={logo} alt="Efood" />
      </Link>
    </Image>
    <Text>Viva experiências gastronômicas no conforto da sua casa </Text>
  </Hero>
)

export default Header
