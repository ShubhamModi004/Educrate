import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Projector from './Projector';
import Computer from './Computer';
import Speakers from './Speakers';
import Camera from './Camera';
import Wifi from './Wifi';
import Smart from './Smart';

// import css
import './Hardware.css';

class Index extends Component {
    render() {
        return (
            <div className="product-hardware container">
                <h1>Hardware</h1>
                <div className="product-hardware-section">
                    <div className="hardware-img">
                        <Projector/>
                    </div>
                    <h6>PROJECTOR</h6>
                    <p style={{ color: '#000'}}>Featuring a brightness of 3200 ANSI Lumens & a high contrast ratio of 15000:1.</p>
                </div>
                <div className="product-hardware-section">
                    <div className="hardware-img">
                        <Computer />
                    </div>
                    <h6>COMPUTER</h6>
                    <p style={{ color: '#000' }}>An inbuilt computer with a RAM of 1GB and HDD of 500GB which is powerful enough to run the digital content
                    from the software and other contents as required by the teachers from the internet (Youtube etc.).</p>
                </div>
                <div className="product-hardware-section">
                    <div className="hardware-img" style={{ width: '4.5rem', paddingLeft: '0.5rem'}}>
                        <Speakers />
                    </div>
                    <h6>SPEAKERS</h6>
                    <p style={{ color: '#000' }}>It also has in built speakers of 40 Watts to cater to the needs of a class of 40-50 students (Option to attach
                    external speakers is also available).</p>
                </div>
                <div className="product-hardware-section">
                    <div className="hardware-img">
                        <Camera />
                    </div>
                    <h6>CAMERA</h6>
                    <p style={{ color: '#000' }}>For the purpose of classroom monitoring, Educrate also has a camera at the back which eliminates the use
                    of CCTV camera installation in the class.</p>
                </div>
                <div className="product-hardware-section">
                    <div className="hardware-img">
                        <Wifi />
                    </div>
                    <h6>WIFI</h6>
                    <p style={{ color: '#000' }}>Educate can be easily connected to the WiFi network and it also has bluetooth connectivity  to connect to
                    other devices.</p>
                </div>
                <h2>3 HOURS</h2>
                <p style={{ color: '#000' ,fontSize: '0.8rem' }}>Educate can be easily connected to the WiFi network and it also has bluetooth connectivity  to connect to
                other devices.</p>
                <br/>
                <p style={{ color: '#000', fontSize: '0.8rem' }}>Wireless keyboard and mouse are provided along with the device to control the Educrate Hardware.</p>
                <p style={{ color: '#000', fontSize: '0.8rem' }}>Educrate can be wall mount, ceiling mount or table mount as per the comfort of the teachers & the students.</p>
                <Smart/>
            </div>
        )
    }
}


export default Index;