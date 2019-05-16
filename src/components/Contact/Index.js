import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// import css
import './styles.css';

class Index extends Component {
    render() {
        return (
            <div className="container contact-us">
                <div className="col-md-6 col-12">
                    <h2>CONTACT US</h2>
                    <p className="light"><FormattedMessage id="We would love to get in touch with you." /></p>
                </div>
                <div className="col-md-6 col-12">
                </div>
            </div>
        )
    }
}


export default Index;