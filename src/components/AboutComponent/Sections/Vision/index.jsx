import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// import images
import Bluebeads from './Bluebeads';
import Yellowbeads from './Yellowbeads';

// imprt css
import './Vision.css';

class Index extends Component {
    render() {
        return (
            <div className="vision-details container">
                <div className="vision-desc mb-4">
                    <div className="bluebeads">
                        <Bluebeads />
                    </div>
                    <div className="yellowbeads">
                        <Yellowbeads />
                    </div>
                    <h4>
                        <FormattedMessage id="home.We will follow the EDUCRATE Values in thought and action towards a common approach, what is being decided in our discussion." />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <FormattedMessage id="home.We will always represent EDUCRATE mission in the most professional and responsible manner as one deliberate mistake can spoil the motivation of other members.  Although we would share our Knowledge and experience towards this mission" />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <FormattedMessage id="home.We will ensure the confidentiality of all internal information and data and will never compromise on preserving the integrity of information received in the process of this mission." />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <FormattedMessage id="home.We would never breach the privacy of any stakeholder or any law in furtherance of this mission" />
                    </h4>
                </div>
            </div>


        )
    }
}


export default Index;

