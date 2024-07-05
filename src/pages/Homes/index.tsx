import { useEffect, useState } from 'react'

import ProductList from '../../components/ProductList'

export type Details = {
  id: number
  title: string
  emphasis: string
  type: string
  avaliation: string
  description1: string
  cover: string
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
