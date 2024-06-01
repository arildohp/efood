import { Container } from '../../styles'
import logo from '../../assets/image/logo.svg'
import redesSociais from '../../assets/image/redesSociais.png'
import {
  Rodape,
  Informacao,
  Descricao,
  Logo,
  RedesSociais,
  Info
} from './styles'

const Footer = () => (
  <Rodape>
    <Container>
      <Informacao>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <RedesSociais>
          <img className="image" src={redesSociais} alt="" />
        </RedesSociais>
        <Info>
          <Descricao>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.{' '}
          </Descricao>
        </Info>
      </Informacao>
    </Container>
  </Rodape>
)

export default Footer
