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
      className={headerScrolled ? 'fixed bg-primary' : 'bg-primary'}
    >
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-left">
            <ul className="menu">
              <li className="menu-item">
                <a href="#about">About</a>
              </li>
              <li className="menu-item">
                <a href="#skills">Skills</a>
              </li>
              <li className="menu-item">
                <a href="#portfolio">Portfolio</a>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul className="menu">
              <li className="menu-item">
                <a href="/">Github</a>
              </li>
              <li className="menu-item">
                <a href="/">Linkedin</a>
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
