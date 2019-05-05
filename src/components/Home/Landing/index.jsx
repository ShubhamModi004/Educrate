import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

// import css
import './styles.css';

class Index extends Component {
    render() {
        return (
            <div className="home-main-title">
                <div className="container ">
                    <h1><FormattedMessage id="home.Video Traning"/></h1>
                    <h1><FormattedMessage id="home.Made Easy"/></h1>
                    <p className="light"><FormattedMessage id="home.Your training platform to improve sales results, client retention and partners performance." /></p>
                </div>
            </div>
        )
    }
}


export default Index;