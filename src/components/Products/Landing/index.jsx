import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Product from './Product';
import Facebook from '../../common/Facebook';
import Instagram from '../../common/Instagram';
import Whatsapp from '../../common/Whatsapp';

// import css
import './Product.css';

class Index extends Component {
    render() {
        return (
            <div className="product-main-title container">
                <div className="main-title">
                    <h2><FormattedMessage id="Providing a complete smartclassroom solution " /></h2>
                    <p className="light"><FormattedMessage id="Digital education to all class of students" /></p>
                </div>
                <div className="product-main-title-imageSection">
                    <Product />
                </div>
                <div className="socialMedia">
                    <Facebook />
                    <Instagram />
                    <Whatsapp />
                </div>
            </div>
        )
    }
}


export default Index;