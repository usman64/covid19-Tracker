import React from 'react';
import { Paper } from '@material-ui/core';

import './symptom-card.styles.scss';

const SymptomCard = ({ imageUrl, title }) => {
  return (
    <Paper
      style={{ height: '150px', padding: '30px', borderRadius: '20px' }}
      elevation={3}
      square
    >
      <div className='symptom-content'>
        <div className='symptom-image'>
          <img src={require(`../../assets/${imageUrl}`)} alt='symptom' />
        </div>
        <div className='symptom-name'>{title}</div>
      </div>
    </Paper>
  );
};

export default SymptomCard;
