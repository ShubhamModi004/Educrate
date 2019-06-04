import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Informational from './Informational';
import Motivational from './Motivational';
import Moral from './Moral';
import Social from './Social';
import Creative from './Creative';

// import css
import './SkillsTopic.css';

class Index extends Component {
    render() {
        return (
            <div className="skills-categories-section">
                <div className="skills-categories-header">
                    <h5>
                        We have almost touched almost 150 topics for the children, which can be
                        divided into 5 broad categories
                    </h5>
                </div>
                <div className="skills-category">
                    <h5 className="container">Informational</h5>
                    <Informational />
                </div>
                <div className="skills-category">
                    <h5 className="container">Motivational</h5>
                    <Motivational />
                </div>
                <div className="skills-category">
                    <h5 className="container">Moral</h5>
                    <Moral />
                </div>
                <div className="skills-category">
                    <h5 className="container">Social</h5>
                    <Social />
                </div>
                <div className="skills-category">
                    <h5 className="container">Creative</h5>
                    <Creative />
                </div>
                <div className="skills-categories-footer">
                    <h5>
                        We recommend teachers to use the hard copy of the above
                        skill set and to make their own schedule to use them as needed.s
                    </h5>
                </div>
            </div>
        )
    }
}


export default Index;