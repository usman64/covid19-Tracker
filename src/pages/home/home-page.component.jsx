import React, { Suspense } from 'react';
import ImageSlider from '../../components/image-slider/image-slider.component';
import { Link } from 'react-router-dom';

// import { Button } from '@material-ui/core';

import './home-page.styles.scss';
import NewsCollection from '../../components/news-collection/news-collection.component';
import SymptomCollection from '../../components/symptoms-collection/symptoms-collection.component';
import StatsOverview from '../../components/stats-overview/stats-overview.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Suspense fallback={<div>Loading...</div>}>
        <ImageSlider />
      </Suspense>
      <div className='section'>
        <div className='section-content'>
          <StatsOverview />
        </div>
        <div className='section-action'>
          <Link className='heading' to='/stats'>
            <CustomButton inverted> Learn More </CustomButton>
          </Link>
        </div>
      </div>
      <div className='section'>
        <div className='section-heading'>
          <Link className='heading' to='/what-is-covid'>
            COVID SYMPTOMS
          </Link>
        </div>
        <div className='section-content'>
          <SymptomCollection />
        </div>
        <div className='section-action'>
          <Link className='heading' to='/what-is-covid'>
            <CustomButton inverted> Learn More </CustomButton>
          </Link>
        </div>
      </div>
      <div className='section'>
        <div className='section-heading'>
          <Link className='heading' to='/news'>
            NEWS HIGHLIGHTS
          </Link>
        </div>
        <div className='section-content'>
          <NewsCollection isHomepage />
        </div>
        <div className='section-action'>
          <Link className='heading' to='/news'>
            <CustomButton inverted> Learn More </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
