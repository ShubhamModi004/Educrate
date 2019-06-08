import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import Image from './Image';

// import css
import './styles.css';

class Index extends Component {
    render() {
        return (
            <div className="about-main container">
                <div className="row aboutUs">
                    <div className="col-md-4 col-12 aboutUs-image">
                        <Image />
                    </div>
                    <div className="col-md-8 col-12 aboutUs-info">
                        <p><FormattedMessage id="home.Educrate was created by keeping in mind that digital/smart classroom concept should reach all the students, every student should have equal access to the technological advancements in the field of education and moreover audio visual content should reach them, at minimal cost." />
                        </p>
                        <Link className="yellowButtons"><FormattedMessage id="home.MORE ABOUT US" /></Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Index;