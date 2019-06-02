import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';


// import css
import './Form.css';

class Index extends Component {
    render() {
        return (
            <div className="contact-section">
                <div className="contact-form-section">
                    <h2>CONTACT US</h2>
                    <p>Please fill out the form below</p>
                    <form className="contact-form" action="https://formspree.io/lifeofpixels0707@gmail.com" method="POST">
                        <input className="contact-email" type="email" id="femail" name="email" placeholder="EMAIL" />
                        <input className="contact-name" type="text" id="fname" name="name" placeholder="NAME" />
                        <input className="contact-mobile" type="integer" id="fmobile" name="mobile" placeholder="MOBILE NUMBER" />
                        <input type="submit" value="Submit" className="blueButtons" style={{ width: '8rem', marginTop: '1.5rem' }} />
                    </form>
                </div>
            </div>
        )
    }
}


export default Index;