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
                        <h2><FormattedMessage id="Complete" /></h2>
                        <h2 className="yellowbg"><FormattedMessage id="SmartClassroom" /></h2>
                        <h2><FormattedMessage id="Solution" /></h2>
                    </div>
                    <div className="smart-classroom-product">
                        <div className="smart-classroom-product-title">
                            <div className="smart-classroom-product-feature hardware">
                                <Hardware />
                            </div>
                            <h6 className="eduhardware">EDUCRATE <br/> HARDWARE</h6>
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
                            <h6>INTERACTIVE WHITEBOARD<br/> & GREENBOARD</h6>
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
                            <h6>DIGITAL <br/> CONTENT</h6>
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
                            <h6>HDMI/VGA <br/> CABLES</h6>
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
                            <h6 className="visualizer">Visualizer</h6>
                        </div>
                    </div>

                    
                    <div className="smart-classroom-text mb-4">
                        <p><FormattedMessage id="Complete SmartClassroom Solution (CSS) is a combination of Educrate hardware & interactive whiteboard (green board optional)
                            which makes teaching more effective & interactive. The board has in built software which accommodates several applications
                            and can also perform features like edit documents, add comments and save them" /></p>
                        
                    </div>
                    <Link className="yellowButtons" style={{ width: '12rem', padding: '1.1rem 2rem', marginTop: '2rem'}}><FormattedMessage id="READ MORE" /></Link>
                </div>
                
            </div>
        )
    }
}


export default Index;