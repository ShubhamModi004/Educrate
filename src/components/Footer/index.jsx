import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// import images
import Instagram from './Instagramfooter';
import Facebook from './Facebookfooter';
import Whatsapp from './Whatsappfooter';

// import css
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-socials">
                    <h3>Connect with us on socially</h3>
                    <div className="footer-social-images">
                        <div className="Insta-footer"><Instagram /></div>
                        <div className="Facebook-footer"><Facebook /></div>
                        <div className="Whatsapp-footer"><Whatsapp /></div>
                    </div>
                </div>
                <div className="footer-bottom">

                </div>
            </div>
        )
    }
}


export default Footer;