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
  pais: string
  descryption: string
  image: string
  avaliacao: string
  destaques: string[]
}

const Product = ({
  title,
  pais,
  descryption,
  image,
  avaliacao,
  destaques
}: Props) => (
  <Card>
    <Informacao>
      <img src={image} alt={title} />
      <Infos>
        <div>{pais && <Tag>{pais}</Tag>}</div>
        {destaques.length > 0 && (
          <div>
            {destaques.map((Tag) => (
              <span key={Tag}>{Tag}</span>
            ))}
          </div>
        )}
      </Infos>
      <Border>
        <div className="container">
          <Titulo>{title}</Titulo>
          <h3>{avaliacao}</h3>
        </div>
        <Descricao>{descryption}</Descricao>
        <Link to={'/restaurant/:id'}>
          <Botao>Saiba mais</Botao>
        </Link>
      </Border>
    </Informacao>
  </Card>
)

export default Product
