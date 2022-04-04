import React from 'react'
import './service.css'
import { BsCheck } from 'react-icons/bs'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>


      <div class="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <div className="service__list">
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>            
          </div>
        </article>
        {/* end of UI/UX*/}
        <article className='service'>
          <div className="service__head">
            <h3>web Development</h3>
          </div>
          <div className="service__list">
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>            
          </div>
        </article>
        {/* web develomet */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <div className="service__list">
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </li>            
          </div>
        </article>
        {/* end of content creation */}
      </div>

    </section>
  )
}

export default Service