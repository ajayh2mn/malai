import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/AdminDashboard.css";
import VideoUpload from "./VideoUpload"; // Import the VideoUpload component
import ImageUpload from "./ImageUpload"; // Import the ImageUpload component

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard"); // State to manage active tab

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "https://db88-2409-408d-3d94-8ba3-3949-915d-35c5-49e9.ngrok-free.app/getcontact",
          {
            headers: {
              Accept: "application/json",
              "ngrok-skip-browser-warning": "98547", // Required for ngrok
            },
          }
        );
        setContacts(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        setError("Failed to fetch contacts. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleCallNow = (contact) => {
    window.location.href = `tel:${contact}`;
  };

  const handleCopyNumber = (contact) => {
    navigator.clipboard.writeText(contact);
    alert("Number copied to clipboard!");
  };

  const renderMainContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <section className="recent-messages">
            <h2>Recent Messages ({contacts.length})</h2>

            {isLoading && (
              <div className="loading-indicator">
                <p>Loading contacts...</p>
              </div>
            )}

            {error && (
              <div className="error-message">
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>
                  Retry Loading
                </button>
              </div>
            )}

            {!isLoading && !error && (
              <div className="messages-table">
                {contacts.length === 0 ? (
                  <p>No contacts found.</p>
                ) : (
                  contacts.map((contact, index) => (
                    <div key={index} className="message-card">
                      <span className="message-id">{index + 1}.</span>
                      <div className="person-icon">
                        <i className="fas fa-user"></i>
                      </div>
                      <div className="contact-details">
                        <span className="contact-number">{contact.contact}</span>
                      </div>
                      <div className="contact-actions">
                        <button
                          className="call-now-btn"
                          onClick={() => handleCallNow(contact.contact)}
                        >
                          <i className="fas fa-phone-alt"></i> Call
                        </button>
                        <button
                          className="copy-number-btn"
                          onClick={() => handleCopyNumber(contact.contact)}
                        >
                          <i className="fas fa-copy"></i> Copy
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </section>
        );
      case "video":
        return <VideoUpload />;
      case "image":
        return <ImageUpload />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="menu">
          <li
            className={`menu-item ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <i className="fas fa-home"></i> Dashboard
          </li>
          <li
            className={`menu-item ${activeTab === "video" ? "active" : ""}`}
            onClick={() => setActiveTab("video")}
          >
            <i className="fas fa-video"></i> Upload videos
          </li>
          <li
            className={`menu-item ${activeTab === "image" ? "active" : ""}`}
            onClick={() => setActiveTab("image")}
          >
            <i className="fas fa-image"></i> Upload images
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Welcome to Malai Agency</p>
        </header>

        {renderMainContent()}
      </main>
    </div>  
  );
};

export default AdminDashboard;