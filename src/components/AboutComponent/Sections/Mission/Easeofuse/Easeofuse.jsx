import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import MotivateImage from './Image';

// import css

class Motivate extends Component {

    render() {
        return (
            <div className="mission-strive-section">
                <h5>EASE OF USE</h5>
                <div className="mission-strive-section-image-container">
                    <MotivateImage />
                </div>
                <p>EDUCRATE aims to provide equal opportunity of learning and aspirations to every Child.
                The teachers are facing problem in classroom with respect to hardware for delivery of content
                available online. Through our EDUCRATE teachers ancan avail content and practices in
                internet/online readily so that children can perform to their best potential
                </p>
            </div>
        )
    }
}


export default Motivate;