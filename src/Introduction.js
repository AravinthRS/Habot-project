import React from "react";
import "./Introduction.css";
import Arrow from './Image/arrow.png';

const Introduction = () => {

    return (
        <div className="all">
            <div className="details">
                <h1 className="header">Ready to dive into HABOT?</h1>
                <p className="para">Signing up with HABOT opens the door to a world of new opportunities and potential for business
                    growth. Gain
                    access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step
                    towards realizing your entrepreneurial dreams.</p>
                <p className="button">Sign up Today ! <img src={Arrow} alt="" /> </p>
            </div>

            <div className="locations">
                <p className="loc-1">Abu Dhabi</p>
                <p className="loc-1">Dubai</p>
                <p className="loc-1">Sharjah & Ajman</p>
                <p className="loc-1">Fujairah</p>
                <p className="loc-1">Ras Al Khaimah</p>
                <p className="loc-1">Umm Al Quwain</p>
            </div>
        </div>

    );
};

export default Introduction;
