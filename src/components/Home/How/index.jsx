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
                    <p><FormattedMessage id="Educrate is a is a unique & Complete SmartClassroom Solution (CSS), a wall mount device, which aims at providing digital education to all class of students. Completely manufactured in India." /></p>
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


                    <p><FormattedMessage id="Read more about our product" /></p>
                    
                    <Link className="yellowButtons"><FormattedMessage id="READ MORE" /></Link>
                </div>
            </div>
        )
    }
}


export default Index;