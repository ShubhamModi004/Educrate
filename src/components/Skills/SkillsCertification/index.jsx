import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// import images
import Blueside from './Blueside';
import Yellowside from './Yellowside';

// imprt css
import './SkillsCertification.css';

class Index extends React.Component {
    render() {
        return (
            <div className="certification-section">
                <div className="blueSide" style={{ top: '15%', zIndex: '-2' }}>
                    <Blueside />
                </div>
                <div className="yellowSide" style={{ top: '15%', zIndex: '-2' }}>
                    <Yellowside />
                </div>
                <div className="certification-header">
                    <h5>Certification for skills </h5>
                    <br />
                    <p>
                        To take more progressive steps towards usage of Knowledge bank in school curriculum we have introduced the certification course in regards to Knowledge Bank,
                        so the students are being rewarded for better understanding of the above mentioned skills .
                    </p>
                </div>
                <div className='container steps-container'>
                    <h5 className="text-center mb-4 pb-3">Skill Certificate Model</h5>
                    <div className="interative-feature-list">
                        <div className="steps-content-features">
                            <div className="steps-content-features-section">
                                <div className="row">
                                    <div className="col-md-3 steps-content-features-section-number">
                                        1
                            </div>
                                    <div className="col-md-9 steps-content-features-section-desc d-flex">
                                        <h6>Teacher would select a Skill to be introduced before the classroom from table above</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="steps-content-features-section">
                                <div className="row">
                                    <div className="col-md-3 steps-content-features-section-number">
                                        2
                                    </div>
                                    <div className="col-md-9 steps-content-features-section-desc">
                                        <h6>Teachers can give brief idea to students about the skills</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="steps-content-features-section">
                                <div className="row">
                                    <div className="col-md-3 steps-content-features-section-number">
                                        3
                                    </div>
                                    <div className="col-md-9 steps-content-features-section-desc">
                                        <div className="content-heading">
                                            <h6>Teachers should access the Link</h6>
                                            <h6>through Knowledge Bank</h6>
                                        </div>
                                        <a className="yellowButtons" style={{ width: '9rem', paddingBottom: '1rem', paddingLeft: '0.2rem', paddingRight: '0.2rem', textAlign: 9 }}>KNOWLEDGE BANK</a>
                                    </div>
                                </div>
                            </div>
                            <div className="steps-content-features-section">
                                <div className="row">
                                    <div className="col-md-3 steps-content-features-section-number">
                                        4
                            </div>
                                    <div className="col-md-9 steps-content-features-section-desc">
                                        <h6>Students should watch the video</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="steps-content-features-section">
                                <div className="row">
                                    <div className="col-md-3 steps-content-features-section-number">
                                        5
                            </div>
                                    <div className="col-md-9 steps-content-features-section-desc-nocolumn">
                                        <h6>Teacher should encourage the discussion on the topic</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="steps-content-features-section">
                                <div className="row">
                                    <div className="col-md-3 steps-content-features-section-number">
                                        6
                            </div>
                                    <div className="col-md-9 steps-content-features-section-desc">
                                        <h6>Teacher should award the certificate with respect to particular skill</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="steps-content-features-section">
                                <div className="row">
                                    <div className="col-md-3 steps-content-features-section-number">
                                        7
                            </div>
                                    <div className="col-md-9 steps-content-features-section-desc">
                                        <h6>Click the photograph with Student</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="steps-content-features-section">
                                <div className="row">
                                    <div className="col-md-3 steps-content-features-section-number">
                                        8
                                    </div>
                                    <div className="col-md-9 steps-content-features-section-desc">
                                        <h6>Upload the photograph in the gallery</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="steps-content-features-section">
                                <div className="row">
                                    <div className="col-md-3 steps-content-features-section-number">
                                        9
                                    </div>
                                    <div className="col-md-9 steps-content-features-section-desc">
                                        <h6>Teacher would be awarded the prize for following the skill-certificate model</h6>
                                    </div>
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