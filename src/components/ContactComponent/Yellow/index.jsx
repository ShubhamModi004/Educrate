import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';


// import css
import './Yellow.css';

class Index extends Component {
    render() {
        return (
            <div className="yellow-box">
                <div className="yellow-box-text">
                    <div className="yellow-box-text-header">
                        <h3>Help@educrate.com</h3>
                    </div>
                    <div className="checkbox__line">
                        <div className="line"></div>
                    </div>
                    <div className="yellow-box-checkbox">
                        <label class="checkbox">
                            <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                            <span class="checkbox__symbol">
                                <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                    <title><FormattedMessage id="home.MAIL" /></title>
                                    <path d="M4 14l8 7L24 7"></path>
                                </svg>
                            </span>
                            <p class="checkbox__textwrapper"><FormattedMessage id="home.MAIL" /></p>
                        </label>
                    </div>
                </div>
                <div className="yellow-box-text">
                    <div className="yellow-box-text-header">
                        <h3>040 2275 651</h3>
                    </div>
                    <div className="checkbox__line">
                        <div className="line"></div>
                    </div>
                    <div className="yellow-box-checkbox">
                        <label class="checkbox">
                            <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                            <span class="checkbox__symbol">
                                <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                    <title><FormattedMessage id="home.PHONE" /></title>
                                    <path d="M4 14l8 7L24 7"></path>
                                </svg>
                            </span>
                            <p class="checkbox__textwrapper"><FormattedMessage id="home.PHONE" /></p>
                        </label>
                    </div>
                </div>
                <div className="yellow-box-text">
                    <div className="yellow-box-text-header">
                        <h3>+91 85859 95812</h3>
                    </div>
                    <div className="checkbox__line">
                        <div className="line"></div>
                    </div>
                    <div className="yellow-box-checkbox">
                        <label class="checkbox">
                            <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                            <span class="checkbox__symbol">
                                <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                    <title><FormattedMessage id="home.WHATSAPP" /></title>
                                    <path d="M4 14l8 7L24 7"></path>
                                </svg>
                            </span>
                            <p class="checkbox__textwrapper"><FormattedMessage id="home.WHATSAPP" /></p>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}


export default Index;