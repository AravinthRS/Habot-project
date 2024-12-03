import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
    return (
        <div className="container">
            <div className="video-section">
                <p className="instruction">POST YOUR REQUIREMENTS</p>
                <img
                    src="https://i.ytimg.com/vi/mIVfcT9zXuH7hye6/hqdefault.jpg"
                    alt="Video Thumbnail"
                    className="video-thumbnail"
                />


            </div>
            <div className="info-section">
                <div className="info-title">
                    <span className="buyer">Buyer</span>
                    <span className="supplier">Supplier</span>
                </div>
                <ul className="info-list">
                    <li>✅ Post your requirements.</li>
                    <li>✅ Sit back for multiple suppliers to contact you.</li>
                    <li>✅ Choose among the suppliers based on the ratings and reviews.</li>
                </ul>
            </div>
        </div>
    );
};

export default VideoSection;
