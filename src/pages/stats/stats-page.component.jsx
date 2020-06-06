import React from 'react';
import StatsOverview from '../../components/stats-overview/stats-overview.component';

import './stats.styles.scss';

const StatsPage = () => {
  return (
    <div className='stats'>
      <div className='section'>
        <StatsOverview />
      </div>
      <div className='section'>Development in Progress</div>
    </div>
  );
};

export default StatsPage;
