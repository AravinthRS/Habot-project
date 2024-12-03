import React from "react";
import "./HeroSection.css";
import banner from "./Image/banner.png";
import folder from './Image/folder.png';
import placeholder from './Image/placeholder.png';

const HeroSection = () => {
    return (
        <div>

            <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
                <h2 className="banner-text">Are You a Supplier? </h2>
                <h2 className="banner-textsecond">Explore Matching Opportunities</h2>
                <div className="search-container">

                    <input
                        style={{ backgroundImage: `url(${folder})` }}
                        type="text"
                        placeholder="Search your required service here"
                        className="search-input"
                    />

                    <input
                        style={{ backgroundImage: `url(${placeholder})` }}
                        type="text"
                        placeholder="Search your desired location here"
                        className="search-input"
                    />
                    <button className="search-btn">Search</button>
                </div>
                <p className="buyer-text">
                    <strong>Are you a buyer? </strong><a href="/post-requirement">Click here if you are looking to post a requirement.</a>
                </p>
            </div>

        </div>
    );
};

export default HeroSection;
