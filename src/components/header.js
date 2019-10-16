import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, setState } from 'react';

const Header = ({ siteTitle }) => {
  const [headerScrolled, setHeaderState] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 10) {
      setHeaderState(true);
    } else {
      setHeaderState(false);
    }
  };

  window.addEventListener('scroll', onScroll);

  return (
    <header
      id="navbar"
      className={headerScrolled ? 'bg-primary' : 'bg-transparent'}
    >
      <div className="px-sm">
        <div className="navbar-content">
          <div className="navbar-left">
            <h2>{siteTitle}</h2>
          </div>
          <div className="navbar-right">
            <ul className="menu">
              <li className="menu-item">
                <a href="/">Link</a>
              </li>
              <li className="menu-item">
                <a href="/">Link</a>
              </li>
              <li className="menu-item">
                <a href="/">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
