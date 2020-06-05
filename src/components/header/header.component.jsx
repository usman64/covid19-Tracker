import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

import './header.styles.scss';

class Header extends React.Component {
  state = { isHidden: true };

  handleClick = (ev) => {
    this.setState((prevState) => ({ isHidden: !prevState.isHidden }));
  };

  render() {
    const { isHidden } = this.state;
    return (
      <div className='header'>
        <div className='responsive-menu'>
          <Link className='logo-container' to='/'>
            {/* <Logo className='logo' /> */}Covid Tracker
          </Link>
          <div className='hamburger-menu'>
            <HamburgerMenu
              isOpen={!isHidden}
              menuClicked={this.handleClick}
              width={30}
              height={30}
              strokeWidth={2}
              rotate={0}
              color='white'
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        </div>
        <div className={`${isHidden ? 'hide' : null} options`}>
          <Link className='option' to='/'>
            HOME
          </Link>
          <Link className='option' to='/stats'>
            STATS
          </Link>
          <Link className='option' to='/what-is-covid'>
            WHAT IS COVID?
          </Link>
          <Link className='option' to='/news'>
            NEWS
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
