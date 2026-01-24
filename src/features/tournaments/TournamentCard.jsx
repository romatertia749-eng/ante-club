import React from 'react'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'

const TournamentCard = ({ tournament }) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-display font-semibold text-white">
            {tournament.name}
          </h3>
          {tournament.badge && (
            <span className="px-2 py-1 bg-gold text-black text-xs font-semibold rounded">
              {tournament.badge}
            </span>
          )}
        </div>
        
        <div className="space-y-2 mb-4 text-sm text-textSecondary">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{tournament.date}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{tournament.time}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gold font-semibold">Взнос: {tournament.buyIn}</span>
          </div>
          <div className="pt-2 border-t border-dark-300 text-xs">
            <p className="text-textMuted">Стартовый стек: {tournament.stack}</p>
            <p className="text-textMuted">Блайнды: {tournament.blinds}</p>
          </div>
        </div>
      </div>
      
      <Button 
        variant="secondary" 
        size="sm" 
        className="w-full mt-auto"
      >
        {tournament.registered ? 'Подробнее' : 'Зарегистрироваться'}
      </Button>
    </Card>
  )
}

export default TournamentCard

