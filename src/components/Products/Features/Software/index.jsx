import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { Motion, spring } from 'react-motion';
import { Collapse } from 'react-collapse';


// imprt css
import './Software.css';

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

class Application extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container'>
                <h1><FormattedMessage id="home.SOFTWARE" /></h1>
                <div className="software-paragraph">
                    <h5><FormattedMessage id="home.Digital Content for E­learning" /></h5>
                    <p><FormattedMessage id="home.Our Interactive WhiteBoard setup adopts the world’s leading Infrared Positioning Technology along with the green board (optional). One can use one’s own finger or any other item suchy as dummy pens or any other object to write on the the Interactive WhiteBoard surface, whereas the regular green board can be used to write with chalks of any colour" /></p>
                </div>
                <div className="interative-feature-list">
                    <h6 className="interative-feature-list-header"><FormattedMessage id="home.CONTENT FEATURES" /></h6>
                    <div className="content-features">
                        <div className="content-features-section">
                            <div className="row">
                                <div className="col-md-2 content-features-section-number">
                                    1
                            </div>
                                <div className="col-md-10 content-features-section-desc">
                                    <h6><FormattedMessage id="home.Course content in 2D/3D animation for better learning" /></h6>
                                </div>
                            </div>
                        </div>
                        <div className="content-features-section">
                            <div className="row">
                                <div className="col-md-2 content-features-section-number">
                                    2
                            </div>
                                <div className="col-md-10 content-features-section-desc">
                                    <h6><FormattedMessage id="home.1000’s of quizzes and tests." /></h6>
                                </div>
                            </div>
                        </div>
                        <div className="content-features-section">
                            <div className="row">
                                <div className="col-md-2 content-features-section-number">
                                    3
                            </div>
                                <div className="col-md-10 content-features-section-desc">
                                    <h6><FormattedMessage id="home.More than 20,000 educational modules." /></h6>
                                </div>
                            </div>
                        </div>
                        <div className="content-features-section">
                            <div className="row">
                                <div className="col-md-2 content-features-section-number">
                                    4
                            </div>
                                <div className="col-md-10 content-features-section-desc">
                                    <h6><FormattedMessage id="home.Available 24x7 for doubt clearance." /></h6>
                                </div>
                            </div>
                        </div>
                        <div className="content-features-section">
                            <div className="row">
                                <div className="col-md-2 content-features-section-number">
                                    5
                            </div>
                                <div className="col-md-10 content-features-section-desc">
                                    <h6><FormattedMessage id="home.Free educational software for advanced learners" /></h6>
                                </div>
                            </div>
                        </div>
                        <div className="content-features-section">
                            <div className="row">
                                <div className="col-md-2 content-features-section-number">
                                    6
                            </div>
                                <div className="col-md-10 content-features-section-desc">
                                    <h6><FormattedMessage id="home.Question Bank for over 1 lac questions." /></h6>
                                </div>
                            </div>
                        </div>
                        <div className="content-features-section">
                            <div className="row">
                                <div className="col-md-2 content-features-section-number">
                                    7
                            </div>
                                <div className="col-md-10 content-features-section-desc">
                                    <h6><FormattedMessage id="home.Full length test series for competitions" /></h6>
                                </div>
                            </div>
                        </div>
                        <div className="content-features-section">
                            <div className="row">
                                <div className="col-md-2 content-features-section-number">
                                    8
                            </div>
                                <div className="col-md-10 content-features-section-desc">
                                    <h6><FormattedMessage id="home.Mapped to CBSE, ICSE & UP Board" /></h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default Application;

