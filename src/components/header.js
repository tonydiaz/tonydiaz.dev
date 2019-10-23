import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

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
      clearAllBodyScrollLocks();
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
      <Container className="container full-height">
        <div className="navbar-content full-height">
          <div className="navbar-left">
            <h2 className="navbar-title">
              <a href="/">{siteTitle}</a>
            </h2>
          </div>
          <div className="navbar-right full-height">
            <div className="hidden-below-tablet full-height">
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
            <div className="hidden-above-tablet full-height">
              <MobileMenuIcon className="full-height" scrolled={headerScrolled}>
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
      </Container>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

const Container = styled.div``;

const MobileMenuIcon = styled.div`
  width: 25px;
  display: flex;
  align-items: center;
  font-size: ${props => (props.scrolled ? '20px' : '28px')};
  &:hover > * {
    cursor: pointer;
    transform: scale(1.2);
  }
  position: relative;
  & > * {
    z-index: 999;
  }
`;

export default Header;
