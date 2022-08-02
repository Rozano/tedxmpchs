import { React, useState } from 'react';
import './speakers2020.css';
import Akshay from '../../images/speakers2020/akshay.png';
import Bethany from '../../images/speakers2020/bethany.jpg';
import David from '../../images/speakers2020/david.JPG';
import Kim from '../../images/speakers2020/kim.png';
import Laura from '../../images/speakers2020/laura.png';
import Lydia from '../../images/speakers2020/lydia.png';
import Matcheri from '../../images/speakers2020/matcheri.png';
import Robert from '../../images/speakers2020/robert.png';
import stephanie from '../../images/speakers2020/stephanie.jpg';
import Tom from '../../images/speakers2020/tom.png';
import Carousel from 'nuka-carousel';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Speakers2020 = () => {
    const [showNav, setShowNav] = useState(false);
    const [autoplay, setAutoplay] = useState(true);
    const [withoutControls, setWithoutControls] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const [style, setStyle] = useState("active");
  
    const changeStyle = () => {
        console.log("you just clicked");
  
        setStyle("setActive");
    };

    return (
        <div className="speakers2020">
            <h3 className="speakers2020-main-title"><span className="red-text-2">Speakers</span> 2020</h3>
            
            <div data-aos='fade-right' data-aos-duration="500" className="carousel-buttons">
                <i key={0} onClick={() => setSlideIndex(0)}>
                    <FontAwesomeIcon className="carousel-icon" icon={faCircle} />
                </i>
                <i key={1} onClick={() => setSlideIndex(1)}>
                    <FontAwesomeIcon className="carousel-icon" icon={faCircle} />
                </i>
                <i key={2} onClick={() => setSlideIndex(2)}>
                    <FontAwesomeIcon className="carousel-icon" icon={faCircle} />
                </i>
                <i key={3} onClick={() => setSlideIndex(3)}>
                    <FontAwesomeIcon className="carousel-icon" icon={faCircle} />
                </i>
                <i key={4} onClick={() => setSlideIndex(4)}>
                    <FontAwesomeIcon className="carousel-icon" icon={faCircle} />
                </i>
                <i key={5} onClick={() => setSlideIndex(5)}>
                    <FontAwesomeIcon className="carousel-icon" icon={faCircle} />
                </i>
                <i key={6} onClick={() => setSlideIndex(6)}>
                    <FontAwesomeIcon className="carousel-icon" icon={faCircle} />
                </i>
                <i key={7} onClick={() => setSlideIndex(7)}>
                    <FontAwesomeIcon className="carousel-icon" icon={faCircle} />
                </i>
                <i key={8} onClick={() => setSlideIndex(8)}>
                    <FontAwesomeIcon className="carousel-icon" icon={faCircle} />
                </i>
                <i key={9} onClick={() => setSlideIndex(9)}>
                    <FontAwesomeIcon className="carousel-icon" icon={faCircle} />
                </i>
            </div>

            <Carousel slideIndex={slideIndex} defaultControlsConfig={{
                pagingDotsStyle: {
                    display: 'none'
                }
            }}>
            <div data-aos='fade-left' data-aos-duration="500" data-aos-delay='400' className="speakers2020-containers">
                <div className="speakers2020-photos">
                    <img src={Bethany} loading="lazy"/>
                    <p className="speakers2020-names">Bethany Davis</p>
                    <p className="speakers2020-titles">Coach and Consultant for the Conscious Leadership Group</p>
                </div>
                <div className="speakers2020-info">
                    <p>Bethany Davis is an activist, advocate, change agent, coach and speaker. Aside from her Director role, she is also a coach and Conscious Business Super Connector for the Conscious Leadership Group.</p>
                    <p><span className="italic">"Doing things from fear is exhausting. You can never outrun it. And when you ignore it, it tends to get louder. It taxes your body and mind."</span></p>
                    <p><span className="italic">"And even with all of the challenges that are happening in the world right now, for each of us, the state of our own consciousness is something that we actually do have agency over. To me that is very empowering."</span></p>
                    <h3 className="speakers2020-talk-titles">Shifting from Fear to Curiosity</h3>
                    <p><span className="red-text">Talk Description:</span> When an unexpected event occurs in life, it is easy to blame it on someone or something. However, instead of seeing life as a series of problems that need solving, we can experience it as an opportunity to learn and grow, even when it is out of our control. In this courageous talk, coach and cancer survivor Bethany Davis shares how she embraced her life by shifting her mindset from victim consciousness to creator consciousness and inspires personal growth in others.</p>
                    <p><span className="red-text">Tags:</span> <span className="italic">Personal Growth, Cancer, Mind, TEDx</span></p>
                </div>
            </div>
            <div className="speakers2020-containers">
                <div className="speakers2020-photos">
                    <img src={Laura} loading="lazy"/>
                    <p className="speakers2020-names">Laura DiBenedetto</p>
                    <p className="speakers2020-titles">Author of The Six Habits</p>
                </div>
                <div className="speakers2020-info">
                    <p>Laura DiBenedetto is the #1 Bestselling Author of “The Six Habits… Practical Tools for Bringing Your Dreams to Life”, CEO of the multiple-award-winning marketing company Vision Advertising, and curious student of life. Her mission is to positively impact one billion people and give them the accessible recipe for happiness The Six Habits makes possible, to create a better next generation.</p>
                    <p><span className="italic">"We are all invited to master the habits, no matter where we are in life now. Young, old, married, single, rich, poor, or even stubborn… it doesn’t matter. The invitation is unconditional."</span></p>
                    <h3 className="speakers2020-talk-titles">The Six Habits of the Happiest People</h3>
                    <p><span className="red-text">Talk Description:</span> After spending nineteen years chasing happiness but never finding it, Laura came to a crossroad: to stay safe doing more of the same and never find happiness, or to face the unknown, reshape her entire perspective, and find true happiness. In this thoughtful talk, Laura shares the journey into happiness, the surprising discoveries along the way, and the most important mental habits for a life of purpose, fulfillment, and love.</p>
                    <p><span className="red-text">Tags:</span> <span className="italic">Happiness, Personal Growth, Mind, TEDx</span></p>
                </div>
            </div>
            <div className="speakers2020-containers">
                <div className="speakers2020-photos">
                    <img src={Tom} loading="lazy"/>
                    <p className="speakers2020-names">Tom English</p>
                    <p className="speakers2020-titles">Transformation Mentor</p>
                </div>
                <div className="speakers2020-info">
                    <p>Tom is a Transformation Mentor and the founder of 3 Stewardships Ltd. The mission of 3 Stewardships is to empower individuals across the globe on their unique transformation journeys, so that they are ready and able to create and enjoy lives of purpose, meaning and fulfilment.</p>
                    <p><span className="italic">"The world is too full of distractions and temptations to leave the governance of our lives to chance."</span></p>
                    <h3 className="speakers2020-talk-titles">Escaping the Hedonism Trap</h3>
                    <p><span className="red-text">Talk Description:</span> In a world full of distractions and temptations, and with brains that are vulnerable to external influences, anyone can sleepwalk their way into the hedonism trap. This is not a confession; this is the story of how Tom sleepwalked his way into the trap and how he then escaped the trap, creating a life of purpose, meaning, and fulfilment.</p>
                    <p><span className="red-text">Tags:</span> <span className="italic">Personal Growth, Love, Self, TEDx</span></p>
                </div>
            </div>
            <div className="speakers2020-containers">
                <div className="speakers2020-photos">
                    <img src={Lydia} loading="lazy"/>
                    <p className="speakers2020-names">Lydia Green</p>
                    <p className="speakers2020-titles">Founder of RxBalance</p>
                </div>
                <div className="speakers2020-info">
                    <p>Lydia is a pharmacist and former pharmaceutical advertising copywriter who seeks to reduce the influence of pharmaceutical marketing and misinformation on American healthcare. Academic researchers who tirelessly labor to bring greater truth and transparency to scientific and medical communications inspire her personal journey.</p>
                    <p><span className="italic">"Pharmaceutical companies have the right to market their products. They have the right to earn profits. But companies do much more than market their drugs. They actually shape pharmaceutical care in America."</span></p>
                    <h3 className="speakers2020-talk-titles">Why Drug Marketing Rules American Healthcare and What We Can Do About it</h3>
                    <p><span className="red-text">Talk Description:</span> Patients need access to information to make decisions; physicians need accurate information to advise patients. Most pharmaceutical information is funded by industry, often misleading and incomplete. In this powerful talk, Lydia answers this critical question: how do we address misinformation designed to make profits at the expense of patients?</p>
                    <p><span className="red-text">Tags:</span> <span className="italic">Healthcare, Pharmaceuticals, Infrastructure, TEDx</span></p>
                </div>
            </div>
            <div className="speakers2020-containers">
                <div className="speakers2020-photos">
                    <img src={Matcheri} loading="lazy"/>
                    <p className="speakers2020-names">Matcheri S. Keshavan, MD</p>
                    <p className="speakers2020-titles">Professor at Harvard Medical School, Editor-in-Chief of Schizophrenia Research</p>
                </div>
                <div className="speakers2020-info">
                    <p>Matcheri Keshavan is a psychiatrist. His main research expertise is in the causes and treatment of serious mental illnesses such as schizophrenia. He teaches at Harvard and is the academic head of psychiatry at Beth Israel Deaconess Medical Center, Boston.</p>
                    <p><span className="italic">"Can psychiatric diagnosis be better than simply relabeling symptoms?"</span></p>
                    <h3 className="speakers2020-talk-titles">Reimagining Mental Health Diagnosis</h3>
                    <p><span className="red-text">Talk Description:</span> Early in his career as a psychiatrist, a young woman told Dr. Keshavan his diagnosis of her mental disorder was no more than simply relabeling in technical terms what she had already told him. Mental disorders are currently defined by collections of symptoms and behaviors. In recent years, researchers including Dr. Keshavan are beginning to realize that that re-categorizing mental illness using brain-based biomarkers and machine learning can be a much better way to diagnose, treat, and predict the illnesses' outcomes.</p>
                    <p><span className="red-text">Tags:</span> <span className="italic">Healthcare, Mental Health, Innovation, Medical research, TEDx</span></p>
                </div>
            </div>
            <div className="speakers2020-containers">
                <div className="speakers2020-photos">
                    <img src={Kim} loading="lazy"/>
                    <p className="speakers2020-names">Kimberly Levitt</p>
                    <p className="speakers2020-titles">Public Health Educator</p>
                </div>
                <div className="speakers2020-info">
                    <p>Kimberly Levitt is a student and faculty and student member at MCPHS University. She also Manages the Health Program at Bradbury-Sullivan LGBT Community Center in Pennsylvania. Kimberly has incredible experience researching and working with the LGBTQ community and believes that understanding LGBTQ health disparities should be a key component in the health field around the globe.</p>
                    <p><span className="italic">“Being a member of the LGBTQ community means having to constantly evaluate the space you are in to see if it’s safe to be queer or be affectionate with your partner. This can be both challenging and exhausting.”</span></p>
                    <h3 className="speakers2020-talk-titles">Tackling LGBTQ stigma: “What, like it’s hard?”</h3>
                    <p><span className="red-text">Talk Description:</span> When people enter the doctor’s office they are required to check off boxes. Kimberly is not talking about tiny little boxes we fall into based on our individual characteristics, she is talking about literal boxes on a patient form. Sex, orientation, marital status. For most people paperwork is paperwork, but Kimberly will walk you through things from the perspective of someone who identifies with the LGBTQ+ community.</p>
                    <p><span className="red-text">Tags:</span> <span className="italic">Healthcare, LGBTQ, Stigma, TEDx</span></p>
                </div>
            </div>
            <div className="speakers2020-containers">
                <div className="speakers2020-photos">
                    <img src={David} loading="lazy"/>
                    <p className="speakers2020-names">A. David Lewis</p>
                    <p className="speakers2020-titles">MHS Program Coordinator; Assistant Professor at School of Healthcare Business</p>
                </div>
                <div className="speakers2020-info">
                    <p>Dr. A. David Lewis specializes in both comics’ treatment of religious concepts and their engagement with healthcare & medicine. The author of several graphic novels including Kismet, Man of Fate, Dr. Lewis serves as full-time faculty for MCPHS University.</p>
                    <p><span className="italic">“Comics offer a unique space where representations of spiritual and medical selves can overlap and inform each other. […] They can be the Rosetta Stone for medicine and religion.”</span></p>
                    <h3 className="speakers2020-talk-titles">The Sequence of Body, Soul, and Comics</h3>
                    <p><span className="red-text">Talk Description:</span> Comics offer a unique space where the interplay of spiritual and medical selves enable a language between healthcare education and patient experience, cultural difference and institutional policy, or narrative medicine and a commercial marketplace.</p>
                    <p><span className="red-text">Tags:</span> <span className="italic">Religion, Book, Healthcare, TEDx</span></p>
                </div>
            </div>
            <div className="speakers2020-containers">
                <div className="speakers2020-photos">
                    <img src={Akshay} loading="lazy"/>
                    <p className="speakers2020-names">Akshay Sanjay Patil</p>
                    <p className="speakers2020-titles">Resident Doctor in Ocular Disease at Specialty Eye Institute</p>
                </div>
                <div className="speakers2020-info">
                    <p>Dr. Akshay Patil is a returning alumnus from the Massachusetts College of Pharmacy and Health Sciences where he was President of the Private Practice Club. He has done rotations across the country in various modes of practice and is currently a resident optometrist passionate about providing eye care to his community at the Specialty Eye Institute in central Michigan. His professional aspirations include working in the private practice sector while developing an effective global outreach program, while his personal goals include visiting all of the national parks in the United States. Ardent pizza aficionado. Diehard Laker fan. Spelling Bee Winner.</p>
                    <p><span className="italic">"A simple conversation on organ donation can preserve your loved one's legacy through the gift of sight."</span></p>
                    <h3 className="speakers2020-talk-titles">24 Hours After Death: How Eye Banks Can Turn a Tragedy into a Miracle</h3>
                    <p><span className="red-text">Talk Description:</span> Blindness is an unnecessary reality for millions of people around the world. At any given time, over 12 million people are actively waiting for a corneal transplant to save their vision. In this deeply moving talk, Dr. Patil explains how a simple conversation with your loved ones can preserve their legacy through the gift of sight. With proper education, a carefully crafted plan, and a sense of urgency, no cornea will go to waste.</p>
                    <p><span className="red-text">Tags:</span> <span className="italic">Healthcare, Infrastructure, Medicine, Death</span></p>
                </div>
            </div>
            <div className="speakers2020-containers">
                <div className="speakers2020-photos">
                    <img src={Robert} loading="lazy"/>
                    <p className="speakers2020-names">Robert Sadowski</p>
                    <p className="speakers2020-titles">CEO Sawa Logistics Ltd.</p>
                </div>
                <div className="speakers2020-info">
                    <p>Robert describes himself as a regular Polish guy, husband, father, and businessman. He is passionate about football. He is trying to be a helper. In his professional life he is an expert in emergency shipping. Every day he needs to thrive in dynamic circumstances. His passion is not contained only within logistics. It spills over into philanthropy and personal endeavors. Just this past summer, he ran the Everest Marathon to raise funds and awareness for Hospice Home. In 2015 he ran the Bajkal Ice Marathon and in 2014, the Marathon de Sables. These challenges provide an outlet for him to serve, refocus his priorities, and re-energize him.</p>
                    <p><span className="italic">“In our life, we patiently jog and desire most to reach our goals. Then it turns out that the roads we passed are the most important.”</span></p>
                    <p><span className="italic">"It's a simple situation. Either I survive or die. There's no space for fear or over-analyzing. There is only one way: to go forward."</span></p>
                    <h3 className="speakers2020-talk-titles">How can we find joy and strength during hardships?</h3>
                    <p><span className="red-text">Talk Description:</span> Between 2014 to 2016, Robert participated in three of the most fierce marathons in the world: Marathon des Sable, Baikal Ice Marathon, and Tenzing Hillary Everest Marathon. With blistered feet and fractured bones, Robert kept going because of his passion to help others and bring happiness to their lives. In this TEDx talk, Robert will share how he endured and overcame physical and mental challenges with the ultimate goal of enhancing the lives of others.</p>
                    <p><span className="red-text">Tags:</span> <span className="italic">Happiness, Extreme Sports, Empathy, TEDx</span></p>
                </div>
            </div>
            <div className="speakers2020-containers">
                <div className="speakers2020-photos">
                    <img src={stephanie} loading="lazy"/>
                    <p className="speakers2020-names">Stephanie Skouras</p>
                    <p className="speakers2020-titles">Immunologist</p>
                </div>
                <div className="speakers2020-info">
                    <p>Stephanie is a member of Kymera Therapeutics Immunology team. She began her journey in immunology at Harvard Medical School. As a deeply curious person, Stephanie is always questioning the way things work and why. Outside of immunology, she has a great interest in understanding our body’s natural processes and the roles they play in our decision-making processes.</p>
                    <p><span className="italic">"Our brain and our gut are more highly connected than we think."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                    <h3 className="speakers2020-talk-titles">Listen to Your Gut!</h3>
                    <p><span className="red-text">Talk Description:</span> When posed with a difficult situation, one may recall experiencing a strange sensation in one’s gut. That "gut feeling" we experience when posed in a difficult situation is due to our limbic brain, the part of our bodies that has no language yet processes emotions and all of our behaviors. In this quick yet informative talk, Stephanie explains how to communicate with our bodies more fluently and make more insightful decisions.</p>
                    <p><span className="red-text">Tags:</span> <span className="italic">Healthcare, Mindfulness, TEDx</span></p>
                </div>
            </div>
            </Carousel>
        </div>
    );
};
export default Speakers2020;