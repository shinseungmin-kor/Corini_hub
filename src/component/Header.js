import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
    return (
        <div className="header">
            <Link to="/" style={
                { textDecoration: 'none', color: 'black' }
            }>
                CORINI-HUB
                </Link>
        </div>
    );
}

export default Header;