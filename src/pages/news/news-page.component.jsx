import React from 'react';
import NewsCollection from '../../components/news-collection/news-collection.component';

import './news-page.styles.scss';

const NewsPage = () => {
  return (
    <div className='news-page'>
      <div className='section'>
        <div className='section-heading'>LATEST NEWS UPDATES</div>
        <div className='section-content'>
          <NewsCollection />
        </div>
        <div className='section-action'></div>
      </div>
    </div>
  );
};

export default NewsPage;
