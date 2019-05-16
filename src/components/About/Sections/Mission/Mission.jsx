import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image


// import css
import './styles.css';

class Who extends Component {

    componentDidMount() {
      console.log('Mounted');
    }

    componentWillUnmount(){
        console.log('Un Mounted');
    }

    render() {
        return (
            <div className="Whocontainer">
                <div className="mission">
                    <h2>MISSION EDUCRATE</h2>
                    <p>Accomplish the mission.
                    </p>
                    <div className="row mission-section">
                        <div className="col-md-4">
                            <div className="d-flex">
                                <p className="number">1</p>
                                <p>
                                    We believe in teamwork,
                                    dedication, doing our
                                    duties with due diligence
                                    and wish for our initiative
                                    to revolutionize the
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex">
                                <p className="number">2</p>
                                <p>
                                    We believe in teamwork,
                                    dedication, doing our
                                    duties with due diligence
                                    and wish for our initiative
                                    to revolutionize the
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex">
                                <p className="number">3</p>
                                <p>
                                    We believe in teamwork,
                                    dedication, doing our
                                    duties with due diligence
                                    and wish for our initiative
                                    to revolutionize the
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Who;