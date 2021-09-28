import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
    return (
        <div className="navbar">
            <h4 className="navmenu">
                <Link to="/" style={
                    { textDecoration: 'none', color: 'black' }
                }>
                    HOME
                    </Link>
            </h4>
            <h4 className="navmenu">
                <Link to="/site" style={
                    { textDecoration: 'none', color: 'black' }
                }>
                    SITE
                    </Link>
            </h4>
            <h4 className="navmenu">
                <Link to="/blog" style={
                    { textDecoration: 'none', color: 'black' }
                }>
                    BLOG
                    </Link>
            </h4>
            <h4 className="navmenu">
                <Link to="/youtube" style={
                    { textDecoration: 'none', color: 'black' }
                }>
                    YOUTUBE
                    </Link>
            </h4>
            <h4 className="navmenu">
                <Link to="/book" style={
                    { textDecoration: 'none', color: 'black' }
                }>
                    BOOK
                    </Link>
            </h4>
            <h4 className="navmenu">
                <Link to="/mypage" style={
                    { textDecoration: 'none', color: 'black' }
                }>
                    MYPAGE
                    </Link>
            </h4>
        </div>
    );
}

export default Nav;