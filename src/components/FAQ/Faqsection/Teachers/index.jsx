import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
// imprt css

class Teachers extends React.Component {
    render() {
        return (
            <div className='container faq-section'>
                <h1><FormattedMessage id="home.TEACHERS" /></h1>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What role teacher has to play in EDUCRATE mission?" /></h4>
                    <p><FormattedMessage id="home.A teacher is the root & stem of education system and no technology can replace a teacher. We with our Educrate will assist the teachers to teach the students in a more advanced manner. The teachers will be required to start the Educrate and begin playing the video. Educrate will give a description of the chapter to the students and then the teachers would be explaining the chapter as usual. " /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.How educrate team would help Teachers ?" /></h4>
                    <p><FormattedMessage id="home.A combination of Teacher’s teaching + Educrate’s Audio-Visual content will give a better understanding to the students, and the teachers would also be required to make less efforts than usual. Apart from this, test series would also be given by our digital content software which will reduce the burden of the teachers for giving tests to the sudents." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.Will there be issue of copyright action?" /></h4>
                    <p><FormattedMessage id="home.Infringement  of Copyright occurs only If the distribution or reproduction is done with commercial intent. EDUCRATE has repeatedly reiterated, the Knowledge Bank is available free and is being circulated to classrooms without any fee or commercial intent. We neither take any registration during the download of the Knowledge bank, so that to create any hidden profit from the distribution of the Knowledge Bank." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What is the benefit of Skill-certificate model in teaching?" /></h4>
                    <p><FormattedMessage id="home.Teacher would be helped in classroom level a" /></p>
                    <p style={{ marginBottom: 0, lineHeight: '1.2rem', fontSize: '0.7rem' }}><FormattedMessage id="home.+ Increased attendance and enthusiasm in schools as well as in teacher training and professional development sessions." /></p>
                    <p style={{ marginBottom: 0, lineHeight: '1.2rem', fontSize: '0.7rem' }}><FormattedMessage id="home.+ To instill faith of parents towards alternative learning  and beyond curriculum learning." /></p>
                    <p style={{ marginBottom: 0, lineHeight: '1.2rem', fontSize: '0.7rem' }}><FormattedMessage id="home.+ Certification model of will make students real motivated towards Learning as it will publication of certificates in our website would give them more recognition." /></p>
                    <p style={{ marginBottom: 0, lineHeight: '1.2rem', fontSize: '0.7rem' }}><FormattedMessage id="home.+ Certification model would make learning  more  fun and challenging to sustain students  interest, and corresponding co-curricular activities will  ensure their all-round development." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What will I do if I have internet prblems in the classroom?" /></h4>
                    <p><FormattedMessage id="home.Even though there is an internet problem in the classroom, then too the digital content shall be played without any internet connectivity as the software works in an offline mode." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What will I do if I have electricity problems in the classroom?" /></h4>
                    <p><FormattedMessage id="home.With Educrate, electricity is not a matter of concern any more. Educrate provides the highest hours of battery backup in the same price range of the projector. Moreover, at the option of the purchaser we provide a separate solar panel with each Educrate, which eliminates the use of electricity to run the devices." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What will I do if I have an audio problem while taking the class?" /></h4>
                    <p><FormattedMessage id="home.Educrate has a good audio system to cater the needs of 40-50 students in the class, which is the best in it’s class, but even though if it doesn’t works well enough in the class for all the students (which would be a rare instance), port for external speakers is given and the management can attach speakers whichever they want." /></p>
                </div>
                <div className="software-paragraph">
                    <h4><FormattedMessage id="home.What will I do if I have video problem?" /></h4>
                    <p><FormattedMessage id="home.Our device comes with a warranty of 2 years and digital board comes with a warranty of 1 year. We provide the best video quality and the chances of errors will be reduced to nil by us so that schools do not face any problem in playing videos. If any problems occur, it can be informed to us by a telephonic call & a mail. The problem shall be resolved within 48 hours of informing us. Moreover, we intend to provide an extra Educrate to the school if Educrates are purchased over a defined quantity. With this, if any problem occurs in the Educrate, the extra provided Educrate can be installed by the school until the non-functioning device is repaired." /></p>
                </div>


            </div>
        )
    }
}



export default Teachers;

