import React from 'react';
import './Cards.css';
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
      <div className='intro'>
      <p>
      Te presentamos <strong>Café Cafeso</strong>, orgulloso cafe del soconusco y su hermoso legado. 
      Un agradecimiento a quienes llenaron de magia los cultivos de nuestra reserva cafetera.
      </p>
      <p>
      Cafeso nace para llevar la herencia de nuestro país a cada rincón del mundo,
      rindiéndole un homenaje al campesino chiapaneco y su amor por la Tierra.
      No podríamos hacerlo de otra manera que con un <strong> Café gourmet organico </strong> de origen 100% Chipaneco
      y con la Maestría de los procesos Ancestrales de los Cafés Especiales que pongan nuestra
      Cultura en el lugar que se merece.
      </p>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
