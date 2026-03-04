import React from 'react'
import Section from '../../components/Section/Section'
import NewsCard from './NewsCard'
import AnimatedItem from '../../components/AnimatedItem/AnimatedItem'

const newsSectionContent = {
  title: 'Новости клуба',
  subtitle: 'Последние обновления',
  news: [
    {
      id: 1,
      date: '10 марта 2024',
      title: 'Анонсирована новая турнирная серия',
      excerpt:
        'Мы рады объявить о нашей Весенней чемпионской серии с увеличенными призовыми фондами и специальными мероприятиями в течение сезона.',
    },
    {
      id: 2,
      date: '5 марта 2024',
      title: 'Обновлены правила турниров',
      excerpt:
        'Мы обновили правила турниров для обеспечения ещё более честной игры. Ознакомьтесь с новой структурой блайндов и расписанием выплат.',
    },
    {
      id: 3,
      date: '28 февраля 2024',
      title: 'Специальное мероприятие: Благотворительный турнир',
      excerpt:
        'Присоединяйтесь к нам на специальном благотворительном турнире в следующем месяце. Все вырученные средства пойдут местным общественным организациям.',
    },
  ],
}

const NewsSection = () => {
  return (
    <Section 
      title={newsSectionContent.title}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsSectionContent.news.map((news, index) => (
          <AnimatedItem key={news.id} delay={index * 100}>
            <NewsCard news={news} />
          </AnimatedItem>
        ))}
      </div>
    </Section>
  )
}

export default NewsSection

