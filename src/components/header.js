import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, setState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { faXing } from '@fortawesome/free-brands-svg-icons';

const Header = ({ siteTitle }) => {
  const [headerScrolled, setHeaderState] = useState(false);
  const [menuOpen, setMenuState] = useState(false);

  useEffect(() => {
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
        clearAllBodyScrollLocks();
      } else {
        setMenuState(true);
        disableBodyScroll(document.getElementById('mobile-menu-items'));
      }
    });

    document.getElementById('mobile-menu').addEventListener('click', () => {
      setMenuState(false);
    });

    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

    mobileMenuItems.forEach((item) => {
      item.addEventListener('click', () => {
        setMenuState(false);
        clearAllBodyScrollLocks();
      });
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
              <MobileMenuIcon scrolled={headerScrolled}>
                <FontAwesomeIcon icon="bars" id="menu-toggle" />
              </MobileMenuIcon>
              <div
                id="mobile-menu"
                className={menuOpen ? 'mobile-menu open' : 'mobile-menu'}
              >
                <div id="mobile-menu-items" className="mobile-menu-items">
                  <a className="mobile-menu-item" href="#home">
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
                  <br />
                  <br />
                  <br />
                  <br />
                  <a
                    href="https://github.com/jarodpeachey"
                    className="mobile-menu-item"
                  >
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      id="menu-toggle"
                    />
                  </a>
                  <a
                    href="https://linkeding.com/in/jarod-peachey"
                    className="mobile-menu-item"
                  >
                    <FontAwesomeIcon
                      icon={['fab', 'linkedin']}
                      id="menu-toggle"
                    />
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
  font-size: ${props => (props.scrolled ? '20px' : '28px')};
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
