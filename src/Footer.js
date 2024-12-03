import React from "react";
import "./Footer.css";
import logo from "./habot-logo.jpg";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <hr className="footer-line" />
            <div className="footer-content">

                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="footer-links">
                    <div className="footer-column">

                        <h4>Company</h4>

                        <ul>

                            <li><a href="#about">About</a></li>

                            <li><a href="#faq">FAQ</a></li>

                        </ul>

                    </div>

                    <div className="footer-column">

                        <h4>Terms</h4>

                        <ul>

                            <li><a href="#data-privacy">Data Privacy</a></li>

                            <li><a href="#terms">Terms</a></li>

                            <li><a href="#accessibility">Accessibility</a></li>

                        </ul>

                    </div>

                    <div className="footer-column">

                        <h4>Related</h4>

                        <ul>

                            <li><a href="#find-buyer">Find Buyer</a></li>

                            <li><a href="#feedback">Feedback</a></li>

                        </ul>

                    </div>


                </div>

                <div className="footer-social">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                </div>
            </div>
            <hr className="footer-line" />
        </footer>
    );
};

export default Footer;
