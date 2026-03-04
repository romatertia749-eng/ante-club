import React from 'react'
import Section from '../../components/Section/Section'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'

const aboutSectionContent = {
  title: 'О клубе',
  subtitle:
    'Спортивный покерный клуб, ориентированный на честную игру и соревновательные турниры',
  paragraphs: {
    first:
      'Ante Club — это спортивный покерный клуб, посвящённый организации живых покерных турниров в честной, соревновательной и дружелюбной атмосфере.',
    second: {
      beforeHighlight: 'Мы фокусируемся исключительно на ',
      highlight: 'живых турнирах',
      afterHighlight:
        '—без услуг обучения, без кеш-игр и без онлайн-гемблинга. Наша миссия — предоставить премиальный турнирный опыт, где навыки, стратегия и спортивное поведение занимают центральное место.',
    },
    third:
      'Каждое мероприятие разработано так, чтобы быть гостеприимным для игроков всех уровней, от новичков, желающих изучить турнирный покер, до опытных игроков, ищущих соревновательную игру. Мы поддерживаем чёткие правила, стандарты честной игры и уважительную атмосферу сообщества.',
    fourth:
      'Присоединяйтесь к нам на регулярных турнирах, специальных мероприятиях и в сообществе, которое ценит соревновательный дух живого покера!',
  },
  tablePlaceholderCaption:
    'Сюда воткнём фотку покерного стола, который у нас стоять будет в клубе',
}

const AboutSection = () => {
  return (
    <AnimatedSection delay={150}>
      <Section 
        title={aboutSectionContent.title}
        className="bg-transparent"
      >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-4 text-textSecondary glass rounded-2xl p-6 md:p-8">
          <p className="text-lg">
            {aboutSectionContent.paragraphs.first}
          </p>
          <p>
            {aboutSectionContent.paragraphs.second.beforeHighlight}
            <strong className="text-gold">
              {aboutSectionContent.paragraphs.second.highlight}
            </strong>
            {aboutSectionContent.paragraphs.second.afterHighlight}
          </p>
          <p>
            {aboutSectionContent.paragraphs.third}
          </p>
          <p>
            {aboutSectionContent.paragraphs.fourth}
          </p>
        </div>
        <div className="relative">
          <div className="aspect-video glass rounded-2xl overflow-hidden border border-gold/40">
            <div className="w-full h-full flex items-center justify-center bg-black/20">
              <div className="text-center p-8">
                <svg className="w-24 h-24 mx-auto mb-4 text-gold opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p className="text-textMuted text-sm">
                  {aboutSectionContent.tablePlaceholderCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Section>
    </AnimatedSection>
  )
}

export default AboutSection

