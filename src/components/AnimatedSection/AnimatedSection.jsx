import React from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

/**
 * Компонент для анимации больших секций при прокрутке
 * Применяет эффект появления с плавным смещением и изменением масштаба
 * 
 * @param {ReactNode} children - Дочерние элементы для анимации
 * @param {number} delay - Задержка анимации в миллисекундах
 * @param {string} className - Дополнительные CSS классы
 * @param {string} direction - Направление анимации: 'up', 'down', 'left', 'right'
 */
const AnimatedSection = ({ 
  children, 
  delay = 0,
  className = '',
  direction = 'up',
  ...props 
}) => {
  // Отслеживаем видимость секции (срабатывает когда 10% секции видно)
  const [ref, isVisible] = useIntersectionObserver({ 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Анимация начинается за 50px до появления в viewport
  })

  // Определяем начальное положение элемента в зависимости от направления анимации
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translateY(30px) scale(0.95)' // Смещение снизу вверх
        case 'down':
          return 'translateY(-30px) scale(0.95)' // Смещение сверху вниз
        case 'left':
          return 'translateX(-30px) scale(0.95)' // Смещение справа налево
        case 'right':
          return 'translateX(30px) scale(0.95)' // Смещение слева направо
        default:
          return 'translateY(30px) scale(0.95)'
      }
    }
    // Финальное положение - на месте, в полном масштабе
    return 'translateY(0) scale(1)'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0, // Плавное изменение прозрачности
        transform: getTransform(), // Плавное смещение и масштабирование
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default AnimatedSection

