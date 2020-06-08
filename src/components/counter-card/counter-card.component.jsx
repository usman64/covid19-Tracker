import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import './counter-card.styles.scss';
import Spinner from '../spinner/spinner.component';

const CounterCard = ({ tag, value, color, newValue, isLoading }) => {
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
        <div className='counter-values'>
          <div className='counter-value' style={{ color: color }}>
            <VisibilitySensor
              onChange={onVisibilityChange}
              offset={{
                top: 10,
              }}
              delayedCall
            >
              {isLoading ? (
                <Spinner />
              ) : (
                <CountUp
                  delay={0.3}
                  end={isCounterVisible ? value : 0}
                  duration={0.7}
                  separator=','
                />
              )}
            </VisibilitySensor>
          </div>
          <div className='counter-new-value' style={{ color: color }}>
            (+{newValue})
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default CounterCard;
