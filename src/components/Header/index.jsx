import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Langs from '../Langs';
import { FormattedMessage } from 'react-intl';
import Logo from './Logo';
import { Transition, Trail } from 'react-spring/renderprops';

import './header.css';


class Header extends Component {
  state = {
    isActive: false,
    menuOpen: false,
  }

  handleBtnClick = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  };

  toggleHamburger = () => {
    const { isActive } = this.state
    this.setState({
      isActive: !isActive
    })
  }
  render() {
    const { isActive } = this.state;
    const { hideLangs } = this.props;
    const menuItems = [
      <Link to="/SkillsPage/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Skills Certificate" /></Link>,
      <Link to="/FaqPage/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Faqs" /></Link>,
      <Link to="/KnowledgePage/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Knowledge Bank" /></Link>
    ];
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
            <Link to="/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Home" /></Link>
            <Link to="/AboutPage/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.About" /></Link>
            <Link to="/ProductPage/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Product" /></Link>
            <Link to="/PurchasePage/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Purchase" /></Link>
            <a>
              <div className="Link-dropdown">
                <p onClick={this.handleBtnClick}>
                  <FormattedMessage id="home.More" /> +
                </p>
                <Transition
                  unique
                  reset
                  items={this.state.menuOpen}
                  from={{
                    opacity: 0,
                    height: 0,
                    transform: 'translateY(-10%)',
                  }}
                  enter={{
                    opacity: 1,
                    height: 'auto',
                    transform: 'translate(0%)',
                  }}
                  leave={{ opacity: 0 }}
                >
                  {item =>
                    item &&
                    (props => (
                      <div style={props} className="menu">
                        <Trail
                          // unique
                          // reset
                          items={menuItems}
                          from={{ opacity: 0 }}
                          to={{ opacity: 1 }}
                        >
                          {trailItem => trailProps => (
                            <div style={trailProps} className="menuItem">
                              {trailItem}
                            </div>
                          )}
                        </Trail>
                      </div>
                    ))
                  }
                </Transition>
              </div>
            </a>
            <Link to="/ContactPage/" style={{ textDecoration: `none` }} className="getinTouch"><FormattedMessage id="home.Contact Us" /></Link>
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
                <Link to="/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Home" /></Link>
                <Link to="/AboutPage/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.About" /></Link>
                <Link to="/ProductPage/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Product" /></Link>
                <Link to="/PurchasePage/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Purchase" /></Link>
                <Link to="/SkillsPage/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Skills Certificate" /></Link>
                <Link to="/KnowledgePage/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Knowledge Bank" /></Link>
                <Link to="/FAQ/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Faqs" /></Link>
                <Link to="/contact/" style={{ textDecoration: `none` }} activeClassName="active"><FormattedMessage id="home.Contact Us" /></Link>
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
