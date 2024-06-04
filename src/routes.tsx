import { Routes, Route } from 'react-router-dom'

import Home from './pages/Homes'
import Restaurant from './pages/Restaurant'
import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant" element={<Restaurant />} />
    <Route path="/product" element={<Product />} />
  </Routes>
)
