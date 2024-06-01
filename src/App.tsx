import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import Home from './pages/Homes'
import Restaurant from './pages/Restaurant'
import Footer from './components/Footer'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant" element={<Restaurant />} />
  </Routes>
)

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
