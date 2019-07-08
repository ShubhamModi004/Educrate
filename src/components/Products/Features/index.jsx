import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image


// import modules
import Hardware from './Hardware';
import Specification from './Specification';
import WhiteBoard from './WhiteBoard';
import Single from './Single';
import Software from './Software';
import Learning from './Learning';



// import css
// import './styles.css';

class Features extends Component {

    state = {
        hardware: true,
        specification: false,
        interactive: false,
        single: false,
        software: false,
        learning: false,
    }

    selected(id) {
        if (id === 'hardware') {
            this.setState({
                hardware: true,
                specification: false,
                interactive: false,
                single: false,
                software: false,
                learning: false
            })
        } else if (id === 'specification') {
            this.setState({
                hardware: false,
                specification: true,
                interactive: false,
                single: false,
                software: false,
                learning: false
            })
        } else if (id === 'interactive') {
            this.setState({
                hardware: false,
                specification: false,
                interactive: true,
                single: false,
                software: false,
                learning: false
            })
        } else if (id === 'single') {
            this.setState({
                hardware: false,
                specification: false,
                interactive: false,
                single: true,
                software: false,
                learning: false
            })
        } else if (id === 'software') {
            this.setState({
                hardware: false,
                specification: false,
                interactive: false,
                single: false,
                software: true,
                learning: false
            })
        } else if (id === 'learning') {
            this.setState({
                hardware: false,
                specification: false,
                interactive: false,
                single: false,
                software: false,
                learning: true
            })
        }

    }
    renderContent() {
        const { hardware, specification, interactive, single, software, learning } = this.state;
        if (hardware) {
            return (
                <Hardware />
            )
        } else if (specification) {
            return (
                <Specification />
            )
        } else if (interactive) {
            return (
                <WhiteBoard />
            )
        } else if (single) {
            return (
                <Single />
            )
        } else if (software) {
            return (
                <Software />
            )
        } else if (learning) {
            return (
                <Learning />
            )
        }

    }

    render() {
        const { hardware, specification, interactive, single, software, learning } = this.state;
        // console.log(hardware);
        return (
            <div className="Whocontainer">
                <div className="mission-strive">
                    <div className="mission-strive-sections">
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <div className="mission-strive-sections-fields">
                                    <div onClick={this.selected.bind(this, 'hardware')}>
                                        <h6 className={"mission-strive-header " + (hardware ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.HARDWARE" /></h6>
                                        {hardware ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'specification')}>
                                        <h6 className={"mission-strive-header " + (specification ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.SPECIFICATIONS" /></h6>
                                        {specification ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'interactive')}>
                                        <h6 className={"mission-strive-header " + (interactive ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.INTERACTIVE WHITEBOARD" /></h6>
                                        {interactive ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'single')}>
                                        <h6 className={"mission-strive-header " + (single ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.WHITEBOARD & GREENBOARD" /></h6>
                                        {single ? <div style={{ marginTop: '-2.5rem' }} className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'software')}>
                                        <h6 className={"mission-strive-header " + (software ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.SOFTWARE" /></h6>
                                        {software ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'learning')}>
                                        <h6 className={"mission-strive-header " + (learning ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.MULTI-SENSORY LEARNING" /></h6>
                                        {learning ? <div className="selectBackground"></div> : null}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 col-sm-12">
                                {this.renderContent()}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Features;