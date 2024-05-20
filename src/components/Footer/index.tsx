import { Container } from '../../styles'
import logo from '../../assets/image/logo.svg'
import redesSociais from '../../assets/image/redesSociais.png'
import { Rodape, Informacao } from './styles'

const Footer = () => (
  <Rodape>
    <Container>
      <Informacao>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={redesSociais} alt="" />
        </div>
        <div>
          <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.{' '}
          </p>
        </div>
      </Informacao>
    </Container>
  </Rodape>
)

export default Footer
