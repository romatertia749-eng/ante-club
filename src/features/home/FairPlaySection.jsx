import React from 'react'
import Section from '../../components/Section/Section'
import AnimatedItem from '../../components/AnimatedItem/AnimatedItem'

const fairPlaySectionContent = {
  title: 'Наши ценности',
  subtitle: 'Что отличает Ante Club',
  features: [
    {
      title: 'Честная игра',
      description: 'Строгие правила и стандарты честной игры для всех турниров',
    },
    {
      title: 'Только турниры',
      description: 'Исключительно живые турниры—без кеш-игр и онлайн-игры',
    },
    {
      title: 'Дружелюбное сообщество',
      description: 'Гостеприимная атмосфера для игроков всех уровней',
    },
    {
      title: 'Чёткие правила',
      description: 'Прозрачные правила турниров и структура',
    },
  ],
}

const featureIcons = [
  (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
]

const FairPlaySection = () => {
  return (
    <Section 
      title={fairPlaySectionContent.title}
      subtitle={fairPlaySectionContent.subtitle}
      className="bg-transparent"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {fairPlaySectionContent.features.map((feature, index) => (
          <AnimatedItem key={index} delay={index * 80}>
            <div 
              className="text-center p-6 glass-light rounded-lg hover:border-gold transition-all duration-300 h-full flex flex-col"
            >
            <div className="text-gold mb-4 flex justify-center">
              {featureIcons[index]}
            </div>
            <h3 className="text-white font-display font-semibold text-lg mb-2">
              {feature.title}
            </h3>
            <p className="text-textSecondary text-sm flex-grow">
              {feature.description}
            </p>
          </div>
          </AnimatedItem>
        ))}
      </div>
    </Section>
  )
}

export default FairPlaySection

