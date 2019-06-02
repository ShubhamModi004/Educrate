import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { Motion, spring } from 'react-motion';
import { Collapse } from 'react-collapse';


// imprt css
import './Learning.css';

class Specification extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpened: false
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(event) {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    get togglerIcon() {
        return this.state.isOpened ? 'EXPAND' : 'MINIMIZE'
    }

    render() {
        return (
            <div className="toggler">
                <div className="collapsible" onClick={this.handleToggle}>
                    <span className="label">{this.props.label}</span>
                    <span className="icon">{this.togglerIcon}</span>
                </div>
                <Collapse className="content" isOpened={this.state.isOpened}>
                    {this.props.children}
                </Collapse>
            </div>
        )
    }
}

class Single extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container'>
                <h3>MULTI-SENSORY LEARNING </h3>
                <p className="interactive-paragraph">Multi­Sensory Learning is the concept of imparting, learning & involving
                the use of multiple senses of the students by using education content in
                audio, video, interactive & text forms.</p>
                <div className="imageSection">DIAGRAM TO BE PROVIDED BY THE CLIENT</div>
                <h5>Advantages of Audio­Visual (AV) in Learning</h5>
                <p className="interactive-paragraph">A combination of pictures, sound & other attention grabbing media, AV
                Technology helps to simulate the learner’s mind & to retain information.
                Audio­Visual aids can also contribute to class discipline as the potentially
                unruly pupil’s interest is captured. More interaction also helps to foster
                critical thinking & reasoning, which are good preparation for Higher
                education and in life beyond. Many difficulties can be overcome by using
                AV technology. Boredom & lack of motivation can be remedied as
                students who are exposed to AV technology find it more stimulating than
                traditional verbal instruction. Multimedia technology is also proven to
                make learning easier for those with learning difficulties.
                </p>
                <div className="imageSection">DIAGRAM TO BE PROVIDED BY THE CLIENT</div>
                <div className="interative-feature-list">
                    <h6 className="interative-feature-list-header">Other Benefits of AV Learning</h6>
                    <p>+ Help store information longer</p>
                    <p>+ Makes communication quicker & simpler.</p>
                    <p>+ Exposure to technology makes children use technology in a better way, which can be useful for them
                    in future, like making presentations, animations etc.</p>
                    <p>+ Videos delivered through digital content softwares, youtube etc. helps students to use their brain in a
                    more effective & creative manner.</p>
                    <p>+ We learn more what we see and AV learning is just that thing.</p>
                </div>
            </div>
        )
    }
}


export default Single;

