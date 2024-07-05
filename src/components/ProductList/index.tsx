import { Details } from '../../pages/Homes'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  cardapios: Details[]
}

const ProductList = ({ cardapios }: Props) => {
  const getDetailTags = (details: Details) => {
    return details.emphasis ? [details.emphasis] : []
  }

  const destaques = cardapios.flatMap(getDetailTags)

  return (
    <Container>
      <div className="container2">
        <List>
          {cardapios.map((details) => (
            <Product
              key={details.id}
              title={details.title}
              pais={details.type}
              descryption={details.description1}
              image={details.cover}
              imageNota={details.avaliation}
              destaques={
                destaques.includes(details.emphasis)
                  ? [details.emphasis ?? '']
                  : []
              }
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
