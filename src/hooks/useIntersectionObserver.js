import { useEffect, useRef, useState } from 'react'

/**
 * Хук для отслеживания видимости элемента в viewport
 * Использует Intersection Observer API для определения, когда элемент попадает в область видимости
 * 
 * @param {Object} options - Опции для Intersection Observer
 * @param {number} options.threshold - Порог видимости (0-1), по умолчанию 0.1 (10%)
 * @param {string} options.rootMargin - Отступы для области видимости, по умолчанию '0px'
 * @param {boolean} options.once - Анимировать только один раз (true) или каждый раз при появлении (false)
 * @returns {Array} [elementRef, isVisible] - ref для элемента и флаг видимости
 */
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Создаём Intersection Observer для отслеживания видимости элемента
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Элемент виден - устанавливаем флаг видимости
          setIsVisible(true)
          // Если опция once включена, прекращаем наблюдение после первого появления
          if (options.once !== false) {
            observer.unobserve(element)
          }
        } else if (!options.once) {
          // Элемент скрыт - сбрасываем флаг (только если once = false)
          setIsVisible(false)
        }
      },
      {
        threshold: options.threshold || 0.1, // Элемент считается видимым при 10% видимости
        rootMargin: options.rootMargin || '0px', // Отступы для области видимости
      }
    )

    // Начинаем наблюдение за элементом
    observer.observe(element)

    // Очистка при размонтировании компонента
    return () => {
      observer.unobserve(element)
    }
  }, [options.threshold, options.rootMargin, options.once])

  return [elementRef, isVisible]
}

