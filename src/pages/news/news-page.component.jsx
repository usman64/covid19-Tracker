import React from 'react';
import NewsCollection from '../../components/news-collection/news-collection.component';

import './news-page.styles.scss';

const NewsPage = () => {
  return (
    <div className='news-page'>
      <NewsCollection />
    </div>
  );
};

export default NewsPage;
