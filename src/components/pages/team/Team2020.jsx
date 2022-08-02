import { React, useEffect } from 'react';
import './team2020.css';
import Ally from '../../images/team2020/ally.jpeg';
import AnhMinh from '../../images/team2020/anh_minh.jpg';
import Anh from '../../images/team2020/anh.jpg';
import Elizaveta from '../../images/team2020/elizaveta.jpg';
import Gabe from '../../images/team2020/gabe.JPG';
import Jolie from '../../images/team2020/jolie.jpeg';
import Karen from '../../images/team2020/karen.jpg';
import Max from '../../images/team2020/max.JPG';
import Rina from '../../images/team2020/rina.jpg';
import Riya from '../../images/team2020/riya.JPG';
import Sieon from '../../images/team2020/sieon.jpeg';
import Theresa from '../../images/team2020/theresa.jpg';



const Team2020 = () => {
    return (
        <div className="team2020">
            <h3 className="team2020-titles-production"><span className="red-text-2">Production</span> Team</h3>
            <div data-aos='fade-up' data-aos-duration="500" data-aos-delay='500' className="team2020-production">
                <div className="jolie">
                    <img className="team2020-photos" src={Jolie} loading="lazy"/>
                    <p className="team2020-titles">Jolie Hoang, <span className="red-text">&nbsp;Executive Producer</span></p>
                    <p className="team2020-bio">As a curious thinker, I love listening and engaging in conversations that would deepen our understanding of the world and others. I believe that taking an idea and adding one’s original elements are powerful tools for a meaningful life. As a bona fide feeler, I am proud to work with a team of like-minded individuals who are passionate about making a difference. As a committed doer, I hope to bring TEDx MCPHS to life to enrich our experience, build a stronger sense of community, and help all participants achieve their personal goals.</p>
                    <p className="team2020-fact"><span className="red-text">Fun fact</span>: I enjoy taking road trips on my motorcycle.</p>
                    <p className="team2020-favorite"><span className="red-text">Favorite TED talk</span>: "10 ways to have a better conversation" by Celeste Headlee.</p>
                </div>
                <div className="karen">
                    <img className="team2020-photos" src={Karen} loading="lazy"/>
                    <p className="team2020-titles">Karen Mizushima, <span className="red-text">&nbsp;Executive Producer</span></p>
                    <p className="team2020-bio">I appreciate what TEDx stands for. I love how they hand a platform for people to inspire others in so many communities around the globe. Some TED talks have shared ideas that are now my part of my mantra as it has impacted my perception of life and instilled a sense of courage to be better. I am excited and grateful for this opportunity to be a part of TEDx MCPHS and hope the event becomes a valuable experience for even one person.</p>
                    <p className="team2020-fact"><span className="red-text">Fun fact</span>: Everyone in my family is born on the 22nd.</p>
                    <p className="team2020-favorite"><span className="red-text">Favorite TED talk</span>: "Discover the Three Keys of Gratitude to Unlock Your Happiest Life!" by Jane Ransom.</p>
                </div>
                <div className="elizaveta">
                    <img className="team2020-photos" src={Elizaveta} loading="lazy"/>
                    <p className="team2020-titles">Elizaveta Berson, <span className="red-text">&nbsp;Speaker Catalyst</span></p>
                    <p className="team2020-bio">Life is composed of small moments that define and change us. I love that TED has given an opportunity for people to spread their ideas and knowledge in a concise but powerful way. At any given moment in any part of the world a person is able to become inspired by someone else’s work and experience and who knows, one day this one person might change the world. I am grateful that I have been given a chance to be a part of a community that broadens peoples’ minds and hearts to new ideas.</p>
                    <p className="team2020-fact"><span className="red-text">Fun fact</span>: I have been to Africa twice in my life.</p>
                    <p className="team2020-favorite"><span className="red-text">Favorite TED talk</span>: “Your Body Language may shape who you are” by Amy Cuddy.</p>
                </div>
                <div className="rina">
                    <img className="team2020-photos" src={Rina} loading="lazy"/>
                    <p className="team2020-titles">Manching Lam, <span className="red-text">&nbsp;Director of Finance</span></p>
                    <p className="team2020-bio">I love to aspire and to be inspired. As a part of TedxMCPHS, I want to create an environment where you feel safe to share your amazing ideas and together, thrive with others like you.</p>
                    <p className="team2020-fact"><span className="red-text">Fun fact</span>: I can write in calibri font!</p>
                    <p className="team2020-favorite"><span className="red-text">Favorite TED talk</span>: “The power of vulnerability” by Brené Brown. "Learning a language? Speak it like you're playing a video game" by Marianna Pascal.</p>
                </div>
                <div className="sieon">
                    <img className="team2020-photos" src={Sieon} loading="lazy"/>
                    <p className="team2020-titles">Sieon Park, <span className="red-text">&nbsp;University Liaison</span></p>
                    <p className="team2020-bio">Somehow I was always familiar with TEDx Videos. I first knew about this organization since 9 th grade because my homeroom teacher loved the speakers from TEDx. It was a big impact on me when you can hear many different stories in 15 mins from speakers with different backgrounds. I love adventure and TEDx videos gave me a chance to gain inspiration from online.</p>
                    <p className="team2020-fact"><span className="red-text">Fun fact</span>: I can sleep up to 30 hours. I've experienced it and I'm still alive!</p>
                    <p className="team2020-favorite"><span className="red-text">Favorite TED talk</span>: "This is What Happens When You Reply to Spam Email" by James Veitch.</p>
                </div>
                <div className="theresa">
                    <img className="team2020-photos" src={Theresa} loading="lazy"/>
                    <p className="team2020-titles">Theresa Le, <span className="red-text">&nbsp;Production Liaison</span></p>
                    <p className="team2020-bio">I believe in the power of being interdisciplinary and new perspectives to the MCPHS community and I want to use this as an opportunity to open up discussions on important topics.</p>
                    <p className="team2020-fact"><span className="red-text">Fun fact</span>: One of my favorite hobbies is 1000+ piece jigsaw puzzles of flowers.</p>
                    <p className="team2020-favorite"><span className="red-text">Favorite Ted Talk</span>: "Is Your Country at Risk of Becoming a Dictatorship? Here's How to Know" by Farida Nabourema.</p>
                </div>
            </div>
            <h3 className="team2020-titles-marketing-design"><span className="red-text-2">Marketing</span> Design</h3>
            <div data-aos='fade-up' data-aos-duration="500" data-aos-delay='100' className="team2020-marketing-design">
                <div className="riya">
                    <img className="team2020-photos" src={Riya} loading="lazy"/>
                    <p className="team2020-titles">Riya Dholia, <span className="red-text">&nbsp;Chair of Public Relations</span></p>
                    <p className="team2020-bio">As someone who is always trying to learn and broaden my thinking, TED talks are a perfect way to listen to the ideas of people from all different backgrounds. I believe in the power of starting conversations, and how one person can spark an idea that can turn into something so impactful. I believe that TEDxMCPHS can have the same impact and can spark innovation, conversations, and ideas in the minds of the future generation.</p>
                    <p className="team2020-fact"><span className="red-text">Fun fact</span>: My mom accidentally ran me over with an ATV in a forest in Costa Rica (I am okay though!)</p>
                    <p className="team2020-favorite"><span className="red-text">Favorite TED talk</span>: "An Art Made Of Trust, Vulnerability and Connection" by Marina Abramović.</p>
                </div>
                <div className="anhminh">
                    <img className="team2020-photos" src={AnhMinh} loading="lazy"/>
                    <p className="team2020-titles">Minh Trần, <span className="red-text">&nbsp;Public Relations Officer</span></p>
                    <p className="team2020-bio">TED Talks has become my best buddy since I was in high school. As an eager and consistent learner, I always find the stories brought by TED speakers truly eye-opening. Therefore, when I am introduced to the TEDxMCPHS team, I hope to utilize this platform to promote the MCPHS community as not only well-known in the healthcare field but also in other aspects of life because we are individuals who carry many incredibly amazing ideas and inspiring stories behind. And it is crucial to let them spread to the world out there. Lastly, joining the TEDxMCPHS team would definitely enrich my experiences on the journey of becoming a better version of myself.</p>
                    <p className="team2020-fact"><span className="red-text">Fun fact</span>: I am a hardcore fan of badminton. I have played it since I was 6 years old.</p>
                    <p className="team2020-favorite"><span className="red-text">Favorite TED talk</span>: "The brain-changing benefits of exercise" by Wendy Suzuki.</p>
                </div>
                <div className="max">
                    <img className="team2020-photos" src={Max} loading="lazy"/>
                    <p className="team2020-titles">Maximilian Rozano, <span className="red-text">Web Developer/Manager</span></p>
                    <p className="team2020-bio">I wish to further my personal web programming skills by contributing to TEDxMCPHS, and to enhance my ability to function in a team setting.</p>
                    <p className="team2020-fact"><span className="red-text">Fun fact</span>: I have beaten Dark Souls 2 & Dark Souls 3 six times.</p>
                    <p className="team2020-favorite"><span className="red-text">Favorite Ted Talk</span>: "The Power of Listening" by William Ury.</p>
                </div>
            </div> 
            <h3 className="team2020-titles-past-members"><span className="red-text-2">Past</span> Members</h3>
            <div data-aos='fade-up' data-aos-duration="500" data-aos-delay='100' className="team2020-past-members">
                <div className="gabe">
                    <img className="team2020-photos" src={Gabe} loading="lazy"/>
                    <p className="team2020-titles">Gabe Levine, <span className="red-text">&nbsp;Event Coordinator</span></p>
                    <p className="team2020-bio">Every person has an idea to spread and an unique experience to spread. I believe that everyone, giving the platform and the time, can present an amazing idea that can have a profound effect.</p>
                    <p className="team2020-fact"><span className="red-text">Fun fact</span>: I'm left handed. Lefties unite!</p>
                    <p className="team2020-favorite"><span className="red-text">Favorite TED talk</span>: "The Call to Learn" by Clifford Stoll.</p>
                </div>
                <div className="ally">
                    <img className="team2020-photos" src={Ally} loading="lazy"/>
                    <p className="team2020-titles">Ally Proch, <span className="red-text">&nbsp;Chair of Public Relations</span></p>
                    <p className="team2020-bio">I believe that passion is what fuels ideas and growth within a community, and TEDxMCPHS is the perfect platform for individuals from the MCPHS and Boston community to introduce ideas that embody the passion of learning and open-mindedness.</p>
                    <p className="team2020-fact"><span className="red-text">If you could go anywhere in the world, where would it be?</span> I would go to Tokyo, Japan!</p>
                    <p className="team2020-favorite"><span className="red-text">Favorite Ted talk</span>: "Grit: The Power of Passion and Perseverance" by Angela Lee Duckworth.</p>
                </div>
                <div className="anh">
                    <img className="team2020-photos" src={Anh} loading="lazy"/>
                    <p className="team2020-titles">Anh Banh, <span className="red-text">&nbsp;University Liaison</span></p>
                    <p className="team2020-bio">I have been in TEDx since it first started so it'll be great to follow the club's progress. TEDx stands for a great purpose which is to inspire others to step outside one's comfort zone, get creative, and be outspoken about their interests. To be apart of this team means I am getting closer to achieving my goal of stepping outside my comfort zone and seeking discomfort.</p>
                    <p className="team2020-fact"><span className="red-text">Fun fact</span>: In my spare time, I like to watch and read about unsolved crimes and serial killers.</p>
                    <p className="team2020-favorite"><span className="red-text">Favorite TED talk</span>: "My Philosophy for a Happy Life" by Sam Berns.</p>
                </div>
            </div>
        </div>
    );
};
export default Team2020;