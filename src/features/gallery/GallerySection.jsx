import React from 'react'
import Section from '../../components/Section/Section'
import './GallerySection.css'
import firstPic from '../../assets/images/gallery/homePageGallery/chips-1-home-page.jpg'
import fouthPic from '../../assets/images/gallery/homePageGallery/chips-2-home-page.jpg'
import thirdPic from '../../assets/images/gallery/homePageGallery/poker-player-3-home-page.jpg'
import eightPic from '../../assets/images/gallery/homePageGallery/ace-cards-8-for-home-page.jpg'
import sixPic from '../../assets/images/gallery/homePageGallery/stack-of-poker-chips-6-home-page.jpg'
import sevenPic from '../../assets/images/gallery/homePageGallery/dealer-5-home-page.jpg'

const gallerySectionContent = {
  title: 'Атмосфера клуба',
  images: [
    {
      id: 1,
      alt: 'poker table with chips and cards',
      url: firstPic
    },
    {
      id: 2,
      alt: 'poker chips stack on green table',
      url: 'https://images.unsplash.com/photo-1541278107931-e006523892df'
    },
    {
      id: 3,
      alt: 'poker player holding cards',
      url: thirdPic
    },
    {
      id: 4,
      alt: 'casino poker table with chips',
      url: fouthPic
    },
    {
      id: 5,
      alt: 'dealer dealing cards at poker table',
      url: 'https://images.unsplash.com/photo-1529480780361-c8cb81eb5735'
    },
    {
      id: 6,
      alt: 'stack of poker chips close up',
      url: sixPic
    },
    {
      id: 7,
      alt: 'poker players around table',
      url: sevenPic
    },
    {
      id: 8,
      alt: 'ace cards and poker chips',
      url: eightPic
    }
  ],
}

const GallerySection = () => {
  return (
    <Section
      title={gallerySectionContent.title}
      className="bg-transparent"
    >
      <div className="flex justify-center">
        <article className="gallery-grid">
          {gallerySectionContent.images.map(({ id, url, alt }) => (
            <img
              key={id}
              src={url}
              alt={alt}
              loading="lazy"
            />
          ))}
        </article>
      </div>
    </Section>
  )
}

export default GallerySection

