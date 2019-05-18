import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import HomeLanding from './HomeLanding';
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
                    <h2><FormattedMessage id="home.Revolutionizing the way content is delivered in school" /></h2>
                    <p className="light"><FormattedMessage id="home.Educrate aims to provide the best form of education with the help of tech." /></p>
                    <Link className="yellowButtons"><FormattedMessage id="home.FIND OUT HOW" /></Link>
                </div>
                <div className="main-title-imageSection">
                    <HomeLanding/>
                </div>
                <div className="socialMedia">
                    <Facebook />
                    <Instagram />
                    <Whatsapp/>
                </div>
            </div>
        )
    }
}


export default Index;