import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'

const heroContent = {
  welcomeLine: 'Добро пожаловать в',
  clubName: 'Ante Club',
  tagline: 'Первое место в Южной столице для игры в спортивный покер',
  description:
    'Вы платите не за фишки, а за хорошее времяпрепровождение и профессиональную атмосферу классического техасского холдема.',
  primaryCta: 'Предстоящие турниры',
  secondaryCta: 'Присоединиться к клубу',
}

/**
 * Главный баннер (Hero секция) на главной странице
 * Содержит приветствие, название клуба и призыв к действию
 * Имеет анимацию появления при загрузке страницы
 */
const Hero = () => {
  // Состояние для анимации появления
  const [isVisible, setIsVisible] = useState(false)

  // Анимация запускается сразу при монтировании компонента
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-8 md:pt-12">
      {/* Фоновый градиент с паттерном карт */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/30 z-0">
        <div className="absolute inset-0 opacity-10">
          {/* SVG паттерн карт в качестве фонового декора */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2FyZHMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMTAgMTBoODB2ODBIMTB6IiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGFmMzciIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2NhcmRzKSIvPjwvc3ZnPg==')]"></div>
        </div>
      </div>
      
      {/* Основной контент с анимацией появления */}
      <div 
        className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center"
        style={{
          opacity: isVisible ? 1 : 0, // Плавное появление
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)', // Смещение снизу вверх с масштабированием
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        {/* Карточка с эффектом стекла (glassmorphism) */}
        <div className="glass-light rounded-2xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
          {/* Заголовки */}
          <div className="space-y-4 md:space-y-5">
            <p className="text-2xl md:text-3xl lg:text-4xl text-textSecondary font-normal">
              {heroContent.welcomeLine}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold">
              {/* Название клуба с градиентным цветом и эффектом свечения */}
              <span className="text-ante-gradient py-2 md:py-3 inline-block animate-letters">
                {heroContent.clubName.split('').map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white font-normal max-w-3xl mx-auto leading-relaxed">
              {heroContent.tagline}
            </p>
          </div>
          {/* Описание */}
          <p className="text-base md:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto mt-8 md:mt-10 mb-8 md:mb-12 leading-relaxed">
            {heroContent.description}
          </p>
          {/* Кнопки призыва к действию */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="primary">
              {heroContent.primaryCta}
            </Button>
            <Button size="lg" variant="secondary">
              {heroContent.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

