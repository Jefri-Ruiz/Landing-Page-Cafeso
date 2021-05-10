import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contactános para negocios, dudas y preguntas
        </p>
        <p className='footer-subscription-text'>
          Te daremos respuesta en menos de 24 horas
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='nombre'
              type='text'
              placeholder='Tu nombre'
            />
              <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Tu Email'
            />
            <textarea
              className='footer-textarea '
              name='mensaje'
              type='text'
              placeholder='  Tu mensaje'
            />
            <Button buttonStyle='btn--outline'>Enviar</Button>
          </form>
        </div>
      </section>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Cafeso
            </Link>
          </div>
          <small class='website-rights'>Cafeso © 2021</small>
          <div class='social-icons'>
          <a 
              href="https://www.facebook.com/ELKCAFESO/"
              class='social-icon-link facebook'
              target='_blank'
              aria-label='Facebook'
              rel="noreferrer"
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a 
              href="https://www.instagram.com"
              class='social-icon-link Instagram'
              target='_blank'
              aria-label='Instagram'
              rel="noreferrer"
            >
              <i class='fab fa-instagram' />
            </a>
            <a 
              href="https://www.linkedin.com"
              class='social-icon-link linkedin'
              target='_blank'
              aria-label='LinkedIn'
              rel="noreferrer"
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
