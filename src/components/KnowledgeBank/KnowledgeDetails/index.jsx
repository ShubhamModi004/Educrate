import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

// import images
import Blueside from './Blueside';
import Yellowside from './Yellowside';
import Bluebeads from './Bluebeads';
import Yellowbeads from './Yellowbeads';

// imprt css
import './KnowledgeDetails.css';

class Index extends React.Component {
    render() {
        return (
            <div className="knowledge-bank-details">
                <div className="blueSide">
                    <Blueside />
                </div>
                <div className="yellowSide">
                    <Yellowside />
                </div>
                <div className="knowledge-bank-details-header">
                    <div>
                        <h3>Concept of knowledge Bank</h3>
                        <p>Knowledge Bank is a collection of informational videos from Youtube relating to the topics that impact children.</p>
                        <p>The list is prepared for non-commercial purpose, and could be downloaded freely without any fee from the link provided below.</p>
                        <p>The videos are being made available in local languages, so that students can have better grasp over the topics.</p>
                    </div>
                </div>
                <div className="knowledge-bank-details-secondary">
                    <div>
                        <h3>Process of developing Knowledge bank</h3>
                        <p>EDUCRATE invites every stakeholder of education to come forward to suggest additions to this document.</p>
                        <p>They can send us the mail in educrateconnect@gmail.com for suggestion regarding the document.</p>
                    </div>
                </div>

                <div className="knowledge-bank-details-secondary">
                    <div>
                        <h3>Advantages of Knowledge bank</h3>
                        <p>
                            Knowledge bank is our honest try towards more inclusive education, in which we see every child as a
                            changemaker towards their life, classroom, social circle and society. Intention is to facilitate teachers to
                            introduce their beloved children in classrooms to the whole new world that exists beyond text books
                            and will help them in future.
                        </p>
                        <br />
                        <p>
                            There  are many topics that have been asserted to be introduced in classrooms before the children,
                            but the teachers do not know the effective way to communicate the same. Knowledge bank would be
                            an effective tool for the teachers to express the topics before the students.
                        </p>
                        <br />
                        <p>
                            Knowledge Bank wants to serve as a platform to continue their talent and skill to make Indian student
                            community more informed and knowledgeable. The positive impact of these videos in classroom structures
                            would also motivate content makers to release more such alternative skills videos.
                        </p>
                        <br />
                        <p>
                            There has always been a lack of information in student community regarding alternate careers
                            (other than traditional career such as engineering, doctor etc.). Success stories and role models
                            videos shared in Knowledge bank would present a plethora of information about career options to students.
                            This in turn would help students in working towards their goals according to their skills, talents and beliefs.
                        </p>
                        <br />
                        <p>
                            Knowledge Bank is an attempt to reduce the education divide between high fee schools and budget private
                            schools or government schools. Knowledge bank will facilitate presentation of informational videos in more creative
                            and magical way to the students.
                        </p>
                        <br />
                        <p>
                            Knowledge Bank would reduce the teacher burden in a way as they don't have to waste time  looking
                            up for the best videos relating to topics to be presented before classrooms.
                        </p>
                    </div>
                </div>
                <div className="knowledge-bank-stakeholder mb-4">
                    <div className="bluebeads">
                        <Bluebeads />
                    </div>
                    <div className="yellowbeads">
                        <Yellowbeads />
                    </div>
                    <h2>
                        Introducing Knowledge Bank in classrooms stakeholders can
                        generate next generation  luminaires and role models for India.
                    </h2>
                </div>

                <div className="knowledge-bank-details-secondary">
                    <div>
                        <h3>Learning about “Fair Use”</h3>
                        <p>
                            There is a general fear among the stakeholders, that using videos in classroom teaching can be a copyright violation.
                            We want to make stakeholders aware about  the “FAIR USE” provision in the Indian copyright act.
                        </p>
                        <br />
                        <br />
                        <br />
                        <p>
                            Infringement  of Copyright occurs only If the distribution or reproduction is done with commercial intent.
                        EDUCRATE has repeatedly reiterated, the knowledge Bank is available free and is being circulated to classrooms
                        without any fee or commercial intent. We neither take any registration during the download of the Knowledge bank,
                        so that to create any hidden profit from the distribution of the Knowledge Bank.
                        </p>
                        <p>They can send us the mail in educrateconnect@gmail.com for suggestion regarding the document.</p>
                    </div>
                </div>

            </div>


        )
    }
}


export default Index;

