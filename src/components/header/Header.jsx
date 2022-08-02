import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import './header.css'

const Header = () => {
    return (
        <div data-aos='fade-up' data-aos-duration="400" className="header-icon-container section-padding">
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCvxT6Ky7bi6su7By0wd8mwg"><FontAwesomeIcon icon={faYoutube} className="header-icon"/></a>
            </div>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tedxmcphs/"><FontAwesomeIcon icon={faInstagram} className="header-icon"/></a>
            </div>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TEDxMCPHS/?ref=py_c"><FontAwesomeIcon icon={faFacebook} className="header-icon"/></a>
            </div>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tedx-mcphs-3b1763225"><FontAwesomeIcon icon={faLinkedinIn} className="header-icon"/></a>
            </div>
        </div>
    )
}
export default Header