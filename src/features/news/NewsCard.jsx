import React from 'react'
import Card from '../../components/Card/Card'

const NewsCard = ({ news }) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="mb-3">
        <span className="text-xs text-gold font-semibold">{news.date}</span>
      </div>
      <h3 className="text-xl font-display font-semibold text-white mb-3">
        {news.title}
      </h3>
      <p className="text-textSecondary text-sm mb-4 flex-grow">
        {news.excerpt}
      </p>
      <a 
        href="#" 
        className="text-gold hover:text-gold-light text-sm font-medium transition-colors inline-flex items-center"
      >
        Читать далее
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </Card>
  )
}

export default NewsCard

