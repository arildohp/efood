import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import Home from './pages/Homes'
import Restaurant from './pages/Restaurant'
import Footer from './components/Footer'
import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Header />
          <Home />
        </>
      }
    />
    <Route path="/restaurant" element={<Restaurant />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Rotas />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
