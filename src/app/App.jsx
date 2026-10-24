
import { Routes, Route } from 'react-router'
import '../estilos/App.css'

import PublicLayout from '../componentes/PublicLayout'
import AdminLayout from '../componentes/AdminLayout'

import HomePage from '../componentes/HomePage'
import AboutPage from '../componentes/AboutPage'
import AdminDashboard from '../componentes/AdminDashboard'

function App() {
  return (
    <Routes>

      {/* Rutas públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      {/* Rutas administrativas */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />
      </Route>

    </Routes>
  )
}

export default App

