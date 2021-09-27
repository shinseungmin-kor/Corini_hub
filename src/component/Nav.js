import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
    return (
        <div className="navbar">
            <h4 className="navmenu">
                <Link to="/">HOME</Link>
                </h4>
            <h4 className="navmenu">
                <Link to="/">SiTE</Link>
                </h4>
            <h4 className="navmenu">
                BLOG
                </h4>
            <h4 className="navmenu">YOUTUBE</h4>
            <h4 className="navmenu">BOOK</h4>
            <h4 className="navmenu">MYPAGE</h4>
        </div>
    );
}

export default Nav;