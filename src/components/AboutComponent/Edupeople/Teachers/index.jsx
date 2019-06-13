import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';


class Teachers extends Component {
    render() {
        return (
            <div className="container">
                <div className="real-world">
                    <h2><FormattedMessage id="home.Problems Faced by Teachers" /></h2>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                1
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Traditional Hardware is difficult to operate" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE can be operated just like normal Personal Computer, with Keyboard and mouse provided." />
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
                                <h6><FormattedMessage id="home.Hardware setup is difficult" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE has just one switch to start the classroom learning." />
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
                                <h6><FormattedMessage id="home.Less information towards newer pedagogical techniques." /></h6>
                                <p>
                                    <FormattedMessage id="home.Teacher can readily access EDUCRATE to search the concept from youtube to present before the class." />
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
                                <h6><FormattedMessage id="home.Application/software is complex to handle" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE operates in LINUX based operating system, which is the easiest software to use in smart classroom setting." />
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
                                <h6><FormattedMessage id="home.Extensive curriculum to cover" /></h6>
                                <p>
                                    <FormattedMessage id="home.Knowledge bank videos are of short duration to adjust at least once a week for the students without affecting normal teaching-curriculum." />
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
                                <h6><FormattedMessage id="home.Language Barrier in content" /></h6>
                                <p>
                                    <FormattedMessage id="home.Knowledge Bank has been made by contribution of Teachers and stakeholders in local language for better understanding for kids." />
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
                                <h6><FormattedMessage id="home.Lack of Communication between student and teacher" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE promoter two way communication between student - teacher and amongst students as well through Group discussion certificates and skill topics." />
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
                                <h6><FormattedMessage id="home.Capturing Important photographs in joy moments of classroom" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE has camera feature to capture all the important moments of the classrooms." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                9
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Lack of awareness about Flipped Learning" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE promotes sharing of topics well in advance with students, and students go through it, forming an understanding of the topic so that they can facilitate discussion on and elaboration of the topic." />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Teachers;