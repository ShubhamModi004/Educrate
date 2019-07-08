import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';


class Parents extends Component {
    render() {
        return (
            <div className="container">
                <div className="real-world">
                    <h2><FormattedMessage id="home.Problems Faced by Parents" /></h2>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                1
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Soft skill development of child" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE through KNOWLEDGE BANK is focussed on skills beyond curriculum." />
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
                                <h6><FormattedMessage id="home.Digital literacy" /></h6>
                                <p>
                                    <FormattedMessage id="home.Knowledge Bank has included videos to explain the limited use of technology." />
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
                                <h6><FormattedMessage id="home.Learning better morals" /></h6>
                                <p>
                                    <FormattedMessage id="home.Knowledge Bank has shared age-wise good stories to help children to grow a good and honest citizen." />
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
                                <h6><FormattedMessage id="home.Increase in Fee" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE with school operators tries not to burden parents financially for smart content delivery." />
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
                                <h6><FormattedMessage id="home.Learning results" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE works on reward and appreciation psychology of child to make the classroom more interesting" />
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
                                <h6><FormattedMessage id="home.Lack of multidimensional learning" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE through KNOWLEDGE BANK attempts to cognitive, physical, social, emotional and ethical development of each child." />
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
                                <h6><FormattedMessage id="home.Smart Learning for their kids" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE is an investment to every parent’s dream of good quality education for their children." />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Parents;