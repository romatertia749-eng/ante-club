import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'

const rulesCalloutContent = {
  headingPrefix: 'Прочитайте правила',
  headingClubName: 'Ante Club',
  description:
    'Клуб работает в формате спортивного покера: только живые турниры, без кеш-игр и онлайн-гемблинга. Мы обеспечиваем честную игру, прозрачные правила и справедливые условия для всех участников.',
  buttonText: 'Посмотреть правила клуба',
}

const RulesCallout = () => {
  return (
    <AnimatedSection className="py-8 md:py-12 lg:py-16" delay={100}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative glass-strong rounded-lg p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gold opacity-5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold opacity-5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-block mb-4">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-gold mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6">
              <span className="text-gold text-glow">
                {rulesCalloutContent.headingPrefix}
              </span>
              <br />
              <span className="text-ante-gradient">
                {rulesCalloutContent.headingClubName}
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed">
              {rulesCalloutContent.description}
            </p>
            
            <Link to="/rules">
              <Button size="lg" variant="primary" className="shadow-lg shadow-gold/30 hover:shadow-gold/50">
                {rulesCalloutContent.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default RulesCallout

