import { React, useState } from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo from '../images/tedxmcphs_logo.png';
import Subscribe from '../modals/subscribe/Subscribe';
import Contact from '../modals/contact/Contact';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [openSubscribe, setOpenSubscribe] = useState(false);
    const [openContact, setOpenContact] = useState(false);
    const [openSpeakerMenu, setOpenSpeakerMenu] = useState(false);
    const [openTeamMenu, setOpenTeamMenu] = useState(false);
    const [openEventMenu, setOpenEventMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links-logo">
                    <NavLink style={{ textDecoration: 'none' }} to='/' activeClassName="active"><img src={Logo} alt="logo"/></NavLink>
                </div>
                <div className="navbar-links-container">
                    <Link style={{ textDecoration: 'none' }} to='/'><p>Home</p></Link>
                    <Link onMouseEnter = {() => {setOpenEventMenu(true)}} onMouseLeave = {() => {setOpenEventMenu(false)}} style={{ textDecoration: 'none' }} to='/event2022'><p>Events</p></Link>
                        {openEventMenu && (
                            <div onMouseEnter = {() => {setOpenEventMenu(true)}} onMouseLeave = {() => {setOpenEventMenu(false)}} className="events-menu">
                                <div className="events-menu-container scale-up-center">
                                    <div className="events-menu-links">
                                        <NavLink style={{ textDecoration: 'none' }} to='/event2022' activeClassName="active"><p>Event 2022</p></NavLink>
                                        <NavLink style={{ textDecoration: 'none' }} to='/event2020' activeClassName="active"><p>Event 2020</p></NavLink>
                                    </div>
                                </div>
                            </div>
                        )}
                    <Link onMouseEnter = {() => {setOpenSpeakerMenu(true)}} onMouseLeave = {() => {setOpenSpeakerMenu(false)}} style={{ textDecoration: 'none' }} to='/speakers2022'><p>Speakers</p></Link>
                        {openSpeakerMenu && (
                            <div onMouseEnter = {() => {setOpenSpeakerMenu(true)}} onMouseLeave = {() => {setOpenSpeakerMenu(false)}} className="speakers-menu">
                                <div className="speakers-menu-container scale-up-center">
                                    <div className="speakers-menu-links">
                                        <NavLink style={{ textDecoration: 'none' }} to='/speakers2022' activeClassName="active"><p>Speakers 2022</p></NavLink>
                                        <NavLink style={{ textDecoration: 'none' }} to='/speakers2020' activeClassName="active"><p>Speakers 2020</p></NavLink>
                                    </div>
                                </div>
                            </div>
                        )}
                    <Link onMouseEnter = {() => {setOpenTeamMenu(true)}} onMouseLeave = {() => {setOpenTeamMenu(false)}} style={{ textDecoration: 'none' }} to='/team2022'><p>Team</p></Link>
                        {openTeamMenu && (
                                <div onMouseEnter = {() => {setOpenTeamMenu(true)}} onMouseLeave = {() => {setOpenTeamMenu(false)}} className="team-menu">
                                    <div className="team-menu-container scale-up-center">
                                        <div className="team-menu-links">
                                            <NavLink style={{ textDecoration: 'none' }} to='/team2022' activeClassName="active"><p>Team 2021-2022</p></NavLink>
                                            <NavLink style={{ textDecoration: 'none' }} to='/team2020' activeClassName="active"><p>Team 2019-2020</p></NavLink>
                                        </div>
                                    </div>
                                </div>
                            )}
                    <Link style={{ textDecoration: 'none' }} to='/mcphspeaks'><p>MCPHSpeaks</p></Link>
                </div>
            </div>
            <div className="navbar-subscribe">
                <p onClick={() => {setOpenContact(true)}}>Contact</p>
                <button onClick={() => {setOpenSubscribe(true)}} type="button">Subscribe</button>
            </div>
            <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#282828" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#282828" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                <div className="navbar-menu-container scale-up-center">
                    <div className="navbar-menu-links-container">
                        <NavLink style={{ textDecoration: 'none' }} to='/' activeClassName="active"><p>Home</p></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to='/event2020' activeClassName="active"><p>Event 2020</p></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to='/event2022' activeClassName="active"><p>Event 2022</p></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to='/speakers2020' activeClassName="active"><p>Speakers 2020</p></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to='/speakers2022' activeClassName="active"><p>Speakers 2022</p></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to='/team2020' activeClassName="active"><p>Team 2019-2020</p></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to='/team2022' activeClassName="active"><p>Team 2021-2022</p></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to='/mcphspeaks' activeClassName="active"><p>MCPHSpeaks</p></NavLink>

                            <div className="navbar-menu-subscribe">
                                <p onClick={() => {setOpenContact(true)}}>Contact</p>
                                <button onClick={() => {setOpenSubscribe(true)}} type="button">Subscribe</button>
                            </div>
                    </div>
                </div>
                )}
            </div>
            {openSubscribe && <Subscribe closeModal={setOpenSubscribe}/>}
            {openContact && <Contact closeModal={setOpenContact}/>}
        </div>
    );
};

export default NavBar;