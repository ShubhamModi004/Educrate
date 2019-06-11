import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';



// imprt css
import './FaqSection.css';

class Index extends React.Component {
    render() {
        return (
            <div className="purchase-faq-section">
                <h3><FormattedMessage id="home.Have a query?" /></h3>
                <h6><FormattedMessage id="home.We answer all your doubts in our FAQ page" /></h6>
                <Link className="yellowButtons"><FormattedMessage id="home.READ FAQ" /></Link>
            </div>
        )
    }
}


export default Index;

