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
      newValue: currentCountryStats.newlyConfirmedCases,
      color: '#cf5840',
    },
    {
      tag: 'Recovered',
      value: currentCountryStats.totalRecoveredCases,
      newValue: currentCountryStats.newlyRecoveredCases,
      color: '#63b85c',
      ...currentCountryStats,
    },
    {
      tag: 'Deaths',
      value: currentCountryStats.totalDeaths,
      newValue: currentCountryStats.newDeaths,
      color: 'gray',
      ...currentCountryStats,
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
          <CounterCard {...statItem} key={key} isLoading={isLoadingByCountry} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentCountry: state.stats.currentCountry,
  currentCountryStats: state.stats.currentCountryStats,
  isLoadingByCountry: state.stats.isLoadingByCountry,
  errorByCountry: state.stats.errorByCountry,
});

export default connect(mapStateToProps)(StatsOverview);
