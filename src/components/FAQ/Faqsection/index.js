import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import './faq.css';

// import modules
import General from './General';
import Teachers from './Teachers';
import Schools from './School';
import Ngo from './Ngo';
import Policymakers from './Policy';
import Corporate from './Corporate';



class FaqSection extends Component {

    state = {
        general: true,
        teachers: false,
        schools: false,
        corporate: false,
        ngo: false,
        policymakers: false,
    }

    selected(id) {
        if (id === 'general') {
            this.setState({
                general: true,
                teachers: false,
                corporate: false,
                schools: false,
                ngo: false,
                policymakers: false,
            })
        } else if (id === 'teachers') {
            this.setState({
                general: false,
                teachers: true,
                corporate: false,
                schools: false,
                ngo: false,
                policymakers: false,
            })
        } else if (id === 'corporate') {
            this.setState({
                general: false,
                teachers: false,
                corporate: true,
                schools: false,
                ngo: false,
                policymakers: false,
            })
        } else if (id === 'schools') {
            this.setState({
                general: false,
                teachers: false,
                corporate: false,
                schools: true,
                ngo: false,
                policymakers: false,
            })
        } else if (id === 'ngo') {
            this.setState({
                general: false,
                teachers: false,
                corporate: false,
                schools: false,
                ngo: true,
                policymakers: false,
            })
        } else if (id === 'policymakers') {
            this.setState({
                general: false,
                teachers: false,
                corporate: false,
                schools: false,
                ngo: false,
                policymakers: true,
            })
        }

    }
    renderContent() {
        const { general, teachers, corporate, schools, ngo, policymakers } = this.state;
        if (general) {
            return (
                <General />
            )
        } else if (teachers) {
            return (
                <Teachers />
            )
        } else if (corporate) {
            return (
                <Corporate />
            )
        } else if (schools) {
            return (
                <Schools />
            )
        }
        else if (ngo) {
            return (
                <Ngo />
            )
        }
        else if (policymakers) {
            return (
                <Policymakers />
            )
        }
    }

    render() {
        const { general, teachers, corporate, schools, ngo, policymakers } = this.state;
        return (
            <div className="Whocontainer">
                <div className="mission-strive">
                    <div className="mission-strive-sections">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="mission-strive-sections-fields">
                                    <div onClick={this.selected.bind(this, 'general')}>
                                        <h6 className={"mission-strive-header " + (general ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.GENERAL FAQ" /></h6>
                                        {general ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'teachers')}>
                                        <h6 className={"mission-strive-header " + (teachers ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.TEACHERS" /></h6>
                                        {teachers ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'corporate')}>
                                        <h6 className={"mission-strive-header " + (corporate ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.CORPORATE" /></h6>
                                        {corporate ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'schools')}>
                                        <h6 className={"mission-strive-header " + (schools ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.SCHOOL" /></h6>
                                        {schools ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'ngo')}>
                                        <h6 className={"mission-strive-header " + (ngo ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.NGO" /></h6>
                                        {ngo ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'policymakers')}>
                                        <h6 className={"mission-strive-header " + (policymakers ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.POLICY MAKERS" /></h6>
                                        {policymakers ? <div className="selectBackground"></div> : null}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                {this.renderContent()}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FaqSection;