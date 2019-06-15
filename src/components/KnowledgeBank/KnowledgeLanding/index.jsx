import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// import images
import Bluebeads from './Bluebeads';
import Yellowbeads from './Yellowbeads';
import Googledoc from './Googledoc';

// imprt css
import './KnowledgeLanding.css';

class Index extends React.Component {

    render() {
        return (
            <div className="knowledge-bank-landing">
                <div className="knowledge-bank-landing-header">
                    <div>
                        <h1><FormattedMessage id="home.Knowledge Bank" /></h1>
                        <p><FormattedMessage id="home.Get smarter" /></p>
                    </div>
                </div>
                <div className="knowledge-bank-landing-invitation">
                    <div className="knowledge-blue-section">
                        <div className="knowledge-invitation-link">
                            <div className="bluebeads">
                                <Bluebeads />
                            </div>
                            <div className="yellowbeads">
                                <Yellowbeads />
                            </div>
                            <h6><FormattedMessage id="home.Register to get an invite" /></h6>
                            <div className="googledoc">
                                <Googledoc />
                            </div>
                            <form className="knowledge-form" action="https://formspree.io/lifeofpixels0707@gmail.com" method="POST">
                                <FormattedMessage id="home.EMAILID">
                                    {EMAILID => <input className="knowledge-email" type="email" id="fname" name="email" placeholder={EMAILID} />}
                                </FormattedMessage>
                                <FormattedMessage id="home.Submit">
                                    {Submit => <input type="submit" value={Submit} className="yellowButtons" style={{ marginTop: '1.5rem', width: '9rem', border: 'none', outline: 'none' }} />}
                                </FormattedMessage>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


export default Index;

