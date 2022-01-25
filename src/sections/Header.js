import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [linkIndex, setLinkIndex] = useState(0);
    const links = [
        { name: 'Home', clickRef: props.home },
        { name: 'About', clickRef: props.about },
        { name: 'Token', clickRef: props.token },
        { name: 'Activity', clickRef: props.activity },
        { name: 'Road Map', clickRef: props.roadmap },
        { name: 'Team', clickRef: props.team },
        { name: 'Contact', clickRef: props.contact },
        { name: 'Blog' },
        { name: 'White Paper' },
    ]

    const mouseEvent = (index) => {
        setLinkIndex(index)
    }
    return (
        <header className="sticky">
            <div className="container d-flex justify-content-between">
                <div className="logo"> <Link to=".">
                    <img className="img-responsive" src={logo} alt="" style={{ maxWidth: '100%' }} /></Link>
                </div>
                <nav className="navbar navbar-expand-lg">
                    <div className="collapse navbar-collapse">
                        <ul className="nav">
                            {links.map((link, index) =>
                                <li key={index}>
                                    <Link to={link?.url} onClick={() => {
                                        link.clickRef()
                                        mouseEvent(index)
                                    }} className={linkIndex === index ? 'active-link' : ''}>{link.name}</Link>
                                </li>
                            )}
                            <Link to="https://t.me/+QDgoL_rOT303MWFl" className="connect" target="_blank">Connect</Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header;
