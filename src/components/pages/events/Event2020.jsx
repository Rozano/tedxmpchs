import React from 'react';
import './event2020.css';
import Event2020 from '../../images/tedxmcphs_event2020.png';
import { faImages } from '@fortawesome/free-regular-svg-icons';

const About = () => {        
    return (
        <div className="event2020">
            <h3 className="event2020-title"><span className="red-text-2">Event 2020:</span> Pushing Boundaries</h3>
            <iframe data-aos='zoom-in' data-aos-duration="500" data-aos-delay='500' className="event2020-video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL02Eg87H_9Ggbhcovk22d2JJFSIMR28rg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture &autoplay=1" allowfullscreen loading="lazy"/>
            <div data-aos='fade' data-aos-duration="300" className="event2020-container">
                <img data-aos='fade-right' data-aos-duration="300" data-aos-delay='300' src={Event2020} loading="lazy"/>
                <div className="event2020-text">
                    <p>At this inaugural event, we want to explore the theme of Pushing Boundaries which encompasses our ability as a community and as individuals to learn our limits, acknowledge them, and then move beyond them.</p>
                    <ul>
                        <li>Learning and understanding internal and external limits: determining the pre-existing boundaries at our current level of experience/knowledge/field etc. This leads to questioning which boundaries are necessary and which should be reviewed.</li>
                        <li>Acknowledging our limits: accepting the progress we have made and knowing that having boundaries doesn’t mean weakness.</li>
                        <li>Going beyond the boundaries: setting a new goal that pushes the boundary, a plan to push it, and actually executing the plan.</li>
                    </ul>
                    <p>These key concepts are applicable to all disciplines and can be found in personal and professional growth. We are looking for speakers who conducted groundbreaking research, designed remarkable products, developed life-saving cures, or created innovative media.</p>
                    <p>TEDxMCPHS does not feature talks on politics, pseudoscience, religion or ideas that are primarily inspirational, motivational or self-promotional in nature. We hope to provide a platform for hidden talents or individuals with insightful wisdom that can inform our audience with knowledge or skill sets and inspire them to make beneficiary changes to their daily lives and communities.</p>
                </div>
            </div>
        </div>
    );
};
export default About;