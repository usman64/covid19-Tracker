import React from 'react';
import { Fade } from 'react-slideshow-image';

import './image-slider.styles.scss';

const slideImages = [
  'markus-spiske-11bjTWQ9mV0-unsplash.jpg',
  'corona1.jpg',
  'sarah-kilian-yvxw4K9lYKo-unsplash.jpg',
];

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: false,
};

const ImageSlider = () => {
  return (
    <div className='slider'>
      <Fade {...properties}>
        {slideImages.map((imgpath, key) => (
          <div className='each-slide' key={key}>
            <img src={require(`../../assets/${imgpath}`)} alt='covid' />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default ImageSlider;
