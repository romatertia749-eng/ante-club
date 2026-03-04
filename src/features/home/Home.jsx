import React from 'react'
import Hero from './Hero'
import RulesCallout from './RulesCallout'
import TournamentsPreview from '../tournaments/TournamentsPreview'
import AboutSection from './AboutSection'
import GallerySection from '../gallery/GallerySection'
import NewsSection from '../news/NewsSection'
import FairPlaySection from './FairPlaySection'

/**
 * Главная страница сайта
 * Собирает все секции в правильном порядке:
 * 1. Hero - главный баннер с приветствием
 * 2. RulesCallout - призыв к прочтению правил
 * 3. TournamentsPreview - превью предстоящих турниров
 * 4. AboutSection - информация о клубе
 * 5. GallerySection - галерея фотографий
 * 6. NewsSection - последние новости
 * 7. FairPlaySection - ценности клуба
 */
const Home = () => {
  return (
    <>
      <Hero />
      <RulesCallout />
      <TournamentsPreview />
      <AboutSection />
      <FairPlaySection />
      <GallerySection />
      <NewsSection />
    </>
  )
}

export default Home

