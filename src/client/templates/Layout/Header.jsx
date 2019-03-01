import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/images/logo.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <img src={Logo} alt="Logo" id="logo" />
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
