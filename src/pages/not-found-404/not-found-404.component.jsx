import React from 'react';

import './not-found-404.styles.scss';

const NotFound404 = () => {
  return (
    <div className='not-found'>
      <img
        src={require('../../assets/fogg-page-not-found-1.png')}
        alt='notfound'
      />
    </div>
  );
};

export default NotFound404;
