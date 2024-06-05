import Products from '../Products'
import Modal from '../Modal'
import Pizza from '../../../assets/image/pizza.png'
import close from '../../../assets/image/close 1.png'

import { Container, List, Containers } from './styles'

const ProductList = () => (
  <Container>
    <Containers>
      <List>
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </List>
    </Containers>
    <Modal />
  </Container>
)

export default ProductList
