import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import Image from './Image';

// import css
import './styles.css';

class Index extends Component {
    render() {
        return (
            <div className="about-main container">
                <div className="row aboutUs">
                    <div className="col-md-8 col-12 aboutUs-info">
                        <h2><FormattedMessage id="home.Who we are"/></h2>
                        <p className="light"><FormattedMessage id="home.Educrate aims to provide the best form of education with the help of tech." /></p>
                        <Link className="yellowButtons"><FormattedMessage id="home.MORE ABOUT US" /></Link>
                    </div>
                    <div className="col-md-4 col-12 aboutUs-image">
                        <Image/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Index;