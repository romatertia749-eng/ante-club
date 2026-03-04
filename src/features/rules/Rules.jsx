import React, { useEffect } from 'react'
import Section from '../../components/Section/Section'
import Card from '../../components/Card/Card'

const Rules = () => {
  // Прокручиваем страницу наверх при загрузке компонента
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Section 
        title="Правила клуба"
        className="pt-8"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 md:p-8 border-2 border-gold bg-gradient-to-br from-dark-100 to-dark-200">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gold mb-2">
                У НАС НЕ ИГРАЮТ НА РЕАЛЬНЫЕ ДЕНЬГИ
              </h3>
              <p className="text-textSecondary text-lg">
                Никакого денежного вознаграждения!
              </p>
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-display font-bold text-gold">
                Стоимость участия
              </h3>
            </div>
            <div className="space-y-4 text-textSecondary">
              <div className="bg-dark-200 rounded-lg p-4 border border-dark-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">ЕЖЕДНЕВНО</span>
                  <span className="text-gold font-bold text-xl">500₽</span>
                </div>
                <p className="text-sm text-textMuted">с 18:00 до 2:00</p>
              </div>
              <div className="bg-dark-200 rounded-lg p-4 border border-dark-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">В ТУРНИРЕ</span>
                  <span className="text-gold font-bold text-xl">650₽</span>
                </div>
                <p className="text-sm text-textMuted">Пт.; Сб. в 19:00</p>
              </div>
              <div className="mt-4 pt-4 border-t border-dark-300">
                <p className="text-sm">
                  <span className="text-gold font-semibold">*</span> Стоимость участия включает в себя: <span className="text-red-400 font-semibold">входной стек</span> <span className="text-gold font-semibold">10.000 фишек</span> + ребай <span className="text-gold font-semibold">5.000 фишек</span>; <span className="text-red-400 font-semibold">повторный стек</span> <span className="text-gold font-semibold">10.000 фишек</span> - <span className="text-gold font-semibold">250₽</span>
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
              <h3 className="text-2xl font-display font-bold text-gold">
                В Ante Club ЗАПРЕЩАЕТСЯ
              </h3>
            </div>
            <div className="space-y-3 text-textSecondary">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p>Организовывать и проводить азартные игры* <span className="text-textMuted text-sm">(в соответствии с Федеральным законом N 244-ФЗ от 29.12.2006)</span></p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p>Создавать и проводить игры по особым правилам - <span className="text-gold font-semibold">ИГРОВОЙ РЕЖИМ</span> устанавливается исключительно правилами клуба</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p>Использовать имущество клуба <span className="text-textMuted">(покерные фишки, столы и т.д.)</span> не по назначению <span className="text-textMuted">(в собственных целях)</span></p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p>Передавать и обменивать денежные средства между участниками игры как во время игровой сессии так и вне ее <span className="text-textMuted">(на территории клуба или в пределах его деятельности)</span></p>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-display font-bold text-gold">
                Как принять участие?
              </h3>
            </div>
            <div className="space-y-3 text-textSecondary">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Зарегистрироваться и заполнить документ об ознакомлении и согласии с правилами клуба</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p>Внести плату за участие: аренду и пользование имуществом и услугами организации</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 md:p-8 border-2 border-gold">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-2xl font-display font-bold text-gold">
                Клубный рейтинг
              </h3>
            </div>
            <div className="space-y-4 text-textSecondary">
              <p>
                При желании каждый посетитель может принять участие в <span className="text-gold font-semibold">КЛУБНОМ РЕЙТИНГЕ</span>, за конвертацию выигранных покерных фишек в виртуальные очки.
              </p>
              <div className="bg-dark-200 rounded-lg p-4 border border-dark-300">
                <p className="mb-3">
                  Конвертация становится доступной после достижения игроком <span className="text-gold font-semibold">15.000 фишек</span> непосредственно за активную игровую сессию.
                </p>
                <p className="mb-3">
                  Где каждая последующая, выигранная в ту же игровую сессию тысяча фишек будет равняться тысячи виртуальных рейтинговых очков:
                </p>
                <ul className="space-y-2 ml-4">
                  <li><span className="text-gold font-semibold">15.000 ф.</span> = <span className="text-gold font-semibold">1.000 очков</span></li>
                  <li><span className="text-gold font-semibold">16.000 ф.</span> = <span className="text-gold font-semibold">2.000 очков</span></li>
                  <li><span className="text-gold font-semibold">17.000 ф.</span> = <span className="text-gold font-semibold">3.000 очков</span> и т.д.</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-dark-300">
                <p className="text-sm">
                  Каждый игровой сезон клубный рейтинг обнуляется.
                </p>
                <p className="text-sm mt-2">
                  <span className="text-gold font-semibold">*</span> Клубный рейтинг ≠ турнирный рейтинг
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default Rules

