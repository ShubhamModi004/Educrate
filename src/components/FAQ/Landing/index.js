import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Facebook from '../../common/Facebook';
import Instagram from '../../common/Instagram';
import Whatsapp from '../../common/Whatsapp';

// import css
// import './styles.css';

class Index extends Component {
    render() {
        return (
            <div className="about-main-title container">
                <div className="main-title">
                    <h2><FormattedMessage id="FREQUENTLY ASKED QUESTIONS" /></h2>
                    <p className="light"><FormattedMessage id="This page aims at informing on the main activities and progress made under Educrate" /></p>
                </div>
                <div className="PinkSection">

                </div>
            </div>
        )
    }
}


export default Index;