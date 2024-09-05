import { Details } from '../../Homes'
import Products from '../Products'
import Modal from '../Modal'

import { Container, List, Containers } from './styles'

export type Props = {
  cardapios: Details[]
}

const ProductList = ({ cardapios }: Props) => (
  <Container>
    <Containers>
      <List>
        {cardapios.map((details) => (
          <Products
            key={details.cardapio.id}
            nome={details.cardapio.nome}
            descricao={details.cardapio.descricao}
            foto={details.cardapio.foto}
          />
        ))}
      </List>
    </Containers>
    <Modal name={'Pizza Marguerita'} />
  </Container>
)

export default ProductList
