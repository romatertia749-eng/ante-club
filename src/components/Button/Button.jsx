import React from 'react'

/**
 * Универсальный компонент кнопки
 * Поддерживает несколько вариантов стилей и размеров
 * 
 * @param {ReactNode} children - Текст или содержимое кнопки
 * @param {string} variant - Вариант стиля: 'primary' (золотая), 'secondary' (с рамкой), 'outline' (прозрачная)
 * @param {string} size - Размер: 'sm', 'md', 'lg'
 * @param {string} className - Дополнительные CSS классы
 * @param {Function} onClick - Обработчик клика
 * @param {string} type - Тип кнопки (button, submit, reset)
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  type = 'button',
  ...props 
}) => {
  // Базовые стили для всех кнопок: плавные переходы и фокус-состояние
  const baseStyles = 'font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black'
  
  // Варианты стилей кнопок
  const variants = {
    primary: 'bg-gold text-black hover:bg-gold-light hover:shadow-lg hover:shadow-gold/50 active:bg-gold-dark', // Золотая кнопка
    secondary: 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black hover:border-gold-light', // Прозрачная с золотой рамкой
    outline: 'bg-transparent border border-white/20 text-white hover:border-gold hover:text-gold', // Прозрачная с белой рамкой
  }
  
  // Размеры кнопок
  const sizes = {
    sm: 'px-4 py-2 text-sm', // Маленькая
    md: 'px-6 py-3 text-base', // Средняя (по умолчанию)
    lg: 'px-8 py-4 text-lg', // Большая
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

