import React, { useState } from 'react'
import Section from '../../components/Section/Section'
import AnimatedItem from '../../components/AnimatedItem/AnimatedItem'

const mockImages = [
  { id: 1, title: 'Турнирная игра', placeholder: 'Изображение 1' },
  { id: 2, title: 'Финальный стол', placeholder: 'Изображение 2' },
  { id: 3, title: 'Игроки за столом', placeholder: 'Изображение 3' },
  { id: 4, title: 'Фишки и карты', placeholder: 'Изображение 4' },
  { id: 5, title: 'Победитель турнира', placeholder: 'Изображение 5' },
  { id: 6, title: 'Атмосфера клуба', placeholder: 'Изображение 6' },
  { id: 7, title: 'Игровая сессия', placeholder: 'Изображение 7' },
  { id: 8, title: 'Турнирный зал', placeholder: 'Изображение 8' },
]

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 4
  const totalPages = Math.ceil(mockImages.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <Section 
      title="Атмосфера клуба"
      subtitle="С наших мероприятий"
      className="bg-dark-50"
    >
      <div className="relative">
        {/* Карусель */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div 
                key={pageIndex}
                className="min-w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-4 gap-4 px-2"
              >
                {mockImages
                  .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                  .map((image, index) => (
                    <AnimatedItem key={image.id} delay={index * 50}>
                      <div
                        className="group relative aspect-square bg-dark-100 border border-dark-300 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-dark-200 to-dark-300 flex items-center justify-center">
                          <div className="text-center p-4">
                            <svg className="w-12 h-12 mx-auto mb-2 text-gold opacity-30 group-hover:opacity-50 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-textMuted text-xs">{image.placeholder}</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                      </div>
                    </AnimatedItem>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Кнопки навигации */}
        {totalPages > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-0 bottom-0 w-12 md:w-16 z-10 bg-gradient-to-r from-dark-200/95 to-transparent backdrop-blur-sm flex items-center justify-start pl-2 md:pl-4 transition-all hover:from-dark-300/95 group"
              aria-label="Предыдущий слайд"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gold/20 group-hover:bg-gold/30 border border-gold/50 transition-all group-hover:scale-110">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-0 bottom-0 w-12 md:w-16 z-10 bg-gradient-to-l from-dark-200/95 to-transparent backdrop-blur-sm flex items-center justify-end pr-2 md:pr-4 transition-all hover:from-dark-300/95 group"
              aria-label="Следующий слайд"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gold/20 group-hover:bg-gold/30 border border-gold/50 transition-all group-hover:scale-110">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </>
        )}

        {/* Индикаторы */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gold w-8'
                    : 'bg-dark-300 w-2 hover:bg-gold/50'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}

export default GallerySection

