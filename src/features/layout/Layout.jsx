import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground'

/**
 * Основной layout компонент
 * Содержит общую структуру всех страниц:
 * - Header (навигация) - всегда видим сверху
 * - Main (контент страницы) - меняется в зависимости от маршрута
 * - Footer (подвал) - всегда видим снизу
 * 
 * Outlet - это место, где React Router вставляет содержимое текущего маршрута
 */
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Шапка сайта с навигацией */}
        <Header />
        {/* Основной контент страницы (заменяется в зависимости от маршрута) */}
        <main className="flex-grow">
          <Outlet />
        </main>
        {/* Подвал сайта с контактами и ссылками */}
        <Footer />
      </div>
    </div>
  )
}

export default Layout

