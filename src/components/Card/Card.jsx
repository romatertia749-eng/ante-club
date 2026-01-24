import React from 'react'

/**
 * Универсальный компонент карточки
 * Использует эффект глассморфизма (полупрозрачный фон с размытием)
 * 
 * @param {ReactNode} children - Содержимое карточки
 * @param {string} className - Дополнительные CSS классы
 * @param {boolean} hover - Включить эффекты при наведении (золотая рамка, свечение)
 */
const Card = ({ children, className = '', hover = false, ...props }) => {
  // Базовые стили: эффект стекла, скругление, отступы, плавные переходы
  const baseStyles = 'glass-light rounded-lg p-4 transition-all duration-300'
  // Стили для hover-эффекта: золотая рамка, свечение, изменение прозрачности
  const hoverStyles = hover ? 'hover:border-gold hover:shadow-lg hover:shadow-gold/20 hover:bg-opacity-40 cursor-pointer' : ''
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card

