import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Langs from '../Langs';
import Logo from './Logo';
import './header.css';

const Header = ({ siteTitle, hideLangs }) => (
  <header
    style={{
      background: 'transparent',
      marginBottom: `1.45rem`,
    }}
    className="position-sticky container"
  >
    <div className="header">
        <Link to="/" style={{ textDecoration: `none`}}>
          <div className="logo">
            <Logo/>
          </div>
        </Link>
        <div className="menu-wrapper">
          <Link to="/" style={{ textDecoration: `none` }} activeClassName="active">About Us</Link>
          <Link to="/page-2/" style={{ textDecoration: `none` }} activeClassName="active">Blog</Link>
          <Link to="/page-2/" style={{ textDecoration: `none` }} activeClassName="active">Faqs</Link>
          <Link to="/page-2/" style={{ textDecoration: `none` }} activeClassName="active">Contacts</Link>
          {!hideLangs && <Langs />}
        </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  hideLangs: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: ``,
  hideLangs: false,
};

export default Header;
