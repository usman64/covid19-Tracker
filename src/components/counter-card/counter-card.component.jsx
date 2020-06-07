import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import './counter-card.styles.scss';

const CounterCard = ({ tag, value, color }) => {
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounterVisibiilty(true);
    }
  };

  const [isCounterVisible, setCounterVisibiilty] = useState(false);

  return (
    <Paper
      style={{
        width: '30%',
        height: '100px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0px 5px',
      }}
      elevation={1}
    >
      <div className='counter-content'>
        <div className='counter-tag' style={{ backgroundColor: color }}>
          {tag.toUpperCase()}
        </div>
        <div className='counter-value' style={{ color: color }}>
          <VisibilitySensor
            onChange={onVisibilityChange}
            offset={{
              top: 10,
            }}
            delayedCall
          >
            <CountUp
              delay={0.3}
              end={isCounterVisible ? value : 0}
              duration={0.7}
              separator=','
            />
          </VisibilitySensor>
        </div>
      </div>
    </Paper>
  );
};

export default CounterCard;
