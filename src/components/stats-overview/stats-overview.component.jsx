import React from 'react';
import CounterCard from '../counter-card/counter-card.component';

import './stats-overview.styles.scss';
import CountryPicker from '../country-picker/country-picker.component';

const STATS_OVERVIEW_DATA = [
  {
    tag: 'Confirmed',
    value: 93233,
    color: '#cf5840',
  },
  {
    tag: 'Recovered',
    value: 10233,
    color: '#63b85c',
  },
  {
    tag: 'Deaths',
    value: 2530,
    color: 'gray',
  },
];

const StatsOverview = () => {
  return (
    <div className='stats-overview'>
      <div className='stats-action-area'>
        <div className='stats-heading'>
          <strong>Live Stats Overview</strong>
        </div>
        <div className='country-picker'>
          <CountryPicker />
        </div>
      </div>
      <div className='counters'>
        {STATS_OVERVIEW_DATA.map((statItem, key) => (
          <CounterCard {...statItem} key={key} />
        ))}
      </div>
    </div>
  );
};

export default StatsOverview;
