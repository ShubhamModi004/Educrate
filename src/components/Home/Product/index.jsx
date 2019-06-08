import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// import images
import ProductImage from './ProductImage';


// imprt css
import './ProductHome.css';

class Index extends React.Component {
    render() {
        return (
            <div className="product-home">
                <img src={require('./ProductImage.png')} />
            </div>
        )
    }
}


export default Index;

