import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// import css
import './styles.css';

class Index extends Component {
    render() {
        return (
            <div className="home-main-title container">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <h2><FormattedMessage id="home.Aiding access to quality education to those in need." /></h2>
                        <p className="light"><FormattedMessage id="home.Educrate aims to provide the best form of education with the help of tech." /></p>
                        <Link className="yellowButtons">FIND OUT HOW</Link>
                    </div>
                    <div className="col-md-4 col-12">
                        <img src="circle.png"></img>
                    </div>

                </div>
            </div>
        )
    }
}


export default Index;