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
      position: 'relative'
    }}
    className="position-sticky container"
  >
    <div className="header" style={{ position: 'relative'}}>
        <div className="langLogo">       
          <div className="logo">
            <Link to="/" style={{ textDecoration: `none` }}>
              <Logo/>
            </Link>
          </div>
          {!hideLangs && <Langs />}
        </div>
        <div className="menu-wrapper">
          <Link to="/" style={{ textDecoration: `none` }} activeClassName="active">Home</Link>
          <Link to="/AboutPage/" style={{ textDecoration: `none` }} activeClassName="active">About</Link>
          <Link to="/ProductPage/" style={{ textDecoration: `none` }} activeClassName="active">Product</Link>
          <Link to="/FAQ/" style={{ textDecoration: `none` }} activeClassName="active">FAQ</Link>
          <Link to="/contact/" style={{ textDecoration: `none` }} activeClassName="active">Contact us</Link>
          <Link to="/" className="getinTouch" style={{ textDecoration: `none` }} activeClassName="active">GET IN TOUCH</Link>
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
