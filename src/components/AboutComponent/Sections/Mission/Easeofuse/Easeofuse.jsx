import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import EaseofuseImage from './Image';

// import css

class Motivate extends Component {

    render() {
        return (
            <div className="mission-strive-section">
                <h5><FormattedMessage id="home.EASE OF USE" /></h5>
                <div className="mission-strive-section-image-container">
                    <EaseofuseImage />
                </div>
                <p>
                    <FormattedMessage id="home.We have developed a model in which teachers through simplest means avail hardware and software to help students. In our solution teachers will be just click away to accessing web content(PROCESS)." /></p>
            </div>
        )
    }
}


export default Motivate;