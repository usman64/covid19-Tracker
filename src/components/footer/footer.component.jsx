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
      <div className='cp-signature'>&#9400; All Copyrights Reserved</div>
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
    <Link className='option' to='/news'>
      News
    </Link>
  </React.Fragment>
);

const About = () => (
  <div className='about'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
    exercitationem, dolores libero quidem, beatae iste, sed consequuntur ex esse
    optio provident accusantium. Placeat aut sunt magnam eius totam ut quas!
  </div>
);

const DeveloperContact = () => (
  <React.Fragment>
    <span className='option'>Muhammad Usman Tariq</span>
    <address className='option'>
      <a href='mailto:usmantariq65@outlook.com'> usmantariq65@outlook.com </a>
    </address>
    <div className='contact-icons'>
      <a className='icon' href='https://github.com/usman64' target='_blank'>
        <GitHubIcon />
      </a>
      <a
        className='icon'
        href='https://www.linkedin.com/in/muhammad-usman-tariq-454579a4/'
        target='_blank'
      >
        <LinkedInIcon />
      </a>
    </div>
  </React.Fragment>
);

export default Footer;
