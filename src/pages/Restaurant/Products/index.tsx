import { Fundo, Cards, ListaCards, Titulo, Botao } from './styles'
import pizza from '../../../assets/image/pizza.png'
import { useState } from 'react'

const Products = () => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <Fundo>
      <Cards>
        <div>
          <img src={pizza} />
          <Titulo> Pizza Marguerita</Titulo>
          <p>
            A clássica Marguerita: molho de tomate suculento, mussarela
            derretida, manjericão fresco e um toque de azeite. Sabor e
            simplicidade!
          </p>
          <Botao onClick={() => setModalEstaAberto(true)}>Mais detalhes</Botao>
        </div>
      </Cards>
    </Fundo>
  )
}

export default Products
