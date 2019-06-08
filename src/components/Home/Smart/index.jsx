import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Hardware from './Hardware';
import Greenboard from './Greenboard';
import Digital from './Digital';
import Hdmi from './Hdmi';
import Visualizer from './Visualizer';
import Plus from './Plus';

// import css
import './Smart.css';

class Index extends Component {
    render() {
        return (
            <div className="smart-classroom">
                <div className="container">
                    <div className="smart-classroom-title">
                        <h2><FormattedMessage id="home.Complete" /></h2>
                        <h2 className="yellowbg"><FormattedMessage id="home.SmartClassroom" /></h2>
                        <h2><FormattedMessage id="home.Solution" /></h2>
                    </div>
                    <div className="smart-classroom-product">
                        <div className="smart-classroom-product-title">
                            <div className="smart-classroom-product-feature hardware">
                                <Hardware />
                            </div>
                            <h6 className="eduhardware"><FormattedMessage id="home.EDUCRATE" /><br /><FormattedMessage id="home.HARDWARE" /></h6>
                        </div>
                        <div className="smart-classroom-product-plus">
                            <div className="smart-classroom-product-feature plus">
                                <Plus />
                            </div>
                        </div>
                        <div className="smart-classroom-product-title">
                            <div className="smart-classroom-product-feature">
                                <Greenboard />
                            </div>
                            <h6><FormattedMessage id="home.INTERACTIVE WHITEBOARD" /><br /><FormattedMessage id="home.& GREENBOARD" /><br /></h6>
                        </div>
                        <div className="smart-classroom-product-plus">
                            <div className="smart-classroom-product-feature plus">
                                <Plus />
                            </div>
                        </div>
                        <div className="smart-classroom-product-title">
                            <div className="smart-classroom-product-feature">
                                <Digital />
                            </div>
                            <h6><FormattedMessage id="home.DIGITAL" /><br /><FormattedMessage id="home.CONTENT" /><br /></h6>
                        </div>
                        <div className="smart-classroom-product-plus">
                            <div className="smart-classroom-product-feature plus">
                                <Plus />
                            </div>
                        </div>
                        <div className="smart-classroom-product-title">
                            <div className="smart-classroom-product-feature">
                                <Hdmi />
                            </div>
                            <h6><FormattedMessage id="home.HDMI/VGA" /><br /><FormattedMessage id="home.CABLES" /><br /></h6>
                        </div>
                        <div className="smart-classroom-product-plus">
                            <div className="smart-classroom-product-feature plus">
                                <Plus />
                            </div>
                        </div>
                        <div className="smart-classroom-product-title">
                            <div className="smart-classroom-product-feature">
                                <Visualizer />
                            </div>
                            <h6><FormattedMessage id="home.Visualizer" /></h6>
                        </div>
                    </div>


                    <div className="smart-classroom-text mb-4">
                        <p><FormattedMessage id="home.Complete SmartClassroom Solution (CSS) is a combination of Educrate hardware & interactive whiteboard (green board optional) which makes teaching more effective & interactive. The board has in built software which accommodates several applications and can also perform features like edit documents, add comments and save them" /></p>

                    </div>
                    <Link className="yellowButtons" style={{ width: '12rem', padding: '1.1rem 2rem', marginTop: '2rem' }}><FormattedMessage id="home.READ MORE" /></Link>
                </div>

            </div>
        )
    }
}


export default Index;