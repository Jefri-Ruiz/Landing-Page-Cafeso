import React from 'react';
import '../App.css';
import './HeroSection.css';
import video1 from '../videos/video1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <h1>El café gourmet de Chiapas </h1>
      <p>Explora la escencia de cafeso</p>
    </div>
  );
}

export default HeroSection;
