import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-dark-300 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tournaments" className="text-textMuted hover:text-gold text-sm transition-colors">
                  Турниры
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-textMuted hover:text-gold text-sm transition-colors">
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-textMuted hover:text-gold text-sm transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-textMuted hover:text-gold text-sm transition-colors">
                  Правила
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-textMuted text-sm">
              <li>Email: <a href="mailto:antepokerclub@gmail.com" className="text-gold hover:text-gold-light transition-colors">antepokerclub@gmail.com</a></li>
              <li>Телефон: </li>
              <li>Местоположение: Ростов-на-Дону</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-textMuted hover:text-gold transition-colors" aria-label="Telegram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.12l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
              <a href="https://vk.com/anteclub_poker" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-gold transition-colors font-semibold" aria-label="VK">
                VK
              </a>
              <a href="#" className="text-textMuted hover:text-gold transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

