import { Container } from '../../styles'
import logo from '../../assets/image/logo.svg'
import redesSociais from '../../assets/image/redesSociais.png'
import { Rodape, Informacao, Descricao } from './styles'

const Footer = () => (
  <Rodape>
    <Container>
      <Informacao>
        <li>
          <img src={logo} alt="" />
        </li>
        <li>
          <img className="image" src={redesSociais} alt="" />
        </li>
        <li>
          <Descricao>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.{' '}
          </Descricao>
        </li>
      </Informacao>
    </Container>
  </Rodape>
)

export default Footer
