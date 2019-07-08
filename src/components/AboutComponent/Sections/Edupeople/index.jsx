import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';



// import modules
import Students from './Students';
import Teachers from './Teachers';
import Parents from './Parents';
import School from './School';
import Ngo from './Ngo';
import Policy from './Policy';


// import css

class EduPeople extends Component {

    state = {
        students: true,
        teachers: false,
        parents: false,
        school: false,
        ngo: false,
        policy: false,
    }

    selected(id) {
        if (id === 'students') {
            this.setState({
                students: true,
                teachers: false,
                parents: false,
                school: false,
                ngo: false,
                policy: false,
            })
        } else if (id === 'teachers') {
            this.setState({
                students: false,
                teachers: true,
                parents: false,
                school: false,
                ngo: false,
                policy: false,
            })
        } else if (id === 'parents') {
            this.setState({
                students: false,
                teachers: false,
                parents: true,
                school: false,
                ngo: false,
                policy: false,
            })
        } else if (id === 'school') {
            this.setState({
                students: false,
                teachers: false,
                parents: false,
                school: true,
                ngo: false,
                policy: false,
            })
        } else if (id === 'ngo') {
            this.setState({
                students: false,
                teachers: false,
                parents: false,
                school: false,
                ngo: true,
                policy: false,
            })
        } else if (id === 'policy') {
            this.setState({
                students: false,
                teachers: false,
                parents: false,
                school: false,
                ngo: false,
                policy: true,
            })
        }

    }
    renderContent() {
        const { students, teachers, parents, school, ngo, policy } = this.state;
        if (students) {
            return (
                <Students />
            )
        } else if (teachers) {
            return (
                <Teachers />
            )
        } else if (parents) {
            return (
                <Parents />
            )
        } else if (school) {
            return (
                <School />
            )
        } else if (ngo) {
            return (
                <Ngo />
            )
        } else if (policy) {
            return (
                <Policy />
            )
        }
    }

    render() {
        const { students, teachers, parents, school, ngo, policy } = this.state;
        return (
            <div className="Whocontainer">
                <div className="mission-strive" style={{ marginTop: 0, paddingTop: 0 }}>
                    <div className="mission-strive-sections">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="mission-strive-sections-fields">
                                    <div onClick={this.selected.bind(this, 'students')}>
                                        <h6 className={"mission-strive-header " + (students ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.STUDENTS" /></h6>
                                        {students ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'teachers')}>
                                        <h6 className={"mission-strive-header " + (teachers ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.TEACHERS" /></h6>
                                        {teachers ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'parents')}>
                                        <h6 className={"mission-strive-header " + (parents ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.PARENTS" /></h6>
                                        {parents ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'school')}>
                                        <h6 className={"mission-strive-header " + (school ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.SCHOOLS" /></h6>
                                        {school ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'ngo')}>
                                        <h6 className={"mission-strive-header " + (ngo ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.NGO" /></h6>
                                        {ngo ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'policy')}>
                                        <h6 className={"mission-strive-header " + (policy ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.POLICY MAKERS" /></h6>
                                        {policy ? <div className="selectBackground"></div> : null}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                {this.renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default EduPeople;