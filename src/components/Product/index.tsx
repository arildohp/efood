import Tag from '../Tag'
import { Body, Card, Titulo, Descricao } from './styles'

const Product = () => (
  <Body>
    <Card>
      <img src="//placehold.it/472x217" />
      <div className="container">
        <Titulo>nome do prato</Titulo>
        <img src="//placehold.it/55x21" />
      </div>
      <Descricao>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </Descricao>
      <button>saiba mais</button>
    </Card>
  </Body>
)

export default Product
