import React from 'react';
import CounterCard from '../counter-card/counter-card.component';

import './stats-overview.styles.scss';
import CountryPicker from '../country-picker/country-picker.component';

import { connect } from 'react-redux';

const StatsOverview = ({
  currentCountry,
  currentCountryStats,
  isLoadingByCountry,
}) => {
  let STATS_OVERVIEW_DATA = [
    {
      tag: 'Confirmed',
      value: currentCountryStats.totalConfirmedCases,
      color: '#cf5840',
    },
    {
      tag: 'Recovered',
      value: currentCountryStats.totalRecoveredCases,
      color: '#63b85c',
    },
    {
      tag: 'Deaths',
      value: currentCountryStats.totalDeaths,
      color: 'gray',
    },
  ];
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

const mapStateToProps = (state) => ({
  currentCountry: state.stats.currentCountry,
  currentCountryStats: state.stats.currentCountryStats,
  isLoadingByCountry: state.stats.isLoadingByCountry,
});

export default connect(mapStateToProps)(StatsOverview);
