import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';


class Policy extends Component {
    render() {
        return (
            <div className="container">
                <div className="real-world">
                    <h2><FormattedMessage id="home.Problems Faced by Policy Makers" /></h2>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                1
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Early Age Learning" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE offers Early-age skill-development programme that can help kids grow into responsible citizens." />
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
                                <h6><FormattedMessage id="home.Little focus on developing the skills of young learners" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE whole focus is on K-12 school and elementary schooling." />
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
                                <h6><FormattedMessage id="home.Delivering pedagogical innovations to government schools" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE shares real concern towards public schools, and it is adamant to provide equal opportunity as their urban peers." />
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
                                <h6><FormattedMessage id="home.Uniform Device/Hardware to train teacher" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE is the most compact device in Indian ed-tech which can be operated just like normal Computer." />
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
                                <h6><FormattedMessage id="home.Maintenance of the Hardware and Software" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE offers 6 monthly checkup in very affordable Annual Maintenance service cost." />
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
                                <h6><FormattedMessage id="home.Costly nature of Software licenses" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE has used all the free and open operating system for classroom setting to make smart-education cost efficient." />
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
                                <h6><FormattedMessage id="home.Permission of Cluster and Block Resource Centres and DIETs" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE team is in regular touch with several District Institutes of Educational Training (DIET) centers and they have shown positive interest towards installation of EDUCRATE." />
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
                                <h6><FormattedMessage id="home.Public-private collaboration" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE is open for procurement and works on BOOT model of public-private partnership. Please check our FAQ page to successful ed-tech PPP models." />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Policy;