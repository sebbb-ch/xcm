// External imports
import type { ReactNode } from 'react'

// Internal imports
import './Hero.css'

type HeroProps = {
  imageSrc  : string
  imageAlt  : string
  title     : string
  content   : ReactNode
}

export default function Hero({
  imageSrc,
  imageAlt,
  title,
  content,
}: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={imageSrc} alt={imageAlt} />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <div>
            {content}
        </div>
      </div>
    </section>
  )
}