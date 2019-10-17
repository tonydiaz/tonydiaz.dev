import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, setState, useEffect } from 'react';

const Header = ({ siteTitle }) => {
  const [headerScrolled, setHeaderState] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 78) {
        setHeaderState(true);
      } else {
        setHeaderState(false);
      }
    });
  });

  return (
    <header
      id="navbar"
      className={headerScrolled ? 'fixed bg-primary' : 'bg-transparent'}
    >
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-left">
            <h2 className="navbar-title">{siteTitle}</h2>
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
