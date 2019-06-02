import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';



// imprt css
import './FaqSection.css';

class Index extends React.Component {
    render() {
        return (
            <div className="purchase-faq-section">
                <h3>Have a query?</h3>
                <h6>We answer all your doubts in our FAQ page</h6>
                <Link className="yellowButtons">READ FAQ</Link>
            </div>
        )
    }
}


export default Index;

