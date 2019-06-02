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
        return this.state.isOpened ? 'EXPAND' : 'MINIMIZE'
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
                <h1>SPECIFICATIONS</h1>
                <div className="tableHeader">
                    <p className="tableHeader-details">Product Name</p>
                    <p className="tableHeader-details">Educrate</p>
                </div>
                <Specification label="Lens & Picture quality">
                    <div class="">
                        <table class="table table-striped">
                            <tbody>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Projection</td>
                                    <td className="tableDetail value">Short Throw</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Contrast Ratio</td>
                                    <td className="tableDetail value">15000:1</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Aspect Ratio</td>
                                    <td className="tableDetail value">4:3</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Lamp Life</td>
                                    <td className="tableDetail value">15,000 Hours</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Focus Button</td>
                                    <td className="tableDetail value">Yes</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Resolution</td>
                                    <td className="tableDetail value">1920 x 1080 (HD)</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Projection System</td>
                                    <td className="tableDetail value">DLP</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Specification>
                <Specification label="Ports & Connectivity">
                    <div class="">
                        <table class="table table-striped">
                            <tbody>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Projection</td>
                                    <td className="tableDetail value">Short Throw</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Contrast Ratio</td>
                                    <td className="tableDetail value">15000:1</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Aspect Ratio</td>
                                    <td className="tableDetail value">4:3</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Lamp Life</td>
                                    <td className="tableDetail value">15,000 Hours</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Focus Button</td>
                                    <td className="tableDetail value">Yes</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Resolution</td>
                                    <td className="tableDetail value">1920 x 1080 (HD)</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Projection System</td>
                                    <td className="tableDetail value">DLP</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Specification>
                <Specification label="Computer & Processor">
                    <div class="">
                        <table class="table table-striped">
                            <tbody>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Projection</td>
                                    <td className="tableDetail value">Short Throw</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Contrast Ratio</td>
                                    <td className="tableDetail value">15000:1</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Aspect Ratio</td>
                                    <td className="tableDetail value">4:3</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Lamp Life</td>
                                    <td className="tableDetail value">15,000 Hours</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Focus Button</td>
                                    <td className="tableDetail value">Yes</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Resolution</td>
                                    <td className="tableDetail value">1920 x 1080 (HD)</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Projection System</td>
                                    <td className="tableDetail value">DLP</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Specification>
                <Specification label="Other">
                    <div class="">
                        <table class="table table-striped">
                            <tbody>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Projection</td>
                                    <td className="tableDetail value">Short Throw</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Contrast Ratio</td>
                                    <td className="tableDetail value">15000:1</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Aspect Ratio</td>
                                    <td className="tableDetail value">4:3</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Lamp Life</td>
                                    <td className="tableDetail value">15,000 Hours</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Focus Button</td>
                                    <td className="tableDetail value">Yes</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Resolution</td>
                                    <td className="tableDetail value">1920 x 1080 (HD)</td>
                                </tr>
                                <tr className="tableRow">
                                    <td className="tableDetail key">Projection System</td>
                                    <td className="tableDetail value">DLP</td>
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

