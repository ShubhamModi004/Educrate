import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image


// import modules
// import Motivate from './Motivate/Motivate';
// import Partner from './Partner/Partner';
// import Easeofuse from './Easeofuse/Easeofuse';
// import Empowerment from './Empowerment/Empowerment';


// import css
// import './styles.css';

class FaqSection extends Component {

    state = {
        motivate: true,
        partner: false,
        easeofuse: false,
        empowerment: false
    }

    selected(id) {
        if (id === 'motivate') {
            this.setState({
                motivate: true,
                partner: false,
                easeofuse: false,
                empowerment: false
            })
        } else if (id === 'partner') {
            this.setState({
                motivate: false,
                partner: true,
                easeofuse: false,
                empowerment: false
            })
        } else if (id === 'easeofuse') {
            this.setState({
                motivate: false,
                partner: false,
                easeofuse: true,
                empowerment: false
            })
        } else if (id === 'empowerment') {
            this.setState({
                motivate: false,
                partner: false,
                easeofuse: false,
                empowerment: true
            })
        }

    }
    // renderContent() {
    //     // const { motivate, partner, easeofuse, empowerment } = this.state;
    //     if (motivate) {
    //         return (
    //             <Motivate />
    //         )
    //     } else if (partner) {
    //         return (
    //             <Partner />
    //         )
    //     } else if (easeofuse) {
    //         return (
    //             <Easeofuse />
    //         )
    //     } else if (empowerment) {
    //         return (
    //             <Empowerment />
    //         )
    //     }
    // }

    render() {
        const { motivate, partner, easeofuse, empowerment } = this.state;
        // console.log(motivate);
        return (
            <div className="Whocontainer">
                <div className="mission-strive">
                    <div className="mission-strive-sections">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="mission-strive-sections-fields">
                                    <div onClick={this.selected.bind(this, 'motivate')}>
                                        <h6 className={"mission-strive-header " + (motivate ? 'mission-strive-header-active' : '')}>GENERAL FAQ</h6>
                                        {motivate ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'partner')}>
                                        <h6 className={"mission-strive-header " + (partner ? 'mission-strive-header-active' : '')}>TEACHERS</h6>
                                        {partner ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'easeofuse')}>
                                        <h6 className={"mission-strive-header " + (easeofuse ? 'mission-strive-header-active' : '')}>STUDENTS</h6>
                                        {easeofuse ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'empowerment')}>
                                        <h6 className={"mission-strive-header " + (empowerment ? 'mission-strive-header-active' : '')}>SCHOOL</h6>
                                        {empowerment ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'empowerment')}>
                                        <h6 className={"mission-strive-header " + (empowerment ? 'mission-strive-header-active' : '')}>NGO</h6>
                                        {empowerment ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'empowerment')}>
                                        <h6 className={"mission-strive-header " + (empowerment ? 'mission-strive-header-active' : '')}>POLICY MAKERS</h6>
                                        {empowerment ? <div className="selectBackground"></div> : null}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                {/* {this.renderContent()} */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FaqSection;