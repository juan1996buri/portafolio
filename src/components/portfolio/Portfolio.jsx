import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/users/1187002/screenshots/17845701/media/8989bb96e71ef54a5161c5ae0e146901.jpg?compress=1&resize=1200x900&vertical=top'

  },
  {
    id: 2,
    image: IMG2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/users/1187002/screenshots/17845701/media/8989bb96e71ef54a5161c5ae0e146901.jpg?compress=1&resize=1200x900&vertical=top'

  },
  {
    id: 3,
    image: IMG3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/users/1187002/screenshots/17845701/media/8989bb96e71ef54a5161c5ae0e146901.jpg?compress=1&resize=1200x900&vertical=top'

  },
  {
    id: 4,
    image: IMG4,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/users/1187002/screenshots/17845701/media/8989bb96e71ef54a5161c5ae0e146901.jpg?compress=1&resize=1200x900&vertical=top'

  },
  {
    id: 5,
    image: IMG5,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/users/1187002/screenshots/17845701/media/8989bb96e71ef54a5161c5ae0e146901.jpg?compress=1&resize=1200x900&vertical=top'

  },
  {
    id: 6,
    image: IMG6,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/users/1187002/screenshots/17845701/media/8989bb96e71ef54a5161c5ae0e146901.jpg?compress=1&resize=1200x900&vertical=top'

  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'> github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'> LiveDemo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio