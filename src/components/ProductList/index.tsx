import Product from '../Product'

import { Container, List } from './styles'

const ProductList = () => (
  <Container>
    <div className="container2">
      <List>
        <Product
          title={'Hioki Sushi '}
          infos={['Japonesa']}
          descryption={'teste'}
          image={'//placehold.it/472x217'}
          imageNota={'//placehold.it/55x21'}
          destaques={'destaque da semana'}
        />
        <Product
          title={'La Dolce Vita Trattoria'}
          infos={['Italiana']}
          descryption={'teste'}
          image={'//placehold.it/472x217'}
          imageNota={'//placehold.it/55x21'}
        />
        <Product
          title={'Hioki Sushi '}
          infos={['Japonesa']}
          descryption={'teste'}
          image={'//placehold.it/472x217'}
          imageNota={'//placehold.it/55x21'}
        />
        <Product
          title={'La Dolce Vita Trattoria'}
          infos={['Italiana']}
          descryption={'teste'}
          image={'//placehold.it/472x217'}
          imageNota={'//placehold.it/55x21'}
        />
        <Product
          title={'La Dolce Vita Trattoria'}
          infos={['Italiana']}
          descryption={'teste'}
          image={'//placehold.it/472x217'}
          imageNota={'//placehold.it/55x21'}
        />
        <Product
          title={'La Dolce Vita Trattoria'}
          infos={['Italiana']}
          descryption={'teste'}
          image={'//placehold.it/472x217'}
          imageNota={'//placehold.it/55x21'}
        />
      </List>
    </div>
  </Container>
)

export default ProductList
