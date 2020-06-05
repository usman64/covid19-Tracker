import React from 'react';
import ImageSlider from '../../components/image-slider/image-slider.component';
import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

import './home-page.styles.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <ImageSlider />
      <div className='section'>
        <div className='section-heading'>
          <Link className='heading' to='/stats'>
            LATEST GLOBAL UPDATES
          </Link>
        </div>
        <div className='section-content'>
          <div className='highlight-card'></div>
          <div className='supporting-card'></div>
          <div className='supporting-card'></div>
        </div>
        <div className='section-action'>
          <Link className='heading' to='/stats'>
            <Button
              variant='contained'
              style={{
                fontSize: '18px',
                backgroundColor: 'black',
                color: 'white',
                // borderRadius: '20px',
                padding: '10px 50px',
              }}
            >
              View More
            </Button>
          </Link>
        </div>
      </div>
      <div className='section'>
        <div className='section-heading'>
          <Link className='heading' to='/what-is-covid'>
            COVID SYMPTOMS
          </Link>
        </div>
        <div className='section-content'></div>
        <div className='section-action'>
          <Link className='heading' to='/what-is-covid'>
            <Button
              variant='contained'
              style={{
                fontSize: '18px',
                backgroundColor: 'black',
                color: 'white',
                // borderRadius: '20px',
                padding: '10px 50px',
              }}
            >
              View More
            </Button>
          </Link>
        </div>
      </div>
      <div className='section'>
        <div className='section-heading'>
          <Link className='heading' to='/news'>
            NEWS HIGHLIGHTS
          </Link>
        </div>
        <div className='section-content'></div>
        <div className='section-action'>
          <Link className='heading' to='/news'>
            <Button
              variant='contained'
              style={{
                fontSize: '18px',
                backgroundColor: 'black',
                color: 'white',
                // borderRadius: '20px',
                padding: '10px 50px',
              }}
            >
              View More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
