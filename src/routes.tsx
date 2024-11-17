import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import PerfilRestaurant from './pages/Perfil'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil/:id" element={<PerfilRestaurant />} />
    </Routes>
  )
}

export default Rotas
