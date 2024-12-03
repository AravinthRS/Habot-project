import React from "react";
import "./HowItWorks.css";
import User from './Image/user.png';

const HowItWorks = () => {
    return (
        <div className="how-it-works">
            <h2>How it works?</h2>
            <p className="description">
                Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
            </p>
            <div className="steps-grid">
                <div className="step">
                    <div className="icon">
                        <img src={User} alt="Sign Up Icon" />
                    </div>
                    <p className="step-title">Select Your Role and Sign Up</p>
                </div>
                <div className="step">
                    <div className="icon">
                        <img src={User} alt="Post Requirements Icon" />
                    </div>
                    <p className="step-title">Buyers Post Your Requirements</p>
                </div>
                <div className="step">
                    <div className="icon">
                        <img src={User} alt="Review Suppliers Icon" />
                    </div>
                    <p className="step-title">Review, Select, and Contact the Best Suppliers</p>
                </div>
                <div className="step">
                    <div className="icon">
                        <img src={User} alt="Complete Profile Icon" />
                    </div>
                    <p className="step-title">Suppliers Complete Your Profile and Get Notified for Opportunities</p>
                </div>
                <div className="step">
                    <div className="icon">
                        <img src={User} alt="Contact Buyers Icon" />
                    </div>
                    <p className="step-title">Contact to Buyers and Share Your Quote for the Service</p>
                </div>
                <div className="step">
                    <div className="icon">
                        <img src={User} alt="Feedback Icon" />
                    </div>
                    <p className="step-title">Both the Parties Can Connect and Make Business Leave a Feedback</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
