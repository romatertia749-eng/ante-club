import React from 'react'
import Section from '../../components/Section/Section'
import TournamentCard from './TournamentCard'
import AnimatedItem from '../../components/AnimatedItem/AnimatedItem'

const mockTournaments = [
  {
    id: 1,
    name: 'Еженедельный чемпионат',
    date: 'Пятница, 15 марта',
    time: '19:00',
    buyIn: '700руб.',
    stack: '20,000',
    blinds: '25/50',
    badge: 'Популярный',
    registered: false,
  },
  {
    id: 2,
    name: 'Ежемесячный Deep Stack',
    date: 'Суббота, 23 марта',
    time: '18:00',
    buyIn: '800руб.',
    stack: '30,000',
    blinds: '25/50',
    badge: null,
    registered: false,
  },
  {
    id: 3,
    name: 'Для начинающих',
    date: 'Воскресенье, 17 марта',
    time: '14:00',
    buyIn: '500руб.',
    stack: '15,000',
    blinds: '25/50',
    badge: 'Новый',
    registered: false,
  },
]

const TournamentsPreview = () => {
  return (
    <Section 
      title="Предстоящие турниры"
      subtitle="Присоединяйтесь к нашим следующим живым турнирам"
      className="bg-dark-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTournaments.map((tournament, index) => (
          <AnimatedItem key={tournament.id} delay={index * 100}>
            <TournamentCard tournament={tournament} />
          </AnimatedItem>
        ))}
      </div>
      <div className="text-center mt-8">
        <a 
          href="/tournaments" 
          className="text-gold hover:text-gold-light font-medium transition-colors"
        >
          Все турниры →
        </a>
      </div>
    </Section>
  )
}

export default TournamentsPreview

