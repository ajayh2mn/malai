import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/FourthSection.css";

const FourthSection = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://c91c-2409-408d-3d94-8ba3-a98a-b105-3039-86b3.ngrok-free.app/getimage",
          {
            headers: {
              Accept: "application/json",
              "ngrok-skip-browser-warning": "98547",
            },
          }
        );

        console.log("API Response:", response.data);

        if (Array.isArray(response.data) && response.data.length > 0) {
          const fullUrls = response.data.map(
            (img) =>
              `https://c91c-2409-408d-3d94-8ba3-a98a-b105-3039-86b3.ngrok-free.app/${img}`
          );

          console.log("Final Image URLs:", fullUrls);
          setImages(fullUrls);
        } else {
          setError("No images found.");
        }
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to load images.");
      }
      setLoading(false);
    };

    fetchImages();
  }, []);

  return (
    <div className="fourth-section">
      {loading ? (
        <p>Loading images...</p>
      ) : error ? (
        <p>{error}</p>
      ) : images.length > 0 ? (
        <Carousel interval={3000} fade controls={false} indicators={true}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <div className="slide-container">
                <img
                  src={image}
                  className="slider-image"
                  alt={`Borewell Service Slide ${index + 1}`}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>No images available.</p>
      )}

      {/* Common Caption Below Carousel */}
      <div className="carousel-caption-container">
        <h2>Malai Borewell Services</h2>
        <p>
          Showcasing our expert borewell drilling process for reliable water
          access.
        </p>
        <button className="cta-button" onClick={() => navigate("/contact")}>
          Contact for your water solutions today
        </button>
      </div>
    </div>
  );
};

export default FourthSection;