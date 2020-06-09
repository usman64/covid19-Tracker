import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import { Container } from '@material-ui/core';
import './what-is-covid.styles.scss';
import SymptomCollection from '../../components/symptoms-collection/symptoms-collection.component';

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
          <Container maxWidth='md'>
            <ResponsiveEmbed
              src='https://www.youtube.com/embed/mOV1aBVYKGA'
              allowfullscreen
              ratio='16:9'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            />
          </Container>
        </div>
        <div className='section-action'></div>
      </div>
      <div className='section'>
        <div className='section-heading'>Symptoms</div>
        <div className='section-content'>
          <SymptomCollection />
          <div className='text'>
            COVID-19 affects different people in different ways. Most infected
            people will develop mild to moderate illness and recover without
            hospitalization. Seek immediate medical attention if you have
            serious symptoms. Always call before visiting your doctor or health
            facility. People with mild symptoms who are otherwise healthy should
            manage their symptoms at home. On average it takes 5–6 days from
            when someone is infected with the virus for symptoms to show,
            however it can take up to 14 days.
          </div>
          <div className='text'>
            <strong>Less common symptoms </strong>
            <ul>
              <li>aches and pains</li>
              <li>sore throat</li>
              <li>diarrhoea</li>
              <li>conjunctivitis headache</li>
              <li>loss of taste or smell</li>
              <li>a rash on skin, or discolouration of fingers or toes</li>
            </ul>
            <strong>Serious symptoms </strong>
            <ul>
              <li>difficulty breathing or shortness of breath</li>
              <li>chest pain or pressure</li>
            </ul>
          </div>
        </div>
        <div className='section-action'></div>
      </div>
      <div className='section'>
        <div className='section-heading'>Precautions</div>
        <div className='section-content precaution'>
          <div className='precaution-image'>
            <img src={require('../../assets/1.png')} alt='precautions' />
          </div>
          <div className='precaution-image'>
            <img src={require('../../assets/2.png')} alt='precautions' />
          </div>
        </div>
        <div className='section-action'></div>
      </div>
    </div>
  );
};

export default WhatIsCovidPage;
