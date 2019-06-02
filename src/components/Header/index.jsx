import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Langs from '../Langs';
import Logo from './Logo';
import './header.css';

class Header extends Component {
  state = {
    isActive: false
  }

  toggleHamburger = () => {
    const { isActive } = this.state
    this.setState({
      isActive: !isActive
    })
  }
  render() {
    const { isActive } = this.state;
    const { hideLangs } = this.props;
    return (
      <header
        style={{
          background: 'transparent',
          position: isActive ? 'fixed' : 'relative'
        }}
        className={"container " + (isActive ? 'headerVisible' : '')}
      >
        <div className="header" style={{ position: isActive ? 'fixed' : 'relative' }}>
          <div className="langLogo">
            <div className="logo">
              <Link to="/" style={{ textDecoration: `none` }}>
                <Logo />
              </Link>
            </div>
            {!hideLangs && <Langs />}
          </div>
          <div className="menu-wrapper desktop">
            <Link to="/" style={{ textDecoration: `none` }} activeClassName="active">Home</Link>
            <Link to="/AboutPage/" style={{ textDecoration: `none` }} activeClassName="active">About</Link>
            <Link to="/ProductPage/" style={{ textDecoration: `none` }} activeClassName="active">Product</Link>
            <Link to="/PurchasePage/" style={{ textDecoration: `none` }} activeClassName="active">Purhcase</Link>
            <Link to="/SkillsPage/" style={{ textDecoration: `none` }} activeClassName="active">Skills</Link>
            <Link to="/KnowledgePage/" style={{ textDecoration: `none` }} activeClassName="active">Knowledge Bank</Link>
            <Link to="/FAQ/" style={{ textDecoration: `none` }} activeClassName="active">FAQ</Link>
            <Link to="/contact/" style={{ textDecoration: `none` }} activeClassName="active">Contact us</Link>
          </div>
          {/* Mobile Menu */}
          <div className="mobile">
            <section className="section-header" style={{ position: isActive ? 'relative' : 'relative' }} onClick={() => this.toggleHamburger()}>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className={"hamburger hamburger--v1 js-toggle " + (isActive ? 'is-active' : '')}>
                      <div className="hamburger__bar "></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {(isActive ?
              <div className="header-links-hamburger">
                <Link to="/" style={{ textDecoration: `none` }} activeClassName="active">Home</Link>
                <Link to="/AboutPage/" style={{ textDecoration: `none` }} activeClassName="active">About</Link>
                <Link to="/ProductPage/" style={{ textDecoration: `none` }} activeClassName="active">Product</Link>
                <Link to="/PurchasePage/" style={{ textDecoration: `none` }} activeClassName="active">Purhcase</Link>
                <Link to="/SkillsPage/" style={{ textDecoration: `none` }} activeClassName="active">Skills</Link>
                <Link to="/KnowledgePage/" style={{ textDecoration: `none` }} activeClassName="active">Knowledge Bank</Link>
                <Link to="/FAQ/" style={{ textDecoration: `none` }} activeClassName="active">FAQ</Link>
                <Link to="/contact/" style={{ textDecoration: `none` }} activeClassName="active">Contact us</Link>
              </div>
              :
              <div />
            )}
          </div>
        </div>
      </header>
    );

  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  hideLangs: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: ``,
  hideLangs: false,
};

export default Header;
