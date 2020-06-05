import React from 'react';
import { ReactComponent as PakFlag } from '../../assets/pakistani-flag.svg';

import './alert-header.styles.scss';

const AlertHeader = () => {
  return (
    <div className='alert-header'>
      <PakFlag className='flag' width='20px' height='20px' />
      <div className='message'>
        Covid Helpline: <strong>1166</strong>
      </div>
    </div>
  );
};

export default AlertHeader;
