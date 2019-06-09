import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Empowerment from './Empowerment';

// import css

class index extends Component {

    render() {
        return (
            <div className="mission-strive-section">
                <h5><FormattedMessage id="home.EMPOWERMENT" /></h5>
                <div className="mission-strive-section-image-container">
                    <Empowerment />
                </div>
                <p><FormattedMessage id="home.Teachers are the soul of classroom teaching and by EDUCRATE they can motivate students through Audio-visual method. Through Knowledge Bank  Teachers can introduce students to ideas, best education practices, good content and  skills related to children." />
                </p>
            </div>
        )
    }
}


export default index;