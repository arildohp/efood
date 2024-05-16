import Tag from '../Tag'
import { Informacao, Card, Titulo, Descricao, Botao } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/472x217" />
    <Informacao>
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
      <Botao>saiba mais</Botao>
    </Informacao>
  </Card>
)

export default Product
