import { Imagem, Italy, Dolce } from './styles'

import bannerImg from '../../assets/image/banner.png'
import { Container } from '../../styles'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container>
      <div>
        <Italy>Italiana</Italy>
      </div>
      <div>
        <Dolce>La Dolce Vita Trattoria</Dolce>
      </div>
    </Container>
  </Imagem>
)

export default Banner
