import React from 'react'

/**
 * Компонент-обёртка для секций страницы
 * Обеспечивает единообразное оформление заголовков и отступов
 * Автоматически выделяет первое слово заголовка золотым цветом
 * 
 * @param {ReactNode} children - Содержимое секции
 * @param {string} title - Заголовок секции (первое слово будет золотым)
 * @param {string} subtitle - Подзаголовок секции
 * @param {string} className - Дополнительные CSS классы для секции
 * @param {string} containerClassName - Дополнительные CSS классы для контейнера
 * @param {string} id - ID секции для якорных ссылок
 */
const Section = ({ 
  children, 
  title, 
  subtitle, 
  className = '', 
  containerClassName = '',
  id 
}) => {
  return (
    <section id={id} className={`py-12 md:py-16 lg:py-20 ${className}`}>
      <div className={`container mx-auto px-4 md:px-6 lg:px-8 ${containerClassName}`}>
        {/* Заголовок и подзаголовок секции (если указаны) */}
        {(title || subtitle) && (
          <div className="mb-8 md:mb-12 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 md:mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-textSecondary text-base md:text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {/* Содержимое секции */}
        {children}
      </div>
    </section>
  )
}

export default Section

