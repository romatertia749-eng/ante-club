import { Routes, Route } from 'react-router-dom'
import Layout from './features/layout/Layout'
import Home from './features/home/Home'
import Rules from './features/rules/Rules'

/**
 * Главный компонент приложения
 * Настраивает маршрутизацию с использованием React Router
 * Layout содержит общие элементы (Header, Footer) для всех страниц
 */
function App() {
  return (
    <Routes>
      {/* Layout оборачивает все страницы и содержит Header и Footer */}
      <Route path="/" element={<Layout />}>
        {/* Главная страница */}
        <Route index element={<Home />} />
        {/* Страница с правилами клуба */}
        <Route path="rules" element={<Rules />} />
      </Route>
    </Routes>
  )
}

export default App

