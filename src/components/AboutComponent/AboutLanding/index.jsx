import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Facebook from '../../common/Facebook';
import Instagram from '../../common/Instagram';
import Whatsapp from '../../common/Whatsapp';

// import css
import './styles.css';

import Aboutussection from './Aboutussection';

class Index extends Component {
    render() {
        return (
            <div className="home-main-title container">
                <div className="main-title">
                    <h1><FormattedMessage id="home.EVERYTHING YOU NEED TO KNOW ABOUT US" /></h1>
                    <p className="light"><FormattedMessage id="home.Get to know deeper insights about who we are, what drives us and what is our mission" /></p>
                </div>
                <div className="main-title-imageSection">
                    <Aboutussection />
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