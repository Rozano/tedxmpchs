import React from 'react';
import './event2022.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div>
            <div className="event2022">
            <h3 className="event2022-title"><span className="red-text-2">Event 2022:</span> Towards the Sustainable Connection</h3>
            <div className="event2022-container">
                <div data-aos='fade-out' data-aos-duration="500" data-aos-delay='200' className="event2022-cdc">
                    <p>Our TEDxMCPHS team is closely monitoring the CDC and Massachusetts COVID-19 guidelines to ensure the safety of both speakers and the audience. The following information is subject to change.</p>
                </div>
                <div data-aos='zoom-in' data-aos-duration="500" data-aos-delay='400' className="event2022-details">
                    <div className="event2022-details-items space">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="event2022-icon"/>
                        <p><span className="red-text">Location:</span> MCPHS University, Boston, Massachusetts, USA</p>
                    </div>
                    <div className="event2022-details-items space">
                        <FontAwesomeIcon icon={faBuilding} className="event2022-icon"/>
                        <p><span className="red-text">Tentative format of the TEDxMCPHS conference:</span> In-person conference</p>
                    </div>
                    <div className="event2022-details-items">
                        <FontAwesomeIcon icon={faCalendarAlt} className="event2022-icon"/>
                        <p><span className="red-text">Tentative date:</span> March 26, 2022</p>
                    </div>
                </div>
                <div data-aos='fade-up' data-aos-duration="500" className="event2022-para">TEDxMCPHS wants to convey the importance of sustainable connection given the context in which the world is entering the healing phase after severely suffering from a health crisis. It is undeniable to admit that the Covid-19 pandemic is about loss and grief. But its silver lining is that we got a chance to learn about the fragility of our connection with our inner selves and others. In the pre-pandemic era, there was at least one person who measured his/her self-worth in ways that are common, yet unhealthy including but not limited to achievements, material possession, appearance, social status. Along with this, he/she only connected with certain groups of people who have the same background. Then, the health crisis restrained people from going to work, accomplishing things, and socializing with others. As a result, some of us found it difficult to have a clear vision in life, particularly a sense of identity and purpose. Also, the feeling of being isolated was inevitable as our connections with others faded due to social distancing. Thus, the sustainable connection should be a new approach in the post-pandemic period. Because sustainable connection will empower resilience and establish a new normal towards sustainable development of every individual and of the human relationship.</div>
                <div data-aos='zoom-in' data-aos-duration="500" className="event2022-para">Ultimately, the only meaningful measurement of self-values is how we use them to live a fulfilling life and to create a long-lasting positive impact on the community. That said, the transformative power of the inner network triggers our curiosity and demand to interact with other members of the community to share what we have known and learn from one another. In other words, it offers humans a chance to make a meaningful and sustainable connection driven by the same purposes, not the same social status or background, and act in the community’s best interests.</div>
            </div>
        </div>
        </div>
    );
};
export default About;