import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video1 from '../videos/video1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <h1>El café gourmet de Chiapas </h1>
      <p>Explora la escencia de cafeso</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Iniciar
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
