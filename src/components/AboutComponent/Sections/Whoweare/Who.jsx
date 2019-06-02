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
                    <h2>WHO WE ARE</h2>
                    <p>We are a for-profit organisation, with the mission of exploring the skills that can be imparted
                    to students to Uttar Pradesh kids for Modern world. We are a team of  people from technology,
                    finance and law, and management.Educrate mission will help school operators to make their
                    classes content-rich. We want to end the cramming/mugging culture in school by introducing
                    them to explore content rich youtube world
                    </p>
                </div>
                <div className="meet">
                    <h5>MEET THE TEAM</h5>
                    <div className="partners">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="partner right">
                                    <div className="partner-picture "></div>
                                    <div className="partnerDescription">
                                        <div>
                                            <p className="name">Full Name</p>
                                            <p className="position">Position</p>
                                        </div>
                                        <div>
                                            <p className="socials">Linkedin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="partner left">
                                    <div className="partner-picture "></div>
                                    <div className="partnerDescription">
                                        <div>
                                            <p className="name">Full Name</p>
                                            <p className="position">Position</p>
                                        </div>
                                        <div>
                                            <p className="socials">Linkedin</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <p className="believe">We believe in teamwork, dedication, doing our duties with due diligence and wish for our initiative to revolutionize the current problem statement.</p>
                </div>
                <div className="catch">
                    <h5>CATCH US IN ACTION</h5>
                    <div className="Slider">
                        <Slider/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Who;