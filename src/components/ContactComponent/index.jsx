import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// importing images
import Facebook from './Facebook';
import Instagram from './Instagram';
import Whatsapp from './Whatsapp';
import Map from './Map';
// import css
import './styles.css';

class Index extends Component {
    render() {
        return (
            <div style={{ height: '100%' }}>
                <div className="container contact-us">
                    <div className="col-l-6 col-md-12 col-12 contact-us-header">
                        <h3><FormattedMessage id="home.CONTACT US" /></h3>
                        <p><FormattedMessage id="home.We would love to get in touch with you." /></p>
                    </div>
                    <div className="socials-contactus">
                        <div className="social-media-facebook">
                            <Facebook />
                        </div>
                        <Instagram />
                        <Whatsapp />
                    </div>
                </div>
                <div className="yellow-box">
                    <div className="row yellow-box-text">
                        <div className="col-md-6 col-7 yellow-box-text-header">
                            <h3>Help@educrate.com</h3>
                        </div>
                        <div className="col-md-1 col-0 col-xs-0 col-xs-1 checkbox__line"></div>
                        <div className="col-md-3 col-5 yellow-box-checkbox">
                            <label class="checkbox">
                                <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                                <span class="checkbox__symbol">
                                    <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                        <title>MAIL</title>
                                        <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                </span>
                                <p class="checkbox__textwrapper">MAIL</p>
                            </label>
                        </div>
                    </div>
                    <div className="row yellow-box-text">
                        <div className="col-md-6 col-7 yellow-box-text-header">
                            <h3>040 2275 651</h3>
                        </div>
                        <div className="col-md-1 col-0 col-xs-0 checkbox__line"></div>
                        <div className="col-md-3 col-5 yellow-box-checkbox">
                            <label class="checkbox">
                                <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                                <span class="checkbox__symbol">
                                    <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                        <title>PHONE</title>
                                        <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                </span>
                                <p class="checkbox__textwrapper">PHONE</p>
                            </label>
                        </div>
                    </div>
                    <div className="row yellow-box-text">
                        <div className="col-md-6 col-7 yellow-box-text-header">
                            <h3>+91 85859 95812</h3>
                        </div>
                        <div className="col-md-1 col-0 col-xs-0 checkbox__line"></div>
                        <div className="col-md-3 col-5 yellow-box-checkbox">
                            <label class="checkbox">
                                <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                                <span class="checkbox__symbol">
                                    <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                        <title>WHATSAPP</title>
                                        <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                </span>
                                <p class="checkbox__textwrapper">WHATSAPP</p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="map-section">
                    <img src={require('../../images/Map.png')} />
                </div>
            </div>
        )
    }
}


export default Index;