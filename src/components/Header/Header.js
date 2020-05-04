import React from 'react';
import logo from '../../image/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">HOME</a>
                <a href="/review">REVIEW</a>
                <a href="/manage">MANAGE</a>
            </nav>
        </div>

    );
};

export default Header;