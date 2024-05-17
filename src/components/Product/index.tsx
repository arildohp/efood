import Tag from '../Tag'
import {
  Informacao,
  Card,
  Titulo,
  Descricao,
  Botao,
  Border,
  Infos
} from './styles'

type Props = {
  title: string
  infos: string[]
  descryption: string
  image: string
  imageNota: string
  destaques?: string
}

const Product = ({
  title,
  infos,
  descryption,
  image,
  imageNota,
  destaques
}: Props) => (
  <Card>
    <Informacao>
      <img src={image} alt={title} />
      <Infos>
        <Tag>{destaques}</Tag>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Border>
        <div className="container">
          <Titulo>{title}</Titulo>
          <img src={imageNota} />
        </div>
        <Descricao>{descryption}</Descricao>
        <Botao>Saiba mais</Botao>
      </Border>
    </Informacao>
  </Card>
)

export default Product
