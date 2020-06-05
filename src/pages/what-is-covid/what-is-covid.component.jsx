import React from 'react';

import './what-is-covid.styles.scss';

const WhatIsCovidPage = () => {
  return (
    <div className='what-is-covid'>
      <div className='section'>
        <div className='section-heading'>What is Covid19?</div>
        <div className='section-content'>
          <div className='text'>
            It’s likely that the Coronavirus Disease (COVID-19) originated in an
            animal species, and then spread to humans. Person to person spread
            of the novel corona virus is reported, but it is not yet understood
            how easily this happens. Other human coronavirus strains are spread
            from person to person through contaminated droplets from a person
            who is sick with the illness (through coughing or sneezing) or
            contaminated hands.
          </div>
        </div>
        <div className='section-action'></div>
      </div>
      <div className='section'>
        <div className='section-heading'>Symptoms</div>
        <div className='section-content'></div>
        <div className='section-action'></div>
      </div>
      <div className='section'>
        <div className='section-heading'>Preventions</div>
        <div className='section-content'></div>
        <div className='section-action'></div>
      </div>
    </div>
  );
};

export default WhatIsCovidPage;
