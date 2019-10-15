import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => {
  return (
    <header className="bg-primary">
      <div className="navbar-content">
        <div className="navbar-left">
          <h2>
            {siteTitle}
          </h2>
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
