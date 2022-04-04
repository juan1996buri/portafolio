import React from 'react'
import './fotter.css'
import {GrFacebook} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'



const Fotter = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>
      <ul className='permalinks'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#expirence">expirience</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#portfolio">testimonials</a>
        </li>
        <li>
          <a href="#portfolio">contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><GrFacebook/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://twitter.com"><AiFillTwitterSquare/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Copiado. de youtube.</small>
      </div>
    </footer>
  )
}

export default Fotter

