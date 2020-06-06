import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SYMPTOMS_DATA } from '../../redux/symptoms/symptoms.data';
import SymptomCard from '../symptom-card/symptom-card.component';

const SymptomCollection = ({ isHomepage }) => {
  return (
    <div className='news-collection'>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='stretch'
        spacing={3}
      >
        {SYMPTOMS_DATA.map((symptom, key) => (
          <Grid item xs={10} sm={5} md={4} lg={3} key={key}>
            <SymptomCard {...symptom} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SymptomCollection;
