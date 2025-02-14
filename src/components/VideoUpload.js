import React, { useState } from "react";
import axios from "axios";

const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // Video preview
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
        "https://43ae-2401-4900-9163-fde2-e0b3-b76b-c8ef-c93a.ngrok-free.app/bore/video/", // Change to your actual API URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            "ngrok-skip-browser-warning": "98547", // Required if using ngrok
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
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {preview && (
        <video width="320" height="240" controls style={{ marginTop: "10px" }}>
          <source src={preview} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <br />
      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{ marginTop: "10px" }}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VideoUpload;
