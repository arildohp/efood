import { Details } from '../../pages/Homes'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  cardapios: Details[]
}

const ProductList = ({ cardapios }: Props) => {
  const getDetailTags = (details: Details) => {
    return details.destacado ? [details.destacado] : []
  }

  const destaques = cardapios.flatMap(getDetailTags)

  return (
    <Container>
      <div className="container2">
        <List>
          {cardapios.map((details) => (
            <Product
              key={details.id}
              title={details.titulo}
              pais={details.tipo}
              descryption={details.descricao}
              image={details.capa}
              avaliacao={details.avaliacao}
              destaques={details.destacado ? ['Destaque'] : []}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
