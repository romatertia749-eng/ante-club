import React from 'react'

/**
 * Компонент-обёртка для секций страницы
 * Обеспечивает единообразное оформление заголовков и отступов
 *
 * @param {ReactNode} children - Содержимое секции
 * @param {string} title - Заголовок секции
 * @param {string} className - Дополнительные CSS классы для секции
 * @param {string} containerClassName - Дополнительные CSS классы для контейнера
 * @param {string} id - ID секции для якорных ссылок
 */
const Section = ({ 
  children, 
  title, 
  className = '', 
  containerClassName = '',
  id 
}) => {
  return (
    <section id={id} className={`py-10 md:py-14 lg:py-18 ${className}`}>
      <div className={`container mx-auto px-4 md:px-6 lg:px-8 ${containerClassName}`}>
        {title && (
          <div className="mb-8 md:mb-12 text-center">
            <div className="inline-block max-w-3xl mx-auto glass-light rounded-2xl px-4 py-6 md:px-6 md:py-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 md:mb-4">
                {title}
              </h2>
            </div>
          </div>
        )}
        {/* Содержимое секции */}
        <div className="relative glass-light rounded-3xl px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold/5 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gold/5 blur-3xl" />
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section

