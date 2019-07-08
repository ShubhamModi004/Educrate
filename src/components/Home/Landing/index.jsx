import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import LandingSection from './LandingSection';
import Facebook from '../../common/Facebook';
import Instagram from '../../common/Instagram';
import Whatsapp from '../../common/Whatsapp';

// import css
import './styles.css';

class Index extends Component {
    render() {
        return (
            <div className="home-main-title container">
                <div className="main-title">
                    <h1><FormattedMessage id="home.Revolutionizing the way content is delivered in school" /></h1>
                    <p className="light"><FormattedMessage id="home.Digital education to all class of students" /></p>
                    <a href="#product-home" className="yellowButtons"><FormattedMessage id="home.FIND OUT HOW" /></a>
                </div>
                <div className="main-title-imageSection">
                    <LandingSection />
                </div>
                <div className="socialMedia">
                    <div className="social-media-facebook">
                        <Facebook />
                    </div>
                    <Instagram />
                    <Whatsapp />
                </div>
            </div>
        )
    }
}


export default Index;