import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import PartnerImage from './Image';

// import css

class Motivate extends Component {

    render() {
        return (
            <div className="mission-strive-section">
                <h5><FormattedMessage id="home.PARTNER" /></h5>
                <div className="mission-strive-section-image-container">
                    <PartnerImage />
                </div>
                <p>
                    <FormattedMessage id="home.Non-Government organisations have vision to change the education system and have knowledge with respect stakeholders(children, teachers, school operators and local government) in their geographies/region. EDUCRATE team want to partner with these NGOs to reachout to stakeholders for need of Ed-tech in school." />
                </p>
            </div>
        )
    }
}


export default Motivate;