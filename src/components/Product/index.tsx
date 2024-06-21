import { Link } from 'react-router-dom'
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
        <div>{destaques && <Tag>{destaques}</Tag>}</div>
        <div>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </div>
      </Infos>
      <Border>
        <div className="container">
          <Titulo>{title}</Titulo>
          <img src={imageNota} />
        </div>
        <Descricao>{descryption}</Descricao>
        <Link to={'/restaurant'}>
          <Botao>Saiba mais</Botao>
        </Link>
      </Border>
    </Informacao>
  </Card>
)

export default Product
