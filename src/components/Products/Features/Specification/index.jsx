import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { Motion, spring } from 'react-motion';
import { Collapse } from 'react-collapse';


// imprt css
import './Specification.css';

class Specification extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpened: false
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(event) {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    get togglerIcon() {
        return this.state.isOpened ? <FormattedMessage id="home.MINIMIZE" /> : <FormattedMessage id="home.EXPAND" />
    }

    render() {
        return (
            <div className="toggler">
                <div className="collapsible" onClick={this.handleToggle}>
                    <span className="label">{this.props.label}</span>
                    <span className="icon">{this.togglerIcon}</span>
                </div>
                <Collapse className="content" isOpened={this.state.isOpened}>
                    {this.props.children}
                </Collapse>
            </div>
        )
    }
}

class Application extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container'>
                <h1><FormattedMessage id="home.SPECIFICATIONS" /></h1>
                <div className="tableHeader">
                    <p className="tableHeader-details"><FormattedMessage id="home.Product Name" /></p>
                    <p className="tableHeader-details"><FormattedMessage id="home.Educrate" /></p>
                </div>
                <Specification label={<FormattedMessage id="home.Lens & Picture quality" />}>
                    <div class="">
                        <table class="table table-striped">
                            <tbody>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Projection" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.Short Throw" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Contrast Ratio" /></td>
                                    <td className="tableDetail value">15000:1</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Aspect Ratio" /></td>
                                    <td className="tableDetail value">4:3</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Lamp Life" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.15,000 Hours" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Focus Button" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.Yes" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Resolution" /></td>
                                    <td className="tableDetail value">1920 x 1080 (HD)</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Projection System" /></td>
                                    <td className="tableDetail value">DLP</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Specification>
                <Specification label={<FormattedMessage id="home.Ports & Connectivity" />}>
                    <div class="">
                        <table class="table table-striped">
                            <tbody>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.VGA" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.1 Port" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.HDMI" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.2 Ports" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.USB 2.0" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.2 Ports" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Video In" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.1 Port" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Video Out" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.1 Port" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Audio In" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.1 Port" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Audio Out" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.1 Port" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Specification>
                <Specification label={<FormattedMessage id="home.Computer & Processor" />}>
                    <div class="">
                        <table class="table table-striped">
                            <tbody>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.RAM" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.1 GB" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Hard Disk" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.500 GB" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Operating System" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.Linux" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Specification>
                <Specification label={<FormattedMessage id="home.Other" />}>
                    <div class="">
                        <table class="table table-striped">
                            <tbody>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Mouse" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.Yes, Wireless" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Keyboard" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.Yes, Wireless (along with Touchpad)" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Volume" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.2 x 40 Watt Speakers" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Battery" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.Yes ( 3 Hrs backup)" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Mount" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.Wall/Ceiling/Table Mount" /></td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key"><FormattedMessage id="home.Weight" /></td>
                                    <td className="tableDetail value"><FormattedMessage id="home.6 Kgs approx" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Specification>
            </div>
        )
    }
}


export default Application;

