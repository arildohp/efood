import { useEffect, useState } from 'react'

import ProductList from '../../components/ProductList'

export type Details = {
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    photo: string
    prices: string
    id: number
    name: string
    description2: string
    porsion: string
  }
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Details[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  })

  return (
    <>
      <ProductList cardapios={restaurantes} />
    </>
  )
}

export default Home
