import React from 'react';
import './Cards.css';
import CardItem from './CardItem'
import bolsa from '../images/Bolsa.png';
import bolsa2 from '../images/Bolsa2.png';
import bolsa3 from '../images/Bolsa3.png';
import bolsa4 from '../images/Bolsa4.png';
import bolsa5 from '../images/Bolsa5.png';

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
      <p>
        <strong>Nuestros productos</strong>
      </p>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={bolsa2}
              text='La mas alta calidad de la reserva, especial para paladares exigentes'
              label='Café
              Premium'
              path='/products'
            />
            <CardItem
              src={bolsa}
              text='Lleva impregnado en su aroma, el mejor sabor en su estado mas puro'
              label='Café Natural'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={bolsa3}
              text='Un toque frutal unico de ésta tierra volcanica'
              label='Café Soconusco'
              path='/products'
            />
            <CardItem
              src={bolsa4}
              text='Experimente una sensación unica con notas de naranja'
              label='Té de pulpa de café'
              path='/products'
            />
            <CardItem
              src={bolsa5}
              text='La mejor textura con un toque preciso de miel'
              label='Café Miel'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
