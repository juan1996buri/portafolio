import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>about me </h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Cliets</h5>
                            <small>200+ wprdldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Proyect</h5>
                            <small>80+ completed</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto enim nemo natus provident, labore nobis vero officia, excepturi temporibus praesentium pariatur, consectetur fuga eum at asperiores nihil cumque in vitae.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>

        </section>
    )
}

export default About