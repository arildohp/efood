import Product from '../Product'

import { Container, List } from './styles'

const ProductList = () => (
  <Container>
    <div className="container2">
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)

export default ProductList
