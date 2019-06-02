import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring'
import Fade from 'react-reveal/Fade';

// Importing Image
import School from './Counters/School';

// import css
import './Counter.css';

class Index extends Component {
    render() {
        return (
            <div className="counterSection">
                <Fade>
                <School/>
                </Fade>
            </div>
        )
    }
}

export default Index;