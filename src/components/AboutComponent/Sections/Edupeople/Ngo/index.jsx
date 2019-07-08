import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';


class Ngo extends Component {
    render() {
        return (
            <div className="container">
                <div className="real-world">
                    <h2><FormattedMessage id="home.Problems Faced by NGOs" /></h2>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                1
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Budget constraint" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE offer major discounts to NGOs. Please send us the enquiry through the mail." />
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
                                <h6><FormattedMessage id="home.Socio-Economic Problems" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE sees every child as a changemaker in his/her life, parents, classroom and society towards social evils. Even foremost NGOs are contributing to the Knowledge bank through content and advise wise." />
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
                                <h6><FormattedMessage id="home.Portability of Hardware" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE is portable just like your mobile, if charged for delivery of audio visual lecture infront of any audience." />
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
                                <h6><FormattedMessage id="home.Lack of Mentorship for new nonprofits and NGOs" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE team is in contact with experienced people of Non profit to get your all problems answered. Please share through the mail about your doubts-we will try to maximum of our capability possible." />
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
                                <h6><FormattedMessage id="home.Connecting with audience" /></h6>
                                <p>
                                    <FormattedMessage id="home.Media-rich space of learning can have a positive impact on targeted audience." />
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
                                <h6><FormattedMessage id="home.Low network connectivity in rural areas" /></h6>
                                <p>
                                    <FormattedMessage id="home.EDUCRATE offers the optimum storage capacity for videos/media content to deliver in low network areas." />
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


export default Ngo;