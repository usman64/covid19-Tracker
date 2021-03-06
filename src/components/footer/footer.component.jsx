import React from 'react';
import { Link } from 'react-router-dom';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './footer.styles.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='content'>
        <div className='options'>
          <div className='heading'>About</div>
          <About />
        </div>
        <div className='options'>
          <div className='heading'>Quick Links</div>
          <QuickLinks />
        </div>

        <div className='options'>
          <div className='heading'>Contact Developer</div>
          <DeveloperContact />
        </div>
      </div>
      <div className='cp-signature'>
        {/* <span>
          {' '}
          <a target='_blank' href='https://icons8.com/icons/set/coronavirus'>
            Coronavirus icon
          </a>
          icon by
          <a target='_blank' href='https://icons8.com'>
            Icons8
          </a>
        </span> */}
        <span>&#9400; OPENSOURCE PROJECT</span>
      </div>
    </div>
  );
};

const QuickLinks = () => (
  <React.Fragment>
    <Link className='option' to='/'>
      Home
    </Link>
    <Link className='option' to='/stats'>
      Stats
    </Link>
    <Link className='option' to='/what-is-covid'>
      What is Covid?
    </Link>
    <Link className='option' to='/news'>
      News
    </Link>
  </React.Fragment>
);

const About = () => (
  <div className='about'>
    Covid Tracker is a web app imparting latest global updates related to the
    coronavirus pandemic. Developed with React and fully optimized for mobile
    view.
  </div>
);

const DeveloperContact = () => (
  <React.Fragment>
    <span className='option'>Muhammad Usman Tariq</span>
    <address className='option'>
      <a href='mailto:usmantariq65@outlook.com'> usmantariq65@outlook.com </a>
    </address>
    <div className='contact-icons'>
      <a className='icon' href='https://github.com/usman64'>
        <GitHubIcon />
      </a>
      <a
        className='icon'
        href='https://www.linkedin.com/in/muhammad-usman-tariq-454579a4/'
      >
        <LinkedInIcon />
      </a>
    </div>
  </React.Fragment>
);

export default Footer;
