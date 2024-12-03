import React from "react";
import "./Header.css";
import logo from './Image/habot-logo.jpg';

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header-left">
                    <img
                        src={logo}
                        alt="Logo"
                        className="header-logo"
                    />
                </div>

                <div className="header-center">
                    <nav>
                        <ul>
                            <li><a href="#suppliers">Find Suppliers</a></li>
                            <li><a href="#services">Find Service Tags</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="header-right">
                    <button className="signup-btn">Login / Sign Up</button>
                </div>
            </header>

        </div>
    );
};

export default Header;
