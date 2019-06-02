import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { Motion, spring } from 'react-motion';
import { Collapse } from 'react-collapse';


// imprt css
import './Steps.css';

class Index extends React.Component {
    render() {
        return (
            <div className='container steps-container'>
                <div className="interative-feature-list">
                    <div className="steps-content-features">
                        <div className="steps-content-features-section">
                            <div className="row">
                                <div className="col-md-3 steps-content-features-section-number">
                                    1
                            </div>
                                <div className="col-md-9 steps-content-features-section-desc d-flex">
                                    <h6>Raise the quotation</h6>
                                    <a className="yellowButtons" style={{ width: '9rem', paddingBottom: '1rem', paddingLeft: 'auto', paddingRight: 'auto', textAlign: 9 }}>CLICK HERE</a>
                                </div>
                            </div>
                        </div>
                        <div className="steps-content-features-section">
                            <div className="row">
                                <div className="col-md-3 steps-content-features-section-number">
                                    2
                            </div>
                                <div className="col-md-9 steps-content-features-section-desc">
                                    <h6>Contact Educrate to place an order</h6>
                                    <a href="tel:+918197556532" className="yellowBorderButtons" style={{ width: '9rem', paddingBottom: '1rem', paddingLeft: '0.2rem', paddingRight: '0.2rem', textAlign: 9 }}>+91 81975 56532</a>
                                </div>
                            </div>
                        </div>
                        <div className="steps-content-features-section">
                            <div className="row">
                                <div className="col-md-3 steps-content-features-section-number">
                                    3
                            </div>
                                <div className="col-md-9 steps-content-features-section-desc">
                                    <h6>Transfer the first installment to <br /> Educrate team through</h6>
                                    <a className="yellowButtons" style={{ width: '9rem', paddingBottom: '1rem', paddingLeft: 'auto', paddingRight: 'auto', textAlign: 9 }}>PAY NOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="steps-content-features-section">
                            <div className="row">
                                <div className="col-md-3 steps-content-features-section-number">
                                    4
                            </div>
                                <div className="col-md-9 steps-content-features-section-desc">
                                    <h6>Wait for delivery of educrate to<br /> your institution</h6>
                                    <a className="yellowButtons" style={{ width: '9rem', paddingBottom: '1rem', paddingLeft: 'auto', paddingRight: 'auto', textAlign: 9 }}>FILL DETAILS</a>
                                </div>
                            </div>
                        </div>
                        <div className="steps-content-features-section">
                            <div className="row">
                                <div className="col-md-3 steps-content-features-section-number">
                                    5
                            </div>
                                <div className="col-md-9 steps-content-features-section-desc-nocolumn">
                                    <h6>Educrate agents will install the product in your institution</h6>
                                    <p>Kit would contain(Educrate, Booklet, warranty card, wireless keyboard mouse)</p>
                                </div>
                            </div>
                        </div>
                        <div className="steps-content-features-section">
                            <div className="row">
                                <div className="col-md-3 steps-content-features-section-number">
                                    6
                            </div>
                                <div className="col-md-9 steps-content-features-section-desc">
                                    <h6>Educrate agent will give you demonstration <br /> of the product through presentations</h6>
                                    <a className="yellowButtons" style={{ width: '9rem', paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: 'auto', paddingRight: 'auto', textAlign: 9 }}>VIEW DEMO</a>
                                </div>
                            </div>
                        </div>
                        <div className="steps-content-features-section">
                            <div className="row">
                                <div className="col-md-3 steps-content-features-section-number">
                                    7
                            </div>
                                <div className="col-md-9 steps-content-features-section-desc">
                                    <h6>Eductrate agent will train <br /> teachers/operator how to use</h6>
                                    <a className="yellowButtons" style={{ width: '9rem', paddingBottom: '1rem', paddingLeft: '0.2rem', paddingRight: '0.2rem', textAlign: 9 }}>KNOWLEDGE BANK</a>
                                </div>
                            </div>
                        </div>
                        <div className="steps-content-features-section">
                            <div className="row">
                                <div className="col-md-3 steps-content-features-section-number">
                                    8
                            </div>
                                <div className="col-md-9 steps-content-features-section-desc">
                                    <h6>Educrate team will register the Gmail <br /> id of the teacher</h6>
                                    <a className="yellowButtons" style={{ width: '9rem', paddingBottom: '1rem', paddingLeft: 'auto', paddingRight: 'auto', textAlign: 9 }}>REGISTER</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default Index;

