import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, setState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'linaria/react';

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
      setMenuState(!menuOpen);
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
              {menuOpen ? (
                <MobileMenu></MobileMenu>
              ) : (
                null
              )}
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
  font-size: 28px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export default Header;
