import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { Motion, spring } from 'react-motion';
import { Collapse } from 'react-collapse';


// imprt css
import './Whiteboard.css';

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
                <h1>INTERACTIVE WHITEBOARD</h1>
                <p className="interactive-paragraph">Our Interactive WhiteBoard setup adopts the world’s leading
                Infrared Positioning Technology along with the green board (optional).
                One can use one’s own finger or any other item suchy as dummy pens
                or any other object to write on the the Interactive WhiteBoard surface,
                whereas the regular green board can be used to write with chalks of any
                colour</p>
                <div className="tableHeader" style={{ background: '#FFCC73', padding: '0 3rem'}}>
                    <p className="tableHeader-details" style={{ color: '#1F232D', fontSize: '1rem', fontWeight: '700'  }}>Name</p>
                    <p className="tableHeader-details" style={{ color: '#1F232D', fontSize: '1rem', fontWeight: '700'  }}>Interactive Whiteboard</p>
                </div>
                <div class="mb-4">
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
                <div className="interative-feature-list">
                    <h6 className="interative-feature-list-header">FEATURES</h6>
                    <p>+ Infrared sensor technology.</p>
                    <p>+ 4 point touch with 4 points calibration.</p>
                    <p>+ Interface USB 2.0 International standard communication distance 1.5m, supports 10­15m.</p>
                    <p>+ Power consumption &#60; 100mA.</p>
                    <p>+ Operating system Linux.</p>
                    <p>+ Supports screen record and playback.</p>
                    <p>+ Supports screen record (voice and text synchronization), supports annotation and editing of files
                    with word, PPT format.</p>
                    <p>+ Supports lines, graphics, triangle, pentagons any polygon drawing and can rub, cut, clone, copy &
                    delete any selected objects.</p>
                    <p>+ Support unlimited writing range by moving the pages freely.</p>
                </div>
            </div>
        )
    }
}


export default Application;

