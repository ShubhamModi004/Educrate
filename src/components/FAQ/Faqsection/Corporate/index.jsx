import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
// imprt css

class Policymakers extends React.Component {
    render() {
        return (
            <div className='container faq-section'>
                <h1><FormattedMessage id="home.CORPORATE" /></h1>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.How companies can partner with educrate?" /></h4>
                    <p><FormattedMessage id="home.We work with CSR teams of companies to ideate excliusive programs that align with their education specific activities. EDUCRATE as a device is most cost effective technological device to transmit education in low resource setting." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.Provide the proposal to what EDUCRATE can offer to CSR teams of companies?" /></h4>
                    <p><FormattedMessage id="home.We want CSR team to send us the request through their official CSR email-id with company name and registered office address to get the 10 page presentation.This presentation of our will surely get your attention, then we can meet in person to discuss how we both can contribute to the education." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.Brief the benefits to company in partnering with EDUCRATE?" /></h4>
                    <p><FormattedMessage id="home.EDUCRATE will complement the education focussed activities through our minimum budget and maximum coverage policy. EDUCRATE will provide digital infrastructure to CSR committee to reach out to their beloved customers with a gift of education for them. The software of EDUCRATE will be modified according to company logo and brief description of companies CSR program, so that their customers can realize the goodwill of the company." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.Why EDUCRATE as a hardware is distinct from other products in the market?" /></h4>
                    <p><FormattedMessage id="home.EDUCRATE has combined 5 devices namely Computer, projector, camera, UPS and speakers in itself for education delivery. CSR committees often face difficulty in monitoring, whether after the hardware installation, whether teachers are using that hardware. The CSR committee member would get regular update through gallery in skill certificate page." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.If CSR committee is previously working with child focussed NGOs,then?" /></h4>
                    <p><FormattedMessage id="home.EDUCRATE team proposes partnering with existing CSR programs, that are already running. We propose to provide the infrastructural and innovative support to existing programs, without any extra cost." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What would be consultation fee?" /></h4>
                    <p><FormattedMessage id="home.We are not charging any consultation fee, as we want to be most cost effective service providers for smart education delivery. If the order is placed through institutional foundation and NGOs, we will offer the major discount as well. If the EDUCRATE is purchased in bulk quantities, then also the cost would be made more affordable to CSR committees. We are also in the process of empanelling the Local NGOs with us, so that our team, NGO and CSR committee can reach out to quick agreement." /></p>
                </div>
                <div className="software-paragraph">
                    <h4 className="mb-3"><FormattedMessage id="home.What are the steps involved in this partnership?" /></h4>
                    <p style={{ marginBottom: '0rem' }}><span style={{ fontWeight: 'bold' }}><FormattedMessage id="home.Step 1) " /></span><FormattedMessage id="home.Engage with EDUCRATE team by sending the mail at educrateconnect@gmail.com" /></p>
                    <p style={{ marginBottom: '0rem' }}><span style={{ fontWeight: 'bold' }}><FormattedMessage id="home.Step 2) " /></span><FormattedMessage id="home.Receive the 10 page presentation from our team at your official CSR mail or company website." /></p>
                    <p style={{ marginBottom: '0rem' }}><span style={{ fontWeight: 'bold' }}><FormattedMessage id="home.Step 3) " /></span><FormattedMessage id="home.Discussion with EDUCRATE team to select the region to introduce EDUCRATE in the classroom." /></p>
                    <p style={{ marginBottom: '0rem' }}><span style={{ fontWeight: 'bold' }}><FormattedMessage id="home.Step 4) " /></span><FormattedMessage id="home.EDUCRATE team will find the credible NGO in the region to reach out to your selected region." /></p>
                    <p style={{ marginBottom: '0rem' }}><span style={{ fontWeight: 'bold' }}><FormattedMessage id="home.Step 5) " /></span><FormattedMessage id="home.After discussion of proposal from CSR committee and NGO, standard contract would be signed between NGO and CSR committee." /></p>
                    <p style={{ marginBottom: '0rem' }}><span style={{ fontWeight: 'bold' }}><FormattedMessage id="home.Step 6) " /></span><FormattedMessage id="home.NGO would place the order with EDUCRATE team." /></p>
                    <p style={{ marginBottom: '0rem' }}><span style={{ fontWeight: 'bold' }}><FormattedMessage id="home.Step 7) " /></span><FormattedMessage id="home.EDUCRATE will modify its device hardware and software according to CSR company profile." /></p>
                    <p style={{ marginBottom: '0rem' }}><span style={{ fontWeight: 'bold' }}><FormattedMessage id="home.Step 8) " /></span><FormattedMessage id="home.EDUCRATE team would deliver hardware and provide technical support to NGO members to uplift digital education in selected classrooms." /></p>

                </div>

            </div>
        )
    }
}



export default Policymakers;

