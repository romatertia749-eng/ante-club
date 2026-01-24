import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../../components/Button/Button'
import logo from '../../assets/images/logo/ante_black.jpg'

/**
 * Компонент шапки сайта
 * Содержит навигацию, логотип и мобильное меню
 * Активная страница выделяется золотым фоном
 */
const Header = () => {
  // Состояние для открытия/закрытия мобильного меню
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Получаем текущий путь для определения активной страницы
  const location = useLocation()

  /**
   * Проверяет, является ли путь активным (текущей страницей)
   * @param {string} path - Путь для проверки
   * @returns {boolean} - true если путь активен
   */
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' // Для главной страницы точное совпадение
    }
    return location.pathname.startsWith(path) // Для остальных - начало пути
  }

  /**
   * Компонент ссылки навигации с автоматическим выделением активной страницы
   */
  const NavLink = ({ to, children }) => {
    const active = isActive(to)
    return (
      <Link 
        to={to} 
        className={`px-3 py-2 rounded transition-all ${
          active 
            ? 'bg-gold text-black font-semibold' // Активная страница - золотой фон
            : 'text-white hover:text-gold' // Неактивная - белый текст, золотой при наведении
        }`}
      >
        {children}
      </Link>
    )
  }

  return (
    <>
      {/* Основная шапка с навигацией */}
      <header className="glass border-b border-dark-300 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Логотип и название клуба */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Логотип Ante Club" 
                className="h-12 md:h-16 w-auto"
                style={{ 
                  mixBlendMode: 'screen',
                  backgroundColor: 'transparent'
                }}
              />
              <span className="text-xl md:text-2xl font-display font-bold text-ante-gradient animate-letters">
                {'Ante Club'.split('').map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </Link>

            {/* Десктопная навигация (скрыта на мобильных) */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <NavLink to="/">Главная</NavLink>
              <NavLink to="/tournaments">Турниры</NavLink>
              <NavLink to="/gallery">Галерея</NavLink>
              <NavLink to="/news">Новости</NavLink>
              <NavLink to="/rules">Правила</NavLink>
              <Button size="sm" variant="outline">
                Вход
              </Button>
            </nav>

            {/* Кнопка открытия мобильного меню (видна только на мобильных) */}
            <button
              className="md:hidden text-white hover:text-gold transition-colors z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Переключить меню"
            >
              {/* Иконка гамбургера или крестика в зависимости от состояния */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное меню (открывается overlay и выезжает меню) */}
      {isMenuOpen && (
        <>
          {/* Затемнённый фон с размытием (перекрывает контент) */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)} // Закрытие при клике на фон
          />
          {/* Мобильное меню (фиксированное, перекрывает контент) */}
          <nav className="fixed top-16 left-0 right-0 glass border-b border-dark-300 z-50 md:hidden animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/" 
                  className={`px-3 py-2 rounded transition-all ${
                    isActive('/') 
                      ? 'bg-gold text-black font-semibold' 
                      : 'text-white hover:text-gold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Главная
                </Link>
                <Link 
                  to="/tournaments" 
                  className={`px-3 py-2 rounded transition-all ${
                    isActive('/tournaments') 
                      ? 'bg-gold text-black font-semibold' 
                      : 'text-white hover:text-gold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Турниры
                </Link>
                <Link 
                  to="/gallery" 
                  className={`px-3 py-2 rounded transition-all ${
                    isActive('/gallery') 
                      ? 'bg-gold text-black font-semibold' 
                      : 'text-white hover:text-gold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Галерея
                </Link>
                <Link 
                  to="/news" 
                  className={`px-3 py-2 rounded transition-all ${
                    isActive('/news') 
                      ? 'bg-gold text-black font-semibold' 
                      : 'text-white hover:text-gold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Новости
                </Link>
                <Link 
                  to="/rules" 
                  className={`px-3 py-2 rounded transition-all ${
                    isActive('/rules') 
                      ? 'bg-gold text-black font-semibold' 
                      : 'text-white hover:text-gold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Правила
                </Link>
                <Button size="sm" variant="outline" className="w-full mt-2">
                  Вход
                </Button>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  )
}

export default Header

