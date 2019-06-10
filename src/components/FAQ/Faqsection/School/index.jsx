import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
// imprt css

class Schools extends React.Component {
    render() {
        return (
            <div className='container faq-section'>
                <h1><FormattedMessage id="home.SCHOOLS" /></h1>
            </div>
        )
    }
}



export default Schools;

