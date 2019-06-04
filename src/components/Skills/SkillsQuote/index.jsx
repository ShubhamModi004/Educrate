import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// import images
import Bluebeads from './Bluebeads';
import Yellowbeads from './Yellowbeads';

// imprt css
import './SkillsQuote.css';

class Index extends React.Component {
    render() {
        return (
            <div className="knowledge-bank-stakeholder mb-4" style={{ height: '15rem' }}>
                <div className="bluebeads">
                    <Bluebeads />
                </div>
                <div className="yellowbeads">
                    <Yellowbeads />
                </div>
                <h2>
                    Skills we want for children to be prepared for the modern world
                </h2>
            </div>
        )
    }
}

export default Index;