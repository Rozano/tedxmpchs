import React from 'react';
import './mcphspeaks.css';

const MCPHSpeaks = () => {
    return (
        <div className="mcphspeaks">
            <h3 className="mcphspeaks-main-title"><span className="red-text-2">MCPH<span className="gradient">S</span></span>peaks</h3>
            <div className="mcphspeaks-desc" data-aos='fade-down' data-aos-duration="500">
                <p>MCPHSpeaks is a project inspired by photographer Brandon Stanton’s Humans of New York Series. TEDxMCPHS introduces this project in hopes of bringing the opportunity to individuals in our community to share stories and find connections through these ordinary yet special pieces of art.</p>
            </div>
            <div className="mcphspeaks-desc" data-aos='fade-right' data-aos-duration="500" data-aos-delay='300'>
                <h3 className="mcphspeaks-sub-title">What Is Storytelling And Why Does It Matter?</h3>
                <p>Stories are at the heart of human connections and they help us understand both ourselves and others better. Stories are universal; everybody has a story to tell and each story has the potential to transform lives and the world. As we read the stories, we are invited to keep an open mind and make an effort to understand and empathize with the storyteller's perspective and integrate their point of view in order to capture the essence of what is told.</p>
            </div>
            <div className="mcphspeaks-desc" data-aos='fade-left' data-aos-duration="500">
                <h3 className="mcphspeaks-sub-title">What Are We Looking For?</h3>
                <p>We are inclusive and we welcome all types of stories. You can tell us about something you are proud of or a challenge you are facing or have overcome. The possibilities are endless! We are open to submission from anyone. If you’d like to submit your story, please email it along with your favorite picture or the one that means a lot to you and that you are comfortable sharing. All submission needs to be emailed to <span className="red-text">stu-bos-tedx@mcphs.edu</span>.</p>
            </div>
        </div>
    );
};
export default MCPHSpeaks;