import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Skillssection from './Skillssection';
import Facebook from '../../common/Facebook';
import Instagram from '../../common/Instagram';
import Whatsapp from '../../common/Whatsapp';

// import css
import './SkillsLanding.css';

class Index extends Component {
    render() {
        return (
            <div className="skills-main-title container">
                <div className="main-title">
                    <h2><FormattedMessage id="Skill Certificate" /></h2>
                    <p className="light"><FormattedMessage id="By going through series of articles, expert opinions and research papers, EDUCRATE team has realised the following skills ought to be introduced in the classrooms." /></p>
                </div>
                <div className="skills-main-title-imageSection">
                    <Skillssection />
                </div>
                <div className="socialMedia">
                    <div className="social-media-facebook">
                        <Facebook />
                    </div>
                    <Instagram />
                    <Whatsapp />
                </div>
            </div>
        )
    }
}


export default Index;