import React from 'react';
import { useNavigate } from "react-router-dom";

import '../styles/FifthSection.css';  // Assuming you want to style the component using a separate CSS file
const FifthSection = () => {
    const navigate = useNavigate();
  
  return (
    <section className="fifth-section">
      <div className="container">
        {/* Left side - Video */}
        <div className="video-container">
          <video width="100%" height="auto" controls>
            <source src={require('../assets/Malai Works.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right side - Text */}
        <div className="text-container">
          <h1>Reliable Borewell Services <br /> Bringing Water to Life!</h1>
          <h5>Expert drilling, maintenance, and solutions for all your water needs.</h5>
          <button className="call-btn" onClick={() => navigate("/contact")}>
        Call Us Today
        </button>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
