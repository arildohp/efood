import { Fundo, Cards, ListaCards, Titulo, Botao } from './styles'
import { useState } from 'react'

type Props = {
  nome: string
  descricao: string
  foto: string
}

const Products = ({ nome, descricao, foto }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <Fundo>
      <Cards>
        <div>
          <img src={foto} />
          <Titulo>{nome}</Titulo>
          <p>{descricao}</p>
          <Botao onClick={() => setModalEstaAberto(true)}>Mais detalhes</Botao>
        </div>
      </Cards>
    </Fundo>
  )
}

export default Products
