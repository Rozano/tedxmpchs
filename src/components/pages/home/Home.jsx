import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <div data-aos='fade' data-aos-duration="1000" data-aos-delay='200' className="home-header-image" loading="lazy"/>
            <div data-aos='fade-down' data-aos-duration="500" data-aos-delay='400' className="statement">
                <h3 className="home-title"><span className="red-text-2">Our</span> Mission Statement</h3>
                <p>We are a unified and growing team dedicated to bringing TED’s mission of inspiring and educating our local community to become leaders of change. TEDxMCPHS strives to create an open platform for experts and professionals from all walks of life to share their innovative ideas, inspiring stories, and passionate projects with the local community and beyond. TED and TEDx are global stages and by bringing it to the MCPHS and Boston community, we share our voices to the stream of thoughts in the hope of changing attitudes, lives, and ultimately the world. </p>
                <p>TEDx has granted a TEDxMCPHS event license to our team on August 31, 2021. We are officially part of the global TEDx community. Our future event is featured on the TEDx event map. Check more information <a className="link" href="https://www.ted.com/tedx/events?autocomplete_filter=TEDxMcphs">here</a>.</p>
            </div>
            <div data-aos='zoom-out' data-aos-duration="300" className="home-middle-image" loading="lazy"/>
            <div data-aos='zoom-in' data-aos-duration="400" className="about">
                <h3 className="home-title"><span className="red-text-2">About</span> TEDx</h3>
                <h3 className="home-subtitle"><span className="red-text-2">x</span> = Independently Organized TED Event</h3>
                <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</p>
            </div>
            <div data-aos='zoom-in-up' data-aos-duration="400" className="about">
                <h3 className="home-title"><span className="red-text-2">About</span> TED</h3>
                <p>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed.</p>
                <p>TED has established The Audacious Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.</p>
            </div>
        </div>
    );
};
export default Home;