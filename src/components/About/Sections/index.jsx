import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// Importing Image


// import css
import './styles.css';

// importing components
import Who from './Whoweare/Who';
import Mission from './Mission/Mission';

class Index extends Component {
    state = {
        selected: true,
        who: true,
        mission: false,
        vision: false,
    }

    selected = (id) => {
        if(id === "vision") {
            this.setState({
                who: false,
                mission: false,
                vision: true
            }) 
        } else if (id === "mission"){
            this.setState({
                who: false,
                mission: true,
                vision: false
            }) 
        } else if (id === "who"){
            this.setState({
                who: true,
                mission: false,
                vision: false
            })
        }
    }

    renderContent = () => {
        if(this.state.who){
            return (
                <Who />
            )
        }else if(this.state.mission){
            return (
                <Mission />
            )
        }
        
    }

    render() {
        const { who , mission, vision} = this.state;
        return (
            <div className="container">
                <div className="about-sections">
                    <div className="sectionContainer">
                        <div className="section" id='who' onClick={this.selected.bind(this, 'who')}><h6 className={(who ? 'selected' : 'notSelected')}>WHO WE ARE</h6></div>
                        <div className="section" id='mission' onClick={this.selected.bind(this, 'mission')}><h6 className={(mission ? 'selected' : 'notSelected')}>MISSION</h6></div>
                        <div className="section" id='vision' onClick={this.selected.bind(this, 'vision')}><h6 className={(vision ? 'selected' : 'notSelected')}>VISION</h6></div>
                    </div>
                </div>
                {this.renderContent()}
            </div>
        )
    }
}


export default Index;