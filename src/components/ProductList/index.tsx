import Cardapio from '../../models/Cardapio'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  cardapios: Cardapio[]
}

const ProductList = ({ cardapios }: Props) => (
  <Container>
    <div className="container2">
      <List>
        {cardapios.map((cardapio) => (
          <Product
            key={cardapio.id}
            title={cardapio.title}
            infos={cardapio.infos}
            descryption={cardapio.descryption}
            image={cardapio.image}
            imageNota={cardapio.imageNota}
            destaques={cardapio.destaque}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
