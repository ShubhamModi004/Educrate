import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Projector from './Projector';
import Computer from './Computer';
import Speakers from './Speakers';
import Camera from './Camera';
import Wifi from './Wifi';

// import css
import './how.css';

class Index extends Component {
    render() {
        return (
            <div className="how-we-do-it">
                <div className="how-we-do-it-title container">
                    <h2><FormattedMessage id="How do we do it?" /></h2>
                    <div className="text">
                        <p><FormattedMessage id="This is what we call the " /></p>
                        <h5><FormattedMessage id=" EDUCRATE HARDWARE" /></h5>
                    </div>
                    <div className="product-features desktop990">
                        <div className="product-features-title">
                            <div className="product-feature">
                                <Projector/>
                            </div>
                            <h6>PROJECTOR</h6>
                        </div>
                        <div className="product-features-title">
                            <div className="product-feature">
                                <Computer/>
                            </div>
                            <h6>COMPUTER</h6>
                        </div>
                        <div className="product-features-title">
                            <div className="product-feature">
                                <Speakers/>
                            </div>
                            <h6>SPEAKERS</h6>
                        </div>
                        <div className="product-features-title">
                            <div className="product-feature">
                                <Camera/>
                            </div>
                            <h6>CAMERA</h6>
                        </div>
                        <div className="product-features-title">
                            <div className="product-feature">
                                <Wifi/>
                            </div>
                            <h6>WIFI</h6>
                        </div>
                    </div>

                    <div className="product-features row mobile990">
                        <div className="product-features-title">
                            <div className="product-feature">
                                <Projector />
                            </div>
                            <h6>PROJECTOR</h6>
                        </div>
                        <div className="product-features-title">
                            <div className="product-feature">
                                <Computer />
                            </div>
                            <h6>COMPUTER</h6>
                        </div>
                        <div className="product-features-title">
                            <div className="product-feature">
                                <Speakers />
                            </div>
                            <h6>SPEAKERS</h6>
                        </div>
                        <div className="product-features-title">
                            <div className="product-feature">
                                <Camera />
                            </div>
                            <h6>CAMERA</h6>
                        </div>
                        <div className="product-features-title">
                            <div className="product-feature">
                                <Wifi />
                            </div>
                            <h6>WIFI</h6>
                        </div>
                    </div>


                    <p className="smart-classroom-text mb-4"><FormattedMessage id="Read more about our product specifications" /></p>
                    
                    <Link className="yellowButtons" style={{ width: '12rem', padding: '1.1rem 2rem', marginTop: '2rem' }}><FormattedMessage id="READ MORE" /></Link>
                </div>
            </div>
        )
    }
}


export default Index;