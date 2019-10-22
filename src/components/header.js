import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, setState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Header = ({ siteTitle }) => {
  const [headerScrolled, setHeaderState] = useState(false);
  const [menuOpen, setMenuState] = useState(false);

  useEffect(() => {
    enableBodyScroll(document.getElementById('mobile-menu'));

    window.addEventListener('scroll', () => {
      if (window.scrollY > 78) {
        setHeaderState(true);
      } else {
        setHeaderState(false);
      }
    });

    document.getElementById('menu-toggle').addEventListener('click', () => {
      if (menuOpen) {
        setMenuState(false);
        enableBodyScroll(document.getElementById('mobile-menu'));
      } else {
        setMenuState(true);
        disableBodyScroll(document.getElementById('mobile-menu'));
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
            <h2 className="navbar-title">Jarod Peachey</h2>
          </div>
          <div className="navbar-right">
            <div className="hidden-below-tablet">
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
            <div className="hidden-above-tablet">
              <MobileMenuIcon>
                <FontAwesomeIcon icon="bars" id="menu-toggle" />
              </MobileMenuIcon>
              <div className={menuOpen ? 'mobile-menu-placeholder open' : 'mobile-menu placeholder'} />
              <div id="mobile-menu" className={menuOpen ? 'mobile-menu open' : 'mobile-menu'}>
                <div className="mobile-menu-items">
                  <a className="mobile-menu-item" href="/">
                    Home
                  </a>
                  <a className="mobile-menu-item" href="#about">
                    About
                  </a>
                  <a className="mobile-menu-item" href="#skills">
                    Skills
                  </a>
                  <a className="mobile-menu-item" href="#portfolio">
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
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

const MobileMenuIcon = styled.div`
  width: 20px;
  height: 20px;
  font-size: 28px;
  &:hover > * {
    cursor: pointer;
    transform: scale(1.2);
  }
  position: relative;
  & > * {
    position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  }
`;

export default Header;
