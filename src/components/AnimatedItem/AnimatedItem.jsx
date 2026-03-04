import React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

/**
 * Компонент для анимации отдельных элементов (карточек, изображений) при прокрутке
 * Используется для последовательного появления элементов в списках/сетках
 * 
 * @param {ReactNode} children - Дочерние элементы для анимации
 * @param {number} delay - Задержка анимации в миллисекундах (для последовательного появления)
 * @param {string} className - Дополнительные CSS классы
 */
const AnimatedItem = ({ 
  children, 
  delay = 0,
  className = '',
  ...props 
}) => {
  // Отслеживаем видимость элемента
  const [ref, isVisible] = useIntersectionObserver({ 
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px' // Анимация начинается за 30px до появления
  })

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: 'opacity, transform',
        opacity: isVisible ? 1 : 0, // Плавное появление
        // Смещение снизу вверх с небольшим масштабированием
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        // Плавный переход с задержкой для последовательного появления
        transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default AnimatedItem

