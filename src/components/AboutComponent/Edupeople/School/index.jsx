import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';


class School extends Component {
    render() {
        return (
            <div className="container">
                <div className="real-world">
                    <h2><FormattedMessage id="home.Problems Faced by School Operators" /></h2>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                1
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Pricing of Hardware" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE has combined five device and reduce the setup price by 1/3rd" />
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
                                <h6><FormattedMessage id="home.Training of Teachers towards technology usage" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE gives extensive training to the teachers regarding Hardware usage and Software usage. And support all around the clock mail and telephone support to teachers. " />
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
                                <h6><FormattedMessage id="home.Complex softwares" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE’s whole mechanism revolves around the gmail id created for your school/classroom. The training would be provided to teachers and instruction manual with screenshots also would be provided to teachers." />
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
                                <h6><FormattedMessage id="home.Discontinuous Electricity" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE has been provided with inbuilt battery backup of 3 hours." />
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
                                <h6><FormattedMessage id="home.Costly content" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE creates awareness about FAIR USE provisions in Indian Law. EDUCRATE full accessibility to Youtube  for teaching purposes." />
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
                                <h6><FormattedMessage id="home.Language Barrier" /></h6>
                                <p>
                                    <FormattedMessage id="home.Knowledge Bank has been made by contribution of Teachers and stakeholders in local language  for better understanding for kids." />
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
                                <h6><FormattedMessage id="home.Space taking hardware" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE as a package is only one device,placed just above the teacher so as to not disturb the visibility of teacher with students." />
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
                                <h6><FormattedMessage id="home.No real-time monitoring of Hardware usage" /></h6>
                                <p>
                                    <FormattedMessage id="home.Photo upload feature in Skill certificate page would help you to see that Knowledge bank is being used in the classroom." />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default School;