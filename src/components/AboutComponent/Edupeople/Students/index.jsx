import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';


class Students extends Component {
    render() {
        return (
            <div className="container">
                <div className="real-world">
                    <h2><FormattedMessage id="home.Problems Faced by Students" /></h2>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                1
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Smart-Education" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE is on strong mission towards making classrooms exciting, meaningful and enjoyable." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                2
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Rote learning" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE through audio visual means make classroom more magical and interesting, eliminating rote learning." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                3
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Lack of Skills beyond curriculum" /></h6>
                                <p>
                                    <FormattedMessage id="home.Knowledge bank is ever growing list of skills needed in Indian classrooms." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                4
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Running behind grades" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE enable children’s ability to think critically, to make more informed and ethical decisions. To let students gain knowledge beyond day to day course." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                5
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Information overload" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE forwards the well concluded research of better learning through audio visual means." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                6
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Lack of information about skills beyond curriculum" /></h6>
                                <p>
                                    <FormattedMessage id="home.Knowledge bank is ever growing list of skills needed in Indian classrooms towards creative learning." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                7
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Gamification in Learning" /></h6>
                                <p>
                                    <FormattedMessage id="home.Skill-Certificate model is based on gamified form of Learning in the classroom." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                8
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Teacher-Student relationship" /></h6>
                                <p>
                                    <FormattedMessage id="home.Skill certificate model is to increase the communication and dialogue between the teacher and student in the classroom." />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Students;