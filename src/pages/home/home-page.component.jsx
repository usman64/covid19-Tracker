import React from 'react';
import { Slide, Fade } from 'react-slideshow-image';

import './home-page.styles.scss';

const slideImages = [
  //   'viktor-forgacs-FcDqdJUM6B4-unsplash.jpg',
  'markus-spiske-11bjTWQ9mV0-unsplash.jpg',
  'corona1.jpg',
  'sarah-kilian-yvxw4K9lYKo-unsplash.jpg',
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='slider'>
        <Fade {...properties}>
          {slideImages.map((imgpath, key) => (
            <div className='each-slide'>
              <img src={require(`../../assets/${imgpath}`)} alt='covid' />
              {/* <div
              style={{
                backgroundImage: 'url(../../assets/corona-1.jpg)',
                height: '100%',
              }}
            > */}
              {/* </div> */}
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default HomePage;
