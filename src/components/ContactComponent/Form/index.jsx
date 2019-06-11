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
                    <h2><FormattedMessage id="home.CONTACT US" /></h2>
                    <p><FormattedMessage id="home.Please fill out the form below" /></p>
                    <form className="contact-form" action="https://formspree.io/lifeofpixels0707@gmail.com" method="POST">
                        <FormattedMessage id="home.EMAIL">
                            {EMAIL => <input className="contact-email" type="email" id="femail" name="email" placeholder={EMAIL} />}
                        </FormattedMessage>
                        <FormattedMessage id="home.NAME">
                            {NAME => <input className="contact-email" type="email" id="femail" name="email" placeholder={NAME} />}
                        </FormattedMessage>
                        <FormattedMessage id="home.MOBILE">
                            {MOBILE => <input className="contact-email" type="email" id="femail" name="email" placeholder={MOBILE} />}
                        </FormattedMessage>
                        <FormattedMessage id="home.Submit">
                            {Submit => <input type="submit" value={Submit} className="blueButtons" style={{ width: '8rem', marginTop: '1.5rem' }} />}
                        </FormattedMessage>
                    </form>
                </div>
            </div>
        )
    }
}


export default Index;