import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { Motion, spring } from 'react-motion';
import { Collapse } from 'react-collapse';


// imprt css
import './Single.css';

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

class Single extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='container'>
                <h1>SINGLE FRAME INTERACTIVE WHITEBOARD& GREENBOARD </h1>
                <p className="interactive-paragraph">A combination of Interactive WhiteBoard & GreenBoard which can be
                used both as a digital board and at the same time green board can be
                used to write with the chalk. In this frame the Interactive WhiteBoard &
                GreenBoard can be used simultaneously.</p>
                <div className="tableHeader" style={{ background: '#FFCC73', padding: '0 3rem' }}>
                    <p className="tableHeader-details" style={{ color: '#1F232D', fontSize: '1rem', fontWeight: '700' }}>Name</p>
                    <p className="tableHeader-details" style={{ color: '#1F232D', fontSize: '1rem', fontWeight: '700' }}>Single frame interactive <br/> whiteboard & greenboard</p>
                </div>
                <div class="mb-4">
                    <table class="table table-striped">
                        <tbody>
                            <tr className="tableRow">
                                <td className="tableDetail key">Weight</td>
                                <td className="tableDetail value">63 Kgs (approx.)</td>
                            </tr>
                            <tr className="tableRow">
                                <td className="tableDetail key">Product Size</td>
                                <td className="tableDetail value">2950 x 1280 mm</td>
                            </tr>
                            <tr className="tableRow">
                                <td className="tableDetail key">Frame</td>
                                <td className="tableDetail value">Inustrial Electrophoresis of aluminium alloy</td>
                            </tr>
                            <tr className="tableRow">
                                <td className="tableDetail key">External Frame Width</td>
                                <td className="tableDetail value">100 mm</td>
                            </tr>
                            <tr className="tableRow">
                                <td className="tableDetail key">Thickness</td>
                                <td className="tableDetail value">45 mm</td>
                            </tr>
                            <tr className="tableRow">
                                <td className="tableDetail key">Inner Frame Width</td>
                                <td className="tableDetail value">35 mm</td>
                            </tr>
                            <tr className="tableRow">
                                <td className="tableDetail key">Thickness</td>
                                <td className="tableDetail value">1.8 cm with plastic corner solid structure</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default Single;

