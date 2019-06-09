import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Slider from './Slider';

// import css
import './styles.css';

class Who extends Component {

    render() {
        return (
            <div className="Whocontainer">
                <div className="Whoweare">
                    <h2><FormattedMessage id="home.WHO WE ARE" /></h2>
                    <p><FormattedMessage id="home.We are a for-profit organisation, with the mission of exploring the skills that can be imparted to students to Uttar Pradesh kids for Modern world. We are a team of  people from technology, finance and law, and management.Educrate mission will help school operators to make their classes content-rich. We want to end the cramming/mugging culture in school by introducing them to explore content rich youtube world" /></p>
                </div>
                <div className="meet">
                    <h5><FormattedMessage id="home.MEET THE TEAM" /></h5>
                    <div className="partners">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="partner right">
                                    <div className="partner-picture "></div>
                                    <div className="partnerDescription">
                                        <div>
                                            <p className="name"><FormattedMessage id="home.Name" /></p>
                                            <p className="position"><FormattedMessage id="home.Position" /></p>
                                        </div>
                                        <div>
                                            <p className="socials"><FormattedMessage id="home.Linkedin" /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="partner left">
                                    <div className="partner-picture "></div>
                                    <div className="partnerDescription">
                                        <div>
                                            <p className="name"><FormattedMessage id="home.Name" /></p>
                                            <p className="position"><FormattedMessage id="home.Position" /></p>
                                        </div>
                                        <div>
                                            <p className="socials"><FormattedMessage id="home.Linkedin" /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <p className="believe"><FormattedMessage id="home.We believe in teamwork, dedication, doing our duties with due diligence and wish for our initiative to revolutionize the current problem statement." /></p>
                </div>
                <div className="catch">
                    <h5><FormattedMessage id="home.CATCH US IN ACTION" /></h5>
                    <div className="Slider">
                        <Slider />
                    </div>
                </div>
            </div>
        )
    }
}


export default Who;