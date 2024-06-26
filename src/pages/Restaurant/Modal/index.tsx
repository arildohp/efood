import Pizza from '../../../assets/image/pizza.png'
import close from '../../../assets/image/close 1.png'

import { Modall, Botao, Information, ModalContent } from './styles'
import { Container } from '../styles'
import { useState } from 'react'

type Props = {
  name: string
}

export const Modal = ({ name }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <Modall className={modalEstaAberto ? 'visible' : ''}>
      <Container>
        <ModalContent>
          <header>
            <img src={close} />
          </header>
          <Information>
            <img src={Pizza} />
            <div>
              <h4>{name}</h4>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião. <br />
                <br />
                Serve: de 2 a 3 pessoas
              </p>
              <Botao> Adicionar ao carrinho - R$ 60,90</Botao>
            </div>
          </Information>
        </ModalContent>
      </Container>
      <div className="overlay"></div>
    </Modall>
  )
}

export default Modal
