import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
// imprt css

class Ngo extends React.Component {
    render() {
        return (
            <div className='container faq-section'>
                <h1><FormattedMessage id="home.NGO" /></h1>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What types of organizations does EDUCRATE work with?" /></h4>
                    <p><FormattedMessage id="home.We are reaching out to education and child development focussed nonprofits and NGOs across all country. The NGOs have to play the pivotal role in picking up the topics for classrooms, which impact the students in that geographical region." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What EDUCRATE can offer to NGO?" /></h4>
                    <p><FormattedMessage id="home.If you are registered NGO or non-profit, EDUCRATE team will offer you the major discount in the prices of EDUCRATE. You can directly send us the mail and we will negotiate as per your requirements, so that no child is being denied a good education." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What other benefits NGO has with EDUCRATE?" /></h4>
                    <p><FormattedMessage id="home.Thank you for being part of this mission! Please access our website and choose the three model(listed below) and work with us." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What other services does EDUCRATE can offer NGOs?" /></h4>
                    <p><FormattedMessage id="home.We would be listing star volunteers in EDUCRATE  social networking handle." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.How can schools and colleges be part of this initiative?" /></h4>
                    <p><FormattedMessage id="home.EDUCRATE team members have been in premier colleges and have observed that there is a section of students motivated towards community service. This committee works in education field through self made NGOs or Local NGOs. We want them to believe in our 3M design of Learning and promote Knowledge bank usage in classrooms." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.How can schools and colleges be part of this initiative?" /></h4>
                    <p><FormattedMessage id="home.EDUCRATE team members have been in premier colleges and have observed that there is a section of students motivated towards community service. This committee works in education field through self made NGOs or Local NGOs. We want them to believe in our 3M design of Learning and promote Knowledge bank usage in classrooms." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What our regional NGOs have to do?" /></h4>
                    <p><FormattedMessage id="home.Regional NGOs at district level will explain to teachers and school authorities about  the innovative solutions towards education. These innovative solutions can help school to to learn in addition to prescribed curriculum.The If NGOs are  ambitious and persistent — they can tackle  major issues prevalent in their region  by offering new ideas for systems-level change . For your help we have attached presentation in English/Hindi, so you can complement your convincing skills." /></p>
                </div>
            </div>
        )
    }
}



export default Ngo;

