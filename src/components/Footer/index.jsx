import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// import images
import Instagram from './Instagramfooter';
import Facebook from './Facebookfooter';
import Whatsapp from './Whatsappfooter';
import Bluefooter from './Bluefooter';
import Yellowfooter from './Yellowfooter';
import Logo from './Logo';

// import css
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-socials">
                    <h3><FormattedMessage id="home.Connect with us on socially" /></h3>
                    <div className="footer-social-images">
                        <div className="Insta-footer"><Instagram /></div>
                        <div className="Facebook-footer"><Facebook /></div>
                        <div className="Whatsapp-footer"><Whatsapp /></div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="blue-footer">
                        <Bluefooter />
                    </div>
                    <div className="yellow-footer">
                        <Yellowfooter />
                    </div>
                    <div className="row container">
                        <div className="col-md-3">
                            <div className="logo-footer">
                                <Logo />
                            </div>
                        </div>
                        <div className="col-md-4 mt-2">
                            <h5><FormattedMessage id="home.Quick Links" /></h5>
                            <div className="footer-quicklinks">
                                <div className="quicklinks">
                                    <Link to="/" style={{ textDecoration: `none` }}><FormattedMessage id="home.Home" /></Link>
                                    <Link to="/AboutPage/" style={{ textDecoration: `none` }}><FormattedMessage id="home.About" /></Link>
                                    <Link to="/ProductPage/" style={{ textDecoration: `none` }}><FormattedMessage id="home.Product" /></Link>
                                    <Link to="/PurchasePage/" style={{ textDecoration: `none` }}><FormattedMessage id="home.Purchase" /></Link>

                                </div>
                                <div className="quicklinks">
                                    <Link to="/SkillsPage/" style={{ textDecoration: `none` }}><FormattedMessage id="home.Skills Certificate" /></Link>
                                    <Link to="/KnowledgePage/" style={{ textDecoration: `none` }}><FormattedMessage id="home.Knowledge Bank" /></Link>
                                    <Link to="/FAQ/" style={{ textDecoration: `none` }}><FormattedMessage id="home.Faqs" /></Link>
                                    <Link to="/contact/" style={{ textDecoration: `none` }}><FormattedMessage id="home.Contact Us" /></Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 mt-2">
                            <h5><FormattedMessage id="home.Legal" /></h5>
                            <div className="quicklinks">
                                <Link to="/" style={{ textDecoration: `none` }}><FormattedMessage id="home.Privacy Policy" /></Link>
                                <Link to="/AboutPage/" style={{ textDecoration: `none` }}><FormattedMessage id="home.Complaint Registration" /></Link>
                                <Link to="/ProductPage/" style={{ textDecoration: `none` }}><FormattedMessage id="home.Warranty & Delivery Policy" /></Link>
                                <Link to="/PurchasePage/" style={{ textDecoration: `none` }}><FormattedMessage id="home.Support" /></Link>
                            </div>
                        </div>
                        <div className="col-md-2 mt-2">
                            <h5><FormattedMessage id="home.Lets Talk" /></h5>
                            <div className="contact-footer-link">
                                <Link to="/ContactPage/" style={{ textDecoration: `none` }} className="getinTouch"><FormattedMessage id="home.Contact Us" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;