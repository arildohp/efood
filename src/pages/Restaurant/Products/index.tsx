import { Fundo, Cards, ListaCards, Titulo, Botao } from './styles'
import pizza from '../../../assets/image/pizza.png'
import { Container } from '../../../styles'

const Products = () => (
  <Fundo>
    <Cards>
      <div>
        <img src={pizza} />
        <Titulo> Pizza Marguerita</Titulo>
        <p>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          derretida, derretida, derretida, derretida, derretida, fresco e um
          azeite. Sabor simplicidade!
        </p>
        <Botao>Adicionar ao carrinho</Botao>
      </div>
    </Cards>
  </Fundo>
)

export default Products
