import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
// imprt css

class General extends React.Component {
    render() {
        return (
            <div className='container faq-section'>
                <h1><FormattedMessage id="home.GENERAL FAQ" /></h1>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What is EDUCRATE?" /></h4>
                    <p><FormattedMessage id="home.Students in low resource setting suffer in their future career as they remain uninformed about the soft skills, opportunities and motivation in their early years of learning for Modern world. EDUCRATE team has designed 3M approach of learning to impart modern learning in any classroom across India." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What is 3M approach to learning?" /></h4>
                    <p><FormattedMessage id="home.EDUCRATE 3M design of learning based on three models of learning listed below:" /></p>
                    <br />
                    <h6><FormattedMessage id="home.KNOWLEDGE BANK MODEL-" /></h6>
                    <p><FormattedMessage id="home.Based on FAIR USE in Classroom teaching and ACCESS TO KNOWLEDGE movement" /></p>
                    <br />
                    <h6><FormattedMessage id="home.SKILL CERTIFICATE MODEL-" /></h6>
                    <p><FormattedMessage id="home.Based on REWARD and APPRECIATION promotion in classroom" /></p>
                    <br />
                    <h6><FormattedMessage id="home.EDUCRATE MODEL-" /></h6>
                    <p><FormattedMessage id="home.based on BLACKBOARD to DIGITAL BOARD revolution" /></p>
                    <br />
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What are we charging for our 3M design for classroom?" /></h4>
                    <p><FormattedMessage id="home.We are not charging anything for KNOWLEDGE BANK and SKILL CERTIFICATE models, and they can be accessed by anyone for education in classroom. All the activities in EDUCRATE team are focussed on mission to provide equal opportunity to each and every child." /></p>
                    <h6><FormattedMessage id="home.How is this 3M model designed?" /></h6>
                    <p><FormattedMessage id="home.3M model has been designed by going through various research papers, articles and teacher's advice. It is being introduced for K-12 education as the kids have best learning curve in this age only. EDUCRATE team with the help of other stakeholders want to shape this learning curve to most positive impact." /></p>
                    <h6><FormattedMessage id="home.What are the features of 3M model introduced by EDUCRATE?" /></h6>
                    <p><FormattedMessage id="home.3M model has been designed by going through various research papers, articles and teacher's advice. It is being introduced for K-12 education as the kids have best learning curve in this age only. EDUCRATE team with the help of other stakeholders want to shape this learning curve to most positive impact." /></p>
                    <h6><FormattedMessage id="home.Why should you select EDUCRATE as your team member?" /></h6>
                    <p><FormattedMessage id="home.3M model has been designed by going through various research papers, articles and teacher's advice. It is being introduced for K-12 education as the kids have best learning curve in this age only. EDUCRATE team with the help of other stakeholders want to shape this learning curve to most positive impact." /></p>
                    <h6><FormattedMessage id="home.What is the low-resource setting?" /></h6>
                    <p><FormattedMessage id="home.Low-resource setting is in which the classroom faces these problems" /></p>
                    <p style={{ marginBottom: 0, lineHeight: '1.2rem', fontSize: '0.7rem' }}><FormattedMessage id="home.+ discontinuous electricity" /></p>
                    <p style={{ marginBottom: 0, lineHeight: '1.2rem', fontSize: '0.7rem' }}><FormattedMessage id="home.+ language barrier" /></p>
                    <p style={{ marginBottom: 0, lineHeight: '1.2rem', fontSize: '0.7rem' }}><FormattedMessage id="home.+ far service centers" /></p>
                    <p style={{ marginBottom: 0, lineHeight: '1.2rem', fontSize: '0.7rem' }}><FormattedMessage id="home.+ unequipped teachers" /></p>
                    <p className="my-4"><FormattedMessage id="home.This inhibits the development to child in the classroom and denies the opportunity is available to their urban peers. EDUCRATE also wants to cater those low resource setting, so that NO CHILD IS LEFT BEHIND in opportunity towards modern learning." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.How EDUCRATE operates in Low resource setting?" /></h4>
                    <p><FormattedMessage id="home.Educrate is cheaper as compared to the other smart classroom setups. Moreover it can run on solar power (solar panels provided along with Educrate at the option of the purchaser). Moreover, since only one device has to be powered to make the classroom a Smart ClassRoom, operating cost reduces." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.Can you trust us?" /></h4>
                    <p><FormattedMessage id="home.For our credibility we have attached Aadhar ids of directors and our Memorandum of Association. We have also designed a demo classroom in Kanpur, to introduce school operators to EDUCRATE classrooms. So you can book a schedule to visit us in Kanpur and have direct interaction with us." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.Can you summarise us, what you propose to do?" /></h4>
                    <p><FormattedMessage id="home.We want to every student to be knowledge seeker rather than Marks chaser. Last mile digital literacy in India can reach through teachers, NGOs and school operators-EDUCRATE team want to contribute to can reach with the help of stakeholders we will develop the Knowledge bank in hindi and english through publicly accessed videos from Youtube. These videos would be shown to students respective of their ages/class-level. This will help students to learn skills, more than their curriculum. (https://youtu.be/QXjZbHuvalk.)" /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What would be our future additions?" /></h4>
                    <p><FormattedMessage id="home.We are engaging with foremost educators, teachers, creative and culture artist to share their insights and inspiration for students. These videos would be made available in the Knowledge bank. We will be launching the android based EDUCRATE also very soon, so that education startups and NGOs can reach out to every corner of India." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.Who can be a part of EDUCRATE family?" /></h4>
                    <p><FormattedMessage id="home.Anyone can be a part of our Educrate family. Give importance to education & learning and hey...you become one of us. A phone call, and that’s it, you get an Educrate and YOU become a part of our Educrate family." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What infrastructural support in classroom is needed for EDUCRATE installation?" /></h4>
                    <p><FormattedMessage id="home.We don’t need much for Educrate installation. Power supply and that’s it. Rest other things shall be done by our Edurate team. Educrate shall be wall-mounted by our team, and power supply shall be given to the Educrate. Through USB cable our Digital Board shall be powered, and done, there’s your digital classroom." /></p>
                </div>
            </div>
        )
    }
}



export default General;

