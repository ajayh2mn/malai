import React from "react";
import "../styles/Map.css"; // Importing CSS for styling

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2268.347033160352!2d79.73640969535963!3d11.861094977590746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54a1d01411fb5f%3A0xc8accbd8395a957!2sMalai%20borewell!5e1!3m2!1sen!2sin!4v1736771843916!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;
