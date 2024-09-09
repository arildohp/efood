import { HeaderBar, Container, LinkHeader } from './styles'
import logo from '../../assets/image/logo.svg'
import Banner from '../../components/Banner'
import ProductList from '../Restaurant/ProductList'

const Restaurant = () => (
  <>
    <Container>
      <HeaderBar>
        <LinkHeader href="#">Restaurantes</LinkHeader>
        <img src={logo} alt="Efood" />
        <LinkHeader href="#">0 produto(s) no carrinho</LinkHeader>
      </HeaderBar>
    </Container>
    <Banner />
    <ProductList cardapios={[]} />
  </>
)

export default Restaurant
