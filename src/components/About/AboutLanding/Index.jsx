import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
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
                    <h2><FormattedMessage id="EVERYTHING YOU NEED TO KNOW ABOUT US" /></h2>
                    <p className="light"><FormattedMessage id="Get to know deeper insights about who we are, what drives us and what's our mission" /></p>
                    <Link className="yellowButtons"><FormattedMessage id="FIND OUT HOW" /></Link>
                </div>
                <div className="PinkSection">
                    
                </div>
            </div>
        )
    }
}


export default Index;