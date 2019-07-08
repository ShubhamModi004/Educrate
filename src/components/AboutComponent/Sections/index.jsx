import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image


// import css
import './styles.css';

// importing components
import Who from './Whoweare/Who';
import Mission from './Mission/Mission';
import Vision from './Vision';
import EduPeople from './Edupeople';

class Index extends Component {
    componentDidMount() {
        const { missionBlock, visionBlock } = this.props;
        if (missionBlock) {
            this.setState({
                selected: true,
                who: false,
                mission: true,
                vision: false,
                eduPeople: false
            })
        }
        if (visionBlock) {
            this.setState({
                selected: true,
                who: false,
                mission: false,
                vision: true,
                eduPeople: false
            })
        }

    }
    state = {
        selected: true,
        who: true,
        mission: false,
        vision: false,
        eduPeople: false
    }

    selected = (id) => {
        if (id === "vision") {
            this.setState({
                who: false,
                mission: false,
                vision: true,
                eduPeople: false
            })
        } else if (id === "mission") {
            this.setState({
                who: false,
                mission: true,
                vision: false,
                eduPeople: false
            })
        } else if (id === "who") {
            this.setState({
                who: true,
                mission: false,
                vision: false,
                eduPeople: false
            })
        } else if (id === "eduPeople") {
            this.setState({
                who: false,
                mission: false,
                vision: false,
                eduPeople: true
            })
        }
    }

    renderContent = () => {
        if (this.state.who) {
            return (
                <Who />
            )
        } else if (this.state.mission) {
            return (
                <Mission />
            )
        } else if (this.state.vision) {
            return (
                <Vision />
            )
        }
        else if (this.state.eduPeople) {
            return (
                <EduPeople />
            )
        }

    }

    render() {
        const { who, mission, vision, eduPeople } = this.state;
        return (
            <div className="container" style={{ width: '100vw', overflow: 'hidden' }}>
                <div className="about-sections">
                    <div className="sectionContainer">
                        <div className="section" id='who' onClick={this.selected.bind(this, 'who')}><h6 className={(who ? 'selected' : 'notSelected')}><FormattedMessage id="home.WHO WE ARE" /></h6></div>
                        <div className="section" id='mission' onClick={this.selected.bind(this, 'mission')}><h6 className={(mission ? 'selected' : 'notSelected')}><FormattedMessage id="home.MISSION" /></h6></div>
                        <div className="section" id='vision' onClick={this.selected.bind(this, 'vision')}><h6 className={(vision ? 'selected' : 'notSelected')}><FormattedMessage id="home.VISION" /></h6></div>
                        <div className="section" id='eduPeople' onClick={this.selected.bind(this, 'eduPeople')}><h6 className={(eduPeople ? 'selected' : 'notSelected')}><FormattedMessage id="home.EDUPEOPLE" /></h6></div>
                    </div>
                </div>
                {this.renderContent()}
            </div>
        )
    }
}


export default Index;