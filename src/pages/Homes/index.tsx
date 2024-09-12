import { useEffect, useState } from 'react'

import ProductList from '../../components/ProductList'
import { useParams } from 'react-router-dom'

export type Details = {
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: string
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const { id } = useParams()
  const [restaurantes, setRestaurantes] = useState<Details[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [id])

  return (
    <>
      <ProductList cardapios={restaurantes} />
    </>
  )
}

export default Home
