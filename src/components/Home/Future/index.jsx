import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image


// import css
import './Future.css';

class Index extends Component {
    render() {
        return (
            <div className="future-container">
                <div className="future">
                    <div className="container content">
                        <h2><FormattedMessage id="home.The future is digitization, The future is our students." /></h2>
                        <p><FormattedMessage id="home.Read more about how we could help our students get the best that they deserve.Let us take a look at the mission that keeps us going." /></p>
                        <Link className="yellowButtons" style={{ width: '12rem', padding: '1.1rem 2rem', marginTop: '2rem', background: '#fff' }}><FormattedMessage id="home.READ MORE" /></Link>
                    </div>

                </div>
                <div className="future-footer">
                    <div className="container content">
                        <h2><FormattedMessage id="home.Ready to take the leap to the future" /></h2>
                        <p><FormattedMessage id="home.Read more about how we could help our students get the best that they deserve.Let us take a look at the mission that keeps us going." /></p>
                        <Link className="yellowButtons" style={{ width: '12rem', padding: '1.1rem 2rem', marginTop: '2rem', background: '#fff' }}><FormattedMessage id="home.READ MORE" /></Link>
                    </div>
                </div>
                {/* <div className="bg-fix"></div> */}
            </div>
        )
    }
}


export default Index;