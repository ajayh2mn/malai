import React, { useState } from "react";
import axios from "axios";

const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // Video preview
      setMessage(""); // Clear any previous messages
    }
  };

  // Handle video upload
  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage("Please select a video first.");
      return;
    }

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("video", selectedFile); // Ensure 'video' matches your Django backend field

    try {
      const response = await axios.post(
        "https://db88-2409-408d-3d94-8ba3-3949-915d-35c5-49e9.ngrok-free.app/postvideo", // Change to your actual API URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "98547", // Required if using ngrok
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setUploadProgress(progress);
          },
        }
      );

      setMessage("Video uploaded successfully!");
      console.log("Upload Response:", response.data);
    } catch (error) {
      setMessage("Failed to upload video. Please try again.");
      console.error("Upload Error:", error);
    } finally {
      setUploading(false);
      setUploadProgress(0); // Reset progress
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Upload Video</h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        style={styles.fileInput}
      />
      {preview && (
        <video width="100%" controls style={styles.videoPreview}>
          <source src={preview} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <button
        onClick={handleUpload}
        disabled={uploading}
        style={styles.uploadButton}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {uploading && (
        <div style={styles.progressBarContainer}>
          <div
            style={{ ...styles.progressBar, width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  fileInput: {
    margin: "20px 0",
  },
  videoPreview: {
    width: "100%",
    maxWidth: "500px",
    margin: "20px auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  uploadButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  uploadButtonDisabled: {
    backgroundColor: "#ccc",
    cursor: "not-allowed",
  },
  progressBarContainer: {
    width: "100%",
    height: "10px",
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
    margin: "20px 0",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#007bff",
    transition: "width 0.3s ease",
  },
  message: {
    marginTop: "20px",
    fontSize: "16px",
    color: "#333",
  },
};

export default VideoUpload;
