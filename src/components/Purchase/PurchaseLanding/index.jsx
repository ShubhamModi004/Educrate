import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Purchaseprocedure from './Purchaseprocedure';
import Facebook from '../../common/Facebook';
import Instagram from '../../common/Instagram';
import Whatsapp from '../../common/Whatsapp';

// import css
import './Purchase.css';

class Index extends Component {
    render() {
        return (
            <div className="purchase-main-title container">
                <div className="main-title">
                    <h2><FormattedMessage id="How to purchase an Educrate" /></h2>
                    <p className="light"><FormattedMessage id="Below are the steps that are involved in purchasing Educrate" /></p>
                </div>
                <div className="purchase-main-title-imageSection">
                    <Purchaseprocedure />
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