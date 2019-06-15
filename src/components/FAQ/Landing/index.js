import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Facebook from '../../common/Facebook';
import Instagram from '../../common/Instagram';
import Whatsapp from '../../common/Whatsapp';

// import css
// import './styles.css';

import Faqsection from './Faqsection';


class Index extends Component {
    render() {
        return (
            <div className="home-main-title container">
                <div className="main-title">
                    <h1><FormattedMessage id="home.FREQUENTLY ASKED QUESTIONS" /></h1>
                    <p className="light"><FormattedMessage id="home.This page aims at informing on the main activities and progress made under Educrate" /></p>
                </div>
                <div className="main-title-imageSection">
                    <Faqsection />
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