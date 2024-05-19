import Products from '../Products'

import { Container, List, Containers } from './styles'

const ProductList = () => (
  <Container>
    <Containers>
      <List>
        <Products />
        <Products />
        <Products />
      </List>
    </Containers>
  </Container>
)

export default ProductList
