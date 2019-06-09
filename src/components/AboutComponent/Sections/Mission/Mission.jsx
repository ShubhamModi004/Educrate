import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image
import Calendar from './Calendar';
import Profit from './Profit';
import Perfection from './Perfection';

// import modules
import Motivate from './Motivate/Motivate';
import Partner from './Partner/Partner';
import Easeofuse from './Easeofuse/Easeofuse';
import Empowerment from './Empowerment';


// import css
import './styles.css';

class Who extends Component {

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
    renderContent() {
        const { motivate, partner, easeofuse, empowerment } = this.state;
        if (motivate) {
            return (
                <Motivate />
            )
        } else if (partner) {
            return (
                <Partner />
            )
        } else if (easeofuse) {
            return (
                <Easeofuse />
            )
        } else if (empowerment) {
            return (
                <Empowerment />
            )
        }
    }

    render() {
        const { motivate, partner, easeofuse, empowerment } = this.state;
        console.log(motivate);
        return (
            <div className="Whocontainer">
                <div className="mission">
                    <h2><FormattedMessage id="home.MISSION EDUCRATE" /></h2>
                    <div className="row mission-section">
                        <div className="col-md-4">
                            <div className="mission-section-image-container">
                                <Calendar />
                            </div>
                            <div className="d-flex">
                                <p className="number">1</p>
                                <p className="desc">
                                    <FormattedMessage id="home.We believe in teamwork, dedication, doing our duties with due diligence and wish for our initiative to revolutionize the industry" />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mission-section-image-container">
                                <Profit />
                            </div>
                            <div className="d-flex">
                                <p className="number">2</p>
                                <p className="desc">
                                    <FormattedMessage id="home.We plan to give quality education to all, at a low budget and help institudes make more out of little investment." />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mission-section-image-container">
                                <Perfection />
                            </div>
                            <div className="d-flex">
                                <p className="number">3</p>
                                <p className="desc">
                                    <FormattedMessage id="home.Perfection is what we aim to give to students that helps them strive for best." />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mission-strive">
                    <h2><FormattedMessage id="home.WHAT WE STRIVE FOR" /></h2>
                    <div className="mission-strive-sections">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="mission-strive-sections-fields">
                                    <div onClick={this.selected.bind(this, 'motivate')}>
                                        <h6 className={"mission-strive-header " + (motivate ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.MOTIVATE" /></h6>
                                        {motivate ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'partner')}>
                                        <h6 className={"mission-strive-header " + (partner ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.PARTNER" /></h6>
                                        {partner ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'easeofuse')}>
                                        <h6 className={"mission-strive-header " + (easeofuse ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.EASE OF USE" /></h6>
                                        {easeofuse ? <div className="selectBackground"></div> : null}
                                    </div>
                                    <div onClick={this.selected.bind(this, 'empowerment')}>
                                        <h6 className={"mission-strive-header " + (empowerment ? 'mission-strive-header-active' : '')}><FormattedMessage id="home.EMPOWERMENT" /></h6>
                                        {empowerment ? <div className="selectBackground"></div> : null}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                {this.renderContent()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="real-world">
                    <h2><FormattedMessage id="home.REAL WORLD, REAL PROBLEMS" /></h2>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                1
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Insufficient Evidence on the Role of Technology in Education" /></h6>
                                <p>
                                    <FormattedMessage id="home.There is lack of awareness among stakeholders on the efficacy of various digital learning products, especially for children in the early years. At home, although smartphone penetration is high, most parents cannot afford to pay for EdTech solutions, while there is skepticism about letting children use mobile phones for learning." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                2
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Insufficient Budgets for Procurement" /></h6>
                                <p>
                                    <FormattedMessage id="home.Almost 90% of the budget for centrally sponsored schemes such as Rashtriya Madhyamik Shiksha Abhiyan (RMSA) was spent on civil works and teacher salaries. The ICT@Schools scheme under RMSA historicall focused more on deploying hardware, rather than leveraging technology to improve student learning outcomes ICT teacher training is also limited in scope." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                3
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Lack of Affordable High Quality Vernacular Content" /></h6>
                                <p>
                                    <FormattedMessage id="home.There is a lack of pedagogically sound contextual products and content, especially in the vernacular medium. The context in government schools and affordable private schools is very different from the high-income segment, and existing products cannot be used for these schools without contextualization." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                4
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Limited Access to Infrastructure" /></h6>
                                <p>
                                    <FormattedMessage id="home.Problems with hardware and connectivity in schools throughout the country prevent EdTech from reaching the children most in need. The national EdTech policy, ICT@Schools has not led to universalization of infrastructure, while the market is unviable for private players." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="real-world-section">
                        <div className="row">
                            <div className="col-md-2 real-world-section-number">
                                5
                            </div>
                            <div className="col-md-10 real-world-section-desc">
                                <h6><FormattedMessage id="home.Lack of Procurement and implementation Knowledge" /></h6>
                                <p>
                                    <FormattedMessage id="home.Government budgets for software products are often limited and the procurement process is highly complex. The EdTech market is also highly fragmented and majorly driven by for-profit players, leading to lack of knowledge among decision-makers on what works and what doesn’t." />
                                </p>
                            </div>
                        </div>
                    </div>
                    <h6 className="mission-end">
                        <FormattedMessage id="home.To address these challenges, our work is focused on making India a centre for innovation, with astrong supply and widespread adoption of low-cost, contextualized, pedagogically sound, proven EdTech solutions for teaching and learning." />
                    </h6>
                </div>


            </div>
        )
    }
}


export default Who;